import { useAuth } from "src/context/AuthContext";
import { Button, Container, Form, Row, Col, Image } from "react-bootstrap";
import s from "src/assets/scss/pages/InforUser.module.scss";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { showToast } from "src/components/sub/toasts";
import { getLocalStorage, getToken } from "src/utils/contain";
import { uploadFile, ETypeFile } from "src/utils/upload";
import {
  LinkImage,
  UpdateUserInput,
  UpdateUserWithPassInput,
  User,
} from "src/graphql/webbooking-service.generated";
interface InforUserCpnProps {
  update: (token: string, dataUser: any) => Promise<void>;
  updateWithPass: (
    token: string,
    dataUser: UpdateUserWithPassInput
  ) => Promise<void>;
}
function InforUserCpn({ update, updateWithPass }: InforUserCpnProps) {
  const { isLoginIn, userInfor, handleChangeUserInfor, checkExpirationToken } =
    useAuth();
  const avatarRef = useRef<HTMLInputElement | null>(null);
  // const [validated, setValidated] = useState<boolean>(false);
  const [disable, setDisabled] = useState<boolean>(true);
  const [stateUpdatePass, setStateUpdatePass] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<Blob | null>(null);

  const handleUpdateInforUser = (
    linkImage: LinkImage | undefined = undefined
  ) => {
    if (stateUpdatePass) {
      // nếu có đổi pass
      var dataUserUpdated: UpdateUserWithPassInput;
      if (userInfor) {
        if (linkImage) {
          // có đổi hình
          dataUserUpdated = {
            ...userInfor,
            linkImage: linkImage,
            email: formData.email,
            password: formData.password,
            passwordNew: formData.passwordNew,
          };
        } else {
          // không đổi hình
          dataUserUpdated = {
            ...userInfor,
            email: formData.email,
            password: formData.password,
            passwordNew: formData.passwordNew,
          };
        }
        // const token = getToken();
        updateWithPass(getToken() || "", dataUserUpdated)
          .then((res) => {
            // if (res && res.updateUserWithPass)
            console.log(res);
            showToast("😘 Đã lưu thay đổi thành công", "success");
            const { passwordNew, ...newUser } = dataUserUpdated;
            // console.log('data submit: ', newUser);
            handleChangeUserInfor(newUser);
            setDisabled(true);
          })
          .catch((e) => {
            e.message === "Password Error"
              ? showToast("🤐 Mật củ sai! ", "error")
              : showToast("😢 Có lổi xảy ra! ", "error");
            handleUpdate();
          });
      }
    } else {
      if (userInfor) {
        var dataUserUpdate: UpdateUserInput;
        const { password, ...currentUserInforNonPass } = userInfor;
        if (linkImage) {
          dataUserUpdate = {
            ...currentUserInforNonPass,
            linkImage: linkImage,
            email: formData.email,
          };
        } else {
          dataUserUpdate = {
            ...currentUserInforNonPass,
            email: formData.email,
          };
        }
        const token = getLocalStorage(
          process.env.ACCESS_TOKEN ? process.env.ACCESS_TOKEN : "access_token"
        );
        if (token) {
          update(token, dataUserUpdate)
            .then((res) => {
              showToast("😘 Đã lưu thay đổi thành công", "success");
              setStateUpdatePass(false);
              setDisabled(true);
              const newUser: User = {
                ...userInfor,
                email: dataUserUpdate.email
                  ? dataUserUpdate.email
                  : userInfor.email,
                linkImage: dataUserUpdate.linkImage
                  ? dataUserUpdate.linkImage
                  : userInfor.linkImage,
              };
              handleChangeUserInfor(newUser);
            })
            .catch((e) =>
              showToast("🤐 Có lỗi xảy ra không thể lưu" + e, "error")
            );
        }
      }
    }
  }; // xữ lý đoạn cuối update user
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    checkExpirationToken();
    e.preventDefault();
    if (selectedFile) {
      // console.log(' upload image')
      const typeFile = ETypeFile.Image;
      uploadFile(typeFile, [selectedFile], (error: any, result: any) => {
        if (error) {
          console.error("Upload error:", error);
          showToast("😥 Lỗi upload avatar", "error");
        } else {
          // console.log('Upload successful. Result:', result);
          showToast("👍 Đã lưu ảnh");

          const ulrImage = `${process.env.REACT_APP_BACKEND_URI_IMAGE}/${result[0]?.filename}`;
          const linkImage = {
            filename: result[0]?.filename,
            type: typeFile,
            url: ulrImage,
          };
          // console.log("linkImage res:", linkImage);
          // thực hiện submit
          handleUpdateInforUser(linkImage);
        }
      });
    } else {
      handleUpdateInforUser();
    }
  }; // xữa lý khi submit
  const [formData, setFormData] = useState<UpdateUserWithPassInput>({
    email: "",
    username: "",
    password: "",
    passwordNew: "",
    linkImage: {
      filename: "",
      url: "",
      type: "",
    },
    id: "",
  }); // trạng thái dữ liệu chung
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }; // xữ lý nhập thông tin

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  }; // xử lý thay đổi image
  const handleUpdate = () => {
    if (disable) {
      setStateUpdatePass(false);
      setDisabled(false);
    } else {
      // load lại dữ liệu gốc
      if (userInfor) {
        const currentUser = { ...userInfor, password: "", passwordNew: "" };
        setFormData(currentUser);
        setStateUpdatePass(false);
        setDisabled(true);
      }
    }
  }; // xữ lý hành động update hủy update

  useEffect(() => {
    if (userInfor) {
      const currentUser = { ...userInfor, password: "", passwordNew: "" };
      setFormData(currentUser);
    }
  }, [userInfor]); // tinh tỉnh data đầu vào

  // console.log("tets ref: ", avatarRef);
  return (
    <Container className={s.inforUser}>
      {isLoginIn && (
        <Row>
          <Col xl={{ span: 8, offset: 2 }}>
            <Form className={s.inforUser__form} onSubmit={handleSubmit}>
              <h3>Thông tin tài khoản</h3>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Chọn ảnh đại diện</Form.Label>
                <br></br>
                <Image
                  className={s.inforUser__form_avatar}
                  src={
                    (selectedFile && URL.createObjectURL(selectedFile)) ||
                    formData.linkImage?.url
                  }
                  thumbnail
                  onClick={() => avatarRef.current && avatarRef.current.click()}
                />
                <Form.Control
                  className="d-none"
                  ref={avatarRef}
                  disabled={disable}
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  size="sm"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tên đăng nhập</Form.Label>
                <Form.Control
                  required
                  value={formData.username}
                  onChange={handleChange}
                  name="username"
                  type="text"
                  disabled
                  placeholder="Nhập tên tài khoản"
                />
              </Form.Group>

              {/* <Form.Group className="mb-3 " >
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control
                                        required
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        name='fullname'
                                        type="text"
                                        disabled={disable}
                                        placeholder='Nhập họ tên' />
                                </Form.Group> */}

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  type="text"
                  disabled={disable}
                  placeholder="Nhập Email"
                />
              </Form.Group>

              {!disable && !stateUpdatePass && (
                <Button
                  variant="link"
                  size="sm"
                  style={{ marginBottom: "10px" }}
                  onClick={() =>
                    setStateUpdatePass((pre) => (!pre ? true : false))
                  }>
                  Cập nhật
                </Button>
              )}
              {stateUpdatePass && (
                <div>
                  <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Label>Mật khẩu cũ</Form.Label>
                    <Form.Control
                      required
                      value={formData.password}
                      onChange={handleChange}
                      name="password"
                      type="password"
                      disabled={disable}
                      placeholder="Mật khẩu cũ"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu mới</Form.Label>
                    <Form.Control
                      required
                      value={formData.passwordNew}
                      onChange={handleChange}
                      name="passwordNew"
                      type="password"
                      disabled={disable}
                      placeholder="Mật khẩu mới"
                    />
                  </Form.Group>
                </div>
              )}
              <div className={s.inforUser__form_btns}>
                <Button variant="outline-success" onClick={handleUpdate}>
                  {disable ? "Cập nhật" : "Hủy"}
                </Button>
                <Button type="submit" variant="primary" disabled={disable}>
                  Lưu
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default InforUserCpn;
