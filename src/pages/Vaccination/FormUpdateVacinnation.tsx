import { useEffect, useReducer } from "react";
import {
  handleChangeForm,
  handleChangeFormWorkSchedule,
  handleChangeStateForm,
  handleSetDataUpdateForm,
  handleSetValidate,
  initState,
  reducer,
} from "./reducer-update";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import {
  Exception,
  ExceptionInput,
  ScheduleInput,
  SessionInput,
  UpdateVaccineInput,
  WorkScheduleInput,
  useGetVaccineByIdQuery,
  useUpdateVaccinationMutation,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { getToken } from "src/utils/contain";
import { showToast } from "src/components/sub/toasts";
import WorkSchedule from "src/components/WorkSchedule/WorkSchedule";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ShowAlert from "src/components/sub/alerts";
import {
  getEnumValueDayOfWeek,
  getEnumValueStateService,
} from "src/utils/getData";
function FormUpdateVaccination() {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const { id: idMedical, idVaccine } = useParams();
  const token = getToken();
  const [updateVaccine] = useUpdateVaccinationMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (idMedical) {
      dispatch(handleChangeStateForm(true));
      dispatch(handleChangeForm("medicalFactilitiesId", idMedical));
    }
  }, [idMedical]);

  const { data, loading, error } = useGetVaccineByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: idVaccine ? idVaccine : "",
    },
  });
  useEffect(() => {
    if (data?.getVaccineById) {
      const dataUpdate: UpdateVaccineInput = {
        ...data.getVaccineById,
        workSchedule: {
          ...data?.getVaccineById.workSchedule,
          schedule: data.getVaccineById.workSchedule.schedule.map((sc) => ({
            ...sc,
            dayOfWeek: getEnumValueDayOfWeek(sc.dayOfWeek),
          })) as ScheduleInput[],
          status: getEnumValueStateService(
            data?.getVaccineById.workSchedule.status
          ),
        },
      };
      dispatch(handleSetDataUpdateForm(dataUpdate));
    }
  }, [data]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(handleSetValidate(true));
    if (form.checkValidity() === true) {
      try {
        const input: UpdateVaccineInput = {
          id: state.updateVaccine.id,
          countryOfOrigin: state.updateVaccine.countryOfOrigin,
          indication: state.updateVaccine.indication,
          medicalFactilitiesId: state.updateVaccine.medicalFactilitiesId,
          note: state.updateVaccine.note,
          price: state.updateVaccine.price,
          prophylactic: state.updateVaccine.prophylactic,
          vaccineName: state.updateVaccine.vaccineName,
          workSchedule: {
            dayOff: state.updateVaccine.workSchedule.dayOff,
            numberSlot: state.updateVaccine.workSchedule.numberSlot,
            schedule: state.updateVaccine.workSchedule.schedule.map((sc) => ({
              dayOfWeek: sc.dayOfWeek,
              sessions: sc.sessions.map((ss) => ({
                startTime: ss.startTime,
                endTime: ss.endTime,
                exceptions: ss.exceptions?.map(
                  (e) =>
                    ({
                      dates: e.dates,
                      open: e.open,
                      numbeSlot: e.numbeSlot,
                    } as ExceptionInput)
                ),
              })) as SessionInput[],
            })) as ScheduleInput[],
            status: state.updateVaccine.workSchedule.status,
          },
        };
        await updateVaccine({
          variables: {
            input: input,
          },
        })
          .then((res) => {
            showToast("Đã sửa vaccine 👌👌");
            navigate(-1);
          })
          .catch((e) => {
            showToast("Lỗi: " + e.status, "error");
            console.error(e);
          });
      } catch (e: unknown) {
        if (e instanceof Error) {
          showToast("Lỗi: " + e.message, "error");
          console.log(e);
        }
      }
    }
  };
  const handleChangeWorkSchedule = (workSchedule: WorkScheduleInput) => {
    dispatch(handleChangeFormWorkSchedule(workSchedule));
  };
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !idVaccine) {
    console.log(error);
    return <ShowAlert />;
  }
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
            <h3 className="text-center text-primary">Sửa Vaccine </h3>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupVaccineName">
              <Form.Label>Tên vaccine:</Form.Label>
              <Form.Control
                value={state.updateVaccine.vaccineName}
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
                  value={state.updateVaccine.countryOfOrigin}
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
                  value={state.updateVaccine.price}
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
                value={state.updateVaccine.prophylactic}
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
                data={state.updateVaccine.indication}
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
                value={state.updateVaccine.note}
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
              workSchedule={state.updateVaccine.workSchedule}
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
export default FormUpdateVaccination;
