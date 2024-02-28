import { Col, Container, Image, Row, Spinner, Table } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import ShowAlert from "src/components/sub/alerts";
import {
  useGetMedicalFacilityNameByIdQuery,
  useGetMedicalSpecialtyByIdQuery,
  useGetPackageByIdQuery,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import CustomBreadcrumbs, {
  IBreadcrumbItem,
} from "src/components/sub/Breadcrumbs";
import { useEffect, useState } from "react";
import { useAuth } from "src/context/AuthContext";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoPricetagsOutline } from "react-icons/io5";
import { formatDate, formatter } from "src/utils/contain";
import { FaDoorOpen } from "react-icons/fa";
import { FaTransgenderAlt } from "react-icons/fa";
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
          label: data?.getMedicalSpecialtyById.name || "",
        },
      ]);
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
              {data?.getMedicalSpecialtyById.name}
            </p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_item}`}>
              <FaDoorOpen className={`${style.icon}`} />
              <p>{data?.getMedicalSpecialtyById.workSchedule.status}</p>
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
          <div className={`${style.about__discription} ${s.component}`}>
            <p className="fs-5">
              Chi tiết chuyên khoa khám"{data?.getMedicalSpecialtyById.name}"
            </p>
            <div className={``}>
              {data?.getMedicalSpecialtyById.discription}
            </div>
          </div>
          <div className={`${s.component} my-3`}>
            <div className="mb-3">
              <p>Ngày nghỉ:</p>
              <div className={s.main__dayOff}>
                {data?.getMedicalSpecialtyById.workSchedule.dayOff.map(
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
                  {data?.getMedicalSpecialtyById.workSchedule.schedule.map(
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default SpecialtyDetailPage;
