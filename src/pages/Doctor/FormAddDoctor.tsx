import { useEffect, useReducer, useRef, useState } from "react";
import {
  handleChangAvatar,
  handleChangeForm,
  handleChangeFormWorkSchedule,
  handleChangeOptFacilities,
  handleChangeOptSpecialties,
  handleChangeStateForm,
  handleSetValidate,
  initState,
  reducer,
} from "./reducer";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import {
  CreateDoctorInput,
  EAcademicTitle,
  EDegree,
  EGender,
  EStatusService,
  LinkImageInput,
  WorkScheduleInput,
  useCreateDoctorMutation,
  useGetAllMedicalFacilitySelectLazyQuery,
  useGetMedicalSpecialtiesSelectQuery,
  useGetUserDoctorPendingQuery,
} from "src/graphql/webbooking-service.generated";
import Select from "react-select";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { getToken } from "src/utils/contain";
import { uploadImage } from "src/utils/upload";
import { showToast } from "src/components/sub/toasts";
import { IOption } from "./reducer";
import WorkSchedule from "src/components/WorkSchedule/WorkSchedule";
import StatusCpn from "src/components/sub/Status";
function FormAddDoctor() {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const logoRef = useRef<HTMLInputElement>(null);
  const { id: idMedical } = useParams();
  const token = getToken();
  const {
    data: dataSpecialtiesSelect,
    loading: loadingSpecialtiesSelect,
    error: errorSpecialtiesSelect,
  } = useGetMedicalSpecialtiesSelectQuery({
    fetchPolicy: "no-cache",
    variables: {
      input: state.createDoctor.medicalFactilitiesId || "",
    },
  });
  const {
    data: dataUsers,
    loading: loadingUsers,
    error: errorUsers,
  } = useGetUserDoctorPendingQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [createDoctor] = useCreateDoctorMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [optUsers, setOptUser] = useState([
    {
      value: "",
      label: "",
    },
  ]);

  const [
    getFacility,
    {
      data: dataFacilitySelect,
      loading: loadingFacilitySelect,
      error: errorFacilitySelect,
    },
  ] = useGetAllMedicalFacilitySelectLazyQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (dataUsers?.getUserDoctorPending) {
      const options = dataUsers?.getUserDoctorPending.map((user) => ({
        value: user.id,
        label: user.username,
      }));
      setOptUser(options);
    }
  }, [dataUsers]);
  useEffect(() => {
    if (idMedical) {
      dispatch(handleChangeStateForm(true));
      dispatch(handleChangeForm("medicalFactilitiesId", idMedical));
    } else {
      getFacility();
    }
  }, []);

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
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(handleSetValidate(true));
    if (form.checkValidity() === true) {
      try {
        const avatar: LinkImageInput = await uploadImage(
          state.avatarFile,
          "doctors"
        );
        const input: CreateDoctorInput = {
          ...state.createDoctor,
          avatar: avatar,
        };
        await createDoctor({
          variables: {
            input: input,
          },
        }).then((res) => {
          showToast("Đã thêm Bác Sĩ 👌👌");
          navigate(-1);
        });
      } catch (e: unknown) {
        if (e instanceof Error) {
          showToast("Lỗi: " + e.message, "error");
        }
      }
    }
  };
  const hanldeSetWorkSchedule = (workSchedule: WorkScheduleInput) => {
    dispatch(handleChangeFormWorkSchedule(workSchedule));
  };
  if (loadingFacilitySelect || errorFacilitySelect) {
    return (
      <StatusCpn error={errorFacilitySelect} loading={loadingFacilitySelect} />
    );
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
            <h3 className="text-center text-primary">Thêm bác sĩ</h3>
          </Row>
          {!state.formMedical && (
            <Row>
              <Form.Group className="mb-3" controlId="formGroupNameDoctor">
                <Form.Label>Chọn cơ sở y tế:</Form.Label>

                <Select
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
            <Form.Group className="mb-3" controlId="formGroupNameDoctor">
              <Form.Label>Tên bác sĩ:</Form.Label>
              <Form.Control
                value={state.createDoctor.doctorName}
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
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    dispatch(handleChangeForm("email", e.currentTarget.value));
                  }}
                  value={state.createDoctor.email}
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
                  value={state.createDoctor.numberPhone}
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
                    const value: EGender = e.target.value as EGender;

                    var input: EGender = EGender.Male;
                    if (value === EGender.Male) {
                      input = EGender.Male;
                    } else if (value === EGender.Female) {
                      input = EGender.Female;
                    }
                    dispatch(handleChangeForm("gender", input));
                  }}
                  value={state.createDoctor.gender}>
                  <option value={EGender.Male}>Nam</option>
                  <option value={EGender.Female}> Nữ</option>
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
                  <option
                    selected={
                      state.createDoctor.academicTitle ===
                      EAcademicTitle.Professor
                    }
                    value={EAcademicTitle.Professor}>
                    Giáo sư
                  </option>
                  <option
                    selected={
                      state.createDoctor.academicTitle ===
                      EAcademicTitle.AssociateProfesso
                    }
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
                  value={state.createDoctor.degree}>
                  <option
                    selected={state.createDoctor.degree === EDegree.Doctor}
                    value={EDegree.Doctor}>
                    Bác sĩ
                  </option>
                  <option
                    selected={state.createDoctor.degree === EDegree.DoctorS1}
                    value={EDegree.DoctorS1}>
                    Bác sĩ chuyên khoa 1
                  </option>

                  <option
                    selected={state.createDoctor.degree === EDegree.DoctorS2}
                    value={EDegree.DoctorS2}>
                    Bác sĩ chuyên khoa 2
                  </option>
                  <option
                    selected={state.createDoctor.degree === EDegree.Doctorate}
                    value={EDegree.Doctorate}>
                    Thạc sĩ bác sĩ
                  </option>
                  <option
                    selected={
                      state.createDoctor.degree === EDegree.MasterDoctor
                    }
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
                  value={state.createDoctor.price}
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
            {state.createDoctor.medicalFactilitiesId !== "" && (
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
                    required
                    onChange={(e) => {
                      dispatch(handleChangeForm("specialistId", e?.value));
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
                  value={state.createDoctor.discription}
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
                  <StatusCpn loading={loadingUsers} error={errorUsers} />
                </Form.Label>
                <Select
                  required
                  // value={selectedOption}
                  onChange={(e) => {
                    dispatch(handleChangeForm("userId", e?.value));
                  }}
                  options={optUsers}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <WorkSchedule
              workSchedule={state.createDoctor.workSchedule}
              setWorkSchedule={hanldeSetWorkSchedule}
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
export default FormAddDoctor;
