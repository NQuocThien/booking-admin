import { Suspense, useMemo } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import routes from "src/router/routes";
import HomePage from "src/pages/Home";
import LoginPage from "src/pages/Login";
import { useAuth } from "src/context/AuthContext";
function MainContent() {
    const { isLoginIn: auth } = useAuth();
    const routeComponents = useMemo(() => {
         return  routes.map((route, index) => {
            if( !!route.element){
                return (
                    <Route
                    key={route.path}
                    path={route.path}
                    element={auth && route.element ? <route.element/> : <LoginPage />}
                ></Route>
                )
            }else {
                return null
            }
        }
        );
    }, [auth]);
    return (
        <Container fluid>
            {/* test */}
            <Suspense fallback={<Spinner animation="border" variant="primary" />}>
                <Routes>
                    {routeComponents}
                    {/* {routes.map((route: any, idx) => {
                        // console.log(route.path)
                        return (route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                element={auth ? <route.element /> : <LoginPage />}                                               
                            ></Route>
                        ))
                    })} */}
                    <Route
                        path='/'
                        element={auth ? <HomePage /> : <LoginPage />}
                    />
                    {/**
                     * no match route
                     */}
                    <Route
                        path='*'
                        element={auth ? <HomePage /> : <LoginPage />}
                    />
                    {/**
                     * no match route
                     */}

                </Routes>
            </Suspense>
        </Container>
    );
}

export default MainContent;