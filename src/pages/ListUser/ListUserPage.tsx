import { getToken } from "src/utils/contain";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import {
  User,
  useActiveUserMutation,
  useGetAllUsersPaginationQuery,
  useGetTotalUsersCountQuery,
  useSingupByAdminMutation,
  useUpdateRolesMutation,
} from "src/graphql/webbooking-service.generated";
import { memo, useCallback, useEffect, useReducer } from "react";
import { showToast } from "src/components/sub/toasts";
import ModalCpn from "src/components/sub/Modal";
import { FcSupport } from "react-icons/fc";
import { ERoles } from "src/assets/contains/component-enum";
import { useAuth } from "src/context/AuthContext";
import SearchInputCpn from "src/components/sub/InputSearch";

import {
  handleChangShowModal,
  handleChangUserClicked,
  handleChangeCreateUser,
  handleChangeFiltered,
  handleChangePagination,
  handleChangeSearchTerm,
  handleChangeStateRoles,
  handleSetListUser,
  initState,
  reducer,
} from "./reducer";
import PaginationCpn from "src/components/sub/Pagination";
import StatusCpn from "src/components/sub/Status";

function ListUserPage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  const [state, dispatch] = useReducer(reducer, initState);
  const {
    data: dataUser,
    loading: loadUser,
    error: errUser,
  } = useGetAllUsersPaginationQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      search: state.searchTerm,
      limit: 10,
      page: state.pagination.current,
      sortOrder: state.pagination.sort,
    },
  });
  const {
    data: dataUserTotal,
    loading: loadUserTotal,
    error: errUserTotal,
  } = useGetTotalUsersCountQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      search: state.searchTerm,
    },
  });
  const [updateRolesMutation] = useUpdateRolesMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [activeUser] = useActiveUserMutation({
    fetchPolicy: "no-cache",
  });
  const [createNewUser] = useSingupByAdminMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  // const [stateRoles, setStateRoles] = useState<ICheckRoles>({
  //   admin: false,
  //   clinic: false,
  //   customer: false,
  //   doctor: false,
  //   staff: false,
  // });

  // const [userClicked, setUserClicked] = useState<User | undefined>();

  const hanldeActiveUser = (id: string) => {
    checkExpirationToken();
    activeUser({
      variables: {
        input: id,
      },
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    })
      .then(() => {
        // refetch();
        showToast("👍 Đã lưu thay đổi", undefined, 1000);
        const listUsersUpdated: User[] = state.listUser.map((user) => {
          if (user.id === id) {
            const userUpdated: User = {
              ...user,
              active: !user.active,
            };
            return userUpdated;
          }
          return user;
        });
        dispatch(handleSetListUser(listUsersUpdated));
      })
      .catch(() => {
        showToast("Lỗi", "error");
      });
  };
  const handleSearch = useCallback(() => {
    if (Array.isArray(state.listUser))
      dispatch(
        handleChangeFiltered(
          state.searchTerm
            ? state.listUser?.filter((c) =>
                c.username
                  ?.toLowerCase()
                  .includes(state.searchTerm.toLowerCase())
              )
            : state.listUser
        )
      );
  }, [state.listUser, state.searchTerm]);

  const handleCloseModal = useCallback(() => {
    dispatch(handleChangShowModal({ add: false, roles: false }));
  }, []);
  const handleShowModal = (user: User) => {
    checkExpirationToken();
    dispatch(handleChangUserClicked(user));

    dispatch(
      handleChangeStateRoles({
        admin: false,
        clinic: false,
        customer: false,
        doctor: false,
        staff: false,
      })
    ); // reset role
    if (user.roles) {
      user.roles.forEach((role) => {
        switch (role) {
          case ERoles.admin:
            dispatch(
              handleChangeStateRoles({
                ...state.stateRoles,
                admin: true,
              })
            );
            break;
          case ERoles.clinic:
            dispatch(
              handleChangeStateRoles({
                ...state.stateRoles,
                clinic: true,
              })
            );
            break;
          case ERoles.customer:
            dispatch(
              handleChangeStateRoles({
                ...state.stateRoles,
                customer: true,
              })
            );
            break;
          // case ERoles.doctor:
          //   dispatch(
          //     handleChangeStateRoles({
          //       ...state.stateRoles,
          //       doctor: true,
          //     })
          //   );
          case ERoles.doctor:
            dispatch(
              handleChangeStateRoles({
                ...state.stateRoles,
                doctor: true,
              })
            );
            break;
          case ERoles.staff:
            dispatch(
              handleChangeStateRoles({
                ...state.stateRoles,
                staff: true,
              })
            );
            break;
          default:
            break;
        }
      });
    }
    // setOpenModal((pre) => ({ ...pre, roles: true }));
    dispatch(handleChangShowModal({ ...state.showModals, roles: true }));
  };
  const handleActionFormChangeRoles = () => {
    var roles: string[] = [];
    if (state.stateRoles.admin) roles.push(ERoles.admin);
    if (state.stateRoles.clinic) roles.push(ERoles.clinic);
    if (state.stateRoles.doctor) roles.push(ERoles.doctor);
    if (state.stateRoles.customer) roles.push(ERoles.customer);
    if (state.stateRoles.staff) roles.push(ERoles.staff);
    if (state.userClicked?.id)
      updateRolesMutation({
        variables: {
          input: {
            id: state.userClicked.id,
            roles: roles,
          },
        },
      }).then(() => {
        const updateUser = state.listUser.map((user, i) => {
          if (state.userClicked && user.id === state.userClicked.id) {
            return {
              ...user,
              roles: roles,
            };
          }
          return user;
        });
        dispatch(handleSetListUser(updateUser));

        showToast("Đã cập nhật 👍", "success", 1000);
      });
    dispatch(handleChangShowModal({ ...state.showModals, roles: false }));
  };
  // const [createUser, setCreateUser] = useState<CreateUserByAdminInput>({
  //   username: "",
  //   email: "",
  //   password: "",
  // });
  const handelCreateUser = async () => {
    await createNewUser({ variables: { input: state.createUser } }).then(() => {
      showToast("Đã tạo mới tài khoản", undefined, 2000);
      dispatch(handleChangShowModal({ add: false, roles: false }));
      dispatch(
        handleChangeCreateUser({
          ...state.createUser,
          email: "",
          password: "",
          username: "",
        })
      );
      // refetch();
    });
  };

  useEffect(() => {
    if (dataUser?.getAllUsersPagination) {
      dispatch(handleSetListUser(dataUser.getAllUsersPagination));
    }
  }, [dataUser]);

  useEffect(() => {
    dispatch(handleChangePagination({ ...state.pagination, current: 1 }));
  }, [state.searchTerm, state.pagination]);
  useEffect(() => {
    if (dataUserTotal?.totalUsersCount) {
      dispatch(
        handleChangePagination({
          ...state.pagination,
          total: dataUserTotal.totalUsersCount,
        })
      );
    }
  }, [dataUserTotal, state.pagination]);
  useEffect(() => {
    handleSearch();
  }, [state.listUser, handleSearch]);
  return (
    <div className="overflow-x-auto">
      <Button
        variant="outline-success"
        className="mb-1"
        size="sm"
        onClick={() => {
          dispatch(handleChangShowModal({ ...state.showModals, add: true }));
        }}>
        Tạo tài khoản
      </Button>
      <SearchInputCpn
        onSearch={(s: string) => {
          dispatch(handleChangeSearchTerm(s));
          // handleSearch();
        }}
        onSort={(sort) => {
          dispatch(
            handleChangePagination({
              ...state.pagination,
              sort: sort,
            })
          );
        }}
      />
      <StatusCpn loading={loadUserTotal} error={errUserTotal} />
      {!loadUserTotal && <StatusCpn loading={loadUser} error={errUser} />}

      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            {/* <th>Tên</th> */}
            <th>Tài khoản</th>
            <th>Email</th>
            <th>Quyền</th>
            <td></td>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {state.filtered &&
            state.filtered.map((user, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                {/* <td>{user.fullname}</td> */}
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.roles?.map((role, i) => (
                    <span key={i} className="mx-1">
                      {role}
                    </span>
                  ))}
                </td>
                <td role="button" onClick={() => handleShowModal(user)}>
                  <FcSupport />
                </td>
                <td
                  onClick={() => {
                    hanldeActiveUser(user.id);
                  }}>
                  {(user?.active && (
                    <p role="button" className="text-info">
                      Đã kích hoạt
                    </p>
                  )) || (
                    <p role="button" className="text-danger">
                      Đã khóa
                    </p>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ModalCpn
        headerText={`Chỉnh sửa quyền user "${state.userClicked?.username}"`}
        openRequest={state.showModals.roles}
        handleSave={handleActionFormChangeRoles}
        handleClose={handleCloseModal}>
        <Form
          onSubmit={handleActionFormChangeRoles}
          className="d-flex flex-column align-items-center">
          <Row>
            <Col>
              <Form.Check
                type="switch"
                id="custom-admin"
                label="Admin"
                name="check-admin"
                checked={state.stateRoles.admin}
                onChange={() =>
                  // setStateRoles((pre) => ({ ...pre, admin: !pre.admin }))
                  dispatch(
                    handleChangeStateRoles({
                      ...state.stateRoles,
                      admin: !state.stateRoles.admin,
                    })
                  )
                }
              />

              <Form.Check
                type="switch"
                id="custom-clinic"
                label="Clinic"
                name="check-clinic"
                checked={state.stateRoles.clinic}
                onChange={() =>
                  dispatch(
                    handleChangeStateRoles({
                      ...state.stateRoles,
                      clinic: !state.stateRoles.clinic,
                    })
                  )
                }
              />
            </Col>
            <Col>
              <Form.Check
                type="switch"
                id="custom-doctor"
                label="Doctor"
                name="check-doctor"
                checked={state.stateRoles.doctor}
                onChange={() =>
                  // setStateRoles((pre) => ({ ...pre, doctor: !pre.doctor }))
                  dispatch(
                    handleChangeStateRoles({
                      ...state.stateRoles,
                      doctor: !state.stateRoles.doctor,
                    })
                  )
                }
              />
              <Form.Check
                type="switch"
                id="custom-customer"
                label="Customer"
                name="check-customer"
                checked={state.stateRoles.customer}
                onChange={() =>
                  // setStateRoles((pre) => ({ ...pre, customer: !pre.customer }))
                  dispatch(
                    handleChangeStateRoles({
                      ...state.stateRoles,
                      customer: state.stateRoles.customer,
                    })
                  )
                }
              />
              <Form.Check
                type="switch"
                id="custom-customer"
                label="Staff"
                name="check-customer"
                checked={state.stateRoles.staff}
                onChange={() =>
                  dispatch(
                    handleChangeStateRoles({
                      ...state.stateRoles,
                      staff: state.stateRoles.staff,
                    })
                  )
                }
              />
            </Col>
          </Row>
        </Form>
      </ModalCpn>
      <ModalCpn
        handleClose={handleCloseModal}
        handleSave={handelCreateUser}
        headerText="Tạo tài khoản"
        openRequest={state.showModals.add}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => {
                dispatch(
                  handleChangeCreateUser({
                    ...state.createUser,
                    email: e.target.value,
                  })
                );
              }}
              value={state.createUser.username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                // setCreateUser((pre) => ({ ...pre, email: e.target.value }));
                dispatch(
                  handleChangeCreateUser({
                    ...state.createUser,
                    email: e.target.value,
                  })
                );
              }}
              value={state.createUser.email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                dispatch(
                  handleChangeCreateUser({
                    ...state.createUser,
                    password: e.target.value,
                  })
                );
              }}
              value={state.createUser.password}
            />
          </Form.Group>
        </Form>
      </ModalCpn>
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
    </div>
  );
}

export default memo(ListUserPage);
