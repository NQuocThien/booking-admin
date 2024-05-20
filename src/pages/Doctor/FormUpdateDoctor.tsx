import { useEffect, useReducer, useRef, useState } from "react";
import {
  handleChangAvatar,
  handleChangeForm,
  handleChangeOptFacilities,
  handleChangeOptSpecialties,
  handleChangeStateForm,
  handleChangeUser,
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
  UpdateUserAndDoctorInput,
  useGetAllMedicalFacilitySelectLazyQuery,
  useGetDoctorToUpdateByIdQuery,
  useGetMedicalSpecialtiesSelectQuery,
  useGetUserDoctorPendingUpdateQuery,
  useUpdateDoctorMutation,
  useUpdateUserAndDoctorMutation,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { getToken } from "src/utils/contain";
import { uploadImage } from "src/utils/upload";
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
  getSelectedOption,
} from "src/utils/getData";
import WorkScheduleUpdateCpn from "src/components/WorkSchedule/WorkScheduleUpdate";
import StatusCpn from "src/components/sub/Status";
import { useAuth } from "src/context/AuthContext";
import { validatePhoneNumber } from "src/utils/tools";
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
    fetchPolicy: "no-cache",
    variables: {
      input: idDoctor || "",
    },
  });

  useEffect(() => {
    if (dataUpdate?.getDoctorbyId) {
      const data = dataUpdate?.getDoctorbyId;
      const valueEnumDegree = getEnumValueDegree(data.degree);
      var valueEnumAcademicTitle: EAcademicTitle | undefined = undefined;
      if (data.academicTitle) {
        valueEnumAcademicTitle = getEnumValueAcademicTitle(data.academicTitle);
      }
      const valueEnumGender = getEnumValueGender(data.gender);
      const shedules: ScheduleInput[] = data.workSchedule.schedule.map(
        (sc) => ({
          ...sc,
          dayOfWeek: getEnumValueDayOfWeek(sc.dayOfWeek),
          sessions: sc.sessions,
        })
      );
      const dataInput: UpdateDoctorInput = {
        ...data,
        academicTitle: valueEnumAcademicTitle,
        degree: valueEnumDegree,
        gender: valueEnumGender,
        workSchedule: {
          ...data.workSchedule,
          schedule: shedules,
          status: getEnumValueStateService(data.workSchedule.status),
        },
      };
      dispatch(handleSetDataFormUpdate(dataInput));
    }
  }, [dataUpdate?.getDoctorbyId, idDoctor]);
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
  const [getFacility, { data: dataFacilitySelect }] =
    useGetAllMedicalFacilitySelectLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
  const [updateDoctor, { loading: loadingUpdated }] = useUpdateDoctorMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [updateUserAndDoctor, { loading: loadingUpdatedUserAndDoctor }] =
    useUpdateUserAndDoctorMutation({
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
      const username = dataUsers.getUserDoctorPendingUpdate.find(
        (item) => item.id === state.updateDoctor.userId
      )?.username;
      dispatch(
        handleChangeUser({
          ...state.updateUser,
          username: username || state.updateUser.username,
        })
      );
      setOptUser(options);
    }
  }, [dataUsers]);
  useEffect(() => {
    if (idMedical) {
      dispatch(handleChangeStateForm(true));
      dispatch(handleChangeForm("medicalFactilitiesId", idMedical));
    } else {
      // nếu không có sẵng Id
      getFacility();
    }
  }, [idMedical]);
  useEffect(() => {
    if (dataSpecialtiesSelect) {
      const optSpecialties: IOption[] =
        dataSpecialtiesSelect.getMedicalSpecialtiesByMedicalFacilityId.map(
          (item) => ({
            label: item.specialtyName,
            value: item.id,
          })
        );
      dispatch(handleChangeOptSpecialties(optSpecialties));
    }
    if (dataFacilitySelect) {
      const optFacility: IOption[] =
        dataFacilitySelect.getAllMedicalFacility.map((item) => ({
          label: item.medicalFacilityName,
          value: item.id,
        }));
      dispatch(handleChangeOptFacilities(optFacility));
    }
  }, [dataSpecialtiesSelect, dataFacilitySelect]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    checkExpirationToken();
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(handleSetValidate(true));
    if (form.checkValidity() === true) {
      try {
        let avatar: LinkImageInput = state.updateDoctor.avatar;
        if (state.avatarFile) {
          avatar = await uploadImage(state.avatarFile, "doctors");
        }
        const input: UpdateDoctorInput = {
          id: state.updateDoctor.id,
          doctorName: state.updateDoctor.doctorName,
          degree: state.updateDoctor.degree,
          discription: state.updateDoctor.discription,
          email: state.updateDoctor.email,
          gender: state.updateDoctor.gender,
          avatar: {
            filename: avatar.filename,
            type: avatar.type,
            url: avatar.url,
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
        if (state.formMedical) {
          const inputUserAndDoctor: UpdateUserAndDoctorInput = {
            ...input,
            username: state.updateUser.username,
            password: state.updateUser.password,
          };
          await updateUserAndDoctor({
            variables: {
              input: inputUserAndDoctor,
            },
          }).then((res) => {
            showToast("Đã sửa thông tin  👌👌");
            navigate(-1);
          });
        } else {
          await updateDoctor({
            variables: {
              input: input,
            },
          }).then((res) => {
            showToast("Đã sửa thông tin  👌👌");
            navigate(-1);
          });
        }
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
          {!state.formMedical && (
            <Row>
              <Form.Group className="mb-3" controlId="formGroupNameDoctor">
                <Form.Label>Chọn cơ sở y tế:</Form.Label>

                <Select
                  value={getSelectedOption(
                    state.updateDoctor.medicalFactilitiesId,
                    state.optionsFacilities
                  )}
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm("medicalFactilitiesId", e?.value)
                    );
                  }}
                  options={state.optionsFacilities}
                />
              </Form.Group>
            </Row>
          )}
          <Row>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Tên bác sĩ:</Form.Label>
              <Form.Control
                value={state.updateDoctor.doctorName}
                onChange={(e) => {
                  dispatch(
                    handleChangeForm("doctorName", e.currentTarget.value)
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
                  onBlur={(e) => {
                    if (!validatePhoneNumber(state.updateDoctor.numberPhone)) {
                      alert("Số điện thoại không hợp lệ");
                      dispatch(handleChangeForm("numberPhone", ""));
                    }
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
                  value={EStatusService.Open}>
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
                  value={undefined}>
                  <option>Chọn học hàm</option>
                  <option value={EAcademicTitle.Professor}>Giáo sư</option>
                  <option value={EAcademicTitle.AssociateProfesso}>
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
                  value={EDegree.Doctor}>
                  <option value={EDegree.Doctor}>Bác sĩ</option>
                  <option value={EDegree.DoctorS1}>Bác sĩ chuyên khoa 1</option>

                  <option value={EDegree.DoctorS2}>Bác sĩ chuyên khoa 2</option>
                  <option value={EDegree.Doctorate}>Thạc sĩ bác sĩ</option>
                  <option value={EDegree.MasterDoctor}>Tiến sĩ bác sĩ</option>
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
                  min={0}
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
          {!state.formMedical && (
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGroupUser">
                  <Form.Label>
                    Chọn tài khoản:{" "}
                    <StatusCpn loading={loading} error={error} />
                  </Form.Label>
                  <Select
                    required
                    value={optUsers.find(
                      (item) => item.value === state.updateDoctor.userId
                    )}
                    onChange={(e) => {
                      dispatch(handleChangeForm("userId", e?.value));
                    }}
                    options={optUsers}
                  />
                </Form.Group>
              </Col>
            </Row>
          )}
          {state.formMedical && (
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Tên tài khoản:</Form.Label>
                  <Form.Control value={state.updateUser.username} required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Mật khẩu:</Form.Label>
                  <Form.Control
                    value={state.updateUser.password}
                    onChange={(e) => {
                      const value = e.currentTarget.value;
                      dispatch(
                        handleChangeUser({
                          ...state.updateUser,
                          password: value,
                        })
                      );
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
          )}
          <Row>
            <WorkScheduleUpdateCpn state={state} dispatch={dispatch} />
          </Row>

          <Row className="mt-3">
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                <IoSaveOutline className="mx-2" />
                Lưu
                {(loadingUpdated || loadingUpdatedUserAndDoctor) && (
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
