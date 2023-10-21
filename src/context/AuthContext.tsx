import { User, useCheckLoginQueryQuery } from 'src/graphql/webbooking-service.generated';
import { getLocalStorage, setLocalStorage } from 'src/utils/contain';
import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react'

interface AuthContextType {
    isLoginIn: boolean;
    login: (token: string) => void;
    logout: () => void;
    userInfor: User;
    handleChangeUserInfor: (dataUser: User) => void

}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthContextProvider')
    }
    return context;
}

interface AuthProviderProps {
    children: React.ReactNode;
    // checkLogin: (token: string) => Promise<any>;
}
function AuthContextProvider({ children }: AuthProviderProps) {
    const [isLoginIn, setIsLoginIn] = useState<boolean>(false);
    const [userInfor, setUserInfor] = useState<any>(null)
    const tokenKey = process.env.REACT_APP_ACCESS_TOKEN ? process.env.REACT_APP_ACCESS_TOKEN : 'access_token'
    const token: string = getLocalStorage(tokenKey) || 'null'
    // console.log('state token: ', token)
    const { refetch: refetchData, data } = useCheckLoginQueryQuery({
        context: {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        },
        fetchPolicy: 'no-cache'
    });
    useEffect(() => { // thực hiện kiểm tra đăng nhập và get thông tin user
        if (data) {
            setIsLoginIn(true)
            console.log('data, ', data)
            setUserInfor(data.checklogin)
        } else {
            setIsLoginIn(false)
        }

    }, [data])
    //check login
    const login = (token: string) => { // check login
        // save token in local storage
        setLocalStorage(tokenKey, token);
        setIsLoginIn(true)
        console.log(' call login func')
    }
    const logout = () => {
        setIsLoginIn(false)
        setLocalStorage(tokenKey, '')
        // refetchData()
    }
    const handleChangeUserInfor = (dataUser: any) => {
        setUserInfor(dataUser)
    }
    return (
        <AuthContext.Provider value={{ isLoginIn, login, logout, userInfor, handleChangeUserInfor }}>
            {children}
            {/* {console.log('bottom')} */}
        </AuthContext.Provider>
    )
}


export { useAuth, AuthContextProvider };