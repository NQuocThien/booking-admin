import { useEffect, useReducer, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  Image,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "src/context/AuthContext";
import {
  useDeleteMedicalFacilityMutation,
  useGetAllMedicalFacilityPaginationQuery,
  useGetTotalFacilitiesCountQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { showToast } from "src/components/sub/toasts";
import ShowAlert from "src/components/sub/alerts";
import {
  handleChangeFiltered,
  handleChangePagination,
  handleChangeSearchTerm,
  handleSetListFacility,
  initState,
  reducer,
} from "./reducer-list";
import SearchInputCpn from "src/components/sub/InputSearch";
import StatusCpn from "src/components/sub/Status";
import PaginationCpn from "src/components/sub/Pagination";
function ListMedicalFacilityPage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  checkExpirationToken();

  const [state, dispatch] = useReducer(reducer, initState);
  const { refetch, data, loading, error } =
    useGetAllMedicalFacilityPaginationQuery({
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
  const {
    data: dataTotal,
    loading: loadTotal,
    error: errTotal,
  } = useGetTotalFacilitiesCountQuery({
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
  const [deleteMedicalFacility] = useDeleteMedicalFacilityMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (data?.getAllMedicalFacilityPagination) {
      dispatch(handleSetListFacility(data?.getAllMedicalFacilityPagination));
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
  }, [dataTotal, state.pagination]);
  const hanldeDelete = async (id: string) => {
    var userConfirmed = window.confirm("Bạn có chắc muốn xóa không?");
    if (userConfirmed) {
      try {
        await deleteMedicalFacility({
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
      console.log("Hủy bỏ xóa");
    }
  };
  // if (loading) return <Spinner animation="border" variant="primary" />;
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
            loading={loading}
            error={error}
          />
        </Col>
        <Col>
          <Link
            className="btn btn-outline-primary"
            to={"/admin-page/medical-facility/form-add"}>
            <FiPlus />
          </Link>
        </Col>
      </Row>
      <Row>
        {/* <StatusCpn loading={loadTotal} error={errTotal} />
        {!loadTotal && <StatusCpn loading={loading} error={error} />} */}
        <Table striped hover className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Hình ảnh</th>
              <th>Tên cơ sở y tế</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Người đại diện</th>
              <th>Trạng thái</th>
              <th>Hành động </th>
            </tr>
          </thead>
          <tbody>
            {state.listFacility &&
              state.listFacility.map((c, i) => (
                <tr key={i} className="">
                  <td style={{ verticalAlign: "middle" }}>{i + 1}.</td>
                  <td className="fs-6">
                    <Image
                      height={70}
                      width={70}
                      alt="facility"
                      src={c.logo.url}
                    />
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.medicalFacilityName}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.email}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.numberPhone}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.legalRepresentation}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.status}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    <Dropdown drop="down">
                      <Dropdown.Toggle as={CiMenuKebab}></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link
                            className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            to={`/admin-page/medical-facility/${c.id}`}>
                            Chi tiết
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link
                            className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            to={`/admin-page/medical-facility/update/${c.id}`}>
                            Chỉnh sửa
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          {" "}
                          <p
                            className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            onClick={async () => await hanldeDelete(c.id)}>
                            Xóa cơ sở y tế
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

export default ListMedicalFacilityPage;
