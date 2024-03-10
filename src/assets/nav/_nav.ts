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
    ],
  },
];
// NAV DOCTOR
const _navDoctor: Item[] = [
  {
    component: "NavItem",
    name: "Trang chủ",
    to: "/home",
    iconName: "MdHomeFilled",
    badge: {
      nameBadge: "Mới",
      color: "info",
    },
  },
  {
    component: "NavTitle",
    name: "Doctor",
  },
  {
    component: "NavItem",
    name: "Thông tin BS",
    to: "/home/mydoctor",
    iconName: "GiDoctorFace",
    badge: {
      nameBadge: "Mới",
      color: "info",
    },
  },
  {
    component: "NavGroup",
    name: "Bệnh Nhân",
    iconName: "MdOutlineManageAccounts",
    items: [
      {
        component: "NavItem",
        name: "Lịch làm việc",
        to: "/",
        iconName: "MdSupervisedUserCircle",
      },
      {
        component: "NavItem",
        name: "",
        to: "/infor",
        iconName: "MdWebhook",
      },
    ],
  },
];
export { _navAdmin, _navClinic, _navDoctor };
