import { useEffect, useReducer } from "react";
import { Col, Container, Dropdown, Image, Row, Table } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "src/context/AuthContext";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorPaginationQuery,
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
  handleSetlistDoctor,
  initState,
  reducer,
} from "./reducer-list";
import SearchInputCpn from "src/components/sub/InputSearch";
import PaginationCpn from "src/components/sub/Pagination";
import { renderDayOfWeek2 } from "src/utils/getData";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";
function ListDoctorPage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  checkExpirationToken();

  const [state, dispatch] = useReducer(reducer, initState);
  const { refetch, data, loading, error } = useGetAllDoctorPaginationQuery({
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
  const [deleteDoctor, { loading: loadingDeleteDoctor }] =
    useDeleteDoctorMutation({
      fetchPolicy: "no-cache",
    });

  useEffect(() => {
    if (data?.getAllDoctorPagination) {
      dispatch(handleSetlistDoctor(data?.getAllDoctorPagination));
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
        await deleteDoctor({
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
            loading={loading || loadingDeleteDoctor}
            error={error}
          />
        </Col>
        <Col>
          <Link
            className="btn btn-outline-primary"
            to={"/admin-page/doctors/form-add"}>
            <FiPlus />
          </Link>
        </Col>
      </Row>
      <Row>
        <Table striped hover className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Hình ảnh</th>
              <th>Tên Bác sĩ</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Giới tính</th>
              <th>Giá khám</th>
              <th>Lịch làm việc</th>
              <th>Hành động </th>
            </tr>
          </thead>
          <tbody>
            {state.listDoctor &&
              state.listDoctor.map((c, i) => (
                <tr key={i} className="">
                  <td style={{ verticalAlign: "middle" }}>{i + 1}.</td>
                  <td className="fs-6">
                    <Image
                      height={70}
                      width={70}
                      alt="doctor"
                      src={c.avatar.url}
                    />
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.doctorName}
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
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.price}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {renderDayOfWeek2(c.workSchedule.schedule)}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    <Dropdown drop="down">
                      <Dropdown.Toggle
                        as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={Link}
                          className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          to={`/admin-page/doctors/${c.id}`}>
                          Chi tiết
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          to={`/admin-page/doctors/update/${c.id}`}>
                          Chỉnh sửa
                        </Dropdown.Item>
                        <Dropdown.Item>
                          {" "}
                          <p
                            className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            onClick={async () => await hanldeDelete(c.id)}>
                            Xóa bác sỉ
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
    </Container>
  );
}

export default ListDoctorPage;
