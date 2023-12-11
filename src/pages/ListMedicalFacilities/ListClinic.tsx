import { getToken } from "src/utils/contain";
import { Col, Form, Row, Spinner, Table } from "react-bootstrap";
import {
  User,
  useActiveUserMutation,
  useGetAllUserQuery,
  useGetMedicalfacilitiesQuery,
  useUpdateRolesMutation,
} from "src/graphql/webbooking-service.generated";
import { memo, useCallback, useEffect, useState } from "react";
import { showToast } from "src/components/toasts/toasts";
import ModalCpn from "src/components/toasts/Modal";
import { FcSupport } from "react-icons/fc";
import ShowAlert from "src/components/toasts/alerts";
import { useAuth } from "src/context/AuthContext";

function ListClinicPage() {
  const token = getToken();
  const {
    refetch: rr,
    data: dt,
    loading: lg,
    error: er,
  } = useGetMedicalfacilitiesQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  // console.log("test token: ", token);
  const { checkExpirationToken } = useAuth();
  const { refetch, data, loading, error } = useGetAllUserQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const [listUser, setListUser] = useState<User[] | undefined>(data?.users);

  useEffect(() => {
    setListUser(data?.users);
    console.log("test user: ", data?.users);
    console.log("test clinic: ", dt?.getMedicalfacilities);
  }, [data, dt]);

  const [activeUser] = useActiveUserMutation({
    fetchPolicy: "no-cache",
  });
  //

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
                <td role="button" onClick={() => {}}>
                  <FcSupport />
                </td>
                <td onClick={() => {}}>
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
    </div>
  );
}

export default memo(ListClinicPage);
