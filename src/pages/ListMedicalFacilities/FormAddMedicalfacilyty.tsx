import { useReducer } from "react";
import { initState, reducer } from "./reducer";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
function FormAddMedicalFacility() {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  return (
    <Container>
      <Button
        variant="outline-success"
        size="sm"
        className="mb-2 d-flex align-items-center"
        onClick={() => {
          navigate(-1);
        }}>
        <IoArrowBack />
      </Button>
    </Container>
  );
}
export default FormAddMedicalFacility;
