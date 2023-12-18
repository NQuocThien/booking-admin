import { Button, Container, Form, Spinner } from "react-bootstrap";
import ImageUpload from "../toasts/ImageUpload";
import { IoMdArrowRoundBack } from "react-icons/io";
import Select from "react-select";
import { FormEvent, useEffect, useReducer, useState } from "react";
import {
  EKeyDoctor,
  hCListClinic,
  hCListDegree,
  handleChangeForm,
  hcImageFile,
  hcListSpecial,
  hcListUser,
  initState,
  reducer,
  setUpdateDoctor,
} from "./type";
import { useParams } from "react-router-dom";
import {
  UpdateDoctorInput,
  useDegreesSellectQuery,
  useGetClinicsSelectQuery,
  useGetDoctorByIdQuery,
  useGetSpecicalsSelectQuery,
  useGetUserSelectQuery,
  useUpdateDoctorMutation,
} from "src/graphql/webbooking-service.generated";
import { useAuth } from "src/context/AuthContext";
import { getToken } from "src/utils/contain";
import ShowAlert from "../toasts/alerts";
import { ERoles, Evariant } from "src/assets/contains/component-enum";
import { ETypeFile, uploadFilePromise } from "src/utils/upload";
import { showToast } from "../toasts/toasts";
import { useNavigate } from "react-router-dom";
interface IParams {
  [key: string]: string | undefined;
  doctorId: string;
}

