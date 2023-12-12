import ShowAlert from "src/components/toasts/alerts";
import {
  CreateDoctorInput,
  Doctor,
  LinkImage,
  useCreateDoctorMutation,
  useDegreesSellectQuery,
  useGetClinicsSelectQuery,
  useGetDoctorsQuery,
  useGetSpecicalsSelectQuery,
  useGetUserMedicalNonQuery,
  useGetUserSelectQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Spinner,
  Table,
  Form,
} from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import SearchInputCpn from "src/components/toasts/InputSearch";
import ModalCpn from "src/components/toasts/Modal";
import ImageUpload from "src/components/toasts/ImageUpload";
import {
  EKeyDoctor,
  hCListClinic,
  hCListDegree,
  handleChangeForm,
  handleReset,
  hcImageFile,
  hcListSpecial,
  hcListUser,
  initState,
  reducer,
  setShowModal,
} from "./type";
import Select from "react-select";
import { ERoles } from "src/assets/contains/component-enum";
import { uploadFilePromise } from "src/utils/upload";
import { showToast } from "src/components/toasts/toasts";
function ListDoctorPage() {
  const token = getToken();
  const { refetch, data, loading, error } = useGetDoctorsQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const { refetch: refetchDegree, data: dataDegree } = useDegreesSellectQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const { refetch: refetchClinics, data: dataClinics } =
    useGetClinicsSelectQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const { refetch: refetchSpecial, data: dataSpecial } =
    useGetSpecicalsSelectQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const { refetch: refetchUser, data: dataUser } = useGetUserSelectQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      input: { role: ERoles.doctor },
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
  useEffect(() => {
    dispatch(hCListDegree(dataDegree?.getAllDegree));
    dispatch(hCListClinic(dataClinics?.getMedicalfacilities));
    dispatch(hcListSpecial(dataSpecial?.getAllMecialSpecialties));
    dispatch(hcListUser(dataUser?.getUserSelect));
  }, [dataDegree, dataClinics, dataSpecial, dataUser]);
  // sate main
  const [listDoctor, setListDoctor] = useState<Doctor[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filtered, setFiltered] = useState<Doctor[]>();
  const saveRef = useRef<HTMLButtonElement | null>(null);

  // sate modal
  const [state, dispatch] = useReducer(reducer, initState);
  console.log("===> state: ", state);

  const [formValid, setFormValid] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<Blob | null>(null);

  // function main
  const handleSearch = () => {
    setFiltered(() =>
      searchTerm
        ? listDoctor?.filter((c) =>
            c.name?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : listDoctor
    );
  };
  useEffect(() => {
    setListDoctor(data?.getDoctors);
    handleSearch();
  }, [data, listDoctor]);

  // function modal
  const hanldeClose = () => {
    dispatch(setShowModal(false));
  };
  const handleSave = () => {
    setFormValid(true);
    saveRef.current?.click();
    // dispatch(setShowModal(false));
  };
  const handleSaveDoctor = async (linkImage: LinkImage) => {
    var doctorInput: CreateDoctorInput;
    if (state.createDoctor) {
      doctorInput = {
        ...state.createDoctor,
        avatar: linkImage,
      };
      await createDoctor({
        variables: {
          input: doctorInput,
        },
      }).then(() => {
        showToast("Thêm bác sĩ thành công 🤑", "success", 2000);
        dispatch(handleReset());
      });
    }
  };
  const hanldeSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      if (state.imageFile) {
        uploadFilePromise("image", state.imageFile).then((res) => {
          showToast("Lưu ảnh thành công ✌️", undefined, 1500);
          console.log("link image: ", res);
          handleSaveDoctor(res);
        });
      }
    }
    console.log("Not Valid");
  };
  // return
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
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
              dispatch(setShowModal(true));
            }}>
            <FiPlus />
          </Button>
        </Col>
      </Row>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Bác Sĩ</th>
            <th>Sdt</th>
            <th>Email</th>
            <th>Học vị</th>
            <th>Chuyên khoa</th>
          </tr>
        </thead>
        <tbody>
          {filtered &&
            filtered.map((c, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{c.name}</td>
                <td>{c.numberPhone}</td>
                <td>{c.email}</td>
                <td>{c.degree?.name}</td>
                <td>{c.medicalSpecialties?.name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ModalCpn
        openRequest={state.showModal}
        handleClose={hanldeClose}
        fullscreen={true}
        handleSave={handleSave}
        headerText="Thêm bác sĩ">
        <Form validated={formValid} onSubmit={hanldeSubmit}>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Họ tên: </Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Nguyễn Quốc Thiện"
              value={state.createDoctor?.name}
              onChange={(e) => {
                dispatch(handleChangeForm(e.target.name, e.target.value));
              }}
            />
            <Form.Control.Feedback type="invalid">
              Họ và tên không được bỏ trống
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={state.createDoctor?.email}
              onChange={(e) =>
                dispatch(handleChangeForm(e.target.name, e.target.value))
              }
              placeholder="nqthien_21th@student.agu.edu.vn"
            />
            <Form.Control.Feedback type="invalid">
              Email không được bỏ trống
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Số điện thoại: </Form.Label>
            <Form.Control
              required
              type="text"
              name={EKeyDoctor.numberPhone}
              placeholder="0919597467"
              value={state.createDoctor?.numberPhone}
              onChange={(e) =>
                dispatch(handleChangeForm(e.target.name, e.target.value))
              }
            />
            <Form.Control.Feedback type="invalid">
              Số diện thoại không được bỏ trống
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
            <Form.Label> Ảnnh đại diện:</Form.Label>
            <ImageUpload
              required
              name="image"
              shape="rounded"
              height={180}
              width={280}
              onChange={(e) => {
                if (e.target.files?.[0])
                  dispatch(hcImageFile(e.target.files?.[0]));
              }}
              imageFile={state.imageFile}
              src={"/default.jpg"}
            />
          </Form.Group>

          <Form.Group className="my-5">
            <Form.Label>Chọn bằng cấp:</Form.Label>
            <Select
              // defaultValue={'test'}
              required
              placeholder="Chọn tài khoản"
              onChange={(e) => {
                dispatch(handleChangeForm(EKeyDoctor.degreeId, e?.value));
              }}
              options={
                state.listDegree &&
                state.listDegree.map((de) => ({
                  value: de.id,
                  label: de.name,
                }))
              }
            />
            <Form.Group className="my-5">
              <Form.Label>Chọn cơ chuyên khoa:</Form.Label>
              <Select
                // defaultValue={'test'}
                required
                placeholder="Chuyên khoa..."
                onChange={(e) => {
                  dispatch(handleChangeForm(EKeyDoctor.idSpecialist, e?.value));
                }}
                options={
                  state.listSpecial &&
                  state.listSpecial.map((i) => ({
                    value: i.id,
                    label: i.name,
                  }))
                }
              />
            </Form.Group>
            <Form.Group className="my-5">
              <Form.Label>Chọn cơ sở y tế làm việc:</Form.Label>
              <Select
                // defaultValue={'test'}
                required
                placeholder="Cơ sở y tế..."
                onChange={(e) => {
                  dispatch(handleChangeForm(EKeyDoctor.facilitiesId, e?.value));
                }}
                options={
                  state.listClinic &&
                  state.listClinic.map((i) => ({
                    value: i.id,
                    label: i.companyName,
                  }))
                }
              />
            </Form.Group>
            <Form.Group className="my-5">
              <Form.Label>Chọn tài khoản đăng nhập:</Form.Label>
              <Select
                // defaultValue={'test'}
                required
                placeholder="Tài khoản bác sĩ..."
                onChange={(e) => {
                  dispatch(handleChangeForm(EKeyDoctor.userId, e?.value));
                }}
                options={
                  state.listUser &&
                  state.listUser.map((i) => ({
                    value: i.id,
                    label: i.username,
                  }))
                }
              />
            </Form.Group>
          </Form.Group>
          <button
            type="submit"
            style={{ display: "none" }}
            ref={saveRef}></button>
        </Form>
      </ModalCpn>
    </Container>
  );
}
export default ListDoctorPage;
