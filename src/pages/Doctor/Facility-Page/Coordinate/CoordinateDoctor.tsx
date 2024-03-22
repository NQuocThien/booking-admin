import { useEffect, useReducer, useState } from "react";
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
  FilterDoctorInput,
  useGetAllDoctorPaginationOfFacilityLazyQuery,
  useGetTotalDoctorsCountLazyQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import { Col, ListGroup, Row } from "react-bootstrap";
import ListRegisterV2 from "src/components/Pages/Register/ListRegisterV2";
import PaginationCpn from "src/components/sub/Pagination";
import FilterDoctorShort from "src/components/Filters/FilterDoctorShort";
import { GetEPermission, GetRole } from "src/utils/enum-value";
import { IPagination } from "src/assets/contains/item-interface";
function CoordinateDoctor() {
  const { userInfor, currRole, infoStaff } = useAuth();
  const token = getToken();
  const [state, dispatch] = useReducer(reducer, initState);
  const [authorized, setAuthorized] = useState<boolean>(true);
  const [getData, { refetch, data, loading, error }] =
    useGetAllDoctorPaginationOfFacilityLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const [getDataTotal, { data: dataTotal }] = useGetTotalDoctorsCountLazyQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const handleGetData = () => {
    if (currRole === GetRole.Facility) {
      getData({
        variables: {
          limit: state.pagination?.rowPerPage || 10,
          page: state.pagination.current,
          filter: state.filter,
          sortOrder: state.pagination.sort,
          userId: userInfor?.id || "",
        },
      });
      getDataTotal({
        variables: {
          filter: state.filter,
          userId: userInfor?.id || "",
        },
      });
    } else if (currRole === GetRole.Staff) {
      // load data from staff id
      if (infoStaff?.permissions.includes(GetEPermission.Magager)) {
        getData({
          variables: {
            limit: state.pagination?.rowPerPage || 10,
            page: state.pagination.current,
            filter: state.filter,
            sortOrder: state.pagination.sort,
            userId: userInfor?.id || "",
          },
        });
        getDataTotal({
          variables: {
            filter: state.filter,
            userId: userInfor?.id || "",
          },
        });
      } else setAuthorized(false);
    }
  };
  const handleReloadData = (
    filter: FilterDoctorInput,
    pagination: IPagination
  ) => {
    if (currRole === GetRole.Facility) {
      getData({
        variables: {
          limit: pagination?.rowPerPage || 10,
          page: pagination.current,
          filter: filter,
          sortOrder: pagination.sort,
          userId: userInfor?.id || "",
        },
      });
      getDataTotal({
        variables: {
          filter: filter,
          userId: userInfor?.id || "",
        },
      });
    } else if (currRole === GetRole.Staff) {
      // load data from staff id
      if (infoStaff?.permissions.includes(GetEPermission.Magager)) {
        getData({
          variables: {
            limit: pagination?.rowPerPage || 10,
            page: pagination.current,
            filter: filter,
            sortOrder: pagination.sort,
            userId: userInfor?.id || "",
          },
        });
        getDataTotal({
          variables: {
            filter: filter,
            userId: userInfor?.id || "",
          },
        });
      } else setAuthorized(false);
    }
  };
  useEffect(() => {
    handleGetData();
  }, [currRole]);
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
                  handleReloadData(filter, state.pagination);
                }
              }}
              loading={loading}
              error={error}
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
                    {doc.doctorName}
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
                handleReloadData(state.filter, {
                  ...state.pagination,
                  rowPerPage: numberRow,
                });
              }}
              setPageActive={(currPage) => {
                dispatch(
                  handleChangePagination({
                    ...state.pagination,
                    current: currPage,
                  })
                );
                handleReloadData(state.filter, {
                  ...state.pagination,
                  current: currPage,
                });
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
                  ? `Danh sách đăng ký khám theo bác sỉ "${state.selectedDoctor.doctorName}"`
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
