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
function DoctorDetailForDoctorPage() {
  // const { idDoctor, id } = useParams();
  const { checkExpirationToken, userInfor } = useAuth();
  const [getMedical, { data: dataMedical }] =
    useGetMedicalFacilityNameByIdLazyQuery({
      fetchPolicy: "no-cache",
    });

  const { data, loading, error } = useGetDoctorbyUserIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: userInfor?.id ? userInfor?.id : "",
    },
  });
  checkExpirationToken();
  const [listSchedule, setListSchedule] = useState<Schedule[]>();

  useEffect(() => {
    if (data?.getDoctorbyUserId.medicalFactilitiesId) {
      const idMedical = data?.getDoctorbyUserId.medicalFactilitiesId;
      getMedical({
        variables: {
          input: idMedical,
        },
      });
    }
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
      <Row className={`${style.top}`}>
        <Col className={`col-4 `}>
          <div className={`${style.top__info} ${s.component}`}>
            <Image
              className={`${style.top__info_logo}`}
              height={200}
              width={200}
              src={data?.getDoctorbyUserId.avatar.url || "/default.jpg"}
              alt="Logo"
              roundedCircle
            />
            <p className={`${style.top__info_name}`}>
              {data?.getDoctorbyUserId.doctorName}
            </p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_item}`}>
              <FaBriefcaseMedical className={`${style.icon}`} />
              <p>
                {getDegree(data?.getDoctorbyUserId.specialty?.specialtyName)}
              </p>
            </div>
            {data?.getDoctorbyUserId.academicTitle && (
              <div className={`${style.top__info_item}`}>
                <HiOutlineAcademicCap className={`${style.icon}`} />
                <p className={`${style.contend}`}>
                  {getAcademicTitle(data?.getDoctorbyUserId.academicTitle)}
                </p>
              </div>
            )}
            <div className={`${style.top__info_item}`}>
              <SiMicrosoftacademic className={`${style.icon}`} />
              <p>{getDegree(data?.getDoctorbyUserId.degree)}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <MdOutlineMarkEmailRead className={`${style.icon}`} />
              <p>{data?.getDoctorbyUserId.email}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <FaPhone className={`${style.icon}`} />
              <p>{data?.getDoctorbyUserId.numberPhone}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <IoMdTransgender className={`${style.icon}`} />
              <p>{data?.getDoctorbyUserId.gender}</p>
            </div>
            <div className={`${style.top__info_item}`}>
              <IoPricetagsOutline className={`${style.icon}`} />
              <p>
                {data?.getDoctorbyUserId.price &&
                  formatter.format(data?.getDoctorbyUserId.price)}
              </p>
            </div>
          </div>
        </Col>
        <Col className={`col-8`}>
          <Row className={`${style.about__discription} ${s.component}`}>
            <p className="fs-5">
              Đôi nét về bác sĩ "{data?.getDoctorbyUserId.doctorName}"
            </p>
            <div className={``}>{data?.getDoctorbyUserId.discription}</div>
          </Row>
          <Row className={`${s.component} my-3`}>
            <Row className="mb-3">
              <p>Trạng thái: {data?.getDoctorbyUserId.workSchedule.status} </p>
            </Row>
            <Row className="mb-3">
              <p>Ngày nghỉ:</p>
              <div className={s.main__dayOff}>
                {data?.getDoctorbyUserId.workSchedule.dayOff.map((day, i) => (
                  <span className="mx-1 p-2 border border-info">
                    {formatDate(day)}
                  </span>
                ))}
              </div>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className={`${s.component} mb-5`}>
        <Row>
          <p>Lịch làm việc:</p>
          <Table striped bordered hover>
            <thead>
              <th>Ngày trong tuần</th>
              <th>Phiên làm việc</th>
            </thead>
            <tbody>
              {listSchedule?.map((s, i) => (
                <tr key={i}>
                  <td> {renderDayOfWeek(s.dayOfWeek)}</td>
                  <td className="d-flex flex-wrap">
                    {s.sessions.map((session, i) => (
                      <span className="m-1 p-2 border border-success" key={i}>
                        {session.startTime}
                        {"-"}
                        {session.endTime}
                      </span>
                    ))}
                  </td>
                  {/* <td>
                    <Button
                      size="sm"
                      variant="outline-primary"
                      onClick={() => handleClickSchedule(s)}>
                      <FaEye />
                    </Button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        <Row>
          <ListRegister
            listSchedule={listSchedule}
            doctorId={data?.getDoctorbyUserId.id}
          />
        </Row>
      </Row>
    </Container>
  );
}
export default DoctorDetailForDoctorPage;
