import { useEffect, useReducer, useRef, useState } from "react";
import {
  handleChangImage,
  handleChangLogo,
  handleChangeForm,
  handleSetValidate,
  hanldeFindLocation,
  initState,
  reducer,
} from "./reducer";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import {
  CreateMedicalFacilityInput,
  EStatusService,
  ETypeOfFacility,
  LinkImageInput,
  useCreateMedicalFacilityMutation,
  useGetUserFacilitySelectQuery,
} from "src/graphql/webbooking-service.generated";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Select from "react-select";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { FcSearch } from "react-icons/fc";
import MapComponent from "src/components/sub/MapCpn";
import { getToken } from "src/utils/contain";
import { uploadImage } from "src/utils/upload";
import { showToast } from "src/components/sub/toasts";
import { GetETypeOfFacility } from "src/utils/enum-value";
function FormAddMedicalFacility() {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const logoRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const token = getToken();
  const { data: dataUsers, loading } = useGetUserFacilitySelectQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      input: "",
    },
  });
  const [createMedicalFacility] = useCreateMedicalFacilityMutation({
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
    if (dataUsers?.getUserFacilitySelect) {
      const options = dataUsers?.getUserFacilitySelect.map((user) => ({
        value: user.id,
        label: user.username,
      }));
      setOptUser(options);
    }
  }, [dataUsers]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(handleSetValidate(true));
    if (form.checkValidity() === true) {
      try {
        const logo: LinkImageInput = await uploadImage(
          state.logoFile,
          "facilities"
        );
        const image: LinkImageInput = await uploadImage(
          state.imageFile,
          "facilities"
        );
        const input: CreateMedicalFacilityInput = {
          ...state.createMedicalFacility,
          logo: logo,
          image: image,
        };
        await createMedicalFacility({
          variables: {
            input: input,
          },
        }).then((res) => {
          showToast("Đã thêm CSYT 👌👌");
          navigate(-1);
        });
      } catch (e: unknown) {
        if (e instanceof Error) {
          showToast("Lỗi: " + e.message, "error");
        }
      }
    }
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
              <Form.Label>Tên cơ sở y tế:</Form.Label>
              <Form.Control
                value={state.createMedicalFacility.medicalFacilityName}
                onChange={(e) => {
                  dispatch(
                    handleChangeForm(
                      "medicalFacilityName",
                      e.currentTarget.value
                    )
                  );
                }}
                required
                type="text"
                placeholder="Phòng khám đa khoa Mỹ Thạnh"
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group
                controlId="formFile"
                className="mb-3 d-flex flex-column">
                <Form.Label>Logo</Form.Label>
                <Image
                  onClick={() => {
                    if (logoRef.current) logoRef.current.click();
                  }}
                  height={180}
                  width={180}
                  src={
                    (state.logoFile && URL.createObjectURL(state.logoFile)) ||
                    "/default.jpg"
                  }
                />
                <Form.Control
                  ref={logoRef}
                  onChange={(e) => {
                    const inputElement = e.target as HTMLInputElement;
                    if (inputElement?.files?.length) {
                      const selectedFile = inputElement.files[0];
                      dispatch(handleChangLogo(selectedFile));
                    }
                  }}
                  required
                  type="file"
                  style={{ display: "none" }}
                />
                <Form.Control.Feedback>Chọn ảnh</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                controlId="formFile"
                className="mb-3 d-flex flex-column">
                <Form.Label>Ảnh nền:</Form.Label>
                <Image
                  onClick={() => {
                    if (imageRef.current) imageRef.current.click();
                  }}
                  height={220}
                  width={440}
                  src={
                    (state.imageFile && URL.createObjectURL(state.imageFile)) ||
                    "/default.jpg"
                  }
                />
                <Form.Control
                  ref={imageRef}
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
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    dispatch(handleChangeForm("email", e.currentTarget.value));
                  }}
                  value={state.createMedicalFacility.email}
                  required
                  type="email"
                  placeholder="pkdkmt@gmail.com"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupNumberPhone">
                <Form.Label>Số điện thoại:</Form.Label>
                <Form.Control
                  value={state.createMedicalFacility.numberPhone}
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
                <Form.Label>Trạng thái hoạt động:</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    dispatch(handleChangeForm("status", e.target.value));
                  }}
                  defaultValue={EStatusService.Open}>
                  <option
                    selected={
                      state.createMedicalFacility.status === EStatusService.Open
                    }
                    value={EStatusService.Open}>
                    Mở
                  </option>
                  <option
                    selected={
                      state.createMedicalFacility.status ===
                      EStatusService.Close
                    }
                    value={EStatusService.Close}>
                    {" "}
                    Đóng
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupPerson">
                <Form.Label>Người đại diện:</Form.Label>
                <Form.Control
                  value={state.createMedicalFacility.legalRepresentation}
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm(
                        "legalRepresentation",
                        e.currentTarget.value
                      )
                    );
                  }}
                  required
                  type="text"
                  placeholder="Trần Minh Tâm"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupTaxCode">
                <Form.Label>Mã số thuế:</Form.Label>
                <Form.Control
                  value={state.createMedicalFacility.taxCode}
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm("taxCode", e.currentTarget.value)
                    );
                  }}
                  required
                  type="text"
                  placeholder="123456789"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formGroupShedule">
                <Form.Label>Loại cơ sở y tế:</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm("typeOfFacility", e.target.value)
                    );
                  }}
                  // defaultValue={EStatusService.Open}
                  value={state.createMedicalFacility.typeOfFacility}>
                  <option
                    // selected={
                    //   state.createMedicalFacility.status === EStatusService.Open
                    // }
                    value={ETypeOfFacility.PublicHospital}>
                    {GetETypeOfFacility.publicHospital}
                  </option>
                  <option
                    // selected={
                    //   state.createMedicalFacility.status === EStatusService.Open
                    // }
                    value={ETypeOfFacility.PrivateHospital}>
                    {GetETypeOfFacility.privateHospital}
                  </option>

                  <option
                    // selected={
                    //   state.createMedicalFacility.status === EStatusService.Open
                    // }
                    value={ETypeOfFacility.Clinic}>
                    {GetETypeOfFacility.clinic}
                  </option>
                  <option
                    // selected={
                    //   state.createMedicalFacility.status === EStatusService.Open
                    // }
                    value={ETypeOfFacility.VaccinationCenter}>
                    {GetETypeOfFacility.vaccinationCenter}
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupShedule">
                <Form.Label>Lịch làm việc:</Form.Label>
                <Form.Control
                  value={state.createMedicalFacility.schedule}
                  onChange={(e) =>
                    dispatch(handleChangeForm("schedule", e.target.value))
                  }
                  required
                  type="text"
                  placeholder="Ví dụ: Thứ 2 đến thứ 7 (7h30 - 17h30)"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Địa chỉ CSYT:</Form.Label>
              <Form.Control
                value={state.createMedicalFacility.address}
                onChange={(e) => {
                  dispatch(handleChangeForm("address", e.currentTarget.value));
                }}
                required
                name="address"
                type="text"
                placeholder="Ví dụ: Bệnh viện đa khoa trung tâm An Giang"
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập địa chỉ
              </Form.Control.Feedback>
              <Button
                variant="outline-success"
                className="my-3"
                onClick={() => {
                  dispatch(
                    hanldeFindLocation(state.createMedicalFacility.address)
                  );
                }}>
                Tìm trên bản đồ <FcSearch size={24} />
              </Button>

              <div style={{ height: "400px", width: "800px" }}>
                <h3>Chọn vị trí trên bản đồ</h3>
                <MapComponent
                  // visable={openModals.modalAdd}
                  marker={{
                    lat: state.createMedicalFacility.lat || 10.376941,
                    lng: state.createMedicalFacility.lng || 105.441729,
                  }}
                  setMarker={(pos) => {
                    dispatch(handleChangeForm("lat", pos.lat));
                    dispatch(handleChangeForm("lng", pos.lng));
                  }}
                  address={state.address}
                />
              </div>
              <Form.Check // prettier-ignore
                className="mt-5"
                type="switch"
                id="custom-switch"
                label="Lưu vị trí google map"
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mô tả:</Form.Label>
                <Form.Control
                  value={state.createMedicalFacility.discription}
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
              <p>Giới thiệu:</p>
              <CKEditor
                editor={ClassicEditor}
                onChange={(e, editor) => {
                  dispatch(handleChangeForm("introduce", editor.getData()));
                }}
                data={state.createMedicalFacility.introduce}
                config={{
                  placeholder: "Nhập mô tả thông tin về cơ sở y tế",
                }}
              />
              <style>{`
              .ck-editor__editable_inline {
                height: 260px;
              }
            `}</style>
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
export default FormAddMedicalFacility;
