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
  useGetAllMedicalSpecialtiesPaginationOfFacilityQuery,
  useGetTotalMedicalSpecialtiesCountQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import { Col, ListGroup, Row } from "react-bootstrap";
import ListRegisterV2 from "src/components/Pages/Register/ListRegisterV2";
import PaginationCpn from "src/components/sub/Pagination";
import FilterShort from "src/components/Filters/FilterShort";
function CoordinateMedcialSpecialties() {
  const { userInfor } = useAuth();
  const token = getToken();
  const [state, dispatch] = useReducer(reducer, initState);
  const { refetch, data, loading, error } =
    useGetAllMedicalSpecialtiesPaginationOfFacilityQuery({
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
  const { data: dataTotal } = useGetTotalMedicalSpecialtiesCountQuery({
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
    if (data?.getAllMedicalSpecialtiesPaginationOfFacility) {
      dispatch(
        handleSetlistSpecialty(
          data?.getAllMedicalSpecialtiesPaginationOfFacility
        )
      );
    }
  }, [data]);
  useEffect(() => {
    if (dataTotal?.getTotalMedicalSpecialtiesCount) {
      dispatch(
        handleChangePagination({
          ...state.pagination,
          total: dataTotal.getTotalMedicalSpecialtiesCount,
        })
      );
    }
  }, [dataTotal]);
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
                    {spec.name}
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
                state?.selectedSpecialty !== undefined
                  ? `Danh sách đăng ký khám theo chuyên khoa "${state.selectedSpecialty.name}"`
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
export default CoordinateMedcialSpecialties;
