import { Suspense, useMemo } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import {
  IRoute,
  routes,
  routes_clinic,
  routes_doctor,
} from "src/router/routes";
import HomePage from "src/pages/Home";
import LoginPage from "src/pages/Login";
import { useAuth } from "src/context/AuthContext";

function MainContent() {
  const { isLoginIn: auth, userInfor } = useAuth();
  var mainRoute: IRoute[] = [];
  if (auth) {
    const roles = userInfor?.roles;
    if (userInfor?.roles?.includes("admin")) mainRoute = routes;
    else {
      if (roles?.includes("clinic")) mainRoute = routes_clinic;
      else if (roles?.includes("doctor")) mainRoute = routes_doctor;
    }
  }
  const routeComponents = useMemo(() => {
    return mainRoute.map((route, index) => {
      if (!!route.element) {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              auth && route.element ? <route.element /> : <LoginPage />
            }></Route>
        );
      } else {
        return null;
      }
    });
  }, [auth, userInfor]);
  return (
    <Container fluid>
      {/* test */}
      <Suspense fallback={<Spinner animation="border" variant="primary" />}>
        <Routes>
          {routeComponents}
          <Route path="/" element={auth ? <HomePage /> : <LoginPage />} />
          {/**
           * no match route
           */}
          <Route path="*" element={auth ? <HomePage /> : <LoginPage />} />
          {/**
           * no match route
           */}
        </Routes>
      </Suspense>
    </Container>
  );
}

export default MainContent;
