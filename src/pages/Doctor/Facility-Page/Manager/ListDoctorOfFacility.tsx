import { useEffect, useReducer } from "react";
import { Col, Container, Dropdown, Image, Row, Table } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "src/context/AuthContext";
import {
  FilterDoctorInput,
  useDeleteDoctorMutation,
  useGetAllDoctorPaginationOfFacilityQuery,
  useGetMedicalFacilityIdByUserIdQuery,
  useGetTotalDoctorsCountQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { Link } from "react-router-dom";
import { showToast } from "src/components/sub/toasts";
import ShowAlert from "src/components/sub/alerts";
import {
  handleChangeFilter,
  handleChangePagination,
  handleSetlistDoctor,
  initState,
  reducer,
} from "./reducer-list";
import SearchInputCpn from "src/components/sub/InputSearch";
import PaginationCpn from "src/components/sub/Pagination";
import { renderDayOfWeek2 } from "src/utils/getData";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";
import FilterDoctor from "src/components/Filters/FilterDoctor";
function ListDoctorOfFacilityPage() {
  const token = getToken();
  const { checkExpirationToken, userInfor } = useAuth();

  checkExpirationToken();

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
        limit: 10,
        page: state.pagination.current,
        sortOrder: state.pagination.sort,
        userId: userInfor?.id || "",
        filter: state.filter,
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
      userId: userInfor?.id || "",
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
  const [deleteDoctor, { loading: loadingDeleteDoctor }] =
    useDeleteDoctorMutation({
      fetchPolicy: "no-cache",
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
  const hanldeDelete = async (id: string) => {
    var userConfirmed = window.confirm("Bạn có chắc muốn xóa không?");
    if (userConfirmed) {
      try {
        await deleteDoctor({
          variables: {
            input: id,
          },
        }).then((res) => {
          showToast("Xóa thành công ✌️", "success");
          refetch();
        });
      } catch (e) {
        showToast("Có lỗi xảy ra 😢😢", "error");
      }
    } else {
    }
  };
  // if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <Container fluid className={` ${s.component}`}>
      <Row>
        <Col xl={10} lg={10}>
          {/* <SearchInputCpn
            onSearch={(s: string) => {
              dispatch(handleChangeFilter({ ...state.filter, name: s }));
            }}
            onSort={(sort) => {
              dispatch(
                handleChangePagination({
                  ...state.pagination,
                  sort: sort,
                })
              );
            }}
            loading={loading || loadingDeleteDoctor}
            error={error}
          /> */}
          <FilterDoctor
            onChangeFilter={(filter: FilterDoctorInput | undefined) => {
              if (filter) dispatch(handleChangeFilter(filter));
            }}
            onSort={(sort) => {
              dispatch(
                handleChangePagination({
                  ...state.pagination,
                  sort: sort,
                })
              );
            }}
            loading={loading || loadingDeleteDoctor}
            error={error}
          />
        </Col>
        <Col>
          <Link
            className="btn btn-outline-primary"
            to={`/facility-page/doctors/form-add/${dataFacilityId?.getMedicalFacilityInfo.id}`}>
            <FiPlus />
          </Link>
        </Col>
      </Row>
      <Row>
        <Table striped hover className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Hình ảnh</th>
              <th>Tên Bác sĩ</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Giới tính</th>
              <th>Giá khám</th>
              <th>Lịch làm việc</th>
              <th>Hành động </th>
            </tr>
          </thead>
          <tbody>
            {state.listDoctor &&
              state.listDoctor.map((c, i) => (
                <tr key={i} className="">
                  <td style={{ verticalAlign: "middle" }}>{i + 1}.</td>
                  <td className="fs-6">
                    <Image
                      height={70}
                      width={70}
                      alt="doctor"
                      src={c.avatar.url}
                    />
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.doctorName}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.email}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.numberPhone}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.gender}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {c.price}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    {renderDayOfWeek2(c.workSchedule.schedule)}
                  </td>
                  <td className="fs-6" style={{ verticalAlign: "middle" }}>
                    <Dropdown drop="down">
                      <Dropdown.Toggle
                        as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={Link}
                          className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          to={`/facility-page/doctors/${dataFacilityId?.getMedicalFacilityInfo.id}/${c.id}`}>
                          Chi tiết
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          to={`/facility-page/doctors/update/${dataFacilityId?.getMedicalFacilityInfo.id}/${c.id}`}>
                          Chỉnh sửa
                        </Dropdown.Item>
                        <Dropdown.Item>
                          {" "}
                          <p
                            className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            onClick={async () => await hanldeDelete(c.id)}>
                            Xóa bác sỉ
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

export default ListDoctorOfFacilityPage;
