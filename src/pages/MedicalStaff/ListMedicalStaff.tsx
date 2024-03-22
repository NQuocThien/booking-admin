import { useEffect, useReducer } from "react";
import { Col, Container, Dropdown, Row, Table } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "src/context/AuthContext";
import {
  MedicalStaff,
  useDeleteDoctorMutation,
  useDeleteMedicalStaffMutation,
  useGetAllStaffPaginationQuery,
  useGetTotalFacilitiesCountQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { Link } from "react-router-dom";
import { showToast } from "src/components/sub/toasts";
import ShowAlert from "src/components/sub/alerts";
import {
  handleChangePagination,
  handleChangeSearchTerm,
  handleSetSelectedStaff,
  handleSetShowModal,
  handleSetlistStaff,
  initState,
  reducer,
} from "./reducer-list";
import SearchInputCpn from "src/components/sub/InputSearch";
import PaginationCpn from "src/components/sub/Pagination";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";
import ModalCpn from "src/components/sub/Modal";
import { IoPersonCircleOutline, IoSettingsSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import {
  MdManageAccounts,
  MdOutlineEmail,
  MdOutlineTransgender,
} from "react-icons/md";
import { GetEPermission } from "src/utils/enum-value";
function ListMedicalStaffPage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  checkExpirationToken();

  const [state, dispatch] = useReducer(reducer, initState);
  const { refetch, data, loading, error } = useGetAllStaffPaginationQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      limit: 10,
      page: state.pagination.current,
      search: state.searchTerm,
      sortOrder: state.pagination.sort,
    },
  });
  const { data: dataTotal } = useGetTotalFacilitiesCountQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      search: state.searchTerm,
    },
  });

  const handleClickStaff = (staff: MedicalStaff) => {
    dispatch(handleSetSelectedStaff(staff));
    dispatch(handleSetShowModal(true));
  };

  const [deleteStaff, { loading: loadingDeleteStaff }] =
    useDeleteMedicalStaffMutation({
      fetchPolicy: "no-cache",
    });
  useEffect(() => {
    if (data?.getAllStaffPagination) {
      dispatch(handleSetlistStaff(data?.getAllStaffPagination));
    }
  }, [data]);
  useEffect(() => {
    if (dataTotal?.getTotalFacilitiesCount) {
      dispatch(
        handleChangePagination({
          ...state.pagination,
          total: dataTotal.getTotalFacilitiesCount,
        })
      );
    }
  }, [dataTotal]);
  const hanldeDelete = async (id: string) => {
    var userConfirmed = window.confirm("Bạn có chắc muốn xóa không?");
    if (userConfirmed) {
      try {
        await deleteStaff({
          variables: {
            input: id,
          },
        }).then((res) => {
          showToast("Xóa thành công ✌️", "success");
          refetch();
        });
      } catch (e) {
        showToast("Có lỗi xảy ra 😢😢", "error");
      }
    } else {
    }
  };
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <Container fluid className={` ${s.component}`}>
      <Row>
        <Col xl={10} lg={10}>
          <SearchInputCpn
            onSearch={(s: string) => {
              dispatch(handleChangeSearchTerm(s));
            }}
            onSort={(sort) => {
              dispatch(
                handleChangePagination({
                  ...state.pagination,
                  sort: sort,
                })
              );
            }}
            loading={loading || loadingDeleteStaff}
            error={error}
          />
        </Col>
        <Col>
          <Link
            className="btn btn-outline-primary"
            to={"/admin-page/staffs/form-add"}>
            <FiPlus />
          </Link>
        </Col>
      </Row>
      <Row>
        <Table striped hover className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên nhân viên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Giới tính</th>
              <th style={{ maxWidth: 200 }}>Quyền</th>
              <th>Hành động </th>
            </tr>
          </thead>
          <tbody>
            {state.listStaff &&
              state.listStaff.map((c, i) => (
                <tr key={i} className="">
                  <td style={{ verticalAlign: "middle" }}>{i + 1}.</td>

                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.staffName}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.email}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.numberPhone}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.gender}
                  </td>
                  <td
                    className="fs-6"
                    style={{ verticalAlign: "middle", maxWidth: 200 }}>
                    {c.permissions.map((per, i) => (
                      <div key={i}>- {per}</div>
                    ))}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    <Dropdown drop="down">
                      <Dropdown.Toggle
                        as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleClickStaff(c)}>
                          Chi tiết
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          to={`/admin-page/staffs/update/${c.id}`}>
                          Chỉnh sửa
                        </Dropdown.Item>
                        <Dropdown.Item>
                          {" "}
                          <p
                            className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            onClick={async () => await hanldeDelete(c.id)}>
                            Xóa nhân viên
                          </p>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
      <div className="d-flex justify-content-center">
        <PaginationCpn
          setPageActive={(currPage) => {
            dispatch(
              handleChangePagination({
                ...state.pagination,
                current: currPage,
              })
            );
          }}
          totalPage={Math.ceil(state.pagination.total / 10)}
        />
      </div>
      <ModalCpn
        handleClose={() => dispatch(handleSetShowModal(false))}
        handleSave={() => {}}
        headerText="Thông tin nhân viên"
        openRequest={state.showModal}
        onlySclose>
        <div className="shadow-lg bg-light p-3 mt-3">
          {state.selectedStaff && (
            <>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <IoPersonCircleOutline />
                  </span>
                  Họ và tên:{" "}
                  <span className="text-success ms-2">
                    {state.selectedStaff.staffName}{" "}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <FaPhone />
                  </span>
                  Số điện thoại:
                  <span className="text-info ms-2">
                    {state.selectedStaff.numberPhone}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineEmail />
                  </span>
                  Email:
                  <span className="text-info ms-2">
                    {state.selectedStaff.email}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineTransgender />
                  </span>
                  Giới tính:
                  <span className="text-info ms-2">
                    {state.selectedStaff.gender}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <IoSettingsSharp />
                  </span>
                  Quyền:
                </h6>
                <div className="text-info ms-5">
                  {state.selectedStaff?.permissions.map((per, i) => (
                    <div key={i}>- {per}</div>
                  ))}
                </div>
              </div>
              {state.selectedStaff.specialtyId &&
                state.selectedStaff.permissions.includes(
                  GetEPermission.ManagerSpecialty
                ) && (
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <MdManageAccounts />
                      </span>
                      Chuyên khoa đang quản lí:
                    </h6>
                    <div className="text-info ms-5">
                      {state.selectedStaff.specialties &&
                        state.selectedStaff.specialties.map((spec, i) => (
                          <div key={i}>- {spec.specialtyName}</div>
                        ))}
                    </div>
                  </div>
                )}
            </>
          )}
        </div>
      </ModalCpn>
    </Container>
  );
}

export default ListMedicalStaffPage;
