export interface Item {
  component: "NavItem" | "NavGroup" | "NavTitle";
  name: string;
  to?: string;
  iconName?: string;
  items?: Item[];
  badge?: {
    nameBadge: string;
    color:
      | "success"
      | "info"
      | "warning"
      | "danger"
      | "primary"
      | "secondary"
      | "light"
      | "dark";
  };
}
// begin nav Admin ==================================================================
const _navAdmin: Item[] = [
  {
    component: "NavItem",
    name: "Dashboard",
    to: "/admin-page/dashboard",
    iconName: "MdOutlineDashboardCustomize",
    badge: {
      nameBadge: "Mới",
      color: "info",
    },
  },
  {
    component: "NavTitle",
    name: "Admin",
  },
  {
    component: "NavGroup",
    name: "Quản lý",
    iconName: "MdOutlineAdminPanelSettings",
    items: [
      {
        component: "NavItem",
        name: "Người dùng",
        to: "/admin-page/users",
        iconName: "MdOutlinePersonOutline",
      },
      {
        component: "NavItem",
        name: "Cơ sơ y tế",
        to: "/admin-page/medical-facility",
        iconName: "MdOutlineMedicalServices",
      },
      {
        component: "NavItem",
        name: "Bác sĩ",
        to: "/admin-page/doctors",
        iconName: "LiaUserNurseSolid",
      },
      {
        component: "NavItem",
        name: "Nhân viên CSYT",
        to: "/admin-page/staffs",
        iconName: "MdOutlineNaturePeople",
      },

      {
        component: "NavItem",
        name: "Quản lý Khách hàng",
        to: "/admin-page/customers",
        iconName: "MdPeopleOutline",
      },
    ],
  },
  {
    component: "NavGroup",
    name: "Chung",
    iconName: "MdDisplaySettings",
    items: [
      {
        component: "NavItem",
        name: "Thông tin Website",
        to: "/admin-page/client",
        iconName: "MdWebhook",
      },
    ],
  },
];
// end nav Admin ===================================================================

