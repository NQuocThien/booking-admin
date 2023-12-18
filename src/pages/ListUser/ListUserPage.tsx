import { getToken } from "src/utils/contain";
import { Button, Col, Form, Modal, Row, Spinner, Table } from "react-bootstrap";
import {
  CreateUserByAdminInput,
  CreateUserInput,
  User,
  useActiveUserMutation,
  useGetAllUserQuery,
  useSingupByAdminMutation,
  useUpdateRolesMutation,
} from "src/graphql/webbooking-service.generated";
import { memo, useCallback, useEffect, useState } from "react";
import { showToast } from "src/components/toasts/toasts";
import ModalCpn from "src/components/toasts/Modal";
import { FcSupport } from "react-icons/fc";
import ShowAlert from "src/components/toasts/alerts";
import { ICheckRoles } from "src/assets/contains/item-interface";
import { ERoles } from "src/assets/contains/component-enum";
import { useAuth } from "src/context/AuthContext";
import { setShowModal } from "../ListDoctor/type";
import SearchInputCpn from "src/components/toasts/InputSearch";
interface IShowModal {
  roles: boolean;
  add: boolean;
}
function ListUserPage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  const { refetch, data, loading, error } = useGetAllUserQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filtered, setFiltered] = useState<User[]>();

  const [listUser, setListUser] = useState<User[] | undefined>(data?.users);
  const [stateRoles, setStateRoles] = useState<ICheckRoles>({
    admin: false,
    clinic: false,
    customer: false,
    doctor: false,
  });
  useEffect(() => {
    setListUser(data?.users);
  }, [data]);
  useEffect(() => {
    handleSearch();
  }, [listUser]);
  const [userClicked, setUserClicked] = useState<User | undefined>();

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
        refetch();
        showToast("👍 Đã lưu thay đổi", undefined, 1000);
      })
      .catch(() => {
        showToast("Lỗi", "error");
      });
  };
  const [openModal, setOpenModal] = useState<IShowModal>({
    add: false,
    roles: false,
  });
  const handleSearch = () => {
    setFiltered(() =>
      searchTerm
        ? listUser?.filter((c) =>
            c.username?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : listUser
    );
  };
  const handleCloseModal = useCallback(() => {
    setOpenModal({ add: false, roles: false });
  }, []);
  const handleShowModal = (user: User) => {
    checkExpirationToken();
    setUserClicked(user);
    setStateRoles({
      admin: false,
      clinic: false,
      customer: false,
      doctor: false,
    }); // reset roles
    if (user.roles) {
      user.roles.map((role) => {
        switch (role) {
          case ERoles.admin:
            setStateRoles((pre) => ({ ...pre, admin: true }));
            break;
          case ERoles.clinic:
            setStateRoles((pre) => ({ ...pre, clinic: true }));
            break;
          case ERoles.customer:
            setStateRoles((pre) => ({ ...pre, customer: true }));
            break;
          case ERoles.doctor:
            setStateRoles((pre) => ({ ...pre, doctor: true }));
            break;
          default:
            break;
        }
      });
    }
    setOpenModal((pre) => ({ ...pre, roles: true }));
  };
  const handleActionFormChangeRoles = () => {
    var roles: string[] = [];
    if (stateRoles.admin) roles.push(ERoles.admin);
    if (stateRoles.clinic) roles.push(ERoles.clinic);
    if (stateRoles.doctor) roles.push(ERoles.doctor);
    if (stateRoles.customer) roles.push(ERoles.customer);
    if (userClicked?.id)
      updateRolesMutation({
        variables: {
          input: {
            id: userClicked.id,
            roles: roles,
          },
        },
      }).then(() => {
        setListUser((pre) => {
          var s = pre?.map((user, i) => {
            if (user.id === userClicked.id) {
              return (user = { ...user, roles: roles });
            } else return user;
          });
          return s;
        });

        showToast("Đã cập nhật 👍", "success", 1000);
      });
    setOpenModal((pre) => ({ ...pre, roles: false }));
    // console.log("new roles: ", roles);
  };
  const [createUser, setCreateUser] = useState<CreateUserByAdminInput>({
    username: "",
    email: "",
    password: "",
  });
  const handelCreateUser = async () => {
    await createNewUser({ variables: { input: createUser } }).then(() => {
      showToast("Đã tạo mới tài khoản", undefined, 2000);
      setOpenModal({ add: false, roles: false });
      setCreateUser({ email: "", password: "", username: "" });
      refetch();
    });
  };
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <div className="overflow-x-auto">
      <Button
        variant="outline-success"
        className="mb-1"
        size="sm"
        onClick={() => {
          setOpenModal((pre) => ({ ...pre, add: true }));
          // console.log("test open", openModal);
        }}>
        Tạo tài khoản
      </Button>
      <SearchInputCpn
        onChange={(s: string) => setSearchTerm(s)}
        onSearch={handleSearch}
        value={searchTerm}
      />
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
          {filtered &&
            filtered.map((user, i) => (
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
        headerText={`Chỉnh sửa quyền user "${userClicked?.username}"`}
        openRequest={openModal.roles}
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
                checked={stateRoles.admin}
                onChange={() =>
                  setStateRoles((pre) => ({ ...pre, admin: !pre.admin }))
                }
              />

              <Form.Check
                type="switch"
                id="custom-clinic"
                label="Clinic"
                name="check-clinic"
                checked={stateRoles.clinic}
                onChange={() =>
                  setStateRoles((pre) => ({ ...pre, clinic: !pre.clinic }))
                }
              />
            </Col>
            <Col>
              <Form.Check
                type="switch"
                id="custom-doctor"
                label="Doctor"
                name="check-doctor"
                checked={stateRoles.doctor}
                onChange={() =>
                  setStateRoles((pre) => ({ ...pre, doctor: !pre.doctor }))
                }
              />
              <Form.Check
                type="switch"
                id="custom-customer"
                label="Customer"
                name="check-customer"
                checked={stateRoles.customer}
                onChange={() =>
                  setStateRoles((pre) => ({ ...pre, customer: !pre.customer }))
                }
              />
            </Col>
          </Row>
        </Form>
      </ModalCpn>
      <ModalCpn
        handleClose={() => {
          handleCloseModal();
        }}
        handleSave={() => {
          handelCreateUser();
        }}
        headerText="Tạo tài khoản"
        openRequest={openModal.add}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => {
                setCreateUser((pre) => ({ ...pre, username: e.target.value }));
              }}
              value={createUser.username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setCreateUser((pre) => ({ ...pre, email: e.target.value }));
              }}
              value={createUser.email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setCreateUser((pre) => ({ ...pre, password: e.target.value }));
              }}
              value={createUser.password}
            />
          </Form.Group>
        </Form>
      </ModalCpn>
    </div>
  );
}

export default memo(ListUserPage);
