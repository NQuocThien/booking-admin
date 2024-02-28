import { useEffect, useReducer, useRef, useState } from "react";
import {
  handleChangAvatar,
  handleChangeForm,
  handleChangeFormWorkSchedule,
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
  useGetMedicalSpecialtiesSelectQuery,
  useGetUserDoctorPendingQuery,
} from "src/graphql/webbooking-service.generated";
import Select from "react-select";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { getToken } from "src/utils/contain";
import { uploadFilePromise } from "src/utils/upload";
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
      input: idMedical || "",
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
    console.log("ID Medical: ", idMedical);
    if (idMedical) {
      dispatch(handleChangeStateForm(true));
      dispatch(handleChangeForm("medicalFactilitiesId", idMedical));
    }
  }, [idMedical]);
  useEffect(() => {
    if (dataSpecialtiesSelect) {
      // console.log("test spcialty", dataSpecialtiesSelect);
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
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(handleSetValidate(true));
    if (form.checkValidity() === true) {
      try {
        // console.log("test input ");

        const avatar: LinkImageInput = await uploadFilePromise(
          "image",
          state.avatarFile
        );
        const input: CreateDoctorInput = {
          ...state.createDoctor,
          avatar: avatar,
        };
        // console.log("test input: ", input);
        await createDoctor({
          variables: {
            input: input,
          },
        }).then((res) => {
          showToast("Đã thêm Bác Sĩ 👌👌");
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
  const hanldeSetWorkSchedule = (workSchedule: WorkScheduleInput) => {
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
            <h3 className="text-center text-primary">Thêm cơ sở y tế</h3>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Tên bác sĩ:</Form.Label>
              <Form.Control
                value={state.createDoctor.name}
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
                    dispatch(handleChangeForm("gender", e.target.value));
                  }}
                  defaultValue={EStatusService.Open}>
                  <option
                    selected={state.createDoctor.gender === EGender.Male}
                    value={EGender.Male}>
                    Nam
                  </option>
                  <option
                    selected={state.createDoctor.gender === EGender.Female}
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
                  defaultValue={EDegree.Doctor}>
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
