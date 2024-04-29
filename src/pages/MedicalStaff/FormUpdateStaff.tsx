import { useEffect, useReducer } from "react";
import {
  IOption,
  handleChangeForm,
  handleChangeOptionFacility,
  handleChangeOptionSpecialty,
  handleChangeOptionUser,
  handleChangeStateForm,
  handleSetDataFormUpdate,
  handleSetValidate,
  initState,
  reducer,
} from "./reducer-update";
import Select from "react-select";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import {
  EGenderPackage,
  EPermission,
  UpdateMedicalStaffInput,
  useGetAllMedicalFacilitySelectLazyQuery,
  useGetAllUserStaffSelectQuery,
  useGetMedicalStaffByIdQuery,
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
import {
  getEnumValueGender,
  getEnumValuePermission,
  getSelectedOption,
} from "src/utils/getData";
function FormUpdateMedicalStaff() {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const { id: idMedical, idStaff } = useParams();
  const token = getToken();

  const { data, loading, error } = useGetMedicalStaffByIdQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      input: idStaff || "",
    },
  });
  const [
    getFacility,
    {
      data: dataFacilitySelect,
      loading: loadingFacilitySelect,
      error: errorFacilitySelect,
    },
  ] = useGetAllMedicalFacilitySelectLazyQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
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
      input: idStaff || "",
    },
  });

  useEffect(() => {
    if (data?.getMedicalStaffById) {
      const input: UpdateMedicalStaffInput = {
        id: data?.getMedicalStaffById.id,
        email: data?.getMedicalStaffById.email,
        medicalFacilityId: data?.getMedicalStaffById.medicalFacilityId,
        staffName: data?.getMedicalStaffById.staffName,
        specialtyId: data?.getMedicalStaffById.specialtyId,
        numberPhone: data?.getMedicalStaffById.numberPhone,
        userId: data?.getMedicalStaffById.userId,
        permissions: (data?.getMedicalStaffById.permissions || [])
          .map((per) => getEnumValuePermission(per))
          .filter((per) => per !== null) as EPermission[],
        gender: getEnumValueGender(data?.getMedicalStaffById.gender),
      };
      dispatch(handleSetDataFormUpdate(input));
    }
  }, [data]);

  useEffect(() => {
    console.log("ID Medical: ", idMedical);
    if (idMedical) {
      dispatch(handleChangeStateForm(true));
      dispatch(handleChangeForm("medicalFacilityId", idMedical));
    } else {
      getFacility();
    }
  }, [idMedical]);
  useEffect(() => {
    if (dataSpecialty?.getMedicalSpecialtySelect) {
      const options: IOption[] = dataSpecialty?.getMedicalSpecialtySelect.map(
        (p) => ({
          value: p.id,
          label: p.specialtyName,
        })
      );
      dispatch(handleChangeOptionSpecialty(options));
    }
    if (dataFacilitySelect) {
      const optFacility: IOption[] =
        dataFacilitySelect.getAllMedicalFacility.map((item) => ({
          label: item.medicalFacilityName,
          value: item.id,
        }));
      dispatch(handleChangeOptionFacility(optFacility));
    }

    if (dataUser?.getUserStaffSelect) {
      const options: IOption[] = dataUser?.getUserStaffSelect.map((p) => ({
        value: p.id,
        label: p.username,
      }));
      dispatch(handleChangeOptionUser(options));
    }
  }, [dataSpecialty, dataUser, dataFacilitySelect]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    dispatch(handleSetValidate(true));
    if (form.checkValidity() === true) {
      const input: UpdateMedicalStaffInput = {
        id: state.updateStaff.id,
        email: state.updateStaff.email,
        gender: getEnumValueGender(state.updateStaff.gender),
        medicalFacilityId: state.updateStaff.medicalFacilityId,
        staffName: state.updateStaff.staffName,
        numberPhone: state.updateStaff.numberPhone,
        permissions: state.updateStaff.permissions,
        userId: state.updateStaff.userId,
        specialtyId: state.updateStaff.specialtyId,
      };
      updateStaff({
        variables: {
          input: state.updateStaff,
        },
      }).then(() => {
        showToast("Đã sửa nhân viên 👌👌");
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
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (errSpecialty || error || !idStaff) {
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
            <h3 className="text-center text-primary">Sửa nhân viên</h3>
          </Row>
          {!state.formMedical && (
            <Row>
              <Form.Group className="mb-3" controlId="formGroupNameDoctor">
                <Form.Label>Chọn cơ sở y tế:</Form.Label>

                <Select
                  value={getSelectedOption(
                    state.updateStaff.medicalFacilityId,
                    state.optionsFacility
                  )}
                  onChange={(e) => {
                    dispatch(handleChangeForm("medicalFacilityId", e?.value));
                  }}
                  options={state.optionsFacility}
                />
              </Form.Group>
            </Row>
          )}
          <Row>
            <Form.Group className="mb-3" controlId="formGroupNameNV">
              <Form.Label>Tên nhân viên:</Form.Label>
              <Form.Control
                value={state.updateStaff.staffName}
                onChange={(e) => {
                  dispatch(
                    handleChangeForm("staffName", e.currentTarget.value)
                  );
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
                  value={EGenderPackage.Both}>
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
                      value={EPermission.MagagerPending}
                      id=".MagagerPending"
                      checked={
                        !state.updateStaff.permissions?.includes(
                          EPermission.Magager
                        ) &&
                        state.updateStaff.permissions.includes(
                          EPermission.MagagerPending
                        )
                      }
                      disabled={state.updateStaff.permissions?.includes(
                        EPermission.Magager
                      )}
                      onChange={(e) => {
                        const currPer: EPermission[] =
                          state.updateStaff.permissions;
                        if (e.currentTarget.checked) {
                          currPer.push(EPermission.MagagerPending);
                        } else {
                          const index = currPer.findIndex(
                            (per) => per === EPermission.MagagerPending
                          );
                          if (index !== -1) {
                            currPer.splice(index, 1);
                          }
                        }
                        dispatch(handleChangeForm("permissions", currPer));
                      }}
                      label="Quản lý duyệt khám"
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
                value={getSelectedOption(
                  state.updateStaff.userId,
                  state.optionsUser
                )}
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
                <StatusCpn
                  size="sm"
                  variant="light"
                  loading={loadUpdate || loadingFacilitySelect}
                  error={errUpdate}
                />
              </Button>
            </div>
          </Row>
        </Form>
      </Row>
    </Container>
  );
}
export default FormUpdateMedicalStaff;
