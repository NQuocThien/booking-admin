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
import FormAddVaccination from "src/pages/Vaccination/FormAddVacinnation";
import VaccinationDetailPage from "src/pages/Vaccination/VaccinationDetail";
import FormUpdateVaccination from "src/pages/Vaccination/FormUpdateVacinnation";
import FormAddMedicalStaff from "src/pages/MedicalStaff/FormAddStaff";
import ListDoctorPage from "src/pages/Doctor/ListDoctor";
import FormUpdateMedicalStaff from "src/pages/MedicalStaff/FormUpdateStaff";
import ListMedicalStaffPage from "src/pages/MedicalStaff/ListMedicalStaff";
import ListCustomerPage from "src/pages/Customer/ListCustomer";
import FacilityHomePage from "src/pages/MedicalFacilities/Facility-Page/HomePage";
import GeneralInforFacilityPage from "src/pages/MedicalFacilities/Facility-Page/GeneralInforFacility";
import FormUpdateGeneralMedicalFacility from "src/pages/MedicalFacilities/Facility-Page/FormUpdateGeneral";
import ListDoctorOfFacilityPage from "src/pages/Doctor/Facility-Page/ListDoctorOfFacility";
export interface IRoute {
  path: string;
  name: string;
  element?: React.FC;
  exact?: boolean;
}
const routes_admin: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  { path: "/me", name: "Dashboard", element: CurrentUserDetailPage },
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
    path: "/admin-page/medical-facility/:id/vaccination/form-add",
    name: "Dashboard",
    element: FormAddVaccination,
  },
  {
    path: "/admin-page/medical-facility/:id/vaccination/:idVaccine",
    name: "Dashboard",
    element: VaccinationDetailPage,
  },
  {
    path: "/admin-page/medical-facility/:id/vaccination/update/:idVaccine",
    name: "Dashboard",
    element: FormUpdateVaccination,
  },
  {
    path: "/admin-page/doctor/form-add",
    name: "Dashboard",
    element: FormAddDoctor,
  },
  {
    path: "/admin-page/medical-facility/:id/staff/form-add",
    name: "Dashboard",
    element: FormAddMedicalStaff,
  },
  {
    path: "/admin-page/medical-facility/:id/staff/update/:idStaff",
    name: "Dashboard",
    element: FormUpdateMedicalStaff,
  },
  {
    path: "/admin-page/doctors",
    name: "Dashboard",
    element: ListDoctorPage,
  },
  {
    path: "/admin-page/doctors/form-add",
    name: "Dashboard",
    element: FormAddDoctor,
  },
  {
    path: "/admin-page/doctors/:idDoctor",
    name: "Dashboard",
    element: DoctorDetailPage,
  },
  {
    path: "/admin-page/doctors/update/:idDoctor",
    name: "Dashboard",
    element: FormUpdateDoctor,
  },
  {
    path: "/admin-page/staffs",
    name: "Dashboard",
    element: ListMedicalStaffPage,
  },
  {
    path: "/admin-page/staffs/form-add",
    name: "Dashboard",
    element: FormAddMedicalStaff,
  },
  {
    path: "/admin-page/staffs/update/:idStaff",
    name: "Dashboard",
    element: FormUpdateMedicalStaff,
  },
  {
    path: "/admin-page/customers",
    name: "Dashboard",
    element: ListCustomerPage,
  },
];

const routes_clinic: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  { path: "/me", name: "Dashboard", element: CurrentUserDetailPage },
  { path: "/dashboard", name: "Dashboard", element: DashboardPage },
  { path: "/facility-page", name: "Dashboard", element: FacilityHomePage },
  {
    path: "/facility-page/home",
    name: "Dashboard",
    element: GeneralInforFacilityPage,
  },
  {
    path: "/facility-page/update/:id",
    name: "Dashboard",
    element: FormUpdateGeneralMedicalFacility,
  },
  {
    path: "/facility-page/doctors",
    name: "Dashboard",
    element: ListDoctorOfFacilityPage,
  },
  {
    path: "/facility-page/doctors/form-add/:id",
    name: "Dashboard",
    element: FormAddDoctor,
  },
  {
    path: "/facility-page/doctors/update/:id/:idDoctor",
    name: "Dashboard",
    element: FormUpdateDoctor,
  },
];

const routes_doctor: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  {
    path: "/me",
    name: "Dashboard",
    element: CurrentUserDetailPage,
  },
  { path: "/dashboard", name: "Dashboard", element: DashboardPage },
];
export { routes_admin, routes_clinic, routes_doctor };
