import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
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
import { GetEStateRegister, GetETypeOfService } from "src/utils/enum-value";
import { showToast } from "src/components/sub/toasts";
import { LuClock3, LuPackageCheck } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GiMatterStates } from "react-icons/gi";
import FileUploadComponent from "src/components/sub/UpLoad";
import { uploadMultiFile } from "src/utils/upload";
import { FaSave } from "react-icons/fa";
function RegisDetailPage() {
  const { regisId } = useParams();
  const { checkExpirationToken, userInfor, infoStaff, currRole } = useAuth();
  const [regis, setRegis] = useState<GetRegisByIdQuery["getRegisById"]>();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbItem[]>([]);
  checkExpirationToken();
  const [files, setFiles] = useState<LinkImage[]>([]);
  // =================================================================================================

  const { data, loading, error } = useGetRegisByIdQuery({
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
  }, [location, data]);

  useEffect(() => {
    if (regis?.files) setFiles(regis.files);
  }, [regis]);
  // =================================================================================================
  const handleConfirmRegister = async (
    regisId: string,
    state: EStateRegister
  ) => {
    const inputConfirm: ConfirmRegisterInput = {
      registerId: regisId,
      state: state,
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
          }) ||
          pre
      );
      showToast(`Đổi trạng thái đăng ký👌`, undefined, 1000);
    });
  };
  const handleUploadFiles = async (files: File[]) => {
    await uploadMultiFile("document", files, (error: any, result: any) => {
      if (error) {
        console.log("Lỗi nè: ", error);
      } else {
        console.log("Kết quả:", result);
      }
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
  // =================================================================================================
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !regisId) {
    console.log("profile: ", regisId);
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
                <div className="d-flex align-items-center">
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
                    onClick={() =>
                      handleConfirmRegister(regis.id, EStateRegister.Success)
                    }>
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
            <p className="m-0 fw-bold">Danh sách file đã lưu 1</p>
            <ul>
              {files?.map((file, i) => (
                <li key={i}>
                  {i + 1}. {file.filename}
                  <Button
                    size="sm"
                    variant="light"
                    className="text-danger fw-bold"
                    onClick={() => {
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
              <div className="d-flex">
                <Button
                  size="sm"
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
            <FileUploadComponent
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
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
export default RegisDetailPage;
