import { useEffect, useReducer } from "react";
import s from "src/assets/scss/General.module.scss";
import {
  handleChangePagination,
  handleChangeSearchTerm,
  handleChangeSelectedSpecialty,
  handleSetlistSpecialty,
  initState,
  reducer,
} from "./reducer-list";
import {
  MedicalSpecialties,
  useGetAllMedicalSpecialtiesPaginationByStaffQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import { Col, ListGroup, Row } from "react-bootstrap";
import ListRegisterV2 from "src/components/Pages/Register/ListRegisterV2";
import PaginationCpn from "src/components/sub/Pagination";
import FilterShort from "src/components/Filters/FilterShort";
function CoordinateMedcialSpecialtiesByStaff() {
  const { infoStaff } = useAuth();
  const token = getToken();
  const [state, dispatch] = useReducer(reducer, initState);
  const { refetch, data, loading, error } =
    useGetAllMedicalSpecialtiesPaginationByStaffQuery({
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

  useEffect(() => {
    if (data?.getAllMedicalSpecialtiesPaginationByStaff) {
      dispatch(
        handleSetlistSpecialty(data?.getAllMedicalSpecialtiesPaginationByStaff)
      );
    }
  }, [data]);

  const handleClicked = (spec: MedicalSpecialties) => {
    dispatch(handleChangeSelectedSpecialty(spec));
  };
  return (
    <Row>
      <Col className={`col-3 p-2`}>
        <div className={`${s.component}`}>
          <Row>
            <h5>Chọn chuyên khoa</h5>
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
          <Row className="mt-1 px-2">
            <ListGroup>
              {state.listSpecialty &&
                state.listSpecialty.map((spec, i) => (
                  <ListGroup.Item
                    className="fs-6"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClicked(spec)}
                    key={i}
                    active={spec.id === state.selectedSpecialty?.id}
                    variant="info">
                    {spec.specialtyName}
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
              totalPage={Math.ceil(
                (infoStaff?.specialtyId &&
                  infoStaff?.specialtyId?.length / 10) ||
                  1
              )}
            />
          </div>
        </div>
      </Col>
      <Col className={`p-2`}>
        <div className={`${s.component}`}>
          <Row className="mt-5 px-2">
            <ListRegisterV2
              title={
                state?.selectedSpecialty !== undefined
                  ? `Danh sách đăng ký khám theo chuyên khoa "${state.selectedSpecialty.specialtyName}"`
                  : "Vui lòng chọn chuyên khoa"
              }
              listSchedule={state.selectedSpecialty?.workSchedule?.schedule}
              specialtyId={state.selectedSpecialty?.id}
            />
          </Row>
        </div>
      </Col>
    </Row>
  );
}
export default CoordinateMedcialSpecialtiesByStaff;
