import { useEffect, useReducer, useRef } from "react";
import {
  handleChangImage,
  handleChangeForm,
  handleChangeFormWorkSchedule,
  handleChangeStateForm,
  handleSetValidate,
  initState,
  reducer,
} from "./reducer-update";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import {
  UpdatePackageInput,
  EGenderPackage,
  LinkImageInput,
  WorkScheduleInput,
  useGetPackageByIdQuery,
  ScheduleInput,
  useUpdatePackageMutation,
  SessionInput,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { getToken } from "src/utils/contain";
import { uploadFilePromise } from "src/utils/upload";
import { showToast } from "src/components/sub/toasts";
import WorkSchedule from "src/components/WorkSchedule/WorkSchedule";
import ShowAlert from "src/components/sub/alerts";
import { handleSetDataFormUpdate } from "./reducer-update";
import {
  getEnumValueDayOfWeek,
  getEnumValueGenderPackage,
  getEnumValueStateService,
} from "src/utils/getData";
function FormUpdatePackage() {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const logoRef = useRef<HTMLInputElement>(null);
  const { id: idMedical, idPackage } = useParams();
  const token = getToken();
  const { data, loading, error } = useGetPackageByIdQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: idPackage || "",
    },
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [updatePackage] = useUpdatePackageMutation({
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
  useEffect(() => {
    if (data?.getPackageById) {
      const dataUpdate: UpdatePackageInput = {
        ...data.getPackageById,
        gender: getEnumValueGenderPackage(data?.getPackageById.gender),
        workSchedule: {
          ...data?.getPackageById.workSchedule,
          schedule: data.getPackageById.workSchedule.schedule.map((sc) => ({
            ...sc,
            dayOfWeek: getEnumValueDayOfWeek(sc.dayOfWeek),
          })) as ScheduleInput[],
          status: getEnumValueStateService(
            data?.getPackageById.workSchedule.status
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
        const image: LinkImageInput = await uploadFilePromise(
          "image",
          state.imageFile
        );
        const input: UpdatePackageInput = {
          id: state.updatePackage.id,
          medicalFactilitiesId: state.updatePackage.medicalFactilitiesId,
          examinationDetails: state.updatePackage.examinationDetails,
          gender: state.updatePackage.gender,
          image: {
            filename: image.filename,
            type: image.type,
            url: image.url,
          },
          packageName: state.updatePackage.packageName,
          price: state.updatePackage.price,
          workSchedule: {
            dayOff: state.updatePackage.workSchedule.dayOff,
            numberSlot: state.updatePackage.workSchedule.numberSlot,
            schedule: state.updatePackage.workSchedule.schedule.map((sc) => ({
              dayOfWeek: sc.dayOfWeek,
              sessions: sc.sessions.map((ss) => ({
                startTime: ss.startTime,
                endTime: ss.endTime,
              })) as SessionInput[],
            })) as ScheduleInput[],
            status: state.updatePackage.workSchedule.status,
          },
        };
        await updatePackage({
          variables: {
            input: input,
          },
        }).then((res) => {
          showToast("Đã sửa gói khám 👌👌");
          navigate(-1);
        });
        console.log("input: ", input);
      } catch (e: unknown) {
        if (e instanceof Error) {
          showToast("Lỗi: " + e.message, "error");
          console.error(e);
        }
      }
    }
  };
  const handleChangeWorkSchedule = (workSchedule: WorkScheduleInput) => {
    dispatch(handleChangeFormWorkSchedule(workSchedule));
  };
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error || !idPackage) {
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
            <h3 className="text-center text-primary">Sửa gói khám</h3>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Tên gói khám:</Form.Label>
              <Form.Control
                value={state.updatePackage.packageName}
                onChange={(e) => {
                  dispatch(
                    handleChangeForm("packageName", e.currentTarget.value)
                  );
                }}
                required
                type="text"
                placeholder="Nguyễn Quốc Thiện"
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group
                controlId="formFile"
                className="mb-3 d-flex flex-column">
                <Form.Label>Ảnh minh họa</Form.Label>
                <Image
                  onClick={() => {
                    if (logoRef.current) logoRef.current.click();
                  }}
                  height={180}
                  width={320}
                  src={
                    (state.imageFile && URL.createObjectURL(state.imageFile)) ||
                    state.updatePackage.image.url ||
                    "/default.jpg"
                  }
                />
                <Form.Control
                  ref={logoRef}
                  onChange={(e) => {
                    const inputElement = e.target as HTMLInputElement;
                    if (inputElement?.files?.length) {
                      const selectedFile = inputElement.files[0];
                      dispatch(handleChangImage(selectedFile));
                    }
                  }}
                  required
                  type="file"
                  style={{ display: "none" }}
                />
                <Form.Control.Feedback>Chọn ảnh</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupStatus">
                <Form.Label>Đối tượng theo giới tính:</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    dispatch(handleChangeForm("gender", e.target.value));
                  }}
                  defaultValue={EGenderPackage.Both}>
                  <option value={EGenderPackage.Both}>Nam và nữ</option>
                  <option value={EGenderPackage.Male}>Nam</option>
                  <option value={EGenderPackage.Female}> Nữ</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupStatus">
                <Form.Label>Giá khám:</Form.Label>
                <Form.Control
                  value={state.updatePackage.price}
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
                <Form.Label>Thông tin mô tả gói khám:</Form.Label>
                <Form.Control
                  value={state.updatePackage.examinationDetails}
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm(
                        "examinationDetails",
                        e.currentTarget.value
                      )
                    );
                  }}
                  required
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <WorkSchedule
              workSchedule={state.updatePackage.workSchedule}
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
export default FormUpdatePackage;
