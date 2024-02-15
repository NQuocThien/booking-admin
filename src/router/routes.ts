import GeneralInforWebPage from "src/pages/GeneralnfoWeb/GeneralInforWeb";
import CurrentUserDetailPage from "src/pages/Account";
import DashboardPage from "src/pages/Dashboard";
import ListUserPage from "src/pages/ListUser/ListUserPage";
import ListMedicalFacilityPage from "src/pages/ListMedicalFacilities/ListMedicalFacility";
import MedicalFacilityDetailPage from "src/pages/ListMedicalFacilities/MedicalFacilityDetail";
import FormAddMedicalFacility from "src/pages/ListMedicalFacilities/FormAddMedicalfacilyty";
export interface IRoute {
  path: string;
  name: string;
  element?: React.FC;
  exact?: boolean;
}
const routes: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  { path: "/me", name: "Dashboard", element: CurrentUserDetailPage },
  { path: "/dashboard", name: "Dashboard", element: DashboardPage },
  { path: "/general/users", name: "Dashboard", element: ListUserPage },

  {
    path: "/general/clinics",
    name: "Dashboard",
    element: ListMedicalFacilityPage,
  },
  {
    path: "/general/clinics/:id",
    name: "Dashboard",
    element: MedicalFacilityDetailPage,
  },
  {
    path: "/general/clinics/form-add",
    name: "Dashboard",
    element: FormAddMedicalFacility,
  },
];

const routes_clinic: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  { path: "/me", name: "Dashboard", element: CurrentUserDetailPage },
  { path: "/dashboard", name: "Dashboard", element: DashboardPage },
];

const routes_doctor: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  { path: "/me", name: "Dashboard", element: CurrentUserDetailPage },
  { path: "/dashboard", name: "Dashboard", element: DashboardPage },
];
export { routes, routes_clinic, routes_doctor };
