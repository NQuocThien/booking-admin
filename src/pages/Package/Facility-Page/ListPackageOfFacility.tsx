import { useEffect, useReducer, useState } from "react";
import { Col, Container, Dropdown, Row, Table } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "src/context/AuthContext";
import {
  useDeletePackageMutation,
  useGetAllPackagePaginationOfFacilityLazyQuery,
  useGetMedicalFacilityIdByUserIdLazyQuery,
  useGetTotalPackagesCountLazyQuery,
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
import { GetEPermission, GetRole } from "src/utils/enum-value";
import { IPagination } from "src/assets/contains/item-interface";
function ListPackageOfFacilityPage() {
  const token = getToken();
  const { checkExpirationToken, userInfor, infoStaff, currRole } = useAuth();

  checkExpirationToken();
  const [state, dispatch] = useReducer(reducer, initState);
  const [facilityId, setFacilityId] = useState<string>("");
  const [authorized, setAuthorized] = useState<boolean>(true);
  const [getData, { refetch, data, loading, error }] =
    useGetAllPackagePaginationOfFacilityLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const [getDataFacilityId, { data: dataFacilityId }] =
    useGetMedicalFacilityIdByUserIdLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const [getDataTotal, { data: dataTotal }] = useGetTotalPackagesCountLazyQuery(
    {
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
    }
  );

  const handleGetData = async () => {
    if (currRole === GetRole.Facility) {
      await getData({
        variables: {
          limit: 10,
          page: state.pagination.current,
          search: state.searchTerm,
          sortOrder: state.pagination.sort,
          userId: userInfor?.id || "",
        },
      });
      await getDataTotal({
        variables: {
          search: state.searchTerm,
          userId: userInfor?.id || "",
        },
      });
      await getDataFacilityId({
        variables: {
          userId: userInfor?.id || "",
        },
      });
    } else if (currRole === GetRole.Staff) {
      // load data from staff id
      if (infoStaff?.permissions.includes(GetEPermission.Magager)) {
        await getData({
          variables: {
            limit: 10,
            page: state.pagination.current,
            search: state.searchTerm,
            sortOrder: state.pagination.sort,
            staffId: infoStaff?.id || "",
          },
        });
        await getDataTotal({
          variables: {
            search: state.searchTerm,
            staffId: infoStaff?.id || "",
          },
        });
        setFacilityId(infoStaff.medicalFacilityId);
      } else setAuthorized(false);
    }
  };
  const handleReloadData = async (
    pagination: IPagination,
    searchTerm: string
  ) => {
    if (currRole === GetRole.Facility) {
      await getData({
        variables: {
          limit: 10,
          page: pagination.current,
          search: searchTerm,
          sortOrder: pagination.sort,
          userId: userInfor?.id || "",
        },
      });
    } else if (currRole === GetRole.Staff) {
      // load data from staff id
      if (infoStaff?.permissions.includes(GetEPermission.Magager)) {
        await getData({
          variables: {
            limit: 10,
            page: pagination.current,
            search: searchTerm,
            sortOrder: pagination.sort,
            staffId: infoStaff?.id || "",
          },
        });
        setFacilityId(infoStaff.medicalFacilityId);
      } else setAuthorized(false);
    }
  };
  const handleClickChangePagination = (pagination: IPagination) => {
    dispatch(handleChangePagination(pagination));
    handleReloadData(pagination, state.searchTerm);
  };
  useEffect(() => {
    handleGetData();
  }, [currRole]);
  useEffect(() => {
    if (dataFacilityId?.getMedicalFacilityInfo) {
      setFacilityId(dataFacilityId.getMedicalFacilityInfo.id);
    }
  }, [dataFacilityId, currRole]);
  const [deletePackage, { loading: LoadingDeletePackage }] =
    useDeletePackageMutation({
      fetchPolicy: "no-cache",
    });

  useEffect(() => {
    if (data?.getAllPackagePaginationOfFacility) {
      dispatch(handleSetlistPackage(data?.getAllPackagePaginationOfFacility));
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
  if (!authorized) {
    return <ShowAlert head="Không có quyền truy cập" />;
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
              handleClickChangePagination({ ...state.pagination, sort: sort });
            }}
            loading={loading || LoadingDeletePackage}
            error={error}
          />
        </Col>
        <Col>
          <Link
            className="btn btn-outline-primary"
            to={`/facility-page/packages/form-add/${facilityId}`}>
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
                    <Dropdown drop="down">
                      <Dropdown.Toggle
                        as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={Link}
                          className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          to={`/facility-page/packages/${facilityId}/${c.id}`}>
                          Chi tiết
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          to={`/facility-page/packages/update/${facilityId}/${c.id}`}>
                          Chỉnh sửa
                        </Dropdown.Item>
                        <Dropdown.Item>
                          {" "}
                          <p
                            className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            onClick={async () => await hanldeDelete(c.id)}>
                            Xóa gói khám
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

export default ListPackageOfFacilityPage;
