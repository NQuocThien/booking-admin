import { useEffect, useReducer } from "react";
import {
  Col,
  Container,
  Dropdown,
  Image,
  Row,
  Table,
  Button,
} from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "src/context/AuthContext";
import {
  EnumBlogType,
  useDeleteUnDeleteBlogMutation,
  useGetAllBlogPaginationQuery,
  useGetTottalBlogQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { Link } from "react-router-dom";
import { showToast } from "src/components/sub/toasts";
import ShowAlert from "src/components/sub/alerts";
import {
  handleChangDeleted,
  handleChangePagination,
  handleChangeSearchTerm,
  handleSetListBlog,
  initState,
  reducer,
} from "./reducer-list";
import SearchInputCpn from "src/components/sub/InputSearch";
import PaginationCpn from "src/components/sub/Pagination";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";
import { FaTrash } from "react-icons/fa6";
function ListBlogsPage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  checkExpirationToken();

  const [state, dispatch] = useReducer(reducer, initState);
  const { refetch, data, loading, error } = useGetAllBlogPaginationQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      limit: state.pagination.rowPerPage || 10,
      page: state.pagination.current,
      search: state.searchTerm,
      isDeleted: state.isDeleted,
    },
  });
  const {
    data: dataTotal,
    loading: loadTotal,
    error: errTotal,
  } = useGetTottalBlogQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      search: state.searchTerm,
      isDeleted: state.isDeleted,
    },
  });
  const [deleteMedicalFacility] = useDeleteUnDeleteBlogMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  useEffect(() => {
    if (data?.getAllBlogPagination) {
      dispatch(handleSetListBlog(data));
    }
  }, [data]);
  useEffect(() => {
    if (dataTotal?.getTotalBlogsCount) {
      dispatch(
        handleChangePagination({
          ...state.pagination,
          total: dataTotal.getTotalBlogsCount,
        })
      );
    }
  }, [dataTotal]);
  const hanldeDelete = async (id: string, text: string, mess: string) => {
    var userConfirmed = window.confirm(text);
    if (userConfirmed) {
      try {
        await deleteMedicalFacility({
          variables: {
            id: id,
          },
        }).then((res) => {
          showToast(mess, "success");
          refetch();
        });
      } catch (e) {
        console.log(e);
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
            loading={loading || loadTotal}
            error={error}
          />
        </Col>
        <Col>
          <Button
            onClick={() => {
              dispatch(handleChangDeleted(!state.isDeleted));
            }}
            className="me-1"
            active={state.isDeleted}
            variant="outline-danger">
            <FaTrash />
          </Button>
          <Link
            className="btn btn-outline-primary"
            to={"/admin-page/blogs/form-add"}>
            <FiPlus />
          </Link>
        </Col>
      </Row>
      {!state.isDeleted && (
        <Row>
          <h4 className="text-center text-primary">Danh sách bài viết</h4>
          <Table striped hover className="">
            <thead>
              <tr>
                <th>#</th>
                <th>Hình ảnh</th>
                <th>Tên bài viết</th>
                <th>Danh mục</th>
                <th>Ưu tiên</th>
                <th>Trạng thái</th>
                <th>Hành động </th>
              </tr>
            </thead>
            <tbody>
              {state.listBlog &&
                state.listBlog.getAllBlogPagination.map((c, i) => (
                  <tr key={i} className="">
                    <td style={{ verticalAlign: "middle" }}>{i + 1}.</td>
                    <td className="fs-6">
                      <Image
                        height={70}
                        width={70}
                        alt="facility"
                        src={c.mainPhoto.url}
                      />
                    </td>
                    <td className="fs-6" style={{ verticalAlign: "middle" }}>
                      {c.title}
                    </td>
                    <td className="fs-6" style={{ verticalAlign: "middle" }}>
                      {c.type === EnumBlogType.Health && "Sức khỏe"}
                      {c.type === EnumBlogType.Medical && "Y tế"}
                      {c.type === EnumBlogType.Service && "Dịch vụ"}
                    </td>
                    <td className="fs-6" style={{ verticalAlign: "middle" }}>
                      {c.priority}
                    </td>
                    <td className="fs-6" style={{ verticalAlign: "middle" }}>
                      {c.status}
                    </td>
                    <td className="fs-6" style={{ verticalAlign: "middle" }}>
                      <Dropdown drop="down">
                        <Dropdown.Toggle
                          as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            as={Link}
                            className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            to={`/admin-page/blogs/${c.slug}`}>
                            Chi tiết
                          </Dropdown.Item>
                          <Dropdown.Item
                            as={Link}
                            className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            to={`/admin-page/blogs/update/${c.slug}`}>
                            Chỉnh sửa
                          </Dropdown.Item>
                          <Dropdown.Item>
                            {" "}
                            <p
                              className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                              onClick={async () =>
                                await hanldeDelete(
                                  c.id,
                                  "Xóa bài viết",
                                  "Đã xóa bài viết"
                                )
                              }>
                              Xóa bài viết
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
      )}
      {state.isDeleted && (
        <Row>
          <h4 className="text-center text-warning">
            Danh sách bài viết đã xóa
          </h4>
          {(state.listBlog.getAllBlogPagination.length > 0 && (
            <Table striped hover className="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên bài viết</th>
                  <th>Ưu tiên</th>
                  <th>Trạng thái</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {state.listBlog &&
                  state.listBlog.getAllBlogPagination.map((c, i) => (
                    <tr key={i} className="">
                      <td style={{ verticalAlign: "middle" }}>{i + 1}.</td>
                      <td className="fs-6">
                        <Image
                          height={70}
                          width={70}
                          alt="facility"
                          src={c.mainPhoto.url}
                        />
                      </td>
                      <td className="fs-6" style={{ verticalAlign: "middle" }}>
                        {c.title}
                      </td>
                      <td className="fs-6" style={{ verticalAlign: "middle" }}>
                        {c.priority}
                      </td>
                      <td className="fs-6" style={{ verticalAlign: "middle" }}>
                        {c.status}
                      </td>
                      <td className="fs-6" style={{ verticalAlign: "middle" }}>
                        <Dropdown drop="down">
                          <Dropdown.Toggle
                            as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>
                              {" "}
                              <p
                                className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                onClick={async () =>
                                  await hanldeDelete(
                                    c.id,
                                    "Khôi phục bài viết",
                                    "Đã  khôi phục bài viết"
                                  )
                                }>
                                Khôi phục bài viết
                              </p>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          )) || <h6 className="mt-3">Danh sách rỗng</h6>}
        </Row>
      )}
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
          totalPage={
            (state.pagination.rowPerPage &&
              Math.ceil(
                state.pagination.total / state.pagination.rowPerPage
              )) ||
            Math.ceil(state.pagination.total / 10)
          }
        />
      </div>
    </Container>
  );
}

export default ListBlogsPage;
