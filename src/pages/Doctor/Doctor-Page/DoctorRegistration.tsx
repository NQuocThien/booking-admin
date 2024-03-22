import { Col, Container, Image, Row, Spinner, Table } from "react-bootstrap";
import ShowAlert from "src/components/sub/alerts";
import {
  Schedule,
  useGetDoctorbyUserIdQuery,
  useGetMedicalFacilityNameByIdLazyQuery,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { useEffect, useState } from "react";
import { useAuth } from "src/context/AuthContext";
import { FaBriefcaseMedical } from "react-icons/fa";
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
import ListRegister from "src/components/Pages/Register/ListRegister";
function DoctorRegistration() {
  // const { idDoctor, id } = useParams();
  const { checkExpirationToken, userInfor } = useAuth();
  const { data, loading, error } = useGetDoctorbyUserIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: userInfor?.id ? userInfor?.id : "",
    },
  });
  checkExpirationToken();
  const [listSchedule, setListSchedule] = useState<Schedule[]>();

  useEffect(() => {
    if (data?.getDoctorbyUserId) {
      setListSchedule(data?.getDoctorbyUserId.workSchedule.schedule);
    }
  }, [data]);
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !userInfor?.id) {
    console.log(error);
    console.log("user id: ", userInfor?.id);

    return <ShowAlert />;
  }
  return (
    <Container fluid className={`${style.main} `}>
      <Row className={`${s.component} mb-5`}>
        <ListRegister
          listSchedule={listSchedule}
          doctorId={data?.getDoctorbyUserId.id}
        />
      </Row>
    </Container>
  );
}
export default DoctorRegistration;