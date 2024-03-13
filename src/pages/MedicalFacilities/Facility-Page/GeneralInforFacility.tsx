import { Col, Container, Image, Row, Spinner, Button } from "react-bootstrap";
import ShowAlert from "src/components/sub/alerts";
import {
  MedicalFacilities,
  useGetGeneralMedicalFacilityInfoLazyQuery,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { useAuth } from "src/context/AuthContext";
// import MedicalFacilityListService from "../../components/Pages/MedicalFacility/MedicalFacilitytService";
import MapAddressCpn from "src/components/sub/MapAddressCpn";
import { getToken } from "src/utils/contain";
import { Link } from "react-router-dom";
import { GetEPermission, GetRole } from "src/utils/enum-value";
import { info } from "console";
function GeneralInforFacilityPage() {
  const { checkExpirationToken, userInfor, infoStaff, currRole } = useAuth();
  const [authorized, setAuthorized] = useState<boolean>(true);
  const [medicalFacility, setMedicalFacility] = useState<MedicalFacilities>();
  const [getData, { data, loading, error }] =
    useGetGeneralMedicalFacilityInfoLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    });
  useEffect(() => {
    if (currRole === GetRole.Facility) {
      getData({
        variables: {
          userId: userInfor?.id || "",
        },
      });
    } else if (currRole === GetRole.Staff) {
      if (infoStaff?.permissions.includes(GetEPermission.Magager)) {
        // console.log("==> Test Form Staff: ", infoStaff.id);
        getData({
          variables: {
            staffId: infoStaff?.id || "",
          },
        });
      } else setAuthorized(false);
    }
  }, [currRole]);
  useEffect(() => {
    setMedicalFacility(data?.getMedicalFacilityInfo);
  }, [data]);
  checkExpirationToken();
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  if (!authorized) {
    return <ShowAlert head="Không có quyền truy cập" />;
  }
  return (
    <Container fluid className={`${style.main} `}>
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
                {data?.getMedicalFacilityInfo.address}
              </p>
            </div>
            <div className={`${style.top__info_item}`}>
              <AiOutlineSchedule className={`${style.icon}`} />
              <p>{data?.getMedicalFacilityInfo.schedule}</p>
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
      <Row className={`${style.about}`}>
        <Col className={`col-4`}>
          <div className={`${style.about__discription} ${s.component}`}>
            <p className={``}>{data?.getMedicalFacilityInfo.discription}</p>
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
                __html: data?.getMedicalFacilityInfo.introduce || "",
              }}></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Link
          className="btn btn-primary"
          to={`/facility-page/update/${data?.getMedicalFacilityInfo.id}`}>
          Chỉnh sửa
        </Link>
      </Row>
    </Container>
  );
}
export default GeneralInforFacilityPage;
