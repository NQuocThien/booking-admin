import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import ShowAlert from "src/components/sub/alerts";
import {
  Schedule,
  useGetMedicalFacilityNameByIdQuery,
  useGetMedicalSpecialtyByIdQuery,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import CustomBreadcrumbs, {
  IBreadcrumbItem,
} from "src/components/sub/Breadcrumbs";
import { useEffect, useState } from "react";
import { useAuth } from "src/context/AuthContext";
import { IoPricetagsOutline } from "react-icons/io5";
import { formatDate, formatter } from "src/utils/contain";
import { FaDoorOpen } from "react-icons/fa";
import ListRegister from "src/components/Pages/Register/ListRegister";
function SpecialtyDetailPage() {
  const { idSpecialty, id } = useParams();
  const { checkExpirationToken } = useAuth();
  const { data: dataMedical } = useGetMedicalFacilityNameByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: id || "",
    },
  });
  const { data, loading, error } = useGetMedicalSpecialtyByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: idSpecialty ? idSpecialty : "",
    },
  });
  const location = useLocation();
  useEffect(() => checkExpirationToken(), []);
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbItem[]>([]);
  const [listSchedule, setListSchedule] = useState<Schedule[]>();
  useEffect(() => {
    if (location.pathname.search("/admin-page/medical-facility") !== -1) {
      const urlMedical = "/admin-page/medical-facility/" + id;
      setBreadcrumbs([
        { url: "/admin-page/medical-facility", label: "Dach sách chuyên khoa" },
        {
          url: urlMedical,
          label: dataMedical?.getMedicalFacilityById.medicalFacilityName || "",
        },
        {
          url: "",
          label: data?.getMedicalSpecialtyById.specialtyName || "",
        },
      ]);
      if (data?.getMedicalSpecialtyById.workSchedule) {
        setListSchedule(data?.getMedicalSpecialtyById.workSchedule.schedule);
      }
    } else if (location.pathname.search("/facility-page/specialties/") !== -1) {
      const urlMedical = "/facility-page/specialties" + id;
      setBreadcrumbs([
        { url: "/facility-page/specialties", label: "Danh sách chuyên khoa" },
        {
          url: "",
          label: data?.getMedicalSpecialtyById.specialtyName || "",
        },
      ]);
      if (data?.getMedicalSpecialtyById.workSchedule) {
        setListSchedule(data?.getMedicalSpecialtyById.workSchedule.schedule);
      }
    } else if (location.pathname.search("/staff-page/specialties") !== -1) {
      setBreadcrumbs([
        { url: "/staff-page/specialties", label: "Danh sách chuyên khoa" },
        {
          url: "",
          label: data?.getMedicalSpecialtyById.specialtyName || "",
        },
      ]);
      if (data?.getMedicalSpecialtyById.workSchedule) {
        setListSchedule(data?.getMedicalSpecialtyById.workSchedule.schedule);
      }
    }
  }, [location, data, dataMedical]);

  // const navigate = useNavigate();
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !idSpecialty) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <Container fluid className={`${style.main} `}>
      {breadcrumbs && <CustomBreadcrumbs paths={breadcrumbs} />}
      <Row className={`${style.top}`}>
        <Col className={`col-4 `}>
          <div className={`${style.top__info} ${s.component}`}>
            <p className={`${style.top__info_name}`}>
              {data?.getMedicalSpecialtyById.specialtyName}
            </p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_item}`}>
              <FaDoorOpen className={`${style.icon}`} />
              <p>
                {data?.getMedicalSpecialtyById.workSchedule &&
                  data?.getMedicalSpecialtyById.workSchedule.status}
              </p>
            </div>
            <div className={`${style.top__info_item}`}>
              <IoPricetagsOutline className={`${style.icon}`} />
              <p>
                {data?.getMedicalSpecialtyById.price &&
                  formatter.format(data?.getMedicalSpecialtyById.price)}
              </p>
            </div>
          </div>
        </Col>
        <Col className={`col-8`}>
          <Row className={`${style.about__discription} ${s.component}`}>
            <p className="fs-5">
              Chi tiết chuyên khoa khám"
              {data?.getMedicalSpecialtyById.specialtyName}"
            </p>
            <div className={``}>
              {data?.getMedicalSpecialtyById.discription}
            </div>
          </Row>
        </Col>
      </Row>
      <Row className={`${s.component} my-3`}>
        <div className="mb-3">
          <p>Ngày nghỉ:</p>
          <div className={s.main__dayOff}>
            {data?.getMedicalSpecialtyById.workSchedule &&
              data?.getMedicalSpecialtyById.workSchedule.dayOff.map(
                (day, i) => (
                  <span key={i} className="mx-1 p-2 border border-info">
                    {formatDate(day)}
                  </span>
                )
              )}
          </div>
        </div>
        <div>
          <p>Lịch làm việc:</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ngày trong tuần</th>
                <th>Phiên làm việc</th>
              </tr>
            </thead>
            <tbody>
              {data?.getMedicalSpecialtyById.workSchedule &&
                data?.getMedicalSpecialtyById.workSchedule.schedule.map(
                  (s, i) => (
                    <tr key={i}>
                      <td> Thứ {s.dayOfWeek}</td>
                      <td
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                        }}>
                        {s.sessions.map((session, i) => (
                          <span
                            className="m-1 p-2 border border-success"
                            key={i}>
                            {session.startTime}
                            {"-"}
                            {session.endTime}
                          </span>
                        ))}
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </Table>
        </div>
      </Row>
      <Row>
        <ListRegister
          listSchedule={listSchedule}
          specialtyId={data?.getMedicalSpecialtyById.id}
        />
      </Row>
    </Container>
  );
}
export default SpecialtyDetailPage;
