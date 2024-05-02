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
import SpecialtyDetailPage from "src/pages/Specialty/SpecialtyDetail";
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
import ListDoctorOfFacilityPage from "src/pages/Doctor/Facility-Page/Manager/ListDoctorOfFacility";
import ListMedicalSpecialtyOfFacilityPage from "src/pages/Specialty/Facility-Page/ListSpecialtyOfFacility";
import ListVaccinationOfFacilityPage from "src/pages/Vaccination/Facility-Page/ListVaccinationOfFacility";
import ListPackageOfFacilityPage from "src/pages/Package/Facility-Page/ListPackageOfFacility";
import ListMedicalStaffOfFacilityPage from "src/pages/MedicalStaff/Facility-Page/ListMedicalStaffOfFacility";
import CoordinateDoctor from "src/pages/Doctor/Facility-Page/Coordinate/CoordinateDoctor";
import CoordinateMedcialSpecialties from "src/pages/Specialty/Facility-Page/Coordinate/CoordinateSpecialty";
import CoordinateVaccination from "src/pages/Vaccination/Facility-Page/Coordinate/CoordinateVaccination";
import CoordinatePackages from "src/pages/Package/Facility-Page/Coordinate/CoordinatePackage";
import DoctorDetailForDoctorPage from "src/pages/Doctor/Doctor-Page/DoctorDetail";
import DoctorRegistration from "src/pages/Doctor/Doctor-Page/DoctorRegistration";
import MedicalStaffDetailPage from "src/pages/MedicalStaff/Staff-Page/StaffDetail";
import CoordinatePackagesByStaff from "src/pages/Package/Staff-Page/Coordinate/CoordinatePackage";
import ListPackageByStaffPage from "src/pages/Package/Staff-Page/ListPackageOfFacility";
import CoordinateVaccinationByStaff from "src/pages/Vaccination/Staff-Page/Coordinate/CoordinateVaccination";
import ListVaccinationByStaffPage from "src/pages/Vaccination/Staff-Page/ListVaccinationOfFacility";
import CoordinateMedcialSpecialtiesByStaff from "src/pages/Specialty/Staff-Page/Coordinate/CoordinateSpecialty";
import ListMedicalSpecialtyByStaffPage from "src/pages/Specialty/Staff-Page/ListSpecialtyOfFacility";
import ListBlogsPage from "src/pages/Blogs/ListBlog";
import FormAddBlog from "src/pages/Blogs/FormAdd";
import FormUpdateBlog from "src/pages/Blogs/FormUpdate";
import BlogDetailPage from "src/pages/Blogs/BlogDetail";
import PendingPage from "src/pages/MedicalFacilities/Facility-Page/PendingPage";
import RegisHistoryPage from "src/pages/MedicalFacilities/Facility-Page/RegisHistoryPage";
import RegisDetailPage from "src/pages/MedicalFacilities/Facility-Page/RegisDetailPage";
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
  {
    path: "/admin-page/blogs",
    name: "Dashboard",
    element: ListBlogsPage,
  },
  {
    path: "/admin-page/blogs/form-add",
    name: "Dashboard",
    element: FormAddBlog,
  },
  {
    path: "/admin-page/blogs/update/:slug",
    name: "Dashboard",
    element: FormUpdateBlog,
  },
  {
    path: "/admin-page/blogs/:slug",
    name: "Dashboard",
    element: BlogDetailPage,
  },
];

