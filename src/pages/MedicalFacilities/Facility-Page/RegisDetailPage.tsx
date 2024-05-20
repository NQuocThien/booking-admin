import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import ShowAlert from "src/components/sub/alerts";
import {
  ConfirmRegisterInput,
  EStateRegister,
  GetRegisByIdQuery,
  LinkImage,
  LinkImageInput,
  useConfirmRegisterMutation,
  useGetRegisByIdQuery,
  useUploadFileRegisterMutation,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { GrPowerReset } from "react-icons/gr";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import {
  MdOutlineMailOutline,
  MdOutlineVaccines,
  MdOutlineWorkOutline,
} from "react-icons/md";
import CustomBreadcrumbs, {
  IBreadcrumbItem,
} from "src/components/sub/Breadcrumbs";
import { useEffect, useState } from "react";
import { AiFillTag, AiOutlineSchedule } from "react-icons/ai";
import { useAuth } from "src/context/AuthContext";
import { formatDate, getToken } from "src/utils/contain";
import {
  FaPhone,
  FaRegAddressCard,
  FaRegHeart,
  FaTransgender,
} from "react-icons/fa6";
import { LiaBirthdayCakeSolid, LiaUserNurseSolid } from "react-icons/lia";
import { TbCirclesRelation } from "react-icons/tb";
import {
  GetEPermission,
  GetEStateRegister,
  GetETypeOfService,
  GetRole,
} from "src/utils/enum-value";
import { showToast } from "src/components/sub/toasts";
import { LuClock3, LuPackageCheck } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GiMatterStates, GiNotebook } from "react-icons/gi";
import FileUploadComponent from "src/components/sub/UpLoad";
import { FaSave } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import ModalCpn from "src/components/sub/Modal";
function RegisDetailPage() {
  const { regisId } = useParams();
  const { checkExpirationToken, userInfor, infoStaff, currRole } = useAuth();
  const [regis, setRegis] = useState<GetRegisByIdQuery["getRegisById"]>();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbItem[]>([]);
  checkExpirationToken();
  const [files, setFiles] = useState<LinkImage[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [note, setNote] = useState<string>();
  // =================================================================================================

  const { refetch, data, loading, error } = useGetRegisByIdQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
    variables: {
      id: regisId || "",
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

  const [uploadFiles, { loading: loadUpload, error: errUpload }] =
    useUploadFileRegisterMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    });
  // =================================================================================================
  useEffect(() => {
    if (data?.getRegisById) setRegis(data?.getRegisById);
  }, [data]);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.search("/facility-page/regis-pending") !== -1) {
      setBreadcrumbs([
        { url: "/facility-page/regis-pending", label: "Duyệt đăng ký" },
        {
          url: "",
          label: `Chi tiết đăng ký"${regis?.profile?.fullname} (${formatDate(
            regis?.profile?.dataOfBirth
          )})" `,
        },
      ]);
    } else if (location.pathname.search("/staff-page/regis-pending/") !== -1) {
      setBreadcrumbs([
        { url: "/staff-page/regis-pending/", label: "Duyệt đăng ký" },
        {
          url: "",
          label: `Chi tiết hồ sơ "${regis?.profile?.fullname} (${formatDate(
            regis?.profile?.dataOfBirth
          )})" `,
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
          label: `Chi tiết hồ sơ "${regis?.profile?.fullname} (${formatDate(
            regis?.profile?.dataOfBirth
          )})" `,
        },
      ]);
    }
  }, [location, data, regis]);

  useEffect(() => {
    if (regis?.files) setFiles(regis.files);
  }, [regis]);
  // =================================================================================================
  const handleConfirmRegister = async (
    regisId: string,
    state: EStateRegister,
    note?: string
  ) => {
    const inputConfirm: ConfirmRegisterInput = {
      registerId: regisId,
      state: state,
      note: note,
    };
    await confirmRegister({
      variables: {
        input: inputConfirm,
      },
    }).then(() => {
      var newState: GetEStateRegister = GetEStateRegister.Approved;
      if (state === EStateRegister.Approved)
        newState = GetEStateRegister.Approved;
      if (state === EStateRegister.Success)
        newState = GetEStateRegister.Success;
      if (state === EStateRegister.Pending)
        newState = GetEStateRegister.Pending;
      setRegis(
        (pre) =>
          (pre && {
            ...pre,
            state: newState,
            note: inputConfirm.note,
          }) ||
          pre
      );
      setShowModal(false);
      showToast(`Đổi trạng thái đăng ký👌`, undefined, 1000);
    });
  };

  const handleSaveFiles = async (inputFiles: LinkImageInput[] | undefined) => {
    await uploadFiles({
      variables: {
        input: {
          id: regisId || "",
          files: inputFiles,
        },
      },
    })
      .then(() => {
        showToast("Đã lưu file", undefined, 2000);
        setRegis((pre) => (pre && { ...pre, files: inputFiles }) || pre);
      })
      .catch((err) => {
        showToast("Lỗi lưu file ", "error");
        console.log("Lỗi: ", err);
      });
  };

  const checkRole = (): boolean => {
    if (
      currRole !== GetRole.Facility &&
      currRole !== GetRole.Staff &&
      currRole !== GetRole.Doctor
    ) {
      return false;
    }
    const typeService = regis?.typeOfService;
    if (currRole === GetRole.Staff) {
      if (
        typeService === GetETypeOfService.Doctor &&
        !infoStaff?.permissions.find((per) => per === GetEPermission.Magager)
      )
        return false;
      if (
        typeService === GetETypeOfService.Package &&
        !infoStaff?.permissions.find(
          (per) =>
            per === GetEPermission.Magager ||
            per === GetEPermission.MagagerPackage
        )
      )
        return false;
      if (
        typeService === GetETypeOfService.Specialty &&
        !infoStaff?.permissions.find(
          (per) =>
            per === GetEPermission.Magager ||
            per === GetEPermission.ManagerSpecialty
        )
      )
        return false;
      if (
        typeService === GetETypeOfService.Vaccine &&
        !infoStaff?.permissions.find(
          (per) =>
            per === GetEPermission.Magager ||
            per === GetEPermission.MagagerVaccine
        )
      ) {
        return false;
      }
    }
    if (
      currRole === GetRole.Doctor &&
      typeService !== GetETypeOfService.Doctor
    ) {
      return false;
    }
    return true;
  };
  // =================================================================================================
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !regisId) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <Container fluid className={`${style.main} `}>
      {breadcrumbs && <CustomBreadcrumbs paths={breadcrumbs} />}
      <Row className={`${style.top}`}>
        <Col className={`col-4`}>
          <div className={`${style.top__info} ${s.component}`}>
            <p className={`${style.top__info_name} m-0`}>
              {" "}
              Người đăng ký: {regis?.profile?.customer?.fullname}
            </p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_item}`}>
              <FaTransgender className={`text-warning`} />
              <p className={`${style.contend} m-0`}>
                {" "}
                Giới tính:{regis?.profile?.customer?.gender}
              </p>
            </div>
            <div className={`${style.top__info_item}`}>
              <MdOutlineMailOutline className={`text-warning`} />
              <p className="m-0">Email: {regis?.profile?.customer?.email}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <FaPhone className={`text-warning`} />
              <p className="m-0">
                Số điện thoại: {regis?.profile?.customer?.numberPhone}
              </p>
            </div>
            <div className={`${style.top__info_item}`}>
              <LiaBirthdayCakeSolid className={`text-warning`} />
              <p className="m-0">
                Ngày sinh: {formatDate(regis?.profile?.customer?.dateOfBirth)}
              </p>
            </div>
            <div className={`${style.top__info_item}`}>
              <AiOutlineSchedule className={`text-warning`} />
              <p className="m-0">Dân tộc: {regis?.profile?.customer?.ethnic}</p>
            </div>
          </div>
        </Col>
        <Col className={`col-4`}>
          <div className={`${style.top__info} ${s.component}`}>
            <p className={`${style.top__info_name} m-0`}>
              {" "}
              Hồ Sơ: {regis?.profile?.fullname}
            </p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_item}`}>
              <FaTransgender className={`text-warning`} />
              <p className={`${style.contend} m-0`}>
                {" "}
                Giới tính:{regis?.profile?.gender}
              </p>
            </div>
            <div className={`${style.top__info_item}`}>
              <MdOutlineMailOutline className={`text-warning`} />
              <p className="m-0">Email: {regis?.profile?.email}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <FaPhone className={`text-warning`} />
              <p className="m-0">
                Số điện thoại: {regis?.profile?.numberPhone}
              </p>
            </div>
            <div className={`${style.top__info_item}`}>
              <LiaBirthdayCakeSolid className={`text-warning`} />
              <p className="m-0">
                Ngày sinh: {formatDate(regis?.profile?.dataOfBirth)}
              </p>
            </div>
            <div className={`${style.top__info_item}`}>
              <AiOutlineSchedule className={`text-warning`} />
              <p className="m-0">Dân tộc: {regis?.profile?.ethnic}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <MdOutlineWorkOutline className={`text-warning`} />
              <p className="m-0"> Công việc:{regis?.profile?.job}</p>
            </div>
            {regis?.profile?.identity && (
              <div className={`${style.top__info_item}`}>
                <FaRegAddressCard className={`text-warning`} />
                <p className="m-0">{regis?.profile?.identity}</p>
              </div>
            )}
            {regis?.profile?.medicalInsurance && (
              <div className={`${style.top__info_item}`}>
                <AiOutlineSchedule className={`text-warning`} />
                <p className="m-0">{regis?.profile?.medicalInsurance}</p>
              </div>
            )}
            <div className={`${style.top__info_item}`}>
              <TbCirclesRelation className={`text-warning`} />
              <p className="m-0">
                Mối quan hệ với người đăng ký: {regis?.profile?.relationship}
              </p>
            </div>
          </div>
        </Col>
        <Col className={`col-4`}>
          <div className={`${style.top__info} ${s.component}`}>
            <p className={`${style.top__info_name} m-0`}>
              {" "}
              Thông tin đăng ký khám
            </p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_item}`}>
              <AiFillTag className={`text-success`} />
              <p className={`${style.contend} m-0`}>
                {" "}
                Loại dịch vụ: {regis?.typeOfService}
              </p>
            </div>
            {regis?.typeOfService === GetETypeOfService.Doctor && (
              <div className={`${style.top__info_item}`}>
                <LiaUserNurseSolid className={`text-success`} />
                <p className="m-0">Bác sĩ: {regis?.doctor?.doctorName}</p>
              </div>
            )}
            {regis?.typeOfService === GetETypeOfService.Specialty && (
              <div className={`${style.top__info_item}`}>
                <FaRegHeart className={`text-success`} />
                <p className="m-0">
                  Chuyên khoa: {regis?.specialty?.specialtyName}
                </p>
              </div>
            )}
            {regis?.typeOfService === GetETypeOfService.Package && (
              <div className={`${style.top__info_item}`}>
                <LuPackageCheck className={`text-success`} />
                <p className="m-0">Gói khám: {regis?.package?.packageName}</p>
              </div>
            )}
            {regis?.typeOfService === GetETypeOfService.Vaccine && (
              <div className={`${style.top__info_item}`}>
                <MdOutlineVaccines className={`text-success`} />
                <p className="m-0">
                  Tiêm chủng: {regis?.vaccination?.vaccineName}
                </p>
              </div>
            )}
            <div className={`${style.top__info_item}`}>
              <IoCalendarNumberOutline className={`text-success`} />
              <p className="m-0">Ngày khám: {formatDate(regis?.date)}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <LuClock3 className={`text-success`} />
              <p className="m-0">
                Phiên khám: {regis?.session.startTime} -{" "}
                {regis?.session.endTime}
              </p>
            </div>
            {!regis?.cancel && (
              <div style={{ width: "100%" }} className={``}>
                <div className="d-flex align-items-center mb-2">
                  <GiMatterStates className={`text-success`} />
                  <p className="m-0">
                    Trạng thái:{" "}
                    <span
                      className={`${
                        regis?.state === GetEStateRegister.Approved &&
                        "text-primary"
                      } ${
                        regis?.state === GetEStateRegister.Pending &&
                        "text-warning"
                      } ${
                        regis?.state === GetEStateRegister.Success &&
                        "text-success"
                      }`}>
                      {regis?.state}
                    </span>
                  </p>
                </div>
                {regis?.state === GetEStateRegister.Pending && (
                  <Button
                    size="sm"
                    onClick={() =>
                      handleConfirmRegister(regis.id, EStateRegister.Approved)
                    }>
                    Duyệt đăng ký{" "}
                    {loadConfirm && (
                      <Spinner
                        animation="border"
                        size="sm"
                        variant="light"></Spinner>
                    )}
                  </Button>
                )}
                {regis?.state === GetEStateRegister.Approved && (
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => setShowModal(true)}>
                    Hoàng thành khám
                    {loadConfirm && (
                      <Spinner
                        animation="border"
                        size="sm"
                        variant="light"></Spinner>
                    )}
                  </Button>
                )}
              </div>
            )}
            {regis?.cancel && (
              <div style={{ width: "100%" }} className={``}>
                <div className="d-flex align-items-center">
                  <GiMatterStates className={`text-success`} />
                  <p className="m-0">
                    Trạng thái: <span className="text-danger">Đã hủy</span>
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  {regis?.state === GetEStateRegister.Pending && (
                    <Button
                      size="sm"
                      onClick={() =>
                        handleConfirmRegister(regis.id, EStateRegister.Approved)
                      }>
                      Duyệt đăng ký{" "}
                      {loadConfirm && (
                        <Spinner
                          animation="border"
                          size="sm"
                          variant="light"></Spinner>
                      )}
                    </Button>
                  )}
                  {regis?.state === GetEStateRegister.Approved && (
                    <Button
                      size="sm"
                      onClick={() =>
                        handleConfirmRegister(regis.id, EStateRegister.Success)
                      }>
                      Hoàn thành khám
                      {loadConfirm && (
                        <Spinner
                          animation="border"
                          size="sm"
                          variant="light"></Spinner>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            )}
            <div>
              <div className="d-flex align-items-center ">
                <GiNotebook className={`text-success`} />
                <p className="m-0 ms-1">Ghi chú:</p>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: regis?.note || "" }}></div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={`${s.component} ${style.top__info}`}>
        <p className={`${style.top__info_name} m-0 fw-bold`}>
          {" "}
          Danh sách file đính kèm
        </p>
        <div className={`${style.top__info_line}`}></div>
        <Row>
          <Col>
            <div className="m-0 fw-bold">
              Danh sách file đã lưu
              <Button size="sm" onClick={() => refetch()}>
                <TfiReload />
              </Button>
            </div>
            <ul>
              {files?.map((file, i) => (
                <li key={i}>
                  {i + 1}.{" "}
                  <a
                    href={file.url}
                    target="_blank"
                    className="text-decoration-none">
                    {file.filename}
                  </a>
                  <Button
                    size="sm"
                    variant="light"
                    className="text-danger fw-bold"
                    onClick={() => {
                      if (!checkRole()) {
                        showToast(
                          "Không có quyền thực hiện thao tác",
                          "warning"
                        );
                        return;
                      }
                      var newFile = files.filter(
                        (f) => f.filename !== file.filename
                      );
                      setFiles(newFile);
                    }}>
                    x
                  </Button>
                </li>
              ))}
            </ul>
            {regis?.files?.length !== files?.length && (
              <div className="d-flex ms-4">
                <Button
                  size="sm"
                  variant="outline-success"
                  className="me-3"
                  onClick={() => {
                    if (regis?.files)
                      setFiles(
                        regis?.files.map((file) => ({
                          filename: file.filename,
                          type: file.type,
                          url: file.url,
                        }))
                      );
                  }}>
                  <GrPowerReset />
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    handleSaveFiles(
                      files?.map(
                        (file) =>
                          ({
                            filename: file.filename,
                            type: file.type,
                            url: file.url,
                          } as LinkImageInput)
                      )
                    )
                  }>
                  <FaSave />
                </Button>
              </div>
            )}
          </Col>
          <Col>
            <p className="m-0 fw-bold">Tải thêm File:</p>
            {regis?.typeOfService && (
              <FileUploadComponent
                remaining={5 - files.length > 0 ? 5 - files.length : 0}
                checkRole={checkRole}
                onSave={(linkFile) => {
                  const currFile: LinkImageInput[] = files?.map(
                    (file) =>
                      ({
                        filename: file.filename,
                        type: file.type,
                        url: file.url,
                      } as LinkImageInput)
                  );
                  const newFile: LinkImageInput[] = [...currFile, ...linkFile];
                  handleSaveFiles(newFile);
                }}
              />
            )}
          </Col>
        </Row>
      </Row>
      <ModalCpn
        handleClose={() => setShowModal(false)}
        handleSave={() =>
          regis && handleConfirmRegister(regis.id, EStateRegister.Success, note)
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
export default RegisDetailPage;
