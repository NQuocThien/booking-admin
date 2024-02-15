import {
  Button,
  Col,
  Container,
  Image,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import ShowAlert from "src/components/toasts/alerts";
import { useGetMedicalFacilityByIdQuery } from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
function MedicalFacilityDetailPage() {
  const { id } = useParams();
  const { data, loading, error } = useGetMedicalFacilityByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: id ? id : "",
    },
  });
  const navigate = useNavigate();
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !id) {
    console.log(error);
    return <ShowAlert />;
  }

  return (
    <Container fluid className={`${style.main} `}>
      <Button
        variant="outline-success"
        size="sm"
        className="mb-2 d-flex align-items-center"
        onClick={() => {
          navigate(-1);
        }}>
        <IoArrowBack />
      </Button>
      <Row className={`${style.top}`}>
        <Col className={`col-4 `}>
          <div className={`${style.top__info} ${s.component}`}>
            <Image
              className={`${style.top__info_logo}`}
              height={200}
              width={200}
              src="/imgs/logo/Logo1.jpg"
              alt="Logo"
              roundedCircle
            />
            <p className={`${style.top__info_name}`}>
              {data?.getMedicalFacilityById.medicalFacilityName}
            </p>
            <div className={`${style.top__info_line}`}></div>
            <div className={`${style.top__info_address}`}>
              <MdOutlineLocationOn className={`${style.icon}`} />
              <p>{data?.getMedicalFacilityById.address}</p>
            </div>
          </div>
        </Col>
        <Col className="col-8">
          <Image
            className={`${style.top__info_logo}`}
            height={350}
            width={"100%"}
            src="/imgs/an.png"
            alt="Logo"
            rounded
          />
        </Col>
      </Row>
      <Row className={`${style.service}`}>
        <Col className={`col-6 `}>
          <div className={`${style.service__info} ${s.component}`}>
            <p className={`${style.title} `}>Khám theo bác sĩ</p>
            <Table>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Lịch khám</th>
                  <th>Giá</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.getMedicalFacilityById.doctors?.map((doctor, i) => (
                  <tr key={i}>
                    <td>{doctor.name}</td>
                    <td>
                      {doctor.workSchedule.schedule.map((s) => (
                        <span>{s.dayOfWeed}</span>
                      ))}
                    </td>
                    <td>3</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col className="col-6">
          <Image
            className={`${style.top__info_logo}`}
            height={350}
            width={"100%"}
            src="/imgs/an.png"
            alt="Logo"
            rounded
          />
        </Col>
      </Row>
      <Row className={`${style.about}`}>
        <Col className={`col-4`}>
          <div className={`${style.about__discription} ${s.component}`}>
            <p className={``}>{data?.getMedicalFacilityById.discription}</p>
          </div>
        </Col>
        <Col className={`col-8 `}>
          <div className={`${style.about__introduce} ${s.component}`}>
            <p className={``}>{data?.getMedicalFacilityById.introduce}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default MedicalFacilityDetailPage;