const _navClinic: Item[] = [
  {
    component: "NavItem",
    name: "Trang chủ",
    to: "/facility-page",
    iconName: "MdHomeFilled",
    badge: {
      nameBadge: "Mới",
      color: "info",
    },
  },
  {
    component: "NavTitle",
    name: "Clinic",
  },
  {
    component: "NavItem",
    name: "CSYT",
    to: "/facility-page/home",
    iconName: "MdMedicalServices",
    badge: {
      nameBadge: "+",
      color: "info",
    },
  },
  {
    component: "NavGroup",
    name: "Điều phối",
    iconName: "MdOutlineSpaceDashboard",
    items: [
      {
        component: "NavItem",
        name: "Khám bác sỉ",
        to: "/facility-page/coordinate/doctors",
        iconName: "LiaUserNurseSolid",
      },
      {
        component: "NavItem",
        name: "Khám chuyên khoa",
        to: "/facility-page/coordinate/specialties",
        iconName: "LiaBookMedicalSolid",
      },
      {
        component: "NavItem",
        name: "Khám gói khám",
        to: "/facility-page/coordinate/packages",
        iconName: "LiaLaptopMedicalSolid",
      },
      {
        component: "NavItem",
        name: "Khám tim chủng",
        to: "/facility-page/coordinate/vaccination",
        iconName: "MdOutlineVaccines",
      },
    ],
  },
  {
    component: "NavGroup",
    name: "Quản lý",
    iconName: "MdOutlineManageAccounts",
    items: [
      {
        component: "NavItem",
        name: "Bác sỉ",
        to: "/facility-page/doctors",
        iconName: "LiaUserNurseSolid",
      },
      {
        component: "NavItem",
        name: "Chuyên khoa",
        to: "/facility-page/specialties",
        iconName: "MdOutlineMedicalServices",
      },
      {
        component: "NavItem",
        name: "Tim chủng",
        to: "/facility-page/vaccinations",
        iconName: "MdVaccines",
      },
      {
        component: "NavItem",
        name: "Gói khám",
        to: "/facility-page/packages",
        iconName: "MdOutlineMedicalInformation",
      },
      {
        component: "NavItem",
        name: "Nhân viên",
        to: "/facility-page/staffs",
        iconName: "MdOutlineManageAccounts",
      },
    ],
  },
];
// NAV DOCTOR
const _navDoctor: Item[] = [
  {
    component: "NavTitle",
    name: "Doctor",
  },
  {
    component: "NavItem",
    name: "Thông tin BS",
    to: "/doctor-page/home",
    iconName: "GiDoctorFace",
    badge: {
      nameBadge: "Mới",
      color: "info",
    },
  },
  {
    component: "NavItem",
    name: "Quản lý khám bệnh",
    to: "/doctor-page/registration",
    iconName: "GiDoctorFace",
  },
];
// NAV STAFF
const _navStaffManager: Item[] = [
  {
    component: "NavItem",
    name: "Trang chủ",
    to: "/facility-page",
    iconName: "MdHomeFilled",
    badge: {
      nameBadge: "Mới",
      color: "info",
    },
  },
  {
    component: "NavTitle",
    name: "Nhân Viên",
  },
  {
    component: "NavItem",
    name: "CSYT",
    to: "/facility-page/home",
    iconName: "MdMedicalServices",
  },
  {
    component: "NavItem",
    name: "Thông tin nhân viên",
    to: "/facility-page/staff-info",
    iconName: "MdOutlineEngineering",
  },
  {
    component: "NavGroup",
    name: "Điều phối",
    iconName: "MdOutlineSpaceDashboard",
    items: [
      {
        component: "NavItem",
        name: "Khám bác sỉ",
        to: "/facility-page/coordinate/doctors",
        iconName: "LiaUserNurseSolid",
      },
      {
        component: "NavItem",
        name: "Khám chuyên khoa",
        to: "/facility-page/coordinate/specialties",
        iconName: "LiaBookMedicalSolid",
      },
      {
        component: "NavItem",
        name: "Khám gói khám",
        to: "/facility-page/coordinate/packages",
        iconName: "LiaLaptopMedicalSolid",
      },
      {
        component: "NavItem",
        name: "Khám tim chủng",
        to: "/facility-page/coordinate/vaccination",
        iconName: "MdOutlineVaccines",
      },
    ],
  },
  {
    component: "NavGroup",
    name: "Quản lý",
    iconName: "MdOutlineManageAccounts",
    items: [
      {
        component: "NavItem",
        name: "Bác sỉ",
        to: "/facility-page/doctors",
        iconName: "LiaUserNurseSolid",
      },
      {
        component: "NavItem",
        name: "Chuyên khoa",
        to: "/facility-page/specialties",
        iconName: "MdOutlineMedicalServices",
      },
      {
        component: "NavItem",
        name: "Tim chủng",
        to: "/facility-page/vaccinations",
        iconName: "MdVaccines",
      },
      {
        component: "NavItem",
        name: "Gói khám",
        to: "/facility-page/packages",
        iconName: "MdOutlineMedicalInformation",
      },
      {
        component: "NavItem",
        name: "Nhân viên",
        to: "/facility-page/staffs",
        iconName: "MdOutlineManageAccounts",
      },
    ],
  },
];
const _navStaffGeneral: Item[] = [
  {
    component: "NavTitle",
    name: "Nhân viên",
  },
  {
    component: "NavItem",
    name: "Thông tin nhân viên",
    to: "/staff-page/home",
    iconName: "MdMedicalServices",
    badge: {
      nameBadge: "+",
      color: "info",
    },
  },
  {
    component: "NavTitle",
    name: "Quản lý",
  },
];
const _navStaffPackage: Item[] = [
  {
    component: "NavGroup",
    name: "Gói khám",
    iconName: "LiaLaptopMedicalSolid",
    items: [
      {
        component: "NavItem",
        name: "Danh sách đăng ký",
        iconName: "LiaRegisteredSolid",
        to: "/staff-page/packages/registration",
      },
      {
        component: "NavItem",
        name: "Quản lý gói khám",
        iconName: "MdOutlineManageAccounts",
        to: "/staff-page/packages",
      },
    ],
  },
];
const _navStaffVaccination: Item[] = [
  {
    component: "NavGroup",
    name: "Tiêm chủng",
    iconName: "MdOutlineVaccines",
    items: [
      {
        component: "NavItem",
        name: "Danh sách đăng ký",
        iconName: "LiaRegisteredSolid",
        to: "/staff-page/vaccination/registration",
      },
      {
        component: "NavItem",
        name: "Quản lý tiêm chủng",
        iconName: "MdOutlineManageAccounts",
        to: "/staff-page/vaccination",
      },
    ],
  },
];
const _navStaffSpecialties: Item[] = [
  {
    component: "NavGroup",
    name: "Chuyên khoa",
    iconName: "LiaBookMedicalSolid",
    items: [
      {
        component: "NavItem",
        name: "Danh sách đăng ký",
        iconName: "LiaRegisteredSolid",
        to: "/staff-page/specialties/registration",
      },
      {
        component: "NavItem",
        name: "Quản lý chuyên khoa",
        iconName: "MdOutlineManageAccounts",
        to: "/staff-page/specialties",
      },
    ],
  },
];
export {
  _navAdmin,
  _navClinic,
  _navDoctor,
  _navStaffGeneral,
  _navStaffManager,
  _navStaffPackage,
  _navStaffVaccination,
  _navStaffSpecialties,
};
