import { getToken } from "src/utils/contain";
import { Container, Row, Image, Col, Spinner } from "react-bootstrap";
import {
  useGetDoctorByUserIdQuery,
  useUpdateClinicMutation,
} from "src/graphql/webbooking-service.generated";
import { useAuth } from "src/context/AuthContext";
import ShowAlert from "src/components/toasts/alerts";
import { Evariant } from "src/assets/contains/component-enum";
import { Link } from "react-router-dom";
interface IFindAction {
  address: string | undefined;
  save: boolean;
}
const DoctorDetailPages: React.FC = () => {
  const token = getToken();
  const { checkExpirationToken, userInfor } = useAuth();
  const userId: string = userInfor?.id || "";
  checkExpirationToken();

  const { refetch, data, loading, error } = useGetDoctorByUserIdQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: { input: userId },
  });

  const [updateClinic] = useUpdateClinicMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  //   console.log("data", data);

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return (
      <ShowAlert
        head="Bạn chưa tạo thông tin về CYST "
        content="Vui lòng liên hệ ban quản trị để thêm thông tin CSYT"
        bottom="Thông tin liên hệ: Nguyễn Quốc Thiện -- 0789624614"
        variant={Evariant.info}
      />
    );
  }

  return (
    <Container>
      {data?.getDoctorbyUserId && (
        <>
          <Row>
            <Col lg={6}>
              <Image
                width={"100%"}
                height={"200px"}
                src={data.getDoctorbyUserId.avatar.url}
                rounded
              />
            </Col>
            <Col>
              <h4>
                {data.getDoctorbyUserId.degree?.abbreviations}.
                {data.getDoctorbyUserId.name}
              </h4>
              <p>Số điện thoại:{data.getDoctorbyUserId.numberPhone}</p>
              <p>Email:{data.getDoctorbyUserId.email}</p>
              <p>Đánh giá: {data.getDoctorbyUserId.evaluate}</p>
              <p>Học vị: {data.getDoctorbyUserId.degree?.name}</p>
              <p>
                Chuyên khoa: {data.getDoctorbyUserId.medicalSpecialties?.name}
              </p>
            </Col>
          </Row>
          <Row>
            <Link
              className="btn btn-outline-warning"
              to={`/update/doctor/${data.getDoctorbyUserId.id}`}>
              Sửa thông tin bác sĩ
            </Link>
            {/* <Button variant="primary" onClick={handleUpdate}>
              Sửa Thông Tin CYST
            </Button> */}
          </Row>
        </>
      )}
    </Container>
  );
};
export default DoctorDetailPages;
