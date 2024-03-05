import { useEffect, useReducer } from "react";
import {
  IOption,
  handleChangeForm,
  handleChangeOptionSpecialty,
  handleChangeOptionUser,
  handleChangeStateForm,
  handleSetValidate,
  initState,
  reducer,
} from "./reducer-update";
import Select from "react-select";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import {
  EGenderPackage,
  EPermission,
  UpdateMedicalStaffInput,
  useGetAllUserStaffSelectQuery,
  useGetSpecialtySelectQuery,
  useUpdateMedicalStaffMutation,
} from "src/graphql/webbooking-service.generated";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { IoSaveOutline } from "react-icons/io5";
import { getToken } from "src/utils/contain";
import ShowAlert from "src/components/sub/alerts";
import { FaDeleteLeft } from "react-icons/fa6";
import { showToast } from "src/components/sub/toasts";
import StatusCpn from "src/components/sub/Status";
import { getEnumValueGender } from "src/utils/getData";
function FormUpdateMedicalStaff() {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const { id: idMedical } = useParams();
  const token = getToken();

  const [updateStaff, { loading: loadUpdate, error: errUpdate }] =
    useUpdateMedicalStaffMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const {
    data: dataSpecialty,
    loading: loadSpecialty,
    error: errSpecialty,
  } = useGetSpecialtySelectQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      input: idMedical || "",
    },
  });
  const {
    data: dataUser,
    loading: loadUser,
    error: errUser,
  } = useGetAllUserStaffSelectQuery({
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
  useEffect(() => {
    console.log("ID Medical: ", idMedical);
    if (idMedical) {
      dispatch(handleChangeStateForm(true));
      dispatch(handleChangeForm("medicalFacilityId", idMedical));
    }
  }, [idMedical]);
  useEffect(() => {
    if (dataSpecialty?.getMedicalSpecialtySelect) {
      const options: IOption[] = dataSpecialty?.getMedicalSpecialtySelect.map(
        (p) => ({
          value: p.id,
          label: p.name,
        })
      );
      dispatch(handleChangeOptionSpecialty(options));
    }

    if (dataUser?.getUserStaffSelect) {
      const options: IOption[] = dataUser?.getUserStaffSelect.map((p) => ({
        value: p.id,
        label: p.username,
      }));
      dispatch(handleChangeOptionUser(options));
    }
  }, [dataSpecialty, dataUser]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(handleSetValidate(true));
    if (form.checkValidity() === true) {
      console.log("test input: ", state.updateStaff);
      const input: UpdateMedicalStaffInput = {
        id: state.updateStaff.id,
        email: state.updateStaff.email,
        gender: getEnumValueGender(state.updateStaff.gender),
        medicalFacilityId: state.updateStaff.medicalFacilityId,
        name: state.updateStaff.name,
        numberPhone: state.updateStaff.numberPhone,
        permissions: state.updateStaff.permissions,
        userId: state.updateStaff.userId,
        specialtyId: state.updateStaff.specialtyId,
      };
      updateStaff({
        variables: {
          input: input,
        },
      }).then(() => {
        showToast("Đã thêm nhân viên 👌👌");
        navigate(-1);
      });
    }
  };
  const handleRemoveItemService = (
    name: keyof UpdateMedicalStaffInput,
    value: string
  ) => {
    const tpmData = state.updateStaff[name];
    if (Array.isArray(tpmData)) {
      const index = tpmData.findIndex((item) => item === value);
      tpmData.splice(index, 1);
      if (index !== -1) dispatch(handleChangeForm(name, tpmData));
    }
  };
  if (errSpecialty || !idMedical) {
    return <ShowAlert />;
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
            <h3 className="text-center text-primary">Thêm nhân viên</h3>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupNameNV">
              <Form.Label>Tên nhân viên:</Form.Label>
              <Form.Control
                value={state.updateStaff.name}
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
              <Form.Group className="mb-3" controlId="formGroupStatus">
                <Form.Label>Giới tính:</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    dispatch(handleChangeForm("gender", e.target.value));
                  }}
                  defaultValue={EGenderPackage.Both}>
                  <option value={EGenderPackage.Male}>Nam</option>
                  <option value={EGenderPackage.Female}> Nữ</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupNumberPhone">
                <Form.Label>Số điện thoại:</Form.Label>
                <Form.Control
                  value={state.updateStaff.numberPhone}
                  onChange={(e) => {
                    dispatch(
                      handleChangeForm("numberPhone", e.currentTarget.value)
                    );
                  }}
                  required
                  type="text"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  value={state.updateStaff.email}
                  onChange={(e) => {
                    dispatch(handleChangeForm("email", e.currentTarget.value));
                  }}
                  required
                  type="email"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupPermission">
                <Form.Label>Quyền:</Form.Label>
                <Row>
                  <Col>
                    <Form.Check // manager
                      type="switch"
                      value={EPermission.Magager}
                      id="Magager"
                      onChange={(e) => {
                        var permissions: EPermission[];
                        if (e.currentTarget.checked)
                          permissions = [EPermission.Magager];
                        else permissions = [];
                        dispatch(handleChangeForm("permissions", permissions));
                      }}
                      label="Quản lý"
                    />
                    <Form.Check // blog
                      type="switch"
                      value={EPermission.MagagerBlog}
                      id="MagagerBlog"
                      checked={
                        !state.updateStaff.permissions?.includes(
                          EPermission.Magager
                        ) &&
                        state.updateStaff.permissions.includes(
                          EPermission.MagagerBlog
                        )
                      }
                      disabled={state.updateStaff.permissions?.includes(
                        EPermission.Magager
                      )}
                      onChange={(e) => {
                        const currPer: EPermission[] =
                          state.updateStaff.permissions;
                        if (e.currentTarget.checked) {
                          currPer.push(EPermission.MagagerBlog);
                        } else {
                          const index = currPer.findIndex(
                            (per) => per === EPermission.MagagerBlog
                          );
                          if (index !== -1) {
                            currPer.splice(index, 1);
                          }
                        }
                        dispatch(handleChangeForm("permissions", currPer));
                      }}
                      label="Quản lý bài viết"
                    />
                    <Form.Check // package
                      type="switch"
                      value={EPermission.MagagerPackage}
                      id="MagagerPackage"
                      checked={
                        !state.updateStaff.permissions?.includes(
                          EPermission.Magager
                        ) &&
                        state.updateStaff.permissions.includes(
                          EPermission.MagagerPackage
                        )
                      }
                      disabled={state.updateStaff.permissions?.includes(
                        EPermission.Magager
                      )}
                      onChange={(e) => {
                        const currPer: EPermission[] =
                          state.updateStaff.permissions;
                        if (e.currentTarget.checked) {
                          currPer.push(EPermission.MagagerPackage);
                        } else {
                          const index = currPer.findIndex(
                            (per) => per === EPermission.MagagerPackage
                          );
                          if (index !== -1) {
                            currPer.splice(index, 1);
                          }
                        }
                        dispatch(handleChangeForm("permissions", currPer));
                      }}
                      label="Quản lý gói khám"
                    />
                  </Col>
                  <Col>
                    <Form.Check // vaccine
                      type="switch"
                      value={EPermission.MagagerVaccine}
                      id="MagagerVaccine"
                      checked={
                        !state.updateStaff.permissions?.includes(
                          EPermission.Magager
                        ) &&
                        state.updateStaff.permissions.includes(
                          EPermission.MagagerVaccine
                        )
                      }
                      disabled={state.updateStaff.permissions?.includes(
                        EPermission.Magager
                      )}
                      onChange={(e) => {
                        const currPer: EPermission[] =
                          state.updateStaff.permissions;
                        if (e.currentTarget.checked) {
                          currPer.push(EPermission.MagagerVaccine);
                        } else {
                          const index = currPer.findIndex(
                            (per) => per === EPermission.MagagerVaccine
                          );
                          if (index !== -1) {
                            currPer.splice(index, 1);
                          }
                        }
                        dispatch(handleChangeForm("permissions", currPer));
                      }}
                      label="Quản lý tim chủng"
                    />
                    <Form.Check // specialty
                      type="switch"
                      value={EPermission.ManagerSpecialty}
                      id="MagagerSpecialty"
                      checked={
                        !state.updateStaff.permissions?.includes(
                          EPermission.Magager
                        ) &&
                        state.updateStaff.permissions.includes(
                          EPermission.ManagerSpecialty
                        )
                      }
                      disabled={state.updateStaff.permissions?.includes(
                        EPermission.Magager
                      )}
                      onChange={(e) => {
                        const currPer: EPermission[] =
                          state.updateStaff.permissions;
                        if (e.currentTarget.checked) {
                          currPer.push(EPermission.ManagerSpecialty);
                        } else {
                          const index = currPer.findIndex(
                            (per) => per === EPermission.ManagerSpecialty
                          );
                          if (index !== -1) {
                            currPer.splice(index, 1);
                          }
                        }
                        dispatch(handleChangeForm("permissions", currPer));
                      }}
                      label="Quản lý chuyên khoa"
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {state.updateStaff.permissions.includes(
              EPermission.ManagerSpecialty
            ) && (
              <Col>
                <Form.Group className="mb-3" controlId="formGroupPackage">
                  <Form.Label>
                    Danh sách chuyên khoa quản lý{" "}
                    <StatusCpn loading={loadSpecialty} error={errSpecialty} />
                  </Form.Label>
                  <Table>
                    <thead>
                      <tr>
                        <th>Tên chuyên khoa quản lý</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.updateStaff?.specialtyId?.map((p, i) => {
                        const name: string | undefined =
                          state.optionsSpecialties.find(
                            (item) => item.value === p
                          )?.label;
                        if (name) {
                          return (
                            <tr key={i}>
                              <td>{name}</td>
                              <td>
                                <FaDeleteLeft
                                  className="text-danger"
                                  onClick={() =>
                                    handleRemoveItemService("specialtyId", p)
                                  }
                                />
                              </td>
                            </tr>
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </Table>
                  <Select
                    options={state.optionsSpecialties}
                    onChange={(e) => {
                      if (
                        state.updateStaff.specialtyId?.findIndex(
                          (p) => p === e?.value
                        ) === -1 ||
                        !state.updateStaff.specialtyId
                      ) {
                        dispatch(
                          handleChangeForm("specialtyId", [
                            ...(state.updateStaff.specialtyId || []),
                            e?.value,
                          ])
                        );
                      }
                    }}
                  />
                </Form.Group>
              </Col>
            )}
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGroupPackage">
              <Form.Label>
                Chọn tài khoản <StatusCpn loading={loadUser} error={errUser} />
              </Form.Label>
              <Select
                options={state.optionsUser}
                onChange={(e) => {
                  dispatch(handleChangeForm("userId", e?.value));
                }}
              />
            </Form.Group>
          </Row>

          <Row className="mt-3">
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                <IoSaveOutline className="mx-2" />
                Lưu
                <StatusCpn loading={loadUpdate} error={errUpdate} />
              </Button>
            </div>
          </Row>
        </Form>
      </Row>
    </Container>
  );
}
export default FormUpdateMedicalStaff;
