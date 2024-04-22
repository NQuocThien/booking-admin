import { useEffect, useReducer } from "react";
import {
  handleChangeForm,
  handleChangeFormWorkSchedule,
  handleChangeStateForm,
  handleSetDataFormUpdate,
  handleSetValidate,
  initState,
  reducer,
} from "./reducer-update";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import {
  ScheduleInput,
  SessionInput,
  UpdateMedicalSpecialtyInput,
  WorkScheduleInput,
  useGetMedicalSpecialtyByIdQuery,
  useUpdateMedicalSpecialtyMutation,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { getToken } from "src/utils/contain";
import { showToast } from "src/components/sub/toasts";
import WorkSchedule from "src/components/WorkSchedule/WorkSchedule";
import {
  getEnumValueDayOfWeek,
  getEnumValueStateService,
} from "src/utils/getData";
import ShowAlert from "src/components/sub/alerts";
function FormUpdateSpecialty() {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const { id: idMedical, idSpecialty } = useParams();
  const token = getToken();
  const { data, loading, error } = useGetMedicalSpecialtyByIdQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      input: idSpecialty || "",
    },
  });

  const [updateMedicalSpecialty] = useUpdateMedicalSpecialtyMutation({
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
      dispatch(handleChangeForm("medicalFactilityId", idMedical));
      dispatch(handleChangeForm("id", idSpecialty));
    }
  }, [idMedical, idSpecialty]);
  useEffect(() => {
    if (data?.getMedicalSpecialtyById.workSchedule) {
      const dataUpdate: UpdateMedicalSpecialtyInput = {
        ...data.getMedicalSpecialtyById,
        workSchedule: {
          ...data?.getMedicalSpecialtyById.workSchedule,
          schedule: data?.getMedicalSpecialtyById.workSchedule.schedule.map(
            (sc) => ({
              ...sc,
              dayOfWeek: getEnumValueDayOfWeek(sc.dayOfWeek),
            })
          ) as ScheduleInput[],
          status: getEnumValueStateService(
            data?.getMedicalSpecialtyById.workSchedule.status
          ),
        },
      };
      dispatch(handleSetDataFormUpdate(dataUpdate));
    }
  }, [data]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(handleSetValidate(true));

    if (form.checkValidity() === true) {
      try {
        var workSchedule: WorkScheduleInput | undefined = undefined;
        if (state.updateSpecialty.workSchedule) {
          workSchedule = {
            dayOff: state.updateSpecialty.workSchedule.dayOff,
            numberSlot: state.updateSpecialty.workSchedule.numberSlot,
            schedule: state.updateSpecialty.workSchedule.schedule.map((sc) => ({
              dayOfWeek: sc.dayOfWeek,
              sessions: sc.sessions.map((ss) => ({
                startTime: ss.startTime,
                endTime: ss.endTime,
              })) as SessionInput[],
            })) as ScheduleInput[],
            status: state.updateSpecialty.workSchedule.status,
          };
        }
        const dataInput: UpdateMedicalSpecialtyInput = {
          id: state.updateSpecialty.id,
          specialtyName: state.updateSpecialty.specialtyName,
          discription: state.updateSpecialty.discription,
          medicalFactilityId: state.updateSpecialty.medicalFactilityId,
          price: state.updateSpecialty.price,
          workSchedule: workSchedule,
        };
        await updateMedicalSpecialty({
          variables: {
            input: dataInput,
          },
        }).then((res) => {
          showToast("Đã sửa chuyên khoa khám 👌👌");
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
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !idSpecialty) {
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
            <h3 className="text-center text-primary">Sửa Chuyên Khoa Khám</h3>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupSpecialty">
              <Form.Label>Tên chuyên khoa khám:</Form.Label>
              <Form.Control
                value={state.updateSpecialty.specialtyName}
                onChange={(e) => {
                  dispatch(
                    handleChangeForm("specialtyName", e.currentTarget.value)
                  );
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
                  value={state.updateSpecialty.price}
                  onChange={(e) => {
                    dispatch(handleChangeForm("price", +e.currentTarget.value));
                  }}
                  required
                  type="number"
                  min={0}
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
                  value={state.updateSpecialty.discription}
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
          {state.updateSpecialty.workSchedule && (
            <Row>
              <WorkSchedule
                workSchedule={state.updateSpecialty.workSchedule}
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
export default FormUpdateSpecialty;
