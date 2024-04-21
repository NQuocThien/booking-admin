import { Col, Container, Row, Spinner } from "react-bootstrap";
import s from "src/assets/scss/General.module.scss";
import { useGetMedicalFacilityInfoLazyQuery } from "src/graphql/webbooking-service.generated";
import { useAuth } from "src/context/AuthContext";
import ShowAlert from "src/components/sub/alerts";
import { getToken } from "src/utils/contain";
import GeneralStatistic from "src/components/Pages/MedicalFacility/Generalstatistic";
import { FaUserDoctor } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdOutlineVaccines } from "react-icons/md";
import { useEffect, useState } from "react";
import { GetEPermission, GetRole } from "src/utils/enum-value";
import BarChartComponent from "src/components/sub/Chart";
function FacilityHomePage() {
  const { userInfor, checkExpirationToken, currRole, infoStaff } = useAuth();
  checkExpirationToken();
  const [authorized, setAuthorized] = useState<boolean>(true);
  const [getData, { data, loading, error }] =
    useGetMedicalFacilityInfoLazyQuery({
      variables: {
        userId: userInfor?.id || "",
      },
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
        getData({
          variables: {
            staffId: infoStaff?.id || "",
          },
        });
      } else setAuthorized(false);
    }
  }, [currRole]);
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  if (!authorized) {
    return <ShowAlert head="Không có quyền truy cập" />;
  }
  return (
    <div>
      <div className={`${s.component} mb-2`}>
        <h4>
          Trang quản lý cơ sơ y tế "
          {data?.getMedicalFacilityInfo.medicalFacilityName}"
        </h4>
      </div>
      <div>
        {data?.getMedicalFacilityInfo && (
          <Row>
            {data?.getMedicalFacilityInfo?.totalDoctors && (
              <Col xl={3} lg={4} sm={6}>
                <GeneralStatistic
                  title="Bác sĩ"
                  number={data?.getMedicalFacilityInfo.totalDoctors}
                  icons={FaUserDoctor}
                />
              </Col>
            )}
            {data?.getMedicalFacilityInfo?.totalPackages && (
              <Col xl={3} lg={4} sm={6}>
                <GeneralStatistic
                  title="Gói khám"
                  number={data?.getMedicalFacilityInfo?.totalPackages}
                  icons={LuPackageCheck}
                />
              </Col>
            )}
            {data?.getMedicalFacilityInfo?.totalSpecialties && (
              <Col xl={3} lg={4} sm={6}>
                <GeneralStatistic
                  title="Chuyên khoa"
                  number={data?.getMedicalFacilityInfo?.totalSpecialties}
                  icons={FaBriefcaseMedical}
                />
              </Col>
            )}
            {data?.getMedicalFacilityInfo?.totalVaccinations && (
              <Col xl={3} lg={4} sm={6}>
                <GeneralStatistic
                  title="Tim chủng"
                  number={data?.getMedicalFacilityInfo?.totalVaccinations}
                  icons={MdOutlineVaccines}
                />
              </Col>
            )}
          </Row>
        )}
      </div>
      <div>
        <BarChartComponent />
      </div>
    </div>
  );
}
export default FacilityHomePage;
