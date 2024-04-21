import { useEffect, useReducer, useRef, useState } from "react";
import {
  handleChangeForm,
  handleChangePhoto,
  handleSetValidate,
  initState,
  reducer,
} from "./reducer";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import {
  CreateBlogInput,
  EnumBlogStatus,
  EnumBlogType,
  LinkImageInput,
  useCreateBlogMutation,
  useGetUserFacilitySelectQuery,
} from "src/graphql/webbooking-service.generated";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { getToken } from "src/utils/contain";
import { uploadImage } from "src/utils/upload";
import { showToast } from "src/components/sub/toasts";
import getSlug from "speakingurl";
function FormAddBlog() {
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
  const [createBlog] = useCreateBlogMutation({
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
        const mainPhoto: LinkImageInput = await uploadImage(
          state.mainPhoto,
          "blogs"
        );
        const input: CreateBlogInput = {
          ...state.createBlogInput,
          mainPhoto: mainPhoto,
          priority: +state.createBlogInput.priority,
        };
        await createBlog({
          variables: {
            input: input,
          },
        }).then((res) => {
          showToast("Đã thêm bài viết 👌👌");
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
            <h3 className="text-center text-primary">Thêm bài viết</h3>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupName-title">
              <Form.Label>Tên bài viết:</Form.Label>
              <Form.Control
                value={state.createBlogInput.title}
                onBlur={(e) => {
                  if (state.createBlogInput.slug === "") {
                    const text = e.currentTarget.value;
                    const slug = getSlug(text, { lang: "vi" });
                    dispatch(handleChangeForm("slug", slug));
                  }
                }}
                onChange={(e) => {
                  const text = e.currentTarget.value;

                  dispatch(handleChangeForm("title", text));
                }}
                required
                type="text"
                placeholder="Tầm quan trọng của việc tập thể dục mỗi ngày"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="linkSocial">
              <Form.Label>Tóm tắt:</Form.Label>

              <Form.Control
                as="textarea"
                value={state.createBlogInput.shortContent}
                onChange={(e) => {
                  dispatch(
                    handleChangeForm("shortContent", e.currentTarget.value)
                  );
                }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập tóm tắt
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group
                controlId="formFile"
                className="mb-3 d-flex flex-column">
                <Form.Label>Ảnh nền</Form.Label>
                <Image
                  onClick={() => {
                    if (logoRef.current) logoRef.current.click();
                  }}
                  height={180}
                  width={180}
                  src={
                    (state.mainPhoto && URL.createObjectURL(state.mainPhoto)) ||
                    "/default.jpg"
                  }
                />
                <Form.Control
                  ref={logoRef}
                  onChange={(e) => {
                    const inputElement = e.target as HTMLInputElement;
                    if (inputElement?.files?.length) {
                      const selectedFile = inputElement.files[0];
                      dispatch(handleChangePhoto(selectedFile));
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
              <Form.Group className="mb-3" controlId="formGroup-slug">
                <Form.Label>Slug:</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    dispatch(handleChangeForm("slug", e.currentTarget.value));
                  }}
                  value={state.createBlogInput.slug}
                  required
                  type="text"
                  placeholder="tam-quan-trong-the-duc"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroup-keywords">
                <Form.Label>Từ khóa:</Form.Label>
                <Form.Control
                  value={state.createBlogInput.keywords}
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm("keywords", e.currentTarget.value)
                    );
                  }}
                  required
                  type="text"
                  placeholder="Sức khỏe, thể thao"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupStatus">
                <Form.Label>Trạng thái bài viết:</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    dispatch(handleChangeForm("status", e.target.value));
                  }}
                  value={state.createBlogInput.status}>
                  <option value={EnumBlogStatus.Public}>Công khai</option>
                  <option value={EnumBlogStatus.NotPublic}>
                    {" "}
                    Không công khai
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formGroupStatus">
                <Form.Label>Chuyên mục:</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    dispatch(handleChangeForm("type", e.target.value));
                  }}
                  value={state.createBlogInput.type}>
                  <option value={EnumBlogType.Health}>Sức khỏe</option>
                  <option value={EnumBlogType.Medical}>Y tế</option>
                  <option value={EnumBlogType.Service}>Dịch vụ</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroup-priority">
                <Form.Label>Thứ tự ưu tiên:</Form.Label>
                <Form.Control
                  value={state.createBlogInput.priority}
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm("priority", e.currentTarget.value)
                    );
                  }}
                  required
                  type="number"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Nội dung chính:</p>
              <CKEditor
                editor={ClassicEditor}
                onChange={(e, editor) => {
                  dispatch(handleChangeForm("content", editor.getData()));
                }}
                data={state.createBlogInput.content}
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
export default FormAddBlog;
