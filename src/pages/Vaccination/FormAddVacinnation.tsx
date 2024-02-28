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
  CreateVaccineInput,
  WorkScheduleInput,
  useCreateVaccinationMutation,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { getToken } from "src/utils/contain";
import { showToast } from "src/components/sub/toasts";
import WorkSchedule from "src/components/WorkSchedule/WorkSchedule";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function FormAddVaccination() {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const { id: idMedical } = useParams();
  const token = getToken();
  const [createVaccine] = useCreateVaccinationMutation({
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
      dispatch(handleChangeForm("medicalFactilitiesId", idMedical));
    }
  }, [idMedical]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(handleSetValidate(true));
    if (form.checkValidity() === true) {
      try {
        const input: CreateVaccineInput = {
          ...state.createVaccine,
        };
        console.log("test input: ", input);
        await createVaccine({
          variables: {
            input: input,
          },
        }).then((res) => {
          showToast("Đã thêm vaccine 👌👌");
          navigate(-1);
        });
        console.log("input: ", input);
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
            <h3 className="text-center text-primary">Thêm Vaccine </h3>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupVaccineName">
              <Form.Label>Tên vaccine:</Form.Label>
              <Form.Control
                value={state.createVaccine.vaccineName}
                onChange={(e) => {
                  dispatch(
                    handleChangeForm("vaccineName", e.currentTarget.value)
                  );
                }}
                required
                type="text"
                placeholder="INFANRIX-HEXA (6 trong 1)"
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupContry">
                <Form.Label>Nước sản xuất:</Form.Label>
                <Form.Control
                  value={state.createVaccine.countryOfOrigin}
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm("countryOfOrigin", e.currentTarget.value)
                    );
                  }}
                  required
                  type="text"
                  placeholder="Đức"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupStatus">
                <Form.Label>Giá vaccine:</Form.Label>
                <Form.Control
                  value={state.createVaccine.price}
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
            <Form.Group className="mb-3" controlId="FormGroupProphylactic">
              <Form.Label>Phòng bệnh:</Form.Label>
              <Form.Control
                value={state.createVaccine.prophylactic}
                onChange={(e) => {
                  dispatch(
                    handleChangeForm("prophylactic", e.currentTarget.value)
                  );
                }}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Chỉ định:</Form.Label>
              <CKEditor
                editor={ClassicEditor}
                onChange={(e, editor) => {
                  dispatch(handleChangeForm("indication", editor.getData()));
                }}
                data={state.createVaccine.indication}
                config={{
                  placeholder: "Nhập mô tả thông tin chỉ định về vaccine",
                }}
              />
              <style>{`
              .ck-editor__editable_inline {
                height: 260px;
              }
            `}</style>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Ghi chú:</Form.Label>
              <Form.Control
                value={state.createVaccine.note}
                onChange={(e) => {
                  dispatch(handleChangeForm("note", e.currentTarget.value));
                }}
                required
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Row>
          <Row>
            <WorkSchedule
              workSchedule={state.createVaccine.workSchedule}
              setWorkSchedule={handleChangeWorkSchedule}
            />
          </Row>

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
export default FormAddVaccination;
