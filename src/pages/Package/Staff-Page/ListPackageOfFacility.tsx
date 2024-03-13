import { useEffect, useReducer } from "react";
import { Badge, Col, Container, Dropdown, Row, Table } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "src/context/AuthContext";
import {
  useDeletePackageMutation,
  useGetAllPackagePaginationByStaffQuery,
  useGetAllPackagePaginationOfFacilityQuery,
  useGetMedicalFacilityIdByUserIdQuery,
  useGetTotalPackagesCountQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { Link } from "react-router-dom";
import { showToast } from "src/components/sub/toasts";
import ShowAlert from "src/components/sub/alerts";
import {
  handleChangePagination,
  handleChangeSearchTerm,
  handleSetlistPackage,
  initState,
  reducer,
} from "./reducer-list";
import SearchInputCpn from "src/components/sub/InputSearch";
import PaginationCpn from "src/components/sub/Pagination";
import { renderDayOfWeek2 } from "src/utils/getData";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";
function ListPackageByStaffPage() {
  const token = getToken();
  const { checkExpirationToken, infoStaff } = useAuth();

  checkExpirationToken();

  const [state, dispatch] = useReducer(reducer, initState);
  const { refetch, data, loading, error } =
    useGetAllPackagePaginationByStaffQuery({
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
        staffId: infoStaff?.id || "",
      },
    });

  const { data: dataTotal } = useGetTotalPackagesCountQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      search: state.searchTerm,
      staffId: infoStaff?.id || "",
    },
  });
  const [deletePackage, { loading: LoadingDeletePackage }] =
    useDeletePackageMutation({
      fetchPolicy: "no-cache",
    });

  useEffect(() => {
    if (data?.getAllPackagePaginationByStaff) {
      dispatch(handleSetlistPackage(data?.getAllPackagePaginationByStaff));
    }
  }, [data]);
  useEffect(() => {
    if (dataTotal?.getTotalPackagesCount) {
      dispatch(
        handleChangePagination({
          ...state.pagination,
          total: dataTotal.getTotalPackagesCount,
        })
      );
    }
  }, [dataTotal]);
  const hanldeDelete = async (id: string) => {
    var userConfirmed = window.confirm("Bạn có chắc muốn xóa không?");
    if (userConfirmed) {
      try {
        await deletePackage({
          variables: {
            input: id,
          },
        }).then(() => {
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
            loading={loading || LoadingDeletePackage}
            error={error}
          />
        </Col>
        <Col>
          <Link
            className="btn btn-outline-primary"
            to={`/facility-page/packages/form-add/${infoStaff?.medicalFacilityId}`}>
            <FiPlus />
          </Link>
        </Col>
      </Row>
      <Row>
        <Table striped hover className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên Vaccine</th>
              <th>Nguồn gốc</th>
              <th>Giá</th>
              <th>Lịch làm việc</th>
              <th>Hành động </th>
            </tr>
          </thead>
          <tbody>
            {state.listPackage &&
              state.listPackage.map((c, i) => (
                <tr key={i} className="">
                  <td style={{ verticalAlign: "middle" }}>{i + 1}.</td>

                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.packageName}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.price}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.price}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c?.workSchedule?.schedule &&
                      renderDayOfWeek2(c.workSchedule.schedule)}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    <div>
                      <Badge
                        as={Link}
                        className="text-decoration-none"
                        to={`/staff-page/packages/${infoStaff?.medicalFacilityId}/${c.id}`}
                        bg="primary">
                        Chi tiết
                      </Badge>
                    </div>
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

export default ListPackageByStaffPage;
