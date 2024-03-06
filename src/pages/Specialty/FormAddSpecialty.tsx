import { useEffect, useReducer } from "react";
import {
  handleChangeForm,
  handleChangeFormWorkSchedule,
  handleChangeStateForm,
  handleSetValidate,
  initState,
  reducer,
} from "./reducer";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import {
  WorkScheduleInput,
  useCreateMedicalSpecialtyMutation,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { getToken } from "src/utils/contain";
import { showToast } from "src/components/sub/toasts";
import WorkSchedule from "src/components/WorkSchedule/WorkSchedule";
function FormAddSpecialty() {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const { id: idMedical } = useParams();
  const token = getToken();
  const [createMedicalSpecialty] = useCreateMedicalSpecialtyMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    console.log("ID Medical: ", idMedical);
    if (idMedical) {
      dispatch(handleChangeStateForm(true));
      dispatch(handleChangeForm("medicalFactilityId", idMedical));
    }
  }, [idMedical]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(handleSetValidate(true));
    if (form.checkValidity() === true) {
      try {
        await createMedicalSpecialty({
          variables: {
            input: state.createSpcialty,
          },
        }).then((res) => {
          showToast("Đã thêm chuyên khoa khám 👌👌");
          navigate(-1);
        });
      } catch (e: unknown) {
        if (e instanceof Error) {
          showToast("Lỗi: " + e.message, "error");
        }
      }
    }
  };
  const handleChangeWorkSchedule = (workSchedule: WorkScheduleInput) => {
    dispatch(handleChangeFormWorkSchedule(workSchedule));
  };
  return (
    <Container className={`${s.component}`}>
      <Button
        variant="outline-success"
        size="sm"
        className="mb-2 d-flex align-items-center"
        onClick={() => {
          navigate(-1);
        }}>
        <IoArrowBack />
      </Button>
      <Row>
        <Form noValidate validated={state.validate} onSubmit={handleSubmit}>
          <Row>
            <h3 className="text-center text-primary">Thêm Chuyên Khoa Khám</h3>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupSpecialty">
              <Form.Label>Tên chuyên khoa khám:</Form.Label>
              <Form.Control
                value={state.createSpcialty.name}
                onChange={(e) => {
                  dispatch(handleChangeForm("name", e.currentTarget.value));
                }}
                required
                type="text"
                placeholder="CƠ XƯƠNG KHỚP"
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupPrice">
                <Form.Label>Giá khám:</Form.Label>
                <Form.Control
                  value={state.createSpcialty.price}
                  onChange={(e) => {
                    dispatch(handleChangeForm("price", +e.currentTarget.value));
                  }}
                  required
                  type="number"
                  placeholder="100.000"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Thông tin mô tả chuyên khoa khám:</Form.Label>
                <Form.Control
                  value={state.createSpcialty.discription}
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm("discription", e.currentTarget.value)
                    );
                  }}
                  required
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </Col>
          </Row>
          {state.createSpcialty.workSchedule && (
            <Row>
              <WorkSchedule
                workSchedule={state.createSpcialty.workSchedule}
                setWorkSchedule={handleChangeWorkSchedule}
              />
            </Row>
          )}

          <Row className="mt-3">
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                <IoSaveOutline className="mx-2" />
                Lưu
              </Button>
            </div>
          </Row>
        </Form>
      </Row>
    </Container>
  );
}
export default FormAddSpecialty;
