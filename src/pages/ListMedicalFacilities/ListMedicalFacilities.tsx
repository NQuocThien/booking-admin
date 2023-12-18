import ShowAlert from "src/components/toasts/alerts";
import {
  CreateMedicalFacilitiesInput,
  MedicalFacilities,
  useGetMedicalfacilitiesQuery,
  useGetUserMedicalNonQuery,
  useCreateMedicalFacilitiesMutation,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Col,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { FcSearch } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";
import SearchInputCpn from "src/components/toasts/InputSearch";
import { ImProfile } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { useAuth } from "src/context/AuthContext";
import ModalCpn from "src/components/toasts/Modal";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ImageUpload from "src/components/toasts/ImageUpload";
import { ILinkImage, ILocation } from "src/assets/contains/item-interface";
import MapComponent from "src/components/toasts/MapCpn";
import Select from "react-select";
import { ETypeFile, uploadFilePromise } from "src/utils/upload";
import { showToast } from "src/components/toasts/toasts";
// import MapComponent from "src/components/toasts/GoogleMap";

interface IFindAction {
  address: string | undefined;
  save: boolean;
}
interface IUser {
  id: string;
  username: string;
}
function ListMedicalFacilitiesPage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  const { refetch, data, loading, error } = useGetMedicalfacilitiesQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const {
    refetch: refetchUser,
    data: dataUser,
    loading: loadingUser,
    error: errorUser,
  } = useGetUserMedicalNonQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [createMedical] = useCreateMedicalFacilitiesMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  // console.log("test fetch ", dataUser, token);

  const [listUser, setListUser] = useState<IUser[]>();
  const [listMedical, setListMedical] = useState<MedicalFacilities[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filtered, setFiltered] = useState<MedicalFacilities[]>();
  const [openModals, setOpenModals] = useState({
    modalAdd: false,
    modalupdate: false,
  });
  const [clicked, setClicked] = useState<MedicalFacilities>();
  // modal
  const [formInput, setFomrInput] = useState<CreateMedicalFacilitiesInput>({
    companyName: "",
    discription: "",
    image: {
      filename: "",
      type: "image",
      url: "/default.jpg",
    },
    userId: "",
    adress: "",
    email: "",
    lat: null,
    lng: null,
    numberPhone: "",
  });
  const [imageFile, setImageFile] = useState<Blob | null>(null);
  const [validated, setvalidated] = useState<boolean>(false);
  const [maker, setMarker] = useState<ILocation>();
  const refForm = useRef<HTMLButtonElement | null>(null);
  const [actionFind, setActionFind] = useState<IFindAction>({
    address: "",
    save: false,
  });
  useEffect(() => {
    setListUser(dataUser?.getUserMedicalNon);
    // console.log("test list user: ", listUser);
  }, [dataUser]);
  const handleSetMarker = (croods: ILocation) => {
    setMarker(croods);
    if (actionFind.save)
      setFomrInput((pre) => ({ ...pre, lat: croods.lat, lng: croods.lng }));
  };
  const handleCloseModal = useCallback(() => {
    setvalidated(false);
    setFomrInput({
      companyName: "",
      discription: "",
      image: {
        filename: "",
        type: "image",
        url: "/default.jpg",
      },
      userId: "",
      adress: "",
      email: "",
      lat: null,
      lng: null,
      numberPhone: "",
    });
    setMarker(undefined);
    setImageFile(null);
    setOpenModals((pre) => ({ ...pre, modalAdd: false }));
  }, []);
  const handleSaveData = async (input: CreateMedicalFacilitiesInput) => {
    // console.log("input: ", input);
    await createMedical({
      variables: {
        input: input,
      },
    })
      .then((res) => {
        showToast("Đã thêm CSYT👌");
        handleCloseModal();
        refetch();
      })
      .catch((err) => {
        console.log("error: ", err);
        showToast("Thêm không thành công 🫥🫥", "error");
      });
  };
  const handleAddMedicalSubmmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      // console.log("submited: ", formInput);
      /// submited here
      if (imageFile) {
        await uploadFilePromise(ETypeFile.Image, imageFile, "Header")
          .then(async (result) => {
            // console.log("result", result);
            const linkImage: ILinkImage = result as ILinkImage;
            const input: CreateMedicalFacilitiesInput = formInput;
            input.image.filename = linkImage.filename;
            input.image.url = linkImage.url;
            showToast("Up load ảnh", "success", 1000);
            handleSaveData(input);
          })
          .catch((e) => console.log("error", e));
      }
    } else {
      // console.log("form validation");
    }
  };
  const handleShowModal = (medical: MedicalFacilities) => {
    checkExpirationToken();
    setClicked(medical);
  };
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setImageFile(e.target.files?.[0]);
  };
  const handleSearch = () => {
    setFiltered(() =>
      searchTerm
        ? listMedical?.filter((c) =>
            c.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : listMedical
    );
  };
  useEffect(() => {
    setListMedical(data?.getMedicalfacilities);
    handleSearch();
  }, [data, listMedical]);

  useEffect(() => {
    if (openModals.modalAdd) setMarker(undefined);
  }, [openModals.modalAdd]);
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }

  const handleFindLocation = () => {
    formInput.adress &&
      setActionFind((pre) => ({ ...pre, address: formInput.adress }));
  };
  return (
    <Container fluid className="overflow-x-auto">
      <Row>
        <Col xl={8} lg={8}>
          <SearchInputCpn
            onChange={(s: string) => setSearchTerm(s)}
            onSearch={handleSearch}
            value={searchTerm}
          />
        </Col>
        <Col>
          <Button
            variant="outline-success"
            onClick={() => {
              checkExpirationToken();
              setOpenModals((pre) => ({ ...pre, modalAdd: true }));
            }}>
            <FiPlus />
          </Button>
        </Col>
      </Row>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên cơ sở y tế</th>
            <th>Số lượng bác sĩ</th>
            <th>Số lượng gói khám</th>
          </tr>
        </thead>
        <tbody>
          {filtered &&
            filtered.map((c, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{c.companyName}</td>
                <td>
                  <td>{c.doctors?.length}</td>
                </td>
                <td>
                  <td>{c.carePackage?.length}</td>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ModalCpn
        headerText="Thêm Cơ Sở Y Tế"
        openRequest={openModals.modalAdd}
        handleSave={() => {
          setvalidated(true);
          refForm.current && refForm.current?.click();
        }}
        handleClose={() =>
          setOpenModals((pre) => ({ ...pre, modalAdd: false }))
        }
        fullscreen={true}>
        <Form
          className=""
          validated={validated}
          onSubmit={handleAddMedicalSubmmit}>
          <Form.Group className="mb-3" controlId="companyName">
            <Form.Label>Tên CSYT:</Form.Label>
            <Form.Control
              name="companyName"
              required
              type="text"
              placeholder="ví dụ: Bệnh viện đa khoa trung tâm An Giang"
              value={formInput?.companyName}
              onChange={(e) => {
                setFomrInput((pre) => ({
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
                setFomrInput((pre) => ({
                  ...pre,
                  discription: editor.getData(),
                }));
              }}
              data={formInput.discription}
              config={{
                placeholder: "Nhập mô tả thông tin về cơ sở y tế",
              }}
              editor={ClassicEditor}
            />
            <style>{`
              .ck-editor__editable_inline {
                height: 160px;
              }
            `}</style>
          </Form.Group>
          <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
            <Form.Label>Hình ảnh CSYT:</Form.Label>
            <ImageUpload
              required
              name="image"
              shape="rounded"
              height={180}
              width={280}
              onChange={handleChangeImage}
              imageFile={imageFile}
              src={formInput.image.url}
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
              value={formInput?.adress}
              onChange={(e) => {
                setFomrInput((pre) => ({ ...pre, adress: e.target.value }));
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
              onChange={(e) => {
                setActionFind((pre) => ({
                  ...pre,
                  save: e.currentTarget?.checked,
                }));
                setFomrInput((pre) => {
                  if (maker?.lat && maker?.lng)
                    return { ...pre, lat: maker.lat, lng: maker.lng };
                  return pre;
                });
              }}
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
                value={formInput?.email}
                onChange={(e) => {
                  setFomrInput((pre) => ({ ...pre, email: e.target.value }));
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
                value={formInput?.numberPhone}
                onChange={(e) => {
                  setFomrInput((pre) => ({
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
          <Form.Group className="my-5">
            <Form.Label>Chọn tài khoản cho CSYT:</Form.Label>
            <Select
              // defaultValue={'test'}
              required
              placeholder="Chọn tài khoản"
              onChange={(e) => {
                e?.value &&
                  setFomrInput((pre) => ({
                    ...pre,
                    userId: e?.value,
                  }));
              }}
              options={
                listUser &&
                listUser.map((user) => ({
                  value: user.id,
                  label: user.username,
                }))
              }
            />
          </Form.Group>
          <Button
            type="submit"
            style={{ display: "none" }}
            ref={refForm}></Button>
        </Form>
      </ModalCpn>
    </Container>
  );
}
export default ListMedicalFacilitiesPage;
