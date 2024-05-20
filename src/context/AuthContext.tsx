import {
  MedicalFacilities,
  MedicalStaff,
  User,
  useCheckLoginQueryLazyQuery,
  useGetMedicalStaffByUserIdLazyQuery,
} from "src/graphql/webbooking-service.generated";
import { getLocalStorage, setLocalStorage } from "src/utils/contain";
import { createContext, useContext, useEffect, useState } from "react";
import { GetRole } from "src/utils/enum-value";

interface AuthContextType {
  isLoginIn: boolean;
  userInfor: User | undefined;
  infoStaff: MedicalStaff | undefined;
  currRole: GetRole | undefined;
  infoFacility: MedicalFacilities | undefined;
  login: (token: string) => void;
  logout: () => void;
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
}
function AuthContextProvider({ children }: AuthProviderProps) {
  const [userInfor, setUserInfor] = useState<User>();
  const [currRole, setCurrRole] = useState<GetRole>();
  const [infoStaff, setInfoStaff] = useState<MedicalStaff>();
  const [infoFacility, setInfoFacility] = useState<MedicalFacilities>();

  const tokenKey = process.env.REACT_APP_ACCESS_TOKEN
    ? process.env.REACT_APP_ACCESS_TOKEN
    : "access_token";
  const token: string = getLocalStorage(tokenKey) || "null";

  //====================================> FETCHING <================================
  const [isLoginIn, setIsLoginIn] = useState<boolean>(false);

  const [checkLogin, { data }] = useCheckLoginQueryLazyQuery({
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    fetchPolicy: "no-cache",
  });
  const [getInfoStaff, { data: dataStaff }] =
    useGetMedicalStaffByUserIdLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        Authorization: `Bearer ${token}`,
      },
    });

  //================================================================
  useEffect(() => {
    if (token) checkLogin();
  }, []);
  useEffect(() => {
    if (data?.checklogin.roles) {
      setIsLoginIn(true);
      setUserInfor(data.checklogin);
      if (data?.checklogin.roles?.includes(GetRole.Staff))
        getInfoStaff({
          variables: {
            input: userInfor?.id || "",
          },
        });
      else if (data?.checklogin.roles?.includes(GetRole.Facility)) {
      }
    } else {
      setIsLoginIn(false);
    }
  }, [data]);
  useEffect(() => {
    if (userInfor?.id && currRole === GetRole.Staff) {
      getInfoStaff({
        variables: {
          input: userInfor.id,
        },
      });
    }
  }, [currRole]);
  useEffect(() => {
    if (dataStaff?.getMedicalStaffByUserId) {
      setInfoStaff(dataStaff.getMedicalStaffByUserId);
    }
  }, [dataStaff]);
  useEffect(() => {
    if (data?.checklogin.roles) {
      const roles = data.checklogin.roles;
      if (userInfor?.roles?.includes(GetRole.Admin)) setCurrRole(GetRole.Admin);
      else {
        if (roles?.includes(GetRole.Facility)) setCurrRole(GetRole.Facility);
        else if (roles?.includes(GetRole.Doctor)) setCurrRole(GetRole.Doctor);
        else if (roles?.includes(GetRole.Staff)) setCurrRole(GetRole.Staff);
      }
    }
  }, [isLoginIn]);
  const login = async (newToken: string) => {
    setLocalStorage(tokenKey, newToken);
    await checkLogin({
      context: {
        headers: {
          Authorization: `Bearer ${newToken}`, // Thay đổi token hoặc header khác nếu cần
          // Các header khác nếu cần
        },
      },
    } as any);
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

  const checkExpirationToken = () => {
    const expirationTime = JSON.parse(atob(token.split(".")[1])).exp;
    const currentTime = Math.floor(Date.now() / 1000); // Lấy thời gian hiện tại ở đơn vị giây
    if (expirationTime && expirationTime < currentTime) {
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
        infoStaff,
        currRole,
        infoFacility: infoFacility,
        handleChangeUserInfor,
        handleChangeCurrRole,
        checkExpirationToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthContextProvider };
