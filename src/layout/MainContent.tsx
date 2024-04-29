import { Suspense, useEffect, useMemo, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import {
  IRoute,
  routes_admin,
  routes_clinic,
  routes_doctor,
  routes_staff_general,
  routes_staff_manager,
  routes_staff_packages,
  routes_staff_pending,
  routes_staff_specialties,
  routes_staff_vaccination,
} from "src/router/routes";
import HomePage from "src/pages/Home";
import LoginPage from "src/pages/Login";
import { useAuth } from "src/context/AuthContext";
import { GetEPermission, GetRole } from "src/utils/enum-value";

function renderStaffPermission(permission: string[]): IRoute[] {
  var items: IRoute[];
  if (permission.includes(GetEPermission.Magager)) {
    items = routes_staff_manager;
  } else {
    items = routes_staff_general;
    if (permission.includes(GetEPermission.ManagerSpecialty)) {
      items = [...items, ...routes_staff_specialties];
    }
    if (permission.includes(GetEPermission.MagagerPackage)) {
      items = [...items, ...routes_staff_packages];
    }
    if (permission.includes(GetEPermission.MagagerVaccine)) {
      items = [...items, ...routes_staff_vaccination];
    }
    if (permission.includes(GetEPermission.MagagerPending)) {
      items = [...items, ...routes_staff_pending];
    }
  }
  return items;
}

function MainContent() {
  const { isLoginIn: auth, userInfor, currRole, infoStaff } = useAuth();
  const [routes, setRoutes] = useState<IRoute[]>([]);
  useEffect(() => {
    if (currRole === GetRole.Admin) setRoutes(routes_admin);
    else {
      if (currRole === GetRole.Facility) setRoutes(routes_clinic);
      else if (currRole === GetRole.Doctor) setRoutes(routes_doctor);
      else if (currRole === GetRole.Staff) {
        if (infoStaff) {
          const items: IRoute[] = renderStaffPermission(infoStaff?.permissions);
          setRoutes(items);
        }
      }
    }
  }, [auth, currRole, infoStaff]);
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