const FormUpdateDoctor = () => {
  const navi = useNavigate();
  const params = useParams<IParams>();
  useEffect(() => {
    if (params.doctorId)
      dispatch(handleChangeForm(EKeyDoctor.id, params.doctorId));
  }, [params]);
  const token = getToken();
  const { checkExpirationToken, userInfor } = useAuth();
  checkExpirationToken();
  const [admin, setAdmin] = useState<boolean>(true);
  useEffect(() => {
    if (!userInfor?.roles?.includes("admin")) setAdmin(false);
  }, [userInfor]);
  const { refetch, data, loading, error } = useGetDoctorByIdQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: { input: (params.doctorId && params.doctorId) || "" },
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
  const [updateDoctor] = useUpdateDoctorMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  useEffect(() => {
    if (data?.getDoctorbyId) dispatch(setUpdateDoctor(data?.getDoctorbyId));
  }, [data]);
  useEffect(() => {
    dispatch(hCListDegree(dataDegree?.getAllDegree));
    dispatch(hCListClinic(dataClinics?.getMedicalfacilities));
    dispatch(hcListSpecial(dataSpecial?.getAllMecialSpecialties));
    dispatch(hcListUser(dataUser?.getUserSelect));
  }, [dataDegree, dataClinics, dataSpecial, dataUser]);

  const handleSaveDoctor = async (data: UpdateDoctorInput) => {
    await updateDoctor({ variables: { input: data } })
      .then(() => {
        showToast("Đã sửa thông tin bác sỉ 👌", undefined, 2000);
      })
      .catch((e) => {
        console.log("error:", e);
      });
  };
  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkExpirationToken();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      // submit
      if (state.imageFile) {
        // có đổi hình

        console.log("test have imgae");

        uploadFilePromise(ETypeFile.Image, state.imageFile)
          .then((res) => {
            showToast("Đã upload hình 🤞🤞", undefined, 2000);
            const inputDoctor: UpdateDoctorInput = {
              id: state.updateDocter.id,
              email: state.updateDocter.email,
              name: state.updateDocter.name,
              avatar: {
                filename: res.filename,
                type: res.type,
                url: res.url,
              },
              numberPhone: state.updateDocter.numberPhone,
              degreeId: state.updateDocter.degreeId,
              facilitiesId: state.updateDocter.facilitiesId,
              idSpecialist: state.updateDocter.idSpecialist,
              userId: state.updateDocter.userId,
            };

            handleSaveDoctor(inputDoctor);
          })
          .catch((e) => {
            console.log("error", e);
          });
      } else {
        console.log("test no imgae");
        // không đổi hình
        const inputDoctor: UpdateDoctorInput = {
          id: state.updateDocter.id,
          email: state.updateDocter.email,
          name: state.updateDocter.name,
          numberPhone: state.updateDocter.numberPhone,
          degreeId: state.updateDocter.degreeId,
          facilitiesId: state.updateDocter.facilitiesId,
          idSpecialist: state.updateDocter.idSpecialist,
          userId: state.updateDocter.userId,
        };
        handleSaveDoctor(inputDoctor);
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);
  console.log("===> state: ", state);

  const optSpecial =
    state.listSpecial &&
    state.listSpecial.map((ps) => {
      return {
        label: ps.name,
        value: ps.id,
      };
    });
  const selectedSpecial =
    optSpecial &&
    optSpecial.find((s) => s.value === state.updateDocter?.idSpecialist);

  const optDegree =
    state.listDegree &&
    state.listDegree.map((ps) => {
      return {
        label: ps.name,
        value: ps.id,
      };
    });
  const selectedDegree =
    optDegree &&
    optDegree.find((s) => s.value === state.updateDocter?.degreeId);

  const optUser =
    state.listUser &&
    state.listUser.map((ps) => {
      return {
        label: ps.username,
        value: ps.id,
      };
    });
  const selectedUser =
    optUser && optUser.find((s) => s.value === state.updateDocter?.userId);

  const optClinic =
    state.listClinic &&
    state.listClinic.map((ps) => {
      return {
        label: ps.companyName,
        value: ps.id,
      };
    });
  const selectedClinic =
    optClinic &&
    optClinic.find((s) => s.value === state.updateDocter?.facilitiesId);

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
      {/* <CustomBreadcrumbs
        paths={[
          { label: "Home", url: currentUrl },
          { label: "Form sửa", url: "s" },
        ]}
      /> */}
      <Button variant="outline-dark" onClick={() => navi(-1)}>
        <IoMdArrowRoundBack />
      </Button>
      <h4>Form sửa thông tin bác sĩ</h4>
      <Form validated={true} onSubmit={hanldeSubmit}>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Họ tên: </Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Nguyễn Quốc Thiện"
            value={state.updateDocter?.name}
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
            type="text"
            name="email"
            value={state.updateDocter?.email}
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
            value={state.updateDocter?.numberPhone}
            onChange={(e) =>
              dispatch(handleChangeForm(e.target.name, e.target.value))
            }
          />
          <Form.Control.Feedback type="invalid">
            Số diện thoại không được bỏ trống
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
          <Form.Label className="mx-5"> Ảnh đại diện:</Form.Label>
          <ImageUpload
            name="image"
            shape="roundedCircle"
            height={180}
            width={280}
            onChange={(e) => {
              if (e.target.files?.[0])
                dispatch(hcImageFile(e.target.files?.[0]));
            }}
            imageFile={state.imageFile}
            src={state.updateDocter?.avatar?.url || "/default.jpg"}
          />
        </Form.Group>

        <Form.Group className="my-5">
          <Form.Label>Chọn bằng cấp:</Form.Label>
          <Select
            // defaultValue={'test'}
            required
            // value={state.update && ({label: '', value: state.createDoctor?.userId})}
            placeholder="Chọn tài khoản"
            onChange={(e) => {
              dispatch(handleChangeForm(EKeyDoctor.degreeId, e?.value));
            }}
            value={selectedDegree}
            options={optDegree}
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
              options={optSpecial}
              value={selectedSpecial}
            />
          </Form.Group>
          {admin && (
            <>
              <Form.Group className="my-5">
                <Form.Label>Chọn cơ sở y tế làm việc:</Form.Label>
                <Select
                  // defaultValue={'test'}
                  required
                  placeholder="Cơ sở y tế..."
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm(EKeyDoctor.facilitiesId, e?.value)
                    );
                  }}
                  value={selectedClinic}
                  options={optClinic}
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
                  value={selectedUser}
                  options={optUser}
                />
              </Form.Group>
            </>
          )}
        </Form.Group>
        <Button type="submit">Sửa</Button>
      </Form>
    </Container>
  );
};
export default FormUpdateDoctor;
