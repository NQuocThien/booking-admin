import GeneralInforWebPage from "src/pages/GeneralnfoWeb/GeneralInforWeb";
import CurrentUserDetailPage from "src/pages/Account";
import DashboardPage from "src/pages/Dashboard";
import ListUserPage from "src/pages/ListUser/ListUserPage";
import ListCustomerPage from "src/pages/ListCustomer/ListCustomer";
import ListDoctorPage from "src/pages/ListDoctor/ListDoctor";
import ListMedicalFacilitiesPage from "src/pages/ListMedicalFacilities/ListMedicalFacilities";
import ListDegreePage from "src/pages/ListDegree/ListDegreePage";
import ListMedicalSpecialPage from "src/pages/ListMedicalSpecial/ListMedicalSpecial";
import ClinicDetailPage from "src/pages/ClinicDetail/ClinicDetail";
import DoctorDetailPages from "src/pages/DetailDoctor/DetailDoctor";
import FormUpdateDoctor from "src/components/UpdateDoctorForm/FormUpdateDoctor";
import ListTypePackagePage from "src/pages/ListTypePackage/ListTypePackage";
import ListPackagePage from "src/pages/ListPackage/ListPackage";
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
  { path: "/general/customers", name: "Dashboard", element: ListCustomerPage },
  { path: "/general/doctors", name: "Dashboard", element: ListDoctorPage },
  { path: "/general/client", name: "Dashboard", element: GeneralInforWebPage },
  { path: "/general/degree", name: "Dashboard", element: ListDegreePage },
  {
    path: "/general/carepackage",
    name: "Dashboard",
    element: ListTypePackagePage,
  },
  {
    path: "/general/special",
    name: "Dashboard",
    element: ListMedicalSpecialPage,
  },
  {
    path: "/general/clinics",
    name: "Dashboard",
    element: ListMedicalFacilitiesPage,
  },
  {
    path: "/update/doctor/:doctorId",
    name: "Dashboard",
    element: FormUpdateDoctor,
  },
];

const routes_clinic: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  { path: "/me", name: "Dashboard", element: CurrentUserDetailPage },
  { path: "/dashboard", name: "Dashboard", element: DashboardPage },
  { path: "/home/myclinic", name: "Dashboard", element: ClinicDetailPage },
  {
    path: "/clinic/manager/carepackage",
    name: "Dashboard",
    element: ListPackagePage,
  },
];

const routes_doctor: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  { path: "/me", name: "Dashboard", element: CurrentUserDetailPage },
  { path: "/dashboard", name: "Dashboard", element: DashboardPage },
  { path: "/home/mydoctor", name: "Dashboard", element: DoctorDetailPages },
  {
    path: "/update/doctor/:doctorId",
    name: "Dashboard",
    element: FormUpdateDoctor,
  },
];
export { routes, routes_clinic, routes_doctor };
