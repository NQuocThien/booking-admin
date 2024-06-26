import {
  Badge,
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import ShowAlert from "src/components/sub/alerts";
import {
  ConfirmRegisterInput,
  EStateRegister,
  GetRegisHistoryQuery,
  Profile,
  Register,
  useConfirmRegisterMutation,
  useGetProfileByIdQuery,
  useGetRegisHistoryQuery,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { MdOutlineMailOutline, MdOutlineWorkOutline } from "react-icons/md";
import CustomBreadcrumbs, {
  IBreadcrumbItem,
} from "src/components/sub/Breadcrumbs";
import { useEffect, useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { useAuth } from "src/context/AuthContext";
import { formatDate, getToken } from "src/utils/contain";
import { FaPhone, FaRegAddressCard, FaTransgender } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TbCirclesRelation } from "react-icons/tb";
import {
  GetEStateRegister,
  GetETypeOfService,
  GetRole,
} from "src/utils/enum-value";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";
import { showToast } from "src/components/sub/toasts";
import { IoReload } from "react-icons/io5";
import { Link } from "react-router-dom";
import ModalCpn from "src/components/sub/Modal";
function RegisHistoryPage() {
  const { profileId } = useParams();
  const { checkExpirationToken, userInfor, infoStaff, currRole } = useAuth();
  const [listRegis, setListRegis] =
    useState<GetRegisHistoryQuery["getRegisHistory"]>();
  const [profile, setProfile] = useState<Profile>();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbItem[]>([]);
  checkExpirationToken();
  const [showModal, setShowModal] = useState(false);
  const [register, setRegister] = useState<Register>();
  const [note, setNote] = useState<string>();
  // =================================================================================================

  const { refetch, data, loading, error } = useGetRegisHistoryQuery({
    fetchPolicy: "no-cache",
    variables: {
      profileId: profileId || "",
      userId: currRole === GetRole.Facility ? userInfor?.id : undefined,
      staffId: currRole === GetRole.Staff ? infoStaff?.id : undefined,
    },
  });
  const {
    data: dataProfile,
    loading: loadingProfile,
    error: errorProfile,
  } = useGetProfileByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      profileId: profileId || "",
    },
  });

  const [confirmRegister, { loading: loadConfirm, error: errConfirm }] =
    useConfirmRegisterMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    });
  // =================================================================================================
  useEffect(() => {
    setListRegis(data?.getRegisHistory);
  }, [data]);
  useEffect(() => {
    if (dataProfile?.getProfileById) setProfile(dataProfile.getProfileById);
  }, [dataProfile]);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.search("/facility-page/regis-pending") !== -1) {
      setBreadcrumbs([
        { url: "/facility-page/regis-pending", label: "Duyệt đăng ký" },
        {
          url: "",
          label: `Chi tiết hồ sơ "${
            dataProfile?.getProfileById.fullname
          } (${formatDate(dataProfile?.getProfileById.dataOfBirth)})" `,
        },
      ]);
    } else if (location.pathname.search("/staff-page/regis-pending/") !== -1) {
      setBreadcrumbs([
        { url: "/staff-page/regis-pending/", label: "Duyệt đăng ký" },
        {
          url: "",
          label: `Chi tiết hồ sơ "${
            dataProfile?.getProfileById.fullname
          } (${formatDate(dataProfile?.getProfileById.dataOfBirth)})" `,
        },
      ]);
    } else {
      setBreadcrumbs([
        {
          url: "",
          back: true,
          label: "Danh sách chờ khám",
        },
        {
          url: "",
          label: `Chi tiết hồ sơ "${
            dataProfile?.getProfileById.fullname
          } (${formatDate(dataProfile?.getProfileById.dataOfBirth)})" `,
        },
      ]);
    }
  }, [location, dataProfile]);
  // =================================================================================================
  const handleConfirmRegister = async (
    regis: Register,
    state: EStateRegister,
    note?: string
  ) => {
    const inputConfirm: ConfirmRegisterInput = {
      registerId: regis.id,
      state: state,
      note: note,
    };
    await confirmRegister({
      variables: {
        input: inputConfirm,
      },
    })
      .then(() => {
        var newState: GetEStateRegister = GetEStateRegister.Approved;
        if (state === EStateRegister.Approved)
          newState = GetEStateRegister.Approved;
        if (state === EStateRegister.Success)
          newState = GetEStateRegister.Success;
        if (state === EStateRegister.Pending)
          newState = GetEStateRegister.Pending;
        setListRegis((pre) =>
          pre?.map((r) => {
            if (r.id === regis.id) {
              const newRegis = {
                ...r,
                state: newState,
              };
              return newRegis;
            }
            return r;
          })
        );
        showToast(`Đổi trạng thái đăng ký👌`, undefined, 1000);
        setShowModal(false);
      })
      .catch((e) => {
        showToast(e.message, "error");
      });
  };
  const handleClickSuccess = (regis: Register) => {
    setRegister(regis);
    if (regis.state !== GetEStateRegister.Success) setShowModal(true);
    else if (regis.state === GetEStateRegister.Success) {
      handleConfirmRegister(regis, EStateRegister.Approved);
    }
  };
  const isWarning = (date: string, state: string): boolean => {
    const now = new Date();
    const current = new Date(date);
    if (
      now.getTime() > current.getTime() &&
      state === GetEStateRegister.Approved
    )
      return false;
    return true;
  };
  // =================================================================================================
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !profileId) {
    console.log("profile: ", profileId);
    console.log(error);
    return <ShowAlert />;
  }

  return (
    <Container fluid className={`${style.main} `}>
      {breadcrumbs && <CustomBreadcrumbs paths={breadcrumbs} />}
      <Row className={`${style.top}`}>
        <Col className={`col-4`}>
          <div className={`${style.top__info} ${s.component}`}>
            <p className={`${style.top__info_name}`}>
              {" "}
              Hồ Sơ: {profile?.fullname}
            </p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_item}`}>
              <FaTransgender className={`text-warning`} />
              <p className={`${style.contend}`}>Giới tính:{profile?.gender}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <MdOutlineMailOutline className={`text-warning`} />
              <p>Email: {profile?.email}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <FaPhone className={`text-warning`} />
              <p>Số điện thoại: {profile?.numberPhone}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <LiaBirthdayCakeSolid className={`text-warning`} />
              <p>Ngày sinh: {formatDate(profile?.dataOfBirth)}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <AiOutlineSchedule className={`text-warning`} />
              <p>Dân tộc: {profile?.ethnic}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <MdOutlineWorkOutline className={`text-warning`} />
              <p> Công việc:{profile?.job}</p>
            </div>
            {profile?.identity && (
              <div className={`${style.top__info_item}`}>
                <FaRegAddressCard className={`text-warning`} />
                <p>{profile?.identity}</p>
              </div>
            )}
            {profile?.medicalInsurance && (
              <div className={`${style.top__info_item}`}>
                <AiOutlineSchedule className={`text-warning`} />
                <p>{profile?.medicalInsurance}</p>
              </div>
            )}
            <div className={`${style.top__info_item}`}>
              <TbCirclesRelation className={`text-warning`} />
              <p>Mối quan hệ với người đăng ký: {profile?.relationship}</p>
            </div>
          </div>
        </Col>
        <Col className="col-8 bg-light">
          <div className="d-flex">
            <h5 className="me-3">Lịch sử đăng ký</h5>
            <Button size="sm" onClick={() => refetch()}>
              {!loading && <IoReload />}
              {loading && <Spinner animation="border" variant="light" />}
            </Button>
          </div>

          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Ngày-Phiên</th>
                <th>Dịch vụ khám</th>
                <th>Tr.thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody
              className="overflow-scroll"
              style={{ minHeight: "40vh", maxHeight: "80vh" }}>
              {listRegis?.map((regis, index) => (
                <tr key={index}>
                  <td className="align-middle">{index + 1}</td>
                  <td className="align-middle">
                    <div className="m-0">
                      <Badge
                        pill
                        bg={
                          isWarning(regis.date, regis.state)
                            ? "secondary"
                            : "warning"
                        }>
                        {formatDate(regis.date)}
                      </Badge>
                    </div>
                    <Badge>
                      {regis.session.startTime} - {regis.session.endTime}
                    </Badge>
                  </td>
                  <td className="align-middle">
                    {regis.typeOfService === GetETypeOfService.Doctor &&
                      `Bác sĩ "${regis.doctor?.doctorName}"`}
                    {regis.typeOfService === GetETypeOfService.Package &&
                      `Khám theo gói "${regis.package?.packageName}"`}
                    {regis.typeOfService === GetETypeOfService.Vaccine &&
                      `Tiêm chủng "${regis.vaccination?.vaccineName}"`}
                    {regis.typeOfService === GetETypeOfService.Specialty &&
                      `Chuyên khoa "${regis.specialty?.specialtyName}"`}
                  </td>
                  <td className="align-middle">
                    <span
                      className={`${
                        regis.state === GetEStateRegister.Pending && "text-dark"
                      } ${
                        regis.state === GetEStateRegister.Approved &&
                        "text-warning"
                      } ${
                        regis.state === GetEStateRegister.Success &&
                        "text-success"
                      }`}>
                      {!regis.cancel && regis.state}
                      {regis.cancel && <Badge bg="danger">Đã hủy</Badge>}
                    </span>
                  </td>
                  <td className="align-middle">
                    <Dropdown drop="down">
                      <Dropdown.Toggle
                        as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={`${regis.id}`}>
                          Chi tiết
                        </Dropdown.Item>
                        {regis.state === GetEStateRegister.Pending && (
                          <>
                            <Dropdown.Item
                              onClick={() => {
                                const input: Register = {
                                  id: regis.id,
                                  cancel: regis.cancel,
                                  createdAt: regis.createdAt,
                                  date: regis.date,
                                  profileId: regis.profileId,
                                  session: regis.session,
                                  state: regis.state,
                                  typeOfService: regis.typeOfService,
                                };
                                handleConfirmRegister(
                                  input,
                                  EStateRegister.Approved
                                );
                              }}>
                              Duyệt đăng ký
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                const input: Register = {
                                  id: regis.id,
                                  cancel: regis.cancel,
                                  createdAt: regis.createdAt,
                                  date: regis.date,
                                  profileId: regis.profileId,
                                  session: regis.session,
                                  state: regis.state,
                                  typeOfService: regis.typeOfService,
                                };
                                // handleConfirmRegister(input);
                              }}>
                              Hủy đăng ký
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                const input: Register = {
                                  id: regis.id,
                                  cancel: regis.cancel,
                                  createdAt: regis.createdAt,
                                  date: regis.date,
                                  profileId: regis.profileId,
                                  session: regis.session,
                                  state: regis.state,
                                  typeOfService: regis.typeOfService,
                                };
                                // handleConfirmRegister(input);
                              }}>
                              Chặn khách hàng
                            </Dropdown.Item>
                          </>
                        )}
                        {regis.state === GetEStateRegister.Approved && (
                          <Dropdown.Item
                            onClick={() => {
                              const input: Register = {
                                id: regis.id,
                                cancel: regis.cancel,
                                createdAt: regis.createdAt,
                                date: regis.date,
                                profileId: regis.profileId,
                                session: regis.session,
                                state: regis.state,
                                typeOfService: regis.typeOfService,
                              };
                              handleClickSuccess(input);
                            }}>
                            Duyệt Khám
                          </Dropdown.Item>
                        )}
                        {regis.state === GetEStateRegister.Success && (
                          <Dropdown.Item
                            onClick={() => {
                              const input: Register = {
                                id: regis.id,
                                cancel: regis.cancel,
                                createdAt: regis.createdAt,
                                date: regis.date,
                                profileId: regis.profileId,
                                session: regis.session,
                                state: regis.state,
                                typeOfService: regis.typeOfService,
                              };
                              handleConfirmRegister(
                                input,
                                EStateRegister.Approved
                              );
                            }}>
                            Hoàn tác khám
                          </Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>{/* <FileUploadComponent /> */}</Row>
      {/* <ModalCpn
        // handleClose={() => setShowModal({ ...showModal, customer: false })}
        handleSave={() => {}}
        headerText="Thông tin người đăng ký khám"
        onlySclose
        openRequest={showModal.customer}>
        <div className="shadow-lg bg-light p-3 mt-3">
          {selectedRegiser?.profile?.customer && (
            <>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <IoPersonCircleOutline />
                  </span>
                  Họ và tên:{" "}
                  <span className="text-success ms-2">
                    {selectedRegiser.profile.customer.fullname}{" "}
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
                    {formatDate(selectedRegiser.profile.customer.dateOfBirth)}
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
                    {selectedRegiser.profile.customer.numberPhone}
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
                    {selectedRegiser.profile.customer.email}
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
                    {selectedRegiser.profile.customer.gender}
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
                    {selectedRegiser.profile.customer.ethnic}
                  </span>
                </h6>
              </div>
            </>
          )}
        </div>
      </ModalCpn> */}
      <ModalCpn
        handleClose={() => setShowModal(false)}
        handleSave={() =>
          register &&
          handleConfirmRegister(register, EStateRegister.Success, note)
        }
        headerText="Xác nhận khám"
        openRequest={showModal}>
        <div className="shadow-lg bg-light p-3 mt-3">
          <Form>
            <Form.Group className="mb-3" controlId="text-note">
              <Form.Label>Ghi chú</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  const text = e.currentTarget.value;
                  setNote(text);
                }}
              />
            </Form.Group>
          </Form>
        </div>
      </ModalCpn>
    </Container>
  );
}
export default RegisHistoryPage;
