import { Container, Row, Image, Col } from "react-bootstrap";

const ClinicDetailPage: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image src="holder.js/171x180" rounded />
        </Col>
        <Col>
          <h4>Tên</h4>
          <p>Số điện thoại:</p>
          <p>Email:</p>
        </Col>
      </Row>
      <Row>// bản đồ</Row>
      <Row>// mô tả</Row>
      <Row>// danh sách bs</Row>
    </Container>
  );
};
export default ClinicDetailPage;
