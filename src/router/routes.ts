import GeneralInforWebPage from "src/pages/GeneralnfoWeb/GeneralInforWeb";
import CurrentUserDetailPage from "src/pages/Account";
import DashboardPage from "src/pages/Dashboard";
import ListUserPage from "src/pages/ListUser/ListUserPage";
import ListCustomerPage from "src/pages/ListCustomer/ListCustomer";
import ListDoctorPage from "src/pages/ListDoctor/ListDoctor";
import ListMedicalFacilitiesPage from "src/pages/ListMedicalFacilities/ListMedicalFacilities";
import ListClinicPage from "src/pages/ListMedicalFacilities/ListClinic";
import ListDegreePage from "src/pages/ListDegree/ListDegreePage";
import ListMedicalSpecialPage from "src/pages/ListMedicalSpecial/ListMedicalSpecial";
interface IRoute {
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
    path: "/general/special",
    name: "Dashboard",
    element: ListMedicalSpecialPage,
  },
  {
    path: "/general/clinics",
    name: "Dashboard",
    element: ListMedicalFacilitiesPage,
  },
];
export default routes;
