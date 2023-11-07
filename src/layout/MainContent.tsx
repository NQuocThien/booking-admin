import { Suspense } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import routes from "src/router/routes";
import HomePage from "src/pages/Home";
import LoginPage from "src/pages/Login";
import { useAuth } from "src/context/AuthContext";
function MainContent() {
    const { isLoginIn: auth } = useAuth();
    return (
        <Container fluid>
            {/* test */}
            <Suspense fallback={<Spinner animation="border" variant="primary" />}>
                <Routes>
                    {routes.map((route: any, idx) => {
                        // console.log(route.path)
                        return (route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                element={auth ? <route.element /> : <LoginPage />}
                            ></Route>
                        ))
                    })}
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