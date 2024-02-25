import GeneralInforWebPage from "src/pages/GeneralnfoWeb/GeneralInforWeb";
import CurrentUserDetailPage from "src/pages/Account";
import DashboardPage from "src/pages/Dashboard";
import ListUserPage from "src/pages/ListUser/ListUserPage";
import ListMedicalFacilityPage from "src/pages/MedicalFacilities/ListMedicalFacility";
import MedicalFacilityDetailPage from "src/pages/MedicalFacilities/MedicalFacilityDetail";
import FormAddMedicalFacility from "src/pages/MedicalFacilities/FormAdd";
import FormUpdateMedicalFacility from "src/pages/MedicalFacilities/FormUpdate";
import FormAddDoctor from "src/pages/Doctor/FormAddDoctor";
import DoctorDetailPage from "src/pages/Doctor/DoctorDetail";
import FormUpdateDoctor from "src/pages/Doctor/FormUpdateDoctor";
import PackageDetailPage from "src/pages/Package/PackageDetail";
import FormAddPackage from "src/pages/Package/FormAddPackage";
import FormUpdatePackage from "src/pages/Package/FormUpdatePackage";
import FormAddSpecialty from "src/pages/Specialty/FormAddSpecialty";
import FormUpdateSpecialty from "src/pages/Specialty/FormUpdateSpecialty";
import SpecialtyDetailPage from "src/pages/Specialty/PackageDetail";
export interface IRoute {
  path: string;
  name: string;
  element?: React.FC;
  exact?: boolean;
}
const routes: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  { path: "/admin-page/me", name: "Dashboard", element: CurrentUserDetailPage },
  { path: "/admin-page/dashboard", name: "Dashboard", element: DashboardPage },
  { path: "/admin-page/users", name: "Dashboard", element: ListUserPage },
  {
    path: "/admin-page/client",
    name: "Dashboard",
    element: GeneralInforWebPage,
  },
  {
    path: "/admin-page/medical-facility",
    name: "Dashboard",
    element: ListMedicalFacilityPage,
  },
  {
    path: "/admin-page/medical-facility/:id",
    name: "Dashboard",
    element: MedicalFacilityDetailPage,
  },
  {
    path: "/admin-page/medical-facility/form-add",
    name: "Dashboard",
    element: FormAddMedicalFacility,
  },
  {
    path: "/admin-page/medical-facility/update/:id",
    name: "Dashboard",
    element: FormUpdateMedicalFacility,
  },
  {
    path: "/admin-page/medical-facility/:id/doctor/form-add",
    name: "Dashboard",
    element: FormAddDoctor,
  },
  {
    path: "/admin-page/medical-facility/:id/doctor/:idDoctor",
    name: "Dashboard",
    element: DoctorDetailPage,
  },
  {
    path: "/admin-page/medical-facility/:id/doctor/update/:idDoctor",
    name: "Dashboard",
    element: FormUpdateDoctor,
  },
  {
    path: "/admin-page/medical-facility/:id/package/:idPackage",
    name: "Dashboard",
    element: PackageDetailPage,
  },
  {
    path: "/admin-page/medical-facility/:id/package/form-add",
    name: "Dashboard",
    element: FormAddPackage,
  },
  {
    path: "/admin-page/medical-facility/:id/package/update/:idPackage",
    name: "Dashboard",
    element: FormUpdatePackage,
  },
  {
    path: "/admin-page/medical-facility/:id/specialty/form-add",
    name: "Dashboard",
    element: FormAddSpecialty,
  },
  {
    path: "/admin-page/medical-facility/:id/specialty/:idSpecialty",
    name: "Dashboard",
    element: SpecialtyDetailPage,
  },
  {
    path: "/admin-page/medical-facility/:id/specialty/update/:idSpecialty",
    name: "Dashboard",
    element: FormUpdateSpecialty,
  },
  {
    path: "/admin-page/doctor/form-add",
    name: "Dashboard",
    element: FormAddDoctor,
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
