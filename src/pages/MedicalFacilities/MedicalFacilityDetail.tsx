import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import ShowAlert from "src/components/sub/alerts";
import { useGetMedicalFacilityByIdQuery } from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import CustomBreadcrumbs, {
  IBreadcrumbItem,
} from "src/components/sub/Breadcrumbs";
import { useEffect, useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { useAuth } from "src/context/AuthContext";
import MedicalFacilityListService from "../../components/Pages/MedicalFacility/MedicalFacilitytService";
import MedicalFacilityListStaff from "src/components/Pages/MedicalFacility/MedicalFacilityStaff";
import { EtypeService } from "src/utils/enum";
function MedicalFacilityDetailPage() {
  const { id } = useParams();
  const { checkExpirationToken } = useAuth();
  const { data, loading, error } = useGetMedicalFacilityByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: id ? id : "",
    },
  });
  const location = useLocation();
  useEffect(() => checkExpirationToken(), []);
  // console.log("test", location.pathname.search("/admin-page/medical-facility"));
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbItem[]>([]);
  useEffect(() => {
    if (location.pathname.search("/admin-page/medical-facility") !== -1) {
      setBreadcrumbs([
        { url: "/admin-page/medical-facility", label: "Cơ sở y tế" },
        {
          url: "",
          label: data?.getMedicalFacilityById.medicalFacilityName || "",
        },
      ]);
    }
  }, [location, data]);
  const hanldeDeleteRefetch = (typeService: EtypeService, id: string) => {
    if (EtypeService.Doctor === typeService) {
      const findIndex = data?.getMedicalFacilityById.doctors?.findIndex(
        (doctor) => doctor.id === id
      );
      if (findIndex != -1) {
        console.log("findIndex", findIndex);
        data?.getMedicalFacilityById.doctors?.slice(findIndex, 1);
      }
    }
  };
  // const navigate = useNavigate();
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !id) {
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
              src={data?.getMedicalFacilityById.logo.url || "/default.jpg"}
              alt="Logo"
              roundedCircle
            />
            <p className={`${style.top__info_name}`}>
              {data?.getMedicalFacilityById.medicalFacilityName}
            </p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_item}`}>
              <MdOutlineLocationOn className={`${style.icon}`} />
              <p className={`${style.contend}`}>
                {data?.getMedicalFacilityById.address}
              </p>
            </div>
            <div className={`${style.top__info_item}`}>
              <AiOutlineSchedule className={`${style.icon}`} />
              <p>{data?.getMedicalFacilityById.schedule}</p>
            </div>
          </div>
        </Col>
        <Col className="col-8 d-flex justify-content-center">
          <div className={`${style.top__image}`}>
            <img
              className={`${style.image}`}
              src="/imgs/an.png"
              alt="Logo"
              // rounded
            />
          </div>
        </Col>
      </Row>
      <MedicalFacilityListService
        data={data}
        hanldeDeleteRefetch={hanldeDeleteRefetch}
      />
      <MedicalFacilityListStaff data={data} />
      <Row className={`${style.about}`}>
        <Col className={`col-4`}>
          <div className={`${style.about__discription} ${s.component}`}>
            <p className={``}>{data?.getMedicalFacilityById.discription}</p>
          </div>
        </Col>
        <Col className={`col-8 `}>
          <div className={`${style.about__introduce} ${s.component}`}>
            <div
              className={``}
              dangerouslySetInnerHTML={{
                __html: data?.getMedicalFacilityById.introduce || "",
              }}></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default MedicalFacilityDetailPage;
