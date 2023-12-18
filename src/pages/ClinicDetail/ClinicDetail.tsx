import { getToken } from "src/utils/contain";
import {
  Container,
  Row,
  Image,
  Col,
  Spinner,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import {
  UpdateMedicalFacilitiesInput,
  useGetClinicByUserIdQuery,
  useUpdateClinicMutation,
} from "src/graphql/webbooking-service.generated";
import { useAuth } from "src/context/AuthContext";
import ShowAlert from "src/components/toasts/alerts";
import MapAddressCpn from "src/components/toasts/MapAddressCpn";
import { Evariant } from "src/assets/contains/component-enum";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import ModalCpn from "src/components/toasts/Modal";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { FcSearch } from "react-icons/fc";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ImageUpload from "src/components/toasts/ImageUpload";
import { ILinkImage, ILocation } from "src/assets/contains/item-interface";
import MapComponent from "src/components/toasts/MapCpn";
import { showToast } from "src/components/toasts/toasts";
import { ETypeFile, uploadFilePromise } from "src/utils/upload";
interface IFindAction {
  address: string | undefined;
  save: boolean;
}
const ClinicDetailPage: React.FC = () => {
  const token = getToken();
  const { checkExpirationToken, userInfor } = useAuth();
  const userId: string = userInfor?.id || "";
  checkExpirationToken();
  const { refetch, data, loading, error } = useGetClinicByUserIdQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: { input: userId },
  });
  const [updateClinic] = useUpdateClinicMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  //   console.log("data", data);

  const [modal, setModal] = useState<boolean>(false);
  const [updateMedicalinput, setUpdateMedicalinput] =
    useState<UpdateMedicalFacilitiesInput>({
      id: "",
      adress: "",
      companyName: "",
      discription: "",
      email: "",
      image: {
        filename: "",
        type: "",
        url: "",
      },
      numberPhone: "",
      userId: "",
      lat: undefined,
      lng: undefined,
    });
  const [maker, setMarker] = useState<ILocation>();
  const [imageFile, setImageFile] = useState<Blob | null>(null);
  const refForm = useRef<HTMLButtonElement | null>(null);
  const [actionFind, setActionFind] = useState<IFindAction>({
    address: "",
    save: false,
  });
  const handleSetMarker = (croods: ILocation) => {
    setMarker(croods);
    setUpdateMedicalinput((pre) => ({
      ...pre,
      lat: croods.lat,
      lng: croods.lng,
    }));
  };
  const handleChangeSave = (e: ChangeEvent<HTMLInputElement>) => {
    const newSaveValue = e.currentTarget?.checked;
    setActionFind((prev) => ({
      ...prev,
      save: newSaveValue,
    }));
    if (newSaveValue)
      setUpdateMedicalinput((pre) => ({
        ...pre,
        lat: maker?.lat,
        lng: maker?.lng,
      }));
    else
      setUpdateMedicalinput((pre) => ({
        ...pre,
        lat: undefined,
        lng: undefined,
      }));
  };
  const handleUpdate = () => {
    if (data?.getClinicByUserId && userInfor) {
      const dataUpdateInput: UpdateMedicalFacilitiesInput = {
        id: data?.getClinicByUserId.id,
        adress: data?.getClinicByUserId.adress,
        companyName: data?.getClinicByUserId.companyName,
        discription: data?.getClinicByUserId.discription,
        email: data?.getClinicByUserId.email,
        image: data?.getClinicByUserId.image,
        numberPhone: data?.getClinicByUserId.numberPhone,
        userId: userInfor?.id,
        lat: data?.getClinicByUserId.lat,
        lng: data?.getClinicByUserId.lng,
      };
      setUpdateMedicalinput(dataUpdateInput);
      setModal(true);
    }
  };
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setImageFile(e.target.files?.[0]);
  };
  const handleFindLocation = () => {
    updateMedicalinput.adress &&
      setActionFind((pre) => ({ ...pre, address: updateMedicalinput.adress }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      if (imageFile) {
        await uploadFilePromise(ETypeFile.Image, imageFile, "Header")
          .then(async (result) => {
            const updateInput: UpdateMedicalFacilitiesInput = {
              ...updateMedicalinput,
              image: result,
            };
            showToast("Up load ảnh", "success", 1000);
            await updateClinic({ variables: { input: updateInput } })
              .then(() => {
                showToast("Đã sửa 👌👌👌", undefined, 2000);
                setMarker(undefined);
                setImageFile(null);
                setActionFind({
                  address: "",
                  save: false,
                });
                setModal(false);
                refetch();
              })
              .catch((e) => console.log("error save: ", e));
          })
          .catch((e) => console.log("error", e));
      } else {
        // const updateInput:UpdateMedicalFacilitiesInput =
        const { image, ...updateInput } = updateMedicalinput;
        await updateClinic({ variables: { input: updateInput } }).then(() => {
          showToast("Đã sửa 👌👌👌", undefined, 2000);
          setMarker(undefined);
          setImageFile(null);
          setActionFind({
            address: "",
            save: false,
          });
          setModal(false);
          refetch();
        });
      }

      console.log("input", updateMedicalinput);
    }
  };
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return (
      <ShowAlert
        head="Bạn chưa tạo thông tin về CYST "
        content="Vui lòng liên hệ ban quản trị để thêm thông tin CSYT"
        bottom="Thông tin liên hệ: Nguyễn Quốc Thiện -- 0789624614"
        variant={Evariant.info}
      />
    );
  }

  return (
    <Container>
      {data?.getClinicByUserId && (
        <>
          <Row>
            <Col lg={6}>
              <Image
                width={"100%"}
                height={"200px"}
                src={data.getClinicByUserId.image.url}
                rounded
              />
            </Col>
            <Col>
              <h4>{data.getClinicByUserId.companyName}</h4>
              <p>Số điện thoại:{data.getClinicByUserId.numberPhone}</p>
              <p>Email:{data.getClinicByUserId.email}</p>
              <p>Số lượng bác sĩ: {data.getClinicByUserId.doctors?.length}</p>
            </Col>
          </Row>
          <Row style={{ height: 320 }} className="mb-5">
            {data?.getClinicByUserId.lat && data?.getClinicByUserId.lng && (
              <Col className="mt-3">
                <h4>Địa chỉ</h4>
                <p>{data.getClinicByUserId.adress}</p>
                <MapAddressCpn
                  lat={data?.getClinicByUserId.lat}
                  lng={data?.getClinicByUserId.lng}
                />
              </Col>
            )}
          </Row>
          <Row>
            {data?.getClinicByUserId.discription && (
              <Col className="mt-5">
                <h4>Thông tin CYST</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.getClinicByUserId.discription,
                  }}></div>
              </Col>
            )}
          </Row>{" "}
          {data?.getClinicByUserId.doctors && (
            <Row className="mt-5">
              <h4>Bác sĩ </h4>
              {data?.getClinicByUserId.doctors.map((doc, i) => (
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      width={200}
                      height={200}
                      src={
                        (doc.avatar?.url && doc.avatar?.url) || "/default.jpg"
                      }
                    />
                    <Card.Body>
                      <Card.Title>
                        {doc.degree?.abbreviations && doc.degree?.abbreviations}{" "}
                        {doc.name}
                      </Card.Title>
                      <Card.Text>
                        <p>
                          Chuyên khoa:{" "}
                          {doc.medicalSpecialties?.name &&
                            doc.medicalSpecialties?.name}
                        </p>
                        <p>Email: {doc.email}</p>
                        <p>Số điện thoại: {doc.numberPhone}</p>
                      </Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
          <Row>
            <Button variant="primary" onClick={handleUpdate}>
              Sửa Thông Tin CYST
            </Button>
          </Row>
        </>
      )}
      <ModalCpn
        openRequest={modal}
        handleSave={() => {
          refForm.current && refForm.current?.click();
        }}
        handleClose={() => setModal(false)}
        fullscreen={true}
        headerText="Sửa thông tin CSYT">
        <Form className="" validated={true} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="companyName">
            <Form.Label>Tên CSYT:</Form.Label>
            <Form.Control
              name="companyName"
              required
              type="text"
              placeholder="ví dụ: Bệnh viện đa khoa trung tâm An Giang"
              value={updateMedicalinput?.companyName}
              onChange={(e) => {
                setUpdateMedicalinput((pre) => ({
                  ...pre,
                  companyName: e.target.value,
                }));
              }}
            />
            <Form.Control.Feedback type="invalid">
              Tên cơ sở y tế không được để trống
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mô tả </Form.Label>
            <CKEditor
              onChange={(e, editor) => {
                setUpdateMedicalinput((pre) => ({
                  ...pre,
                  discription: editor.getData(),
                }));
              }}
              data={updateMedicalinput.discription}
              config={{
                placeholder: "Nhập mô tả thông tin về cơ sở y tế",
              }}
              editor={ClassicEditor}
            />
            <style>{`
              .ck-editor__editable_inline {
                min-height: 160px;
              }
            `}</style>
          </Form.Group>
          <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
            <Form.Label>Hình ảnh CSYT:</Form.Label>
            <ImageUpload
              name="image"
              shape="rounded"
              height={180}
              width={280}
              onChange={handleChangeImage}
              imageFile={imageFile}
              src={
                (updateMedicalinput.image && updateMedicalinput.image.url) ||
                "/default.jpg"
              }
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng chọn ảnh
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Địa chỉ CSYT:</Form.Label>
            <Form.Control
              required
              name="address"
              type="text"
              placeholder="Ví dụ: Bệnh viện đa khoa trung tâm An Giang"
              value={updateMedicalinput?.adress}
              onChange={(e) => {
                setUpdateMedicalinput((pre) => ({
                  ...pre,
                  adress: e.target.value,
                }));
              }}
            />
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập địa chỉ
            </Form.Control.Feedback>
            <Button
              variant="outline-success"
              className="my-3"
              onClick={handleFindLocation}>
              Tìm trên bản đồ <FcSearch size={24} />
            </Button>

            <div style={{ height: "400px", width: "800px" }}>
              <h3>Chọn vị trí trên bản đồ</h3>
              <MapComponent
                // visable={openModals.modalAdd}
                marker={maker}
                setMarker={handleSetMarker}
                address={actionFind.address}
              />
            </div>
            <Form.Check // prettier-ignore
              className="mt-5"
              type="switch"
              id="custom-switch"
              label="Lưu vị trí google map"
              checked={updateMedicalinput.lat ? true : false}
              onChange={handleChangeSave}
            />
          </Form.Group>
          <Row className="my-5">
            <Col>
              <Form.Label>Email hỗ trợ CSYT:</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="Ví dụ: bvdakhoattangiang@gmail.com"
                value={updateMedicalinput?.email}
                onChange={(e) => {
                  setUpdateMedicalinput((pre) => ({
                    ...pre,
                    email: e.target.value,
                  }));
                }}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập thông tin email
              </Form.Control.Feedback>
            </Col>

            <Col>
              <Form.Label>Số điện thoại liên lạc hỗ trợ CSYT:</Form.Label>
              <Form.Control
                required
                type="text"
                name="numberPhone"
                placeholder="Ví dụ: 0789624614"
                value={updateMedicalinput?.numberPhone}
                onChange={(e) => {
                  setUpdateMedicalinput((pre) => ({
                    ...pre,
                    numberPhone: e.target.value,
                  }));
                }}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập thông tin số điện thoại
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Button
            type="submit"
            style={{ display: "none" }}
            ref={refForm}></Button>
        </Form>
      </ModalCpn>
    </Container>
  );
};
export default ClinicDetailPage;
