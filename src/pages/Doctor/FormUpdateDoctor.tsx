import { useEffect, useReducer, useRef, useState } from "react";
import {
  handleChangAvatar,
  handleChangeForm,
  handleChangeOptSpecialties,
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
  EAcademicTitle,
  EDegree,
  EGender,
  EStatusService,
  LinkImageInput,
  ScheduleInput,
  UpdateDoctorInput,
  useGetDoctorToUpdateByIdQuery,
  useGetMedicalSpecialtiesSelectQuery,
  useGetUserDoctorPendingQuery,
  useGetUserDoctorPendingUpdateQuery,
  useUpdateDoctorMutation,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { getToken } from "src/utils/contain";
import { uploadFilePromise } from "src/utils/upload";
import { showToast } from "src/components/sub/toasts";
import { IOption, handleSetDataFormUpdate } from "./reducer-update";
import Select from "react-select";
import ShowAlert from "src/components/sub/alerts";
import {
  getEnumValueAcademicTitle,
  getEnumValueDayOfWeek,
  getEnumValueDegree,
  getEnumValueGender,
  getEnumValueStateService,
} from "src/utils/getData";
import WorkScheduleUpdateCpn from "src/components/WorkSchedule/WorkScheduleUpdate";
import StatusCpn from "src/components/sub/Status";
import { useAuth } from "src/context/AuthContext";
function FormUpdateDoctor() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { checkExpirationToken } = useAuth();
  const navigate = useNavigate();
  const logoRef = useRef<HTMLInputElement>(null);
  const { id: idMedical, idDoctor } = useParams();
  const {
    data: dataUpdate,
    loading: loadingDataUpdate,
    error: errorDataUpdate,
  } = useGetDoctorToUpdateByIdQuery({
    fetchPolicy: "network-only",
    variables: {
      input: idDoctor || "",
    },
  });
  useEffect(() => {
    if (dataUpdate?.getDoctorbyId && dataUpdate.getDoctorbyId.academicTitle) {
      const valueEnumDegree = getEnumValueDegree(
        dataUpdate.getDoctorbyId.degree
      );
      const valueEnumAcademicTitle = getEnumValueAcademicTitle(
        dataUpdate.getDoctorbyId.academicTitle
      );
      const valueEnumGender = getEnumValueGender(
        dataUpdate.getDoctorbyId.gender
      );
      const shedules: ScheduleInput[] =
        dataUpdate.getDoctorbyId.workSchedule.schedule.map((sc) => ({
          ...sc,
          dayOfWeek: getEnumValueDayOfWeek(sc.dayOfWeek),
          sessions: sc.sessions,
        }));
      const dataInput: UpdateDoctorInput = {
        ...dataUpdate.getDoctorbyId,
        academicTitle: valueEnumAcademicTitle,
        degree: valueEnumDegree,
        gender: valueEnumGender,
        workSchedule: {
          ...dataUpdate.getDoctorbyId.workSchedule,
          schedule: shedules,
          status: getEnumValueStateService(
            dataUpdate.getDoctorbyId.workSchedule.status
          ),
        },
      };
      dispatch(handleSetDataFormUpdate(dataInput));
    }
  }, [dataUpdate, idDoctor]);
  const token = getToken();
  const {
    data: dataSpecialtiesSelect,
    loading: loadingSpecialtiesSelect,
    error: errorSpecialtiesSelect,
  } = useGetMedicalSpecialtiesSelectQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: idMedical || "",
    },
  });
  const {
    data: dataUsers,
    loading,
    error,
  } = useGetUserDoctorPendingUpdateQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: idDoctor || "",
    },
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [updateDoctor, { data: dataUpdated, loading: loadingUpdated }] =
    useUpdateDoctorMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const [optUsers, setOptUser] = useState<IOption[]>([
    {
      value: "",
      label: "",
    },
  ]);
  useEffect(() => {
    if (dataUsers?.getUserDoctorPendingUpdate) {
      const options: IOption[] = dataUsers?.getUserDoctorPendingUpdate.map(
        (user) => ({
          value: user.id,
          label: user.username,
        })
      );
      setOptUser(options);
    }
  }, [dataUsers]);
  useEffect(() => {
    // console.log("ID Medical: ", idMedical);
    if (idMedical) {
      dispatch(handleChangeStateForm(true));
      dispatch(handleChangeForm("medicalFactilitiesId", idMedical));
    }
  }, [idMedical]);
  useEffect(() => {
    if (dataSpecialtiesSelect) {
      const optSpecialties: IOption[] =
        dataSpecialtiesSelect.getMecialSpecialtiesByMedicalFacilityId.map(
          (item) => ({
            label: item.name,
            value: item.id,
          })
        );
      dispatch(handleChangeOptSpecialties(optSpecialties));
    }
  }, [dataSpecialtiesSelect]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    checkExpirationToken();
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(handleSetValidate(true));
    if (form.checkValidity() === true) {
      try {
        // console.log("test input ");
        let avatar: LinkImageInput = state.updateDoctor.avatar;
        if (state.avatarFile) {
          avatar = await uploadFilePromise("image", state.avatarFile);
        }

        const cloneDate: UpdateDoctorInput = {
          ...state.updateDoctor,
          avatar: avatar,
        };
        const input: UpdateDoctorInput = {
          id: state.updateDoctor.id,
          name: state.updateDoctor.name,
          degree: state.updateDoctor.degree,
          discription: state.updateDoctor.discription,
          email: state.updateDoctor.email,
          gender: state.updateDoctor.gender,
          avatar: {
            filename: state.updateDoctor.avatar.filename,
            type: state.updateDoctor.avatar.type,
            url: state.updateDoctor.avatar.url,
          },
          medicalFactilitiesId: state.updateDoctor.medicalFactilitiesId,
          numberPhone: state.updateDoctor.numberPhone,
          price: state.updateDoctor.price,
          specialistId: state.updateDoctor.specialistId,
          userId: state.updateDoctor.userId,
          workSchedule: {
            dayOff: state.updateDoctor.workSchedule.dayOff,
            numberSlot: state.updateDoctor.workSchedule.numberSlot,
            status: state.updateDoctor.workSchedule.status,
            schedule: state.updateDoctor.workSchedule.schedule.map((sc) => ({
              dayOfWeek: sc.dayOfWeek,
              sessions: sc.sessions.map((ss) => ({
                startTime: ss.startTime,
                endTime: ss.endTime,
              })),
            })),
          },
          academicTitle: state.updateDoctor.academicTitle,
        };

        await updateDoctor({
          variables: {
            input: input,
          },
        }).then((res) => {
          showToast("Đã sửa thông tin  👌👌");
          navigate(-1);
        });
        // console.log("input: ", input);
      } catch (e: unknown) {
        if (e instanceof Error) {
          showToast("Lỗi: " + e.message, "error");
          console.error(e);
        }
      }
    }
  };
  if (loadingDataUpdate)
    return <Spinner animation="border" variant="primary" />;
  if (errorDataUpdate || !idDoctor) {
    console.log(error);
    return <ShowAlert />;
  }
  // console.log("select ", state.optionsSpecialties[0]);
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
            <h3 className="text-center text-primary">Sửa thông tin bác sĩ</h3>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Tên bác sĩ:</Form.Label>
              <Form.Control
                value={state.updateDoctor.name}
                onChange={(e) => {
                  dispatch(handleChangeForm("name", e.currentTarget.value));
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
                <Form.Label>Ảnh đại diện</Form.Label>
                <Image
                  onClick={() => {
                    if (logoRef.current) logoRef.current.click();
                  }}
                  height={180}
                  width={180}
                  src={
                    (state.avatarFile &&
                      URL.createObjectURL(state.avatarFile)) ||
                    state.updateDoctor.avatar.url ||
                    "/default.jpg"
                  }
                />
                <Form.Control
                  ref={logoRef}
                  onChange={(e) => {
                    const inputElement = e.target as HTMLInputElement;
                    if (inputElement?.files?.length) {
                      const selectedFile = inputElement.files[0];
                      dispatch(handleChangAvatar(selectedFile));
                    }
                  }}
                  type="file"
                  style={{ display: "none" }}
                />
                <Form.Control.Feedback>Chọn ảnh</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    dispatch(handleChangeForm("email", e.currentTarget.value));
                  }}
                  value={state.updateDoctor.email}
                  required
                  type="email"
                  placeholder="bsquocthien@gmail.com"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupNumberPhone">
                <Form.Label>Số điện thoại:</Form.Label>
                <Form.Control
                  value={state.updateDoctor.numberPhone}
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm("numberPhone", e.currentTarget.value)
                    );
                  }}
                  required
                  type="text"
                  placeholder="0789624614"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupStatus">
                <Form.Label>Giới tính:</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    dispatch(handleChangeForm("gender", e.target.value));
                  }}
                  defaultValue={EStatusService.Open}>
                  <option
                    // selected={state.updateDoctor.gender === EGender.Male}
                    value={EGender.Male}>
                    Nam
                  </option>
                  <option
                    // selected={state.updateDoctor.gender === EGender.Female}
                    value={EGender.Female}>
                    {" "}
                    Nữ
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupStatus">
                <Form.Label>Học hàm:</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    dispatch(handleChangeForm("academicTitle", e.target.value));
                  }}
                  defaultValue={undefined}>
                  <option>Chọn học hàm</option>
                  <option
                    // selected={
                    //   state.updateDoctor.academicTitle ===
                    //   EAcademicTitle.Professor
                    // }
                    value={EAcademicTitle.Professor}>
                    Giáo sư
                  </option>
                  <option
                    // selected={
                    //   state.updateDoctor.academicTitle ===
                    //   EAcademicTitle.AssociateProfesso
                    // }
                    value={EAcademicTitle.AssociateProfesso}>
                    Phó giáo sư
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupStatus">
                <Form.Label>Học vị:</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    dispatch(handleChangeForm("degree", e.target.value));
                  }}
                  defaultValue={EDegree.Doctor}>
                  <option
                    // selected={state.updateDoctor.degree === EDegree.Doctor}
                    value={EDegree.Doctor}>
                    Bác sĩ
                  </option>
                  <option
                    // selected={state.updateDoctor.degree === EDegree.DoctorS1}
                    value={EDegree.DoctorS1}>
                    Bác sĩ chuyên khoa 1
                  </option>

                  <option
                    // selected={state.updateDoctor.degree === EDegree.DoctorS2}
                    value={EDegree.DoctorS2}>
                    Bác sĩ chuyên khoa 2
                  </option>
                  <option
                    // selected={state.updateDoctor.degree === EDegree.Doctorate}
                    value={EDegree.Doctorate}>
                    Thạc sĩ bác sĩ
                  </option>
                  <option
                    // selected={
                    //   state.updateDoctor.degree === EDegree.MasterDoctor
                    // }
                    value={EDegree.MasterDoctor}>
                    Tiến sĩ bác sĩ
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupStatus">
                <Form.Label>Giá khám:</Form.Label>
                <Form.Control
                  value={state.updateDoctor.price}
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
            {state.formMedical && (
              <Col>
                <Form.Group className="mb-3" controlId="formGroupStatus">
                  <Form.Label>
                    Chuyên khoa{" "}
                    <StatusCpn
                      loading={loadingSpecialtiesSelect}
                      error={errorSpecialtiesSelect}
                    />
                  </Form.Label>
                  <Select
                    value={
                      state.optionsSpecialties.find(
                        (item) => item.value === state.updateDoctor.specialistId
                      ) || null
                    }
                    onChange={(selectedOption) => {
                      // Sử dụng selectedOption để lấy giá trị đã chọn
                      const selectedValue = selectedOption?.value;
                      dispatch(handleChangeForm("specialistId", selectedValue));
                    }}
                    options={state.optionsSpecialties}
                  />
                </Form.Group>
              </Col>
            )}
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mô tả:</Form.Label>
                <Form.Control
                  value={state.updateDoctor.discription}
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
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupUser">
                <Form.Label>
                  Chọn tài khoản:{" "}
                  {loading && (
                    <Spinner animation="border" variant="primary" size="sm" />
                  )}
                </Form.Label>
                <Select
                  value={optUsers.find(
                    (item) => item.value === state.updateDoctor.userId || null
                  )}
                  onChange={(e) => {
                    dispatch(handleChangeForm("userId", e?.value));
                  }}
                  options={optUsers}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <WorkScheduleUpdateCpn state={state} dispatch={dispatch} />
          </Row>

          <Row className="mt-3">
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                <IoSaveOutline className="mx-2" />
                Lưu
                {loadingUpdated && (
                  <Spinner animation="border" variant="light" size="sm" />
                )}
              </Button>
            </div>
          </Row>
        </Form>
      </Row>
    </Container>
  );
}
export default FormUpdateDoctor;
