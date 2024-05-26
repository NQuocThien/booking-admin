import { useEffect, useReducer, useState } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { useAuth } from "src/context/AuthContext";
import { BiMessageAltDetail } from "react-icons/bi";
import {
  Customer,
  GetMedicalFacilityInfoQuery,
  Profile,
  useAddBlockCustomerByProfileIdMutation,
  useGetAllCustomerFromRegisCountQuery,
  useGetAllCustomerFromRegisQuery,
  useGetMedicalFacilityInfoQuery,
} from "src/graphql/webbooking-service.generated";
import { formatDate, getToken } from "src/utils/contain";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import ShowAlert from "src/components/sub/alerts";
import {
  handleChangeBlockConent,
  handleChangeIsBlock,
  handleChangePagination,
  handleChangeSearchTerm,
  handleChangeShowModal,
  handleSetSelectedCustomer,
  handleSetSelectedProfile,
  handleSetlistCustomer,
  initState,
  reducer,
} from "./reducer-list";
import SearchInputCpn from "src/components/sub/InputSearch";
import PaginationCpn from "src/components/sub/Pagination";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";
import ModalCpn from "src/components/sub/Modal";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import {
  MdAddLocation,
  MdOutlineEmail,
  MdOutlineTransgender,
} from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiGoogletagmanager, SiStaffbase } from "react-icons/si";
import { GiMedicalPackAlt } from "react-icons/gi";
import { GetRole } from "src/utils/enum-value";
import { showToast } from "src/components/sub/toasts";
function ListCustomerPageForFacility() {
  const token = getToken();
  const { userInfor, currRole, infoStaff } = useAuth();
  const { checkExpirationToken } = useAuth();
  checkExpirationToken();

  const [state, dispatch] = useReducer(reducer, initState);
  const [medical, setMedical] =
    useState<GetMedicalFacilityInfoQuery["getMedicalFacilityInfo"]>();
  // =================================================================================================
  const { data, loading, error } = useGetAllCustomerFromRegisQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      userId: (currRole === GetRole.Facility && userInfor?.id) || undefined,
      facilityId:
        (currRole === GetRole.Staff && infoStaff?.medicalFacilityId) ||
        undefined,
      limit: state.pagination.rowPerPage || 20,
      page: state.pagination.current,
      oderSort: state.pagination.sort,
      search: state.searchTerm,
    },
  });
  const { data: dataTotal } = useGetAllCustomerFromRegisCountQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      userId: (currRole === GetRole.Facility && userInfor?.id) || undefined,
      facilityId:
        (currRole === GetRole.Staff && infoStaff?.medicalFacilityId) ||
        undefined,
      search: state.searchTerm,
    },
  });
  const {
    data: dataMedical,
    loading: loadMedical,
    error: errMedical,
  } = useGetMedicalFacilityInfoQuery({
    fetchPolicy: "no-cache",
    variables: {
      userId: userInfor?.id || "",
    },
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  });
  const [addBlock, { loading: loadingBlock }] =
    useAddBlockCustomerByProfileIdMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    });
  // =================================================================================================

  useEffect(() => {
    if (data?.getAllCustomerFromRegis) {
      dispatch(handleSetlistCustomer(data?.getAllCustomerFromRegis));
    }
  }, [data]);
  useEffect(() => {
    if (dataTotal?.getAllCustomerFromRegisCount) {
      dispatch(
        handleChangePagination({
          ...state.pagination,
          total: dataTotal.getAllCustomerFromRegisCount,
        })
      );
    }
  }, [dataTotal]);
  useEffect(() => {
    if (dataMedical?.getMedicalFacilityInfo)
      setMedical(dataMedical.getMedicalFacilityInfo);
  }, [dataMedical]);

  const handleShowModalCustomer = (customer: Customer) => {
    dispatch(handleSetSelectedCustomer(customer));
    dispatch(handleChangeShowModal({ ...state.showModals, customer: true }));
  };
  const handleShowModalPropfiles = (customer: Customer) => {
    dispatch(handleSetSelectedCustomer(customer));
    dispatch(handleChangeShowModal({ ...state.showModals, listProfile: true }));
  };
  const handleShowModalProfileDetail = (profile: Profile) => {
    dispatch(handleSetSelectedProfile(profile));
    dispatch(handleChangeShowModal({ ...state.showModals, profile: true }));
  };
  const handleAddBlock = async () => {
    if (state.selectedCustomer)
      await addBlock({
        variables: {
          content: state.blockContent,
          customerId: state.selectedCustomer.id,
          userId: (currRole === GetRole.Facility && userInfor?.id) || undefined,
          facilityId:
            (currRole === GetRole.Staff && infoStaff?.medicalFacilityId) ||
            undefined,
          isBlock: state.isBlock,
        },
      })
        .then((res) => {
          setMedical(res.data?.addBlockCustomerByProfileId);
          if (state.isBlock)
            showToast(`Đã chặn khách hàng ${state.selectedCustomer?.fullname}`);
          else
            showToast(
              `Đã bỏ chặn khách hàng ${state.selectedCustomer?.fullname}`
            );
          dispatch(
            handleChangeShowModal({ ...state.showModals, block: false })
          );
        })
        .catch((e) => {
          showToast(`có lỗi ${e.message}`, "error");
          console.error(e);
        });
  };
  // =================================================================================================
  if (error) {
    console.log(error);
    console.log("test role", currRole === GetRole.Staff, infoStaff, userInfor);
    return <ShowAlert />;
  }
  return (
    <Container fluid className={` ${s.component}`}>
      <Row>
        <Col xl={10} lg={10}>
          <SearchInputCpn
            onSearch={(s: string) => {
              dispatch(handleChangeSearchTerm(s));
            }}
            onSort={(sort) => {
              dispatch(
                handleChangePagination({
                  ...state.pagination,
                  sort: sort,
                })
              );
            }}
            loading={loading || loadMedical}
            error={error || errMedical}
          />
        </Col>
      </Row>
      <Row>
        <Table striped hover className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên khách hàng</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Giới tính</th>
              <th>Hồ sơ</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {state.listCustomer &&
              state.listCustomer.map((c, i) => (
                <tr key={i} className="">
                  <td style={{ verticalAlign: "middle" }}>{i + 1}.</td>
                  <td
                    className="fs-6 user-select-all"
                    style={{ verticalAlign: "middle" }}>
                    <span className="me-2">{c.fullname}</span>
                    {medical?.blocks?.find(
                      (block) => block.customerId === c.id
                    ) && <Badge bg="danger">Chặn</Badge>}
                  </td>
                  <td
                    className="fs-6 user-select-all"
                    style={{ verticalAlign: "middle" }}>
                    {c.email}
                  </td>
                  <td
                    className="fs-6 user-select-all"
                    style={{ verticalAlign: "middle" }}>
                    {c.numberPhone}
                  </td>
                  <td
                    className="fs-6 user-select-all"
                    style={{ verticalAlign: "middle" }}>
                    {c.gender}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    <Badge pill bg="primary">
                      {c.profiles?.length}
                    </Badge>
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    <Dropdown drop="down">
                      <Dropdown.Toggle
                        as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={"button"}
                          onClick={() => {
                            handleShowModalCustomer(c);
                          }}>
                          Thông tin khách hàng
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={"button"}
                          onClick={() => {
                            dispatch(handleSetSelectedCustomer(c));
                            handleShowModalPropfiles(c);
                          }}>
                          Thông tin hồ sơ
                        </Dropdown.Item>
                        {/* <span className="me-2">{c.fullname}</span> */}
                        {(medical?.blocks?.find(
                          (block) => block.customerId === c.id
                        ) && (
                          <Dropdown.Item
                            as={"button"}
                            onClick={() => {
                              dispatch(handleSetSelectedCustomer(c));
                              dispatch(handleChangeIsBlock(false));
                              dispatch(
                                handleChangeShowModal({
                                  ...state.showModals,
                                  block: true,
                                })
                              );
                            }}>
                            Hủy chặn
                          </Dropdown.Item>
                        )) || (
                          <Dropdown.Item
                            as={"button"}
                            onClick={() => {
                              dispatch(handleSetSelectedCustomer(c));
                              dispatch(handleChangeIsBlock(true));
                              dispatch(
                                handleChangeShowModal({
                                  ...state.showModals,
                                  block: true,
                                })
                              );
                            }}>
                            Chặn khách hàng
                          </Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
      <div className="d-flex justify-content-center">
        <PaginationCpn
          setPageActive={(currPage) => {
            dispatch(
              handleChangePagination({
                ...state.pagination,
                current: currPage,
              })
            );
          }}
          totalPage={Math.ceil(state.pagination.total / 10)}
        />
      </div>

      {/* CUSTOMER MODAL */}
      <ModalCpn
        handleClose={() =>
          dispatch(
            handleChangeShowModal({ ...state.showModals, customer: false })
          )
        }
        handleSave={() => {}}
        headerText="Thông tin khách hàng"
        onlySclose
        openRequest={state.showModals.customer}>
        <div className="shadow-lg bg-light p-3 mt-3">
          {state.selectedCustomer && (
            <>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <IoPersonCircleOutline />
                  </span>
                  Họ và tên:{" "}
                  <span className="text-success ms-2 user-select-all">
                    {state.selectedCustomer.fullname}{" "}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <CiCalendarDate />
                  </span>
                  Ngày sinh:
                  <span className="text-info ms-2 user-select-all">
                    {formatDate(state.selectedCustomer.dateOfBirth)}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <FaPhone />
                  </span>
                  Số điện thoại:
                  <span className="text-info ms-2 user-select-all">
                    {state.selectedCustomer.numberPhone}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineEmail />
                  </span>
                  Email:
                  <span className="text-info ms-2 user-select-all">
                    {state.selectedCustomer.email}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineTransgender />
                  </span>
                  Giới tính:
                  <span className="text-info ms-2 user-select-all">
                    {state.selectedCustomer.gender}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <FaPeopleGroup />
                  </span>
                  Dân tộc:
                  <span className="text-info ms-2 user-select-all">
                    {state.selectedCustomer.ethnic}
                  </span>
                </h6>
              </div>
            </>
          )}
        </div>
      </ModalCpn>
      {/* LIST PROFILE MODAL */}
      <ModalCpn
        handleClose={() =>
          dispatch(
            handleChangeShowModal({ ...state.showModals, listProfile: false })
          )
        }
        handleSave={() => {}}
        headerText="Thông tin hồ sơ khách hàng"
        onlySclose
        fullscreen
        openRequest={state.showModals.listProfile}>
        <div className="shadow-lg bg-light p-3 mt-3">
          {state.selectedCustomer && (
            <Row className="g-2">
              <h5 className="fw-bold">
                Danh sách hồ sơ bệnh nhân "{state.selectedCustomer.fullname}"
              </h5>
              {state.selectedCustomer.profiles?.map((profile, i) => (
                <Col className="col-6  p-3 mt-3">
                  <div className="shadow-lg bg-light p-3">
                    <div className="px-3">
                      <h6>
                        <span className="text-primary me-2">
                          <IoPersonCircleOutline />
                        </span>
                        Họ và tên:{" "}
                        <span className="text-success ms-2">
                          {profile.fullname}{" "}
                        </span>
                      </h6>
                    </div>
                    <div className="px-3">
                      <h6>
                        <span className="text-primary me-2">
                          <CiCalendarDate />
                        </span>
                        Ngày sinh:
                        <span className="text-info ms-2">
                          {formatDate(profile.dataOfBirth)}
                        </span>
                      </h6>
                    </div>
                    <div className="px-3">
                      <h6>
                        <span className="text-primary me-2">
                          <FaPhone />
                        </span>
                        Số điện thoại:
                        <span className="text-info ms-2">
                          {profile.numberPhone}
                        </span>
                      </h6>
                    </div>
                    <div className="px-3">
                      <h6>
                        <span className="text-primary me-2">
                          <MdOutlineTransgender />
                        </span>
                        Giới tính:
                        <span className="text-info ms-2">{profile.gender}</span>
                      </h6>
                    </div>
                    <div className="px-3">
                      <h6>
                        <span className="text-primary me-2">
                          <MdAddLocation />
                        </span>
                        Địa chỉ:
                        <span className="text-info ms-2">
                          {profile.address}
                        </span>
                      </h6>
                    </div>
                    <div className="px-3">
                      <h6>
                        <span className="text-primary me-2">
                          <FaPeopleGroup />
                        </span>
                        Dân tộc:
                        <span className="text-info ms-2">{profile.ethnic}</span>
                      </h6>
                    </div>
                    <div className="text-end">
                      <Button
                        variant="outline-info"
                        className="mx-2"
                        onClick={() => {
                          handleShowModalProfileDetail(profile);
                        }}>
                        <BiMessageAltDetail /> Chi tiết
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
          {/* PROFILE DETAIL */}

          <ModalCpn
            handleClose={() =>
              dispatch(
                handleChangeShowModal({ ...state.showModals, profile: false })
              )
            }
            handleSave={() => {}}
            headerText="Thông tin hồ sơ"
            onlySclose
            openRequest={state.showModals.profile}>
            <div className="shadow-lg bg-light p-3 mt-3">
              {state.selectedProfile && (
                <>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <IoPersonCircleOutline />
                      </span>
                      Họ và tên:{" "}
                      <span className="text-success ms-2">
                        {state.selectedProfile.fullname}{" "}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <CiCalendarDate />
                      </span>
                      Ngày sinh:
                      <span className="text-info ms-2">
                        {formatDate(state.selectedProfile.dataOfBirth)}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <FaPhone />
                      </span>
                      Số điện thoại:
                      <span className="text-info ms-2">
                        {state.selectedProfile.numberPhone}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <MdOutlineEmail />
                      </span>
                      Email:
                      <span className="text-info ms-2">
                        {state.selectedProfile.email}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <MdOutlineTransgender />
                      </span>
                      Giới tính:
                      <span className="text-info ms-2">
                        {state.selectedProfile.gender}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <SiGoogletagmanager />
                      </span>
                      Nghề nghiệp:
                      <span className="text-info ms-2">
                        {state.selectedProfile.job}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <SiStaffbase />
                      </span>
                      CCCD:
                      <span className="text-info ms-2">
                        {state.selectedProfile.identity || "..."}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <GiMedicalPackAlt />
                      </span>
                      Số BHYT:
                      <span className="text-info ms-2">
                        {state.selectedProfile.medicalInsurance || "..."}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <FaPeopleGroup />
                      </span>
                      Dân tộc:
                      <span className="text-info ms-2">
                        {state.selectedProfile.ethnic}
                      </span>
                    </h6>
                  </div>
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <FaPeopleGroup />
                      </span>
                      Quan hệ với chủ hộ:
                      <span className="text-info ms-2">
                        {state.selectedProfile.relationship}
                      </span>
                    </h6>
                  </div>
                </>
              )}
            </div>
          </ModalCpn>
        </div>
      </ModalCpn>

      {/* Block MODAL */}
      <ModalCpn
        handleClose={() =>
          dispatch(handleChangeShowModal({ ...state.showModals, block: false }))
        }
        handleSave={() => {
          handleAddBlock();
        }}
        headerText={`Chặn khách hàng ${loadingBlock ? "..." : ""}`}
        textButtonSave={`${state.isBlock ? "Chặn khách" : "Bỏ chặn"}`}
        textButtonClose="Hủy"
        openRequest={state.showModals.block}>
        <div className="shadow-lg bg-light p-3 mt-3">
          {state.selectedCustomer && (
            <>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <IoPersonCircleOutline />
                  </span>
                  Họ và tên:{" "}
                  <span className="text-success ms-2 user-select-all">
                    {state.selectedCustomer.fullname}{" "}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <CiCalendarDate />
                  </span>
                  Ngày sinh:
                  <span className="text-info ms-2 user-select-all">
                    {formatDate(state.selectedCustomer.dateOfBirth)}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <FaPhone />
                  </span>
                  Số điện thoại:
                  <span className="text-info ms-2 user-select-all">
                    {state.selectedCustomer.numberPhone}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineEmail />
                  </span>
                  Email:
                  <span className="text-info ms-2 user-select-all">
                    {state.selectedCustomer.email}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineTransgender />
                  </span>
                  Giới tính:
                  <span className="text-info ms-2 user-select-all">
                    {state.selectedCustomer.gender}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <FaPeopleGroup />
                  </span>
                  Dân tộc:
                  <span className="text-info ms-2 user-select-all">
                    {state.selectedCustomer.ethnic}
                  </span>
                </h6>
              </div>
            </>
          )}
          {state.isBlock && (
            <Form>
              <Form.Group className="mb-3" controlId="block-customer">
                <Form.Label>Ghi chú</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => {
                    dispatch(handleChangeBlockConent(e.currentTarget.value));
                  }}
                  value={state.blockContent}
                />
              </Form.Group>
            </Form>
          )}
        </div>
      </ModalCpn>
    </Container>
  );
}

export default ListCustomerPageForFacility;
