import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import ShowAlert from "src/components/sub/alerts";
import {
  Schedule,
  useGetMedicalFacilityNameByIdQuery,
  useGetVaccineByIdQuery,
} from "src/graphql/webbooking-service.generated";
import { IoFlag } from "react-icons/io5";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import CustomBreadcrumbs, {
  IBreadcrumbItem,
} from "src/components/sub/Breadcrumbs";
import { useEffect, useState } from "react";
import { useAuth } from "src/context/AuthContext";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaViruses } from "react-icons/fa6";
import { formatDate, formatter } from "src/utils/contain";
import { FaDoorOpen } from "react-icons/fa";
import ListRegister from "src/components/Pages/Register/ListRegister";
function VaccinationDetailPage() {
  const { idVaccine, id } = useParams();
  const { checkExpirationToken } = useAuth();
  const { data: dataMedical } = useGetMedicalFacilityNameByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: id || "",
    },
  });
  const { data, loading, error } = useGetVaccineByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: idVaccine ? idVaccine : "",
    },
  });
  const location = useLocation();
  checkExpirationToken();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbItem[]>([]);
  const [listSchedule, setListSchedule] = useState<Schedule[]>();
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
          label: data?.getVaccineById.vaccineName || "",
        },
      ]);
      if (data?.getVaccineById) {
        setListSchedule(data?.getVaccineById.workSchedule.schedule);
      }
    } else if (location.pathname.search("/facility-page/vaccinations") !== -1) {
      setBreadcrumbs([
        { url: "/facility-page/vaccinations", label: "Danh sách vaccine" },
        {
          url: "",
          label: data?.getVaccineById.vaccineName || "",
        },
      ]);
    } else if (location.pathname.search("/staff-page/vaccination") !== -1) {
      setBreadcrumbs([
        { url: "/staff-page/vaccination", label: "Danh sách vaccine" },
        {
          url: "",
          label: data?.getVaccineById.vaccineName || "",
        },
      ]);
    }
    if (data?.getVaccineById) {
      setListSchedule(data?.getVaccineById.workSchedule.schedule);
    }
  }, [location, data, dataMedical]);

  // const navigate = useNavigate();
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !idVaccine) {
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
              Vaccine "{data?.getVaccineById.vaccineName}"
            </p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_item}`}>
              <FaDoorOpen className={`${style.icon}`} />
              <p>{data?.getVaccineById.workSchedule.status}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <IoFlag className={`${style.icon}`} />
              <p>{data?.getVaccineById.countryOfOrigin}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <IoPricetagsOutline className={`${style.icon}`} />
              <p>
                {data?.getVaccineById.price &&
                  formatter.format(data?.getVaccineById.price)}
              </p>
            </div>
            <div className={`${style.top__info_item}`}>
              <FaViruses className={`${style.icon}`} />
              <p>{data?.getVaccineById.prophylactic}</p>
            </div>
          </div>
        </Col>
        <Col className={`col-8`}>
          <Row className={`${style.about__discription} ${s.component}`}>
            <p className="fs-5">Chỉ định"{data?.getVaccineById.vaccineName}"</p>
            {data?.getVaccineById.indication && (
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.getVaccineById.indication,
                }}></div>
            )}
          </Row>
        </Col>
      </Row>
      <Row className={`${s.component} my-3`}>
        <Row className="mb-3">
          <p>Ngày nghỉ:</p>
          <div className={s.main__dayOff}>
            {data?.getVaccineById.workSchedule.dayOff.map((day, i) => (
              <span key={i} className="mx-1 p-2 border border-info">
                {formatDate(day)}
              </span>
            ))}
          </div>
        </Row>
        <Row>
          <p>Lịch làm việc:</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ngày trong tuần</th>
                <th>Phiên làm việc</th>
              </tr>
            </thead>
            <tbody>
              {data?.getVaccineById.workSchedule.schedule.map((s, i) => (
                <tr key={i}>
                  <td> Thứ {s.dayOfWeek}</td>
                  <td
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}>
                    {s.sessions.map((session, i) => (
                      <span className="m-1 p-2 border border-success" key={i}>
                        {session.startTime}
                        {"-"}
                        {session.endTime}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Row>
      <Row>
        <ListRegister
          listSchedule={listSchedule}
          vaccineId={data?.getVaccineById.id}
        />
      </Row>
    </Container>
  );
}
export default VaccinationDetailPage;
