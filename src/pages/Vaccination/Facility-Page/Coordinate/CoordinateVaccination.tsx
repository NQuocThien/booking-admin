import { useEffect, useReducer, useState } from "react";
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
  useGetAllVaccinationPaginationOfFacilityLazyQuery,
  useGetTotalVaccinationsCountLazyQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import { Col, ListGroup, Row } from "react-bootstrap";
import ListRegisterV2 from "src/components/Pages/Register/ListRegisterV2";
import PaginationCpn from "src/components/sub/Pagination";
import FilterShort from "src/components/Filters/FilterShort";
import { GetEPermission, GetRole } from "src/utils/enum-value";
import { IPagination } from "src/assets/contains/item-interface";
function CoordinateVaccination() {
  const { userInfor, currRole, infoStaff } = useAuth();
  const token = getToken();
  const [state, dispatch] = useReducer(reducer, initState);
  const [authorized, setAuthorized] = useState<boolean>(true);
  const [getData, { refetch, data, loading, error }] =
    useGetAllVaccinationPaginationOfFacilityLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const [getDataTotal, { data: dataTotal }] =
    useGetTotalVaccinationsCountLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const handleLoadData = () => {
    if (currRole === GetRole.Facility) {
      getData({
        variables: {
          limit: 10,
          page: state.pagination.current,
          search: state.searchTerm,
          sortOrder: state.pagination.sort,
          userId: userInfor?.id || "",
        },
      });
      getDataTotal({
        variables: {
          search: state.searchTerm,
          userId: userInfor?.id || "",
        },
      });
    } else if (currRole === GetRole.Staff) {
      // load data from staff id
      if (infoStaff?.permissions.includes(GetEPermission.Magager)) {
        getData({
          variables: {
            limit: 10,
            page: state.pagination.current,
            search: state.searchTerm,
            sortOrder: state.pagination.sort,
            staffId: infoStaff?.id || "",
          },
        });
        getDataTotal({
          variables: {
            search: state.searchTerm,
            staffId: infoStaff?.id || "",
          },
        });
      } else setAuthorized(false);
    }
  };
  const handleReloadData = (pagination: IPagination, searchTerm: string) => {
    if (currRole === GetRole.Facility) {
      getData({
        variables: {
          limit: 10,
          page: pagination.current,
          search: searchTerm,
          sortOrder: pagination.sort,
          userId: userInfor?.id || "",
        },
      });
      getDataTotal({
        variables: {
          search: searchTerm,
          userId: userInfor?.id || "",
        },
      });
    } else if (currRole === GetRole.Staff) {
      // load data from staff id
      if (infoStaff?.permissions.includes(GetEPermission.Magager)) {
        getData({
          variables: {
            limit: 10,
            page: pagination.current,
            search: searchTerm,
            sortOrder: pagination.sort,
            staffId: infoStaff?.id || "",
          },
        });
        getDataTotal({
          variables: {
            search: searchTerm,
            staffId: infoStaff?.id || "",
          },
        });
      } else setAuthorized(false);
    }
  };
  useEffect(() => {
    handleLoadData();
  }, [currRole]);
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
                handleReloadData(state.pagination, s);
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
                handleReloadData(
                  {
                    ...state.pagination,
                    rowPerPage: numberRow,
                  },
                  state.searchTerm
                );
              }}
              setPageActive={(currPage) => {
                dispatch(
                  handleChangePagination({
                    ...state.pagination,
                    current: currPage,
                  })
                );
                handleReloadData(
                  {
                    ...state.pagination,
                    current: currPage,
                  },
                  state.searchTerm
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
