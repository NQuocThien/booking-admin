import {
  Role,
  User,
  useCheckLoginQueryQuery,
} from "src/graphql/webbooking-service.generated";
import { getLocalStorage, setLocalStorage } from "src/utils/contain";
import { createContext, useContext, useEffect, useState } from "react";
import { GetRole } from "src/utils/enum-value";

interface AuthContextType {
  isLoginIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  userInfor: User | undefined;
  currRole: GetRole | undefined;
  handleChangeCurrRole: (role: GetRole) => void;
  handleChangeUserInfor: (dataUser: User) => void;
  checkExpirationToken: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
  // checkLogin: (token: string) => Promise<any>;
}
function AuthContextProvider({ children }: AuthProviderProps) {
  const [isLoginIn, setIsLoginIn] = useState<boolean>(false);
  const [userInfor, setUserInfor] = useState<User>();
  const [currRole, setCurrRole] = useState<GetRole>();
  const tokenKey = process.env.REACT_APP_ACCESS_TOKEN
    ? process.env.REACT_APP_ACCESS_TOKEN
    : "access_token";
  const token: string = getLocalStorage(tokenKey) || "null";
  const { refetch: refetchData, data } = useCheckLoginQueryQuery({
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    fetchPolicy: "no-cache",
  });
  useEffect(() => {
    // thực hiện kiểm tra đăng nhập và get thông tin user
    if (data?.checklogin.roles) {
      setIsLoginIn(true);
      setUserInfor(data.checklogin);
    } else {
      setIsLoginIn(false);
    }
  }, [data]);
  useEffect(() => {
    if (data?.checklogin.roles) {
      const roles = data.checklogin.roles;
      if (userInfor?.roles?.includes(GetRole.Admin)) setCurrRole(GetRole.Admin);
      else {
        if (roles?.includes(GetRole.Clinic)) setCurrRole(GetRole.Clinic);
        else if (roles?.includes(GetRole.Doctor)) setCurrRole(GetRole.Doctor);
        else if (roles?.includes(GetRole.Staff)) setCurrRole(GetRole.Staff);
      }
    }
  }, [isLoginIn]);
  const login = (token: string) => {
    setLocalStorage(tokenKey, token);
    // refetchData();
    setIsLoginIn(true);
  };
  const handleChangeCurrRole = (role: GetRole) => {
    if (data?.checklogin.roles?.includes(role)) {
      setCurrRole(role);
    }
  };
  const logout = () => {
    setIsLoginIn(false);
    setLocalStorage(tokenKey, "");
  };
  const handleChangeUserInfor = (dataUser: User) => {
    setUserInfor(dataUser);
  };
  // const handleChangeRole = (role: Role) => {
  //   setCurrRoute(role);
  // };
  const checkExpirationToken = () => {
    // cắt token lấy payload và giải mã Base64 URL-encoded  thành JSON rồi chuyển json thành object
    const expirationTime = JSON.parse(atob(token.split(".")[1])).exp;
    const currentTime = Math.floor(Date.now() / 1000); // Lấy thời gian hiện tại ở đơn vị giây
    if (expirationTime && expirationTime < currentTime) {
      // console.log('Token đã hết hạn.');
      logout();
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isLoginIn,
        login,
        logout,
        userInfor,
        currRole,
        handleChangeUserInfor,
        handleChangeCurrRole,
        checkExpirationToken,
      }}>
      {children}
      {/* {console.log('bottom')} */}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthContextProvider };
