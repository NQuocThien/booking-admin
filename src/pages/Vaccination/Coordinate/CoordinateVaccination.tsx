import { useEffect, useReducer } from "react";
import s from "src/assets/scss/General.module.scss";
import {
  handleChangePagination,
  handleChangeSearchTerm,
  handleChangeSelectedVaccine,
  handleSetlistVaccine,
  initState,
  reducer,
} from "./reducer-list";
import {
  Vaccination,
  useGetAllVaccinationPaginationOfFacilityQuery,
  useGetTotalVaccinationsCountQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import { Col, ListGroup, Row } from "react-bootstrap";
import ListRegisterV2 from "src/components/Pages/Register/ListRegisterV2";
import PaginationCpn from "src/components/sub/Pagination";
import SearchInputCpn from "src/components/sub/InputSearch";
import FilterShort from "src/components/Filters/FilterShort";
function CoordinateVaccination() {
  const { userInfor } = useAuth();
  const token = getToken();
  const [state, dispatch] = useReducer(reducer, initState);
  const { refetch, data, loading, error } =
    useGetAllVaccinationPaginationOfFacilityQuery({
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
        userId: userInfor?.id || "",
      },
    });
  const { data: dataTotal } = useGetTotalVaccinationsCountQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      search: state.searchTerm,
      userId: userInfor?.id || "",
    },
  });
  useEffect(() => {
    if (data?.getAllVaccinationPaginationOfFacility) {
      dispatch(
        handleSetlistVaccine(data?.getAllVaccinationPaginationOfFacility)
      );
    }
  }, [data]);
  useEffect(() => {
    if (dataTotal?.getTotalVaccinationsCount) {
      dispatch(
        handleChangePagination({
          ...state.pagination,
          total: dataTotal.getTotalVaccinationsCount,
        })
      );
    }
  }, [dataTotal]);
  const handleClicked = (spec: Vaccination) => {
    dispatch(handleChangeSelectedVaccine(spec));
  };
  return (
    <Row>
      <Col className={`col-3 p-2`}>
        <div className={`${s.component}`}>
          <Row>
            <h5>Chọn vaccine</h5>
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
              {state.listVaccine &&
                state.listVaccine.map((vac, i) => (
                  <ListGroup.Item
                    className="fs-6"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClicked(vac)}
                    key={i}
                    active={vac.id === state.selectedVaccine?.id}
                    variant="info">
                    {vac.vaccineName}
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
                state?.selectedVaccine !== undefined
                  ? `Danh sách đăng ký khám tiêm chủng "${state.selectedVaccine.vaccineName}"`
                  : "Vui lòng chọn loại vaccine"
              }
              listSchedule={state.selectedVaccine?.workSchedule?.schedule}
              vaccineId={state.selectedVaccine?.id}
            />
          </Row>
        </div>
      </Col>
    </Row>
  );
}
export default CoordinateVaccination;
