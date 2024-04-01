import { useEffect, useReducer } from "react";
import s from "src/assets/scss/General.module.scss";
import {
  handleChangePagination,
  handleChangeSearchTerm,
  handleChangeSelectedPackage,
  handleSetlistPackage,
  initState,
  reducer,
} from "./reducer-list";
import {
  Package,
  useGetAllPackagePaginationByStaffQuery,
  useGetTotalPackagesCountQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import { Col, ListGroup, Row } from "react-bootstrap";
import ListRegisterV2 from "src/components/Pages/Register/ListRegisterV2";
import PaginationCpn from "src/components/sub/Pagination";
import FilterShort from "src/components/Filters/FilterShort";
function CoordinatePackagesByStaff() {
  const { infoStaff } = useAuth();
  const token = getToken();
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
  const handleClicked = (spec: Package) => {
    dispatch(handleChangeSelectedPackage(spec));
  };
  return (
    <Row>
      <Col className={`col-3 p-2`}>
        <div className={`${s.component}`}>
          <Row>
            <h5>Chọn gói khám</h5>
          </Row>
          <Row className="mt-3">
            <FilterShort
              onSearch={(s: string) => {
                dispatch(handleChangeSearchTerm(s));
              }}
              loading={loading}
              error={error}
            />
          </Row>
          <Row className="mt-2 px-2">
            <ListGroup>
              {state.listPackage &&
                state.listPackage.map((pac, i) => (
                  <ListGroup.Item
                    className="fs-6"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClicked(pac)}
                    key={i}
                    active={pac.id === state.selectedPackage?.id}
                    variant="info">
                    {pac.packageName}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Row>
          <div className="d-flex my-2 justify-content-center">
            <PaginationCpn
              short
              setRowsPerPage={(numberRow) => {
                dispatch(
                  handleChangePagination({
                    ...state.pagination,
                    rowPerPage: numberRow,
                  })
                );
              }}
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
        </div>
      </Col>
      <Col className={`p-2`}>
        <div className={`${s.component}`}>
          <Row className="mt-5 px-2">
            <ListRegisterV2
              title={
                state?.selectedPackage !== undefined
                  ? `Danh sách đăng ký gói khám "${state.selectedPackage.packageName}"`
                  : "Vui lòng chọn gói khám"
              }
              listSchedule={state.selectedPackage?.workSchedule?.schedule}
              packageId={state.selectedPackage?.id}
            />
          </Row>
        </div>
      </Col>
    </Row>
  );
}
export default CoordinatePackagesByStaff;
