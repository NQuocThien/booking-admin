import { useEffect, useReducer, useState } from "react";
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
  useGetAllMedicalSpecialtiesPaginationOfFacilityLazyQuery,
  useGetAllMedicalSpecialtiesPaginationOfFacilityQuery,
  useGetTotalMedicalSpecialtiesCountLazyQuery,
  useGetTotalMedicalSpecialtiesCountQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import { Col, ListGroup, Row } from "react-bootstrap";
import ListRegisterV2 from "src/components/Pages/Register/ListRegisterV2";
import PaginationCpn from "src/components/sub/Pagination";
import FilterShort from "src/components/Filters/FilterShort";
import { GetEPermission, GetRole } from "src/utils/enum-value";
import ShowAlert from "src/components/sub/alerts";
import { IPagination } from "src/assets/contains/item-interface";
function CoordinateMedcialSpecialties() {
  const { userInfor, currRole, infoStaff } = useAuth();
  const token = getToken();
  const [state, dispatch] = useReducer(reducer, initState);
  const [authorized, setAuthorized] = useState<boolean>(true);
  const [getData, { refetch, data, loading, error }] =
    useGetAllMedicalSpecialtiesPaginationOfFacilityLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const [getDataTotal, { data: dataTotal }] =
    useGetTotalMedicalSpecialtiesCountLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
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
  }, [currRole]);
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
  if (!authorized) {
    return <ShowAlert head="Không có quyền truy cập" />;
  }
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
                handleReloadData(state.pagination, s);
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
export default CoordinateMedcialSpecialties;
