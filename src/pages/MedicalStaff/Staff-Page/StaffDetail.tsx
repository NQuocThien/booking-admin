import { Col, Container, Row, Spinner } from "react-bootstrap";
import ShowAlert from "src/components/sub/alerts";
import {
  useGetMedicalFacilityNameByIdLazyQuery,
  useGetMedicalStaffByIdQuery,
} from "src/graphql/webbooking-service.generated";
import { useEffect } from "react";
import { useAuth } from "src/context/AuthContext";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { FaTransgenderAlt } from "react-icons/fa";
import { MdManageAccounts, MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GetEPermission } from "src/utils/enum-value";
function MedicalStaffDetailPage() {
  // const { idDoctor, id } = useParams();
  const { checkExpirationToken, userInfor, infoStaff } = useAuth();
  const [getMedical, { data: dataMedical }] =
    useGetMedicalFacilityNameByIdLazyQuery({
      fetchPolicy: "no-cache",
    });

  const { data, loading, error } = useGetMedicalStaffByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: infoStaff?.id ? infoStaff?.id : "",
    },
  });
  checkExpirationToken();

  useEffect(() => {
    if (data?.getMedicalStaffById.medicalFacilityId) {
      const idMedical = data?.getMedicalStaffById.medicalFacilityId;
      getMedical({
        variables: {
          input: idMedical,
        },
      });
    }
  }, [data]);
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !userInfor?.id) {
    console.log(error);
    console.log("user id: ", userInfor?.id);

    return <ShowAlert />;
  }
  return (
    <Container className={`${style.main}`}>
      <div className="shadow-lg bg-light p-3 mt-3">
        {data?.getMedicalStaffById && (
          <Row className={`${style.top}`}>
            <Col className={`col-4 `}>
              <div className={`${style.top__info} ${s.component}`}>
                <p className={`${style.top__info_name}`}>
                  {data?.getMedicalStaffById.name}
                </p>
                <div className={`${style.top__info_line}`}></div>
                <div className={`${style.top__info_item}`}>
                  <FaTransgenderAlt className={`${style.icon}`} />
                  <p>{data?.getMedicalStaffById.gender}</p>
                </div>
                <div className={`${style.top__info_item}`}>
                  <MdOutlineMarkEmailRead className={`${style.icon}`} />
                  <p>{data?.getMedicalStaffById.email}</p>
                </div>
                <div className={`${style.top__info_item}`}>
                  <FaPhone className={`${style.icon}`} />
                  <p>{data?.getMedicalStaffById.numberPhone}</p>
                </div>
              </div>
            </Col>
            <Col className={`col-8`}>
              <Row className={`${style.about__discription} ${s.component}`}>
                <h5>
                  <span className="mx-1 text-primary">
                    <MdManageAccounts />
                  </span>
                  Quyền của "{data?.getMedicalStaffById.name}"
                </h5>
                {data.getMedicalStaffById?.permissions.map((per, i) => (
                  <div className="ms-5" key={i}>
                    - {per}
                  </div>
                ))}

                {data.getMedicalStaffById?.specialtyId &&
                  data.getMedicalStaffById?.permissions.includes(
                    GetEPermission.ManagerSpecialty
                  ) && (
                    <div className="px-3">
                      <h5>
                        <span className="mx-1 text-primary">
                          <MdManageAccounts />
                        </span>
                        Chuyên khoa đang quản lí:
                      </h5>
                      <div className="ms-5">
                        {data.getMedicalStaffById?.specialties &&
                          data.getMedicalStaffById?.specialties.map(
                            (spec, i) => <div key={i}>- {spec.name}</div>
                          )}
                      </div>
                    </div>
                  )}
              </Row>
            </Col>
          </Row>
        )}
      </div>
    </Container>
  );
}
export default MedicalStaffDetailPage;
