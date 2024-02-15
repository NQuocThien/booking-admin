import {
  UpdateUserInput,
  UpdateUserWithPassInput,
  useUdateUserByIdMutation,
  useUpdateUserByIdWithPassMutation,
} from "src/graphql/webbooking-service.generated";
import InforUserCpn from "./Account";
import s from "src/assets/scss/layout/MainLayout.module.scss";

function CurrentUserDetailPage() {
  const [udateUserByIdMutation] = useUdateUserByIdMutation({
    fetchPolicy: "no-cache",
  });

  const [updateUserByIdWithPassMutation] = useUpdateUserByIdWithPassMutation({
    fetchPolicy: "no-cache",
  });
  const updateUser = async (token: string, dataUser: any): Promise<void> => {
    try {
      const input: UpdateUserInput = dataUser.linkImage
        ? {
            email: dataUser.email,
            id: dataUser.id,
            username: dataUser.username,
            linkImage: {
              filename: dataUser.linkImage?.filename,
              type: dataUser.linkImage.type,
              url: dataUser.linkImage?.url,
            },
          }
        : {
            email: dataUser.email,
            id: dataUser.id,
            username: dataUser.username,
          };
      udateUserByIdMutation({
        variables: {
          input: input,
        },
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
    } catch (e) {
      console.log("test error: ", e);
      throw e;
    }
  };
  const updateUserWithPass = async (
    token: string,
    dataUser: UpdateUserWithPassInput
  ): Promise<any> => {
    try {
      const input: UpdateUserWithPassInput = dataUser.linkImage
        ? {
            email: dataUser.email,
            id: dataUser.id,
            password: dataUser.password,
            passwordNew: dataUser.passwordNew,
            username: dataUser.username,
            linkImage: {
              filename: dataUser.linkImage?.filename,
              type: dataUser.linkImage.type,
              url: dataUser.linkImage?.url,
            },
          }
        : {
            email: dataUser.email,
            id: dataUser.id,
            password: dataUser.password,
            passwordNew: dataUser.passwordNew,
            username: dataUser.username,
          };
      return await updateUserByIdWithPassMutation({
        variables: {
          input: input,
        },
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
    } catch (e) {
      console.log("test error: ", e);
      throw e;
    }
  };

  return (
    <div className={s.component}>
      <InforUserCpn update={updateUser} updateWithPass={updateUserWithPass} />
    </div>
  );
}

export default CurrentUserDetailPage;