const routes_clinic: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  { path: "/me", name: "Dashboard", element: CurrentUserDetailPage },
  { path: "/dashboard", name: "Dashboard", element: DashboardPage },
  { path: "/facility-page", name: "Dashboard", element: FacilityHomePage },
  {
    path: "/facility-page/regis-pending",
    name: "Dashboard",
    element: PendingPage,
  },
  {
    path: "/facility-page/regis-pending/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
  },
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
    path: "/facility-page/doctors/:id/:idDoctor",
    name: "Dashboard",
    element: DoctorDetailPage,
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
  {
    path: "/facility-page/specialties",
    name: "Dashboard",
    element: ListMedicalSpecialtyOfFacilityPage,
  },
  {
    path: "/facility-page/specialties/form-add/:id",
    name: "Dashboard",
    element: FormAddSpecialty,
  },
  {
    path: "/facility-page/specialties/:id/:idSpecialty",
    name: "Dashboard",
    element: SpecialtyDetailPage,
  },
  {
    path: "/facility-page/specialties/update/:id/:idSpecialty",
    name: "Dashboard",
    element: FormUpdateSpecialty,
  },
  {
    path: "/facility-page/vaccinations",
    name: "Dashboard",
    element: ListVaccinationOfFacilityPage,
  },
  {
    path: "/facility-page/vaccinations/form-add/:id",
    name: "Dashboard",
    element: FormAddVaccination,
  },
  {
    path: "/facility-page/vaccinations/:id/:idVaccine",
    name: "Dashboard",
    element: VaccinationDetailPage,
  },
  {
    path: "/facility-page/vaccinations/update/:id/:idVaccine",
    name: "Dashboard",
    element: FormUpdateVaccination,
  },
  {
    path: "/facility-page/packages",
    name: "Dashboard",
    element: ListPackageOfFacilityPage,
  },
  {
    path: "/facility-page/packages/form-add/:id",
    name: "Dashboard",
    element: FormAddPackage,
  },
  {
    path: "/facility-page/packages/:id/:idPackage",
    name: "Dashboard",
    element: PackageDetailPage,
  },
  {
    path: "/facility-page/packages/update/:id/:idPackage",
    name: "Dashboard",
    element: FormUpdatePackage,
  },
  {
    path: "/facility-page/staffs",
    name: "Dashboard",
    element: ListMedicalStaffOfFacilityPage,
  },
  {
    path: "/facility-page/staffs/form-add/:id",
    name: "Dashboard",
    element: FormAddMedicalStaff,
  },
  {
    path: "/facility-page/staffs/update/:id/:idStaff",
    name: "Dashboard",
    element: FormUpdateMedicalStaff,
  },
  {
    path: "/facility-page/coordinate/doctors",
    name: "Dashboard",
    element: CoordinateDoctor,
  },
  {
    path: "/facility-page/coordinate/doctors/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
  },
  {
    path: "/facility-page/coordinate/specialties",
    name: "Dashboard",
    element: CoordinateMedcialSpecialties,
  },
  {
    path: "/facility-page/coordinate/specialties/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
  },
  {
    path: "/facility-page/coordinate/vaccination",
    name: "Dashboard",
    element: CoordinateVaccination,
  },
  {
    path: "/facility-page/coordinate/vaccination/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
  },
  {
    path: "/facility-page/coordinate/packages",
    name: "Dashboard",
    element: CoordinatePackages,
  },
  {
    path: "/facility-page/coordinate/packages/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
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
  {
    path: "/doctor-page/home",
    name: "Dashboard",
    element: DoctorDetailForDoctorPage,
  },
  {
    path: "/doctor-page/registration",
    name: "Dashboard",
    element: DoctorRegistration,
  },
  {
    path: "/doctor-page/registration/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
  },
];

