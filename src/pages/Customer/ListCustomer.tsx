import { useEffect, useReducer } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Dropdown,
  Row,
  Table,
} from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "src/context/AuthContext";
import { BiMessageAltDetail } from "react-icons/bi";
import {
  Customer,
  Profile,
  useGetAllCustomerPaginationQuery,
  useGetTotalCustomersCountQuery,
} from "src/graphql/webbooking-service.generated";
import { formatDate, getToken } from "src/utils/contain";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { Link } from "react-router-dom";
import ShowAlert from "src/components/sub/alerts";
import {
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
function ListCustomerPage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  checkExpirationToken();

  const [state, dispatch] = useReducer(reducer, initState);
  const { data, loading, error } = useGetAllCustomerPaginationQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      limit: 10,
      page: state.pagination.current,
      search: state.searchTerm,
      sortOrder: state.pagination.sort,
    },
  });
  const { data: dataTotal } = useGetTotalCustomersCountQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      search: state.searchTerm,
    },
  });

  useEffect(() => {
    if (data?.getAllCustomerPagination) {
      dispatch(handleSetlistCustomer(data?.getAllCustomerPagination));
    }
  }, [data]);
  useEffect(() => {
    if (dataTotal?.getTotalCustomersCount) {
      dispatch(
        handleChangePagination({
          ...state.pagination,
          total: dataTotal.getTotalCustomersCount,
        })
      );
    }
  }, [dataTotal]);

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
  // if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
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
            loading={loading}
            error={error}
          />
        </Col>
        <Col>
          <Link
            className="btn btn-outline-primary"
            to={"/admin-page/doctors/form-add"}>
            <FiPlus />
          </Link>
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
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.fullname}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.email}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.numberPhone}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
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
                          onClick={() => handleShowModalPropfiles(c)}>
                          Thông tin hồ sơ
                        </Dropdown.Item>
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
                  <span className="text-success ms-2">
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
                  <span className="text-info ms-2">
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
                  <span className="text-info ms-2">
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
                  <span className="text-info ms-2">
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
                  <span className="text-info ms-2">
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
                  <span className="text-info ms-2">
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
                      {/* <Button
                        variant="outline-danger"
                        className="mx-2"
                        onClick={() => {}}>
                        <MdDeleteForever /> Xóa{" "}
                        {loadingDelete && (
                      <Spinner animation="border" variant="light" size="sm" />
                    )}
                      </Button> */}
                      {/* <Button
                        variant="outline-warning"
                        className=" mx-2"
                        onClick={() => {}}>
                        <MdModeEdit /> Sửa
                      </Button> */}
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
    </Container>
  );
}

export default ListCustomerPage;
