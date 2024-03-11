import {
  LoginUserInput,
  useLoginMutation,
} from "src/graphql/webbooking-service.generated";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import s from "src/assets/scss/pages/Login.module.scss";
import { showToast } from "src/components/sub/toasts";
import { useAuth } from "src/context/AuthContext";

function LoginPage() {
  const [dataLogin, setDataLogin] = useState<LoginUserInput>({
    username: "",
    password: "",
  });

  const [validated, setValidated] = useState<boolean | undefined>(false);
  const { login: sigin } = useAuth();
  const hanldeChangForm = (e: any) => {
    const { name, value } = e.target;
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };
  const [callLogin] = useLoginMutation({
    fetchPolicy: "no-cache",
    onCompleted: async (data) => {
      showToast("👍Đăng nhập thành công 👌👌", "success", 2000);
      const newToken = data?.login?.access_token;
      sigin(newToken);
    },
    onError: async (err) => {
      console.log(err.message);
      if (err.message === "Unauthorized")
        showToast("😥 Sai tài khoản hoặc mật khẩu", "error");
      else showToast(err.message, "error");
    },
  });
  const handleSubmit = async (e: any) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const queryValues = {
        variables: {
          input: {
            username: dataLogin.username,
            password: dataLogin.password,
          },
        },
      };
      callLogin(queryValues);
    }
    setValidated(true);
  };

  return (
    <div>
      <div className={s.layer}></div>
      <Container className={s.login} fluid>
        <Row>
          <Col xl={{ span: 4, offset: 4 }}>
            <Form
              className={s.login__form}
              noValidate
              validated={validated}
              onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{"Tên đăng nhập"}</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="username"
                  placeholder={"Nhập Username"}
                  value={dataLogin.username}
                  onChange={hanldeChangForm}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{"Mật khẩu"}</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder={"Nhập mật khẩu"}
                  value={dataLogin.password}
                  onChange={hanldeChangForm}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {"Đăng nhập"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
