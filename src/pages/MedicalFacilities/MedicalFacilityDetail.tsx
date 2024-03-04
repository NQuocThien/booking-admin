import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import ShowAlert from "src/components/sub/alerts";
import {
  Doctor,
  MedicalFacilities,
  MedicalSpecialties,
  Package,
  Vaccination,
  useGetMedicalFacilityByIdQuery,
} from "src/graphql/webbooking-service.generated";
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
import MapAddressCpn from "src/components/sub/MapAddressCpn";
function MedicalFacilityDetailPage() {
  const { id } = useParams();
  const { checkExpirationToken } = useAuth();
  const [medicalFacility, setMedicalFacility] = useState<MedicalFacilities>();
  const { data, loading, error } = useGetMedicalFacilityByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: id ? id : "",
    },
  });
  useEffect(() => {
    setMedicalFacility(data?.getMedicalFacilityById);
  }, [data]);
  const location = useLocation();
  useEffect(() => checkExpirationToken(), []);
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
    switch (typeService) {
      case EtypeService.Doctor:
        setMedicalFacility((pre) => {
          if (pre && pre.doctors) {
            const findIndex = pre.doctors.findIndex(
              (doctor) => doctor.id === id
            );
            if (findIndex !== -1) {
              const tmpDoctors: Doctor[] = pre.doctors;
              tmpDoctors.splice(findIndex, 1);
              return {
                ...pre,
                doctors: tmpDoctors,
              };
            }
            return pre;
          }
          return pre;
        });
        break;
      case EtypeService.Package:
        setMedicalFacility((pre) => {
          if (pre && pre.packages) {
            const findIndex = pre.packages.findIndex((item) => item.id === id);
            if (findIndex !== -1) {
              const tmpArr: Package[] = pre.packages;
              tmpArr.splice(findIndex, 1);
              return {
                ...pre,
                packages: tmpArr,
              };
            }
            return pre;
          }
          return pre;
        });
        break;
      case EtypeService.Specialty:
        setMedicalFacility((pre) => {
          if (pre && pre.medicalSpecialties) {
            const findIndex = pre.medicalSpecialties.findIndex(
              (item) => item.id === id
            );
            if (findIndex !== -1) {
              const tmpArr: MedicalSpecialties[] = pre.medicalSpecialties;
              tmpArr.splice(findIndex, 1);
              return {
                ...pre,
                medicalSpecialties: tmpArr,
              };
            }
            return pre;
          }
          return pre;
        });
        break;
      case EtypeService.Vaccine:
        setMedicalFacility((pre) => {
          if (pre && pre.vaccinations) {
            const findIndex = pre.vaccinations.findIndex(
              (item) => item.id === id
            );
            if (findIndex !== -1) {
              const tmpArr: Vaccination[] = pre.vaccinations;
              tmpArr.splice(findIndex, 1);
              return {
                ...pre,
                vaccinations: tmpArr,
              };
            }
            return pre;
          }
          return pre;
        });
        break;
      default:
        break;
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
              src={medicalFacility?.logo.url || "/default.jpg"}
              alt="Logo"
              roundedCircle
            />
            <p className={`${style.top__info_name}`}>
              {medicalFacility?.medicalFacilityName}
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
              src={medicalFacility?.image.url || "/default.jpg"}
              alt="Logo"
              // rounded
            />
          </div>
        </Col>
      </Row>
      <MedicalFacilityListService
        data={medicalFacility}
        hanldeDeleteRefetch={hanldeDeleteRefetch}
      />
      <MedicalFacilityListStaff
        data={medicalFacility?.medicalStaffs || undefined}
      />
      <Row className={`${style.about}`}>
        <Col className={`col-4`}>
          <div className={`${style.about__discription} ${s.component}`}>
            <p className={``}>{data?.getMedicalFacilityById.discription}</p>
          </div>
          <div className={`${style.about__map}`}>
            {medicalFacility?.lat && medicalFacility.lng && (
              <MapAddressCpn
                lat={medicalFacility.lat}
                lng={medicalFacility.lng}
              />
            )}
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
