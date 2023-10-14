import DashboardPage from "src/pages/Dashboard";
import { Suspense } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import routes from "src/router/routes";
function MainContent() {
    return (
        <Container fluid>
            {/* test */}
            <Suspense fallback={<Spinner animation="border" variant="primary" />}>
                <Routes>
                    {routes.map((route: any, idx) => {
                        return (route.element && (
                            <Route
                                key={idx}
                                path={route.path}
                                element={<route.element />}
                            ></Route>
                        ))
                    })}
                    <Route path={'/'} ></Route>
                </Routes>
            </Suspense>
        </Container>
    );
}

export default MainContent;