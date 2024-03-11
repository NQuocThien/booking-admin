import { Col, Container, Row, Spinner } from "react-bootstrap";
import s from "src/assets/scss/General.module.scss";
import { useGetMedicalFacilityByUserIdQuery } from "src/graphql/webbooking-service.generated";
import { useAuth } from "src/context/AuthContext";
import ShowAlert from "src/components/sub/alerts";
import { getToken } from "src/utils/contain";
import GeneralStatistic from "src/components/Pages/MedicalFacility/Generalstatistic";
import { FaUserDoctor } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdOutlineVaccines } from "react-icons/md";
function FacilityHomePage() {
  const { userInfor, checkExpirationToken } = useAuth();
  checkExpirationToken();
  const { data, loading, error } = useGetMedicalFacilityByUserIdQuery({
    variables: {
      input: userInfor?.id || "",
    },
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  });
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <div>
      <div className={`${s.component} mb-2`}>
        <h4>
          Trang quản lý cơ sơ y tế "
          {data?.getMedicalFacilityByUserId.medicalFacilityName}"
        </h4>
      </div>
      {data?.getMedicalFacilityByUserId && (
        <Row>
          {data.getMedicalFacilityByUserId?.totalDoctors && (
            <Col xl={3} lg={4} sm={6}>
              <GeneralStatistic
                title="Bác sỉ"
                number={data?.getMedicalFacilityByUserId?.totalDoctors}
                icons={FaUserDoctor}
              />
            </Col>
          )}
          {data.getMedicalFacilityByUserId?.totalPackages && (
            <Col xl={3} lg={4} sm={6}>
              <GeneralStatistic
                title="Gói khám"
                number={data?.getMedicalFacilityByUserId?.totalPackages}
                icons={LuPackageCheck}
              />
            </Col>
          )}
          {data.getMedicalFacilityByUserId?.totalSpecialties && (
            <Col xl={3} lg={4} sm={6}>
              <GeneralStatistic
                title="Chuyên khoa"
                number={data?.getMedicalFacilityByUserId?.totalSpecialties}
                icons={FaBriefcaseMedical}
              />
            </Col>
          )}
          {data.getMedicalFacilityByUserId?.totalVaccinations && (
            <Col xl={3} lg={4} sm={6}>
              <GeneralStatistic
                title="Tim chủng"
                number={data?.getMedicalFacilityByUserId?.totalVaccinations}
                icons={MdOutlineVaccines}
              />
            </Col>
          )}
        </Row>
      )}
    </div>
  );
}
export default FacilityHomePage;
