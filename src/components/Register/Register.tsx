import { Col, Container, Row } from "react-bootstrap";
import TypeOfServive from "./TypeOfService";
import { useEffect, useState } from "react";
import { Register } from "src/graphql/webbooking-service.generated";
import { EtypeService } from "src/utils/enum";

interface IProps {
  facilityId: string;
}

function Register() {
  const [regisType, setRegisType] = useState<EtypeService>();
  useEffect(() => {}, []);
  return (
    <Container>
      <Row>
        <Col lg={4} md={4}></Col>
        <Col lg={8} md={8}>
          {!regisType && <TypeOfServive />}
        </Col>
      </Row>
    </Container>
  );
}
export default Register;
