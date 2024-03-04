import {
  Col,
  Container,
  Image,
  Row,
  Spinner,
  Table,
  Button,
} from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import ShowAlert from "src/components/sub/alerts";
import {
  Schedule,
  Session,
  useGetDoctorbyIdQuery,
  useGetMedicalFacilityNameByIdQuery,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import CustomBreadcrumbs, {
  IBreadcrumbItem,
} from "src/components/sub/Breadcrumbs";
import { useEffect, useState } from "react";
import { useAuth } from "src/context/AuthContext";
import { FaBriefcaseMedical, FaEye } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { SiMicrosoftacademic } from "react-icons/si";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdTransgender } from "react-icons/io";
import {
  getAcademicTitle,
  getDegree,
  renderDayOfWeek,
} from "src/utils/getData";
import { IoPricetagsOutline } from "react-icons/io5";
import { formatDate, formatter } from "src/utils/contain";
import ListRegister from "src/components/Register/ListRegister";
import { EtypeService } from "src/utils/enum";
function DoctorDetailPage() {
  const { idDoctor, id } = useParams();
  const { checkExpirationToken } = useAuth();
  const { data: dataMedical } = useGetMedicalFacilityNameByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: id || "",
    },
  });
  //   console.log("test ID medical:", dataMedical);

  const { data, loading, error } = useGetDoctorbyIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: idDoctor ? idDoctor : "",
    },
  });
  const location = useLocation();
  useEffect(() => checkExpirationToken(), []);
  // console.log("test", location.pathname.search("/admin-page/medical-facility"));
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbItem[]>([]);
  const [listSchedule, setListSchedule] = useState<Schedule[]>();
  const [showService, setShowService] = useState<EtypeService[]>([]);
  useEffect(() => {
    if (location.pathname.search("/admin-page/medical-facility") !== -1) {
      const urlMedical = "/admin-page/medical-facility/" + id;
      setBreadcrumbs([
        { url: "/admin-page/medical-facility", label: "Cơ sở y tế" },
        {
          url: urlMedical,
          label: dataMedical?.getMedicalFacilityById.medicalFacilityName || "",
        },
        {
          url: "",
          label: "BS." + data?.getDoctorbyId.name || "",
        },
      ]);
    }
    if (data?.getDoctorbyId) {
      setListSchedule(data?.getDoctorbyId.workSchedule.schedule);
    }
  }, [location, data, dataMedical]);

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !idDoctor) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <Container fluid className={`${style.main} `}>
      {breadcrumbs && <CustomBreadcrumbs paths={breadcrumbs} />}
      <Row className={`${style.top}`}>
        <Col className={`col-4 `}>
          <div className={`${style.top__info} ${s.component}`}>
            <Image
              className={`${style.top__info_logo}`}
              height={200}
              width={200}
              src={data?.getDoctorbyId.avatar.url || "/default.jpg"}
              alt="Logo"
              roundedCircle
            />
            <p className={`${style.top__info_name}`}>
              {data?.getDoctorbyId.name}
            </p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_item}`}>
              <FaBriefcaseMedical className={`${style.icon}`} />
              <p>{getDegree(data?.getDoctorbyId.specialty?.name)}</p>
            </div>
            {data?.getDoctorbyId.academicTitle && (
              <div className={`${style.top__info_item}`}>
                <HiOutlineAcademicCap className={`${style.icon}`} />
                <p className={`${style.contend}`}>
                  {getAcademicTitle(data?.getDoctorbyId.academicTitle)}
                </p>
              </div>
            )}
            <div className={`${style.top__info_item}`}>
              <SiMicrosoftacademic className={`${style.icon}`} />
              <p>{getDegree(data?.getDoctorbyId.degree)}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <MdOutlineMarkEmailRead className={`${style.icon}`} />
              <p>{data?.getDoctorbyId.email}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <FaPhone className={`${style.icon}`} />
              <p>{data?.getDoctorbyId.numberPhone}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <IoMdTransgender className={`${style.icon}`} />
              <p>{data?.getDoctorbyId.gender}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <IoPricetagsOutline className={`${style.icon}`} />
              <p>
                {data?.getDoctorbyId.price &&
                  formatter.format(data?.getDoctorbyId.price)}
              </p>
            </div>
          </div>
        </Col>
        <Col className={`col-8`}>
          <Row className={`${style.about__discription} ${s.component}`}>
            <p className="fs-5">
              Đôi nét về bác sĩ "{data?.getDoctorbyId.name}"
            </p>
            <div className={``}>{data?.getDoctorbyId.discription}</div>
          </Row>
          <Row className={`${s.component} my-3`}>
            <Row className="mb-3">
              <p>Trạng thái: {data?.getDoctorbyId.workSchedule.status} </p>
            </Row>
            <Row className="mb-3">
              <p>Ngày nghỉ:</p>
              <div className={s.main__dayOff}>
                {data?.getDoctorbyId.workSchedule.dayOff.map((day, i) => (
                  <span className="mx-1 p-2 border border-info">
                    {formatDate(day)}
                  </span>
                ))}
              </div>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className={`${s.component} mb-5`}>
        <Row>
          <p>Lịch làm việc:</p>
          <Table striped bordered hover>
            <thead>
              <th>Ngày trong tuần</th>
              <th>Phiên làm việc</th>
            </thead>
            <tbody>
              {listSchedule?.map((s, i) => (
                <tr key={i}>
                  <td> {renderDayOfWeek(s.dayOfWeek)}</td>
                  <td className="d-flex flex-wrap">
                    {s.sessions.map((session, i) => (
                      <span className="m-1 p-2 border border-success" key={i}>
                        {session.startTime}
                        {"-"}
                        {session.endTime}
                      </span>
                    ))}
                  </td>
                  {/* <td>
                    <Button
                      size="sm"
                      variant="outline-primary"
                      onClick={() => handleClickSchedule(s)}>
                      <FaEye />
                    </Button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        <Row>
          <ListRegister
            listSchedule={listSchedule}
            doctorId={data?.getDoctorbyId.id}
          />
        </Row>
      </Row>
    </Container>
  );
}
export default DoctorDetailPage;
