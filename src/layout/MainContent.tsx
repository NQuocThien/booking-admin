import { Suspense, useEffect, useMemo, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import {
  IRoute,
  routes_admin,
  routes_clinic,
  routes_doctor,
} from "src/router/routes";
import HomePage from "src/pages/Home";
import LoginPage from "src/pages/Login";
import { useAuth } from "src/context/AuthContext";
import { GetRole } from "src/utils/enum-value";

function MainContent() {
  const { isLoginIn: auth, userInfor, currRole } = useAuth();
  const [routes, setRoutes] = useState<IRoute[]>([]);
  useEffect(() => {
    if (currRole === GetRole.Admin) setRoutes(routes_admin);
    else {
      if (currRole === GetRole.Clinic) setRoutes(routes_clinic);
      else if (currRole === GetRole.Doctor) setRoutes(routes_doctor);
      else if (currRole === GetRole.Staff) setRoutes(routes_clinic);
    }
    // console.log("---> test route1: ", currRole);
    // console.log("---> test route: ", routes);
  }, [auth, currRole]);
  const routeComponents = useMemo(() => {
    return routes.map((route) => {
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
  }, [auth, userInfor, routes]);
  return (
    <Container fluid>
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
