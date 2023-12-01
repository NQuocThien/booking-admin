import { getLocalStorage } from "src/utils/contain";
import { Form, Spinner, Table } from "react-bootstrap";
import {
  User,
  useActiveUserMutation,
  useGetAllUserQuery,
  useUpdateRolesMutation,
} from "src/graphql/webbooking-service.generated";
import { memo, useCallback, useEffect, useState } from "react";
import { showToast } from "src/components/toasts/toasts";
import ModalCpn from "src/components/toasts/Modal";
import { FcSupport } from "react-icons/fc";
import ShowAlert from "src/components/toasts/alerts";
import { ICheckRoles } from "src/assets/contains/item-interface";
import { ERoles } from "src/assets/contains/component-enum";
const token = getLocalStorage(
  process.env.REACT_APP_ACCESS_TOKEN || "access_token"
);
function ListUserPage() {
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

  const [listUser, setListUser] = useState<User[] | undefined>(data?.users);
  const [stateRoles, setStateRoles] = useState<ICheckRoles>({
    admin: false,
    clinic: false,
    customer: false,
    doctor: false,
  });
  useEffect(() => {
    // console.log("test user: ", data?.users);
    setListUser(data?.users);
  }, [data]);
  const [userClicked, setUserClicked] = useState<User | undefined>();

  const [activeUser] = useActiveUserMutation({
    fetchPolicy: "no-cache",
  });
  const hanldeActiveUser = (id: string) => {
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
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);
  const handleShowModal = (user: User) => {
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
    setOpenModal(true);
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
    setOpenModal(false);

    // refetch();

    console.log("new roles: ", roles);
  };
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <div className="overflow-x-auto">
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
          {listUser &&
            listUser.map((user, i) => (
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
        headerText={`Chỉnh sửa quyền user ${userClicked?.id}`}
        openRequest={openModal}
        handleSave={handleActionFormChangeRoles}
        handleClose={handleCloseModal}>
        <Form onSubmit={handleActionFormChangeRoles}>
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
        </Form>
      </ModalCpn>
    </div>
  );
}

export default memo(ListUserPage);