// ======================
const routes_staff_manager: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  { path: "/me", name: "Dashboard", element: CurrentUserDetailPage },
  { path: "/facility-page", name: "Dashboard", element: FacilityHomePage },
  {
    path: "/facility-page/staff-info",
    name: "Dashboard",
    element: MedicalStaffDetailPage,
  },
  {
    path: "/facility-page/home",
    name: "Dashboard",
    element: GeneralInforFacilityPage,
  },
  {
    path: "/facility-page/regis-pending",
    name: "Dashboard",
    element: PendingPage,
  },
  {
    path: "/facility-page/regis-pending/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
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
    path: "/facility-page/doctors/:id/:idDoctor",
    name: "Dashboard",
    element: DoctorDetailPage,
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
  {
    path: "/facility-page/specialties",
    name: "Dashboard",
    element: ListMedicalSpecialtyOfFacilityPage,
  },
  {
    path: "/facility-page/specialties/form-add/:id",
    name: "Dashboard",
    element: FormAddSpecialty,
  },
  {
    path: "/facility-page/specialties/:id/:idSpecialty",
    name: "Dashboard",
    element: SpecialtyDetailPage,
  },
  {
    path: "/facility-page/specialties/update/:id/:idSpecialty",
    name: "Dashboard",
    element: FormUpdateSpecialty,
  },
  {
    path: "/facility-page/vaccinations",
    name: "Dashboard",
    element: ListVaccinationOfFacilityPage,
  },
  {
    path: "/facility-page/vaccinations/form-add/:id",
    name: "Dashboard",
    element: FormAddVaccination,
  },
  {
    path: "/facility-page/vaccinations/:id/:idVaccine",
    name: "Dashboard",
    element: VaccinationDetailPage,
  },
  {
    path: "/facility-page/vaccinations/update/:id/:idVaccine",
    name: "Dashboard",
    element: FormUpdateVaccination,
  },
  {
    path: "/facility-page/packages",
    name: "Dashboard",
    element: ListPackageOfFacilityPage,
  },
  {
    path: "/facility-page/packages/form-add/:id",
    name: "Dashboard",
    element: FormAddPackage,
  },
  {
    path: "/facility-page/packages/:id/:idPackage",
    name: "Dashboard",
    element: PackageDetailPage,
  },
  {
    path: "/facility-page/packages/update/:id/:idPackage",
    name: "Dashboard",
    element: FormUpdatePackage,
  },
  {
    path: "/facility-page/staffs",
    name: "Dashboard",
    element: ListMedicalStaffOfFacilityPage,
  },
  {
    path: "/facility-page/staffs/form-add/:id",
    name: "Dashboard",
    element: FormAddMedicalStaff,
  },
  {
    path: "/facility-page/staffs/update/:id/:idStaff",
    name: "Dashboard",
    element: FormUpdateMedicalStaff,
  },
  {
    path: "/facility-page/coordinate/doctors",
    name: "Dashboard",
    element: CoordinateDoctor,
  },
  {
    path: "/facility-page/coordinate/doctors/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
  },
  {
    path: "/facility-page/coordinate/specialties",
    name: "Dashboard",
    element: CoordinateMedcialSpecialties,
  },
  {
    path: "/facility-page/coordinate/vaccination",
    name: "Dashboard",
    element: CoordinateVaccination,
  },
  {
    path: "/facility-page/coordinate/packages",
    name: "Dashboard",
    element: CoordinatePackages,
  },
];

const routes_staff_general: IRoute[] = [
  { path: "/", exact: true, name: "Home" },
  { path: "/me", name: "Dashboard", element: CurrentUserDetailPage },
  {
    path: "/staff-page/home",
    name: "Dashboard",
    element: MedicalStaffDetailPage,
  },
];
const routes_staff_specialties: IRoute[] = [
  {
    path: "/staff-page/specialties",
    name: "Dashboard",
    element: ListMedicalSpecialtyByStaffPage,
  },
  {
    path: "/staff-page/specialties/:id/:idSpecialty",
    name: "Dashboard",
    element: SpecialtyDetailPage,
  },
  {
    path: "/staff-page/specialties/registration",
    name: "Dashboard",
    element: CoordinateMedcialSpecialtiesByStaff,
  },
  {
    path: "/staff-page/specialties/registration/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
  },
];
const routes_staff_packages: IRoute[] = [
  {
    path: "/staff-page/packages",
    name: "Dashboard",
    element: ListPackageByStaffPage,
  },
  {
    path: "/staff-page/packages/:id/:idPackage",
    name: "Dashboard",
    element: PackageDetailPage,
  },
  {
    path: "/staff-page/packages/registration",
    name: "Dashboard",
    element: CoordinatePackagesByStaff,
  },
  {
    path: "/staff-page/packages/registration/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
  },
];
const routes_staff_vaccination: IRoute[] = [
  {
    path: "/staff-page/vaccination",
    name: "Dashboard",
    element: ListVaccinationByStaffPage,
  },
  {
    path: "/staff-page/vaccination/:id/:idVaccine",
    name: "Dashboard",
    element: VaccinationDetailPage,
  },
  {
    path: "/staff-page/vaccination/registration",
    name: "Dashboard",
    element: CoordinateVaccinationByStaff,
  },
  {
    path: "/staff-page/vaccination/registration/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
  },
];
const routes_staff_pending: IRoute[] = [
  {
    path: "/staff-page/regis-pending",
    name: "Dashboard",
    element: PendingPage,
  },
  {
    path: "/staff-page/regis-pending/:profileId",
    name: "Dashboard",
    element: RegisHistoryPage,
  },
  {
    path: "/staff-page/regis-pending/:profileId/:regisId",
    name: "Dashboard",
    element: RegisDetailPage,
  },
];

export {
  routes_admin,
  routes_clinic,
  routes_doctor,
  routes_staff_manager,
  routes_staff_general,
  routes_staff_specialties,
  routes_staff_vaccination,
  routes_staff_packages,
  routes_staff_pending,
};
