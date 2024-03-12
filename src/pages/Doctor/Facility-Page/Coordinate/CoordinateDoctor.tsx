import { useEffect, useReducer } from "react";
import s from "src/assets/scss/General.module.scss";
import {
  handleChangeFilter,
  handleChangePagination,
  handleChangeSelectedDoctor,
  handleSetlistDoctor,
  initState,
  reducer,
} from "./reducer-list";
import {
  Doctor,
  useGetAllDoctorPaginationOfFacilityQuery,
  useGetMedicalFacilityIdByUserIdQuery,
  useGetTotalDoctorsCountQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import { Col, ListGroup, Row } from "react-bootstrap";
import ListRegisterV2 from "src/components/Pages/Register/ListRegisterV2";
import PaginationCpn from "src/components/sub/Pagination";
import FilterDoctorShort from "src/components/Filters/FilterDoctorShort";
function CoordinateDoctor() {
  const { userInfor } = useAuth();
  const token = getToken();
  const [state, dispatch] = useReducer(reducer, initState);
  const { refetch, data, loading, error } =
    useGetAllDoctorPaginationOfFacilityQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      variables: {
        limit: state.pagination?.rowPerPage || 10,
        page: state.pagination.current,
        filter: state.filter,
        sortOrder: state.pagination.sort,
        userId: userInfor?.id || "",
      },
    });
  const { data: dataFacilityId } = useGetMedicalFacilityIdByUserIdQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      input: userInfor?.id || "",
    },
  });
  const { data: dataTotal } = useGetTotalDoctorsCountQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      filter: state.filter,
      userId: userInfor?.id || "",
    },
  });
  useEffect(() => {
    if (data?.getAllDoctorPaginationOfFacility) {
      dispatch(handleSetlistDoctor(data?.getAllDoctorPaginationOfFacility));
    }
  }, [data]);
  useEffect(() => {
    if (dataTotal?.getTotalDoctorsCount) {
      dispatch(
        handleChangePagination({
          ...state.pagination,
          total: dataTotal.getTotalDoctorsCount,
        })
      );
    }
  }, [dataTotal]);
  const handleClicked = (doc: Doctor) => {
    dispatch(handleChangeSelectedDoctor(doc));
  };
  return (
    <Row>
      <Col className={`col-3 p-2`}>
        <div className={`${s.component}`}>
          <Row>
            <h5>Chọn Bác sỉ</h5>
          </Row>
          <Row>
            <FilterDoctorShort
              onChangeFilter={(filter) => {
                if (filter) {
                  dispatch(handleChangeFilter(filter));
                }
              }}
            />
          </Row>
          <Row className="mt-3 px-2">
            <ListGroup>
              {state.listDoctor &&
                state.listDoctor.map((doc, i) => (
                  <ListGroup.Item
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClicked(doc)}
                    key={i}
                    active={doc.id === state.selectedDoctor?.id}
                    variant="info">
                    {doc.name}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Row>
          <div className="d-flex my-2 justify-content-center">
            <PaginationCpn
              short
              isRowPerPage
              optionsRow={[1, 2, 5, 10]}
              rowPerPage={state.pagination.rowPerPage || 0}
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
                state.pagination.rowPerPage
                  ? state.pagination.total / state.pagination.rowPerPage
                  : state.pagination.total / 10
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
                state?.selectedDoctor !== undefined
                  ? `Danh sách đăng ký khám theo bác sỉ "${state.selectedDoctor.name}"`
                  : "Vui lòng chọn bác sỉ"
              }
              listSchedule={state.selectedDoctor?.workSchedule.schedule}
              doctorId={state.selectedDoctor?.id}
            />
          </Row>
        </div>
      </Col>
    </Row>
  );
}
export default CoordinateDoctor;
