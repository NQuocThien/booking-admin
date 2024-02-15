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
    to: "/dashboard",
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
        name: "Quản lý User",
        to: "/general/users",
        iconName: "MdOutlinePersonOutline",
      },
      {
        component: "NavItem",
        name: "Quản lý CSYT",
        to: "/general/clinics",
        iconName: "MdOutlineMedicalServices",
      },
      {
        component: "NavItem",
        name: "Quản lý Bác sĩ",
        to: "/general/doctors",
        iconName: "LiaUserNurseSolid",
      },
      {
        component: "NavItem",
        name: "Quản lý Khách hàng",
        to: "/general/customers",
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
        to: "/general/client",
        iconName: "MdWebhook",
      },
      {
        component: "NavItem",
        name: "Chuyên Khoa",
        to: "/general/special",
        iconName: "MdOutlineMedicalServices",
      },
      {
        component: "NavItem",
        name: "Học vị",
        to: "/general/degree",
        iconName: "MdOutlineRotate90DegreesCw",
      },
      {
        component: "NavItem",
        name: "Gói khám",
        to: "/general/carepackage",
        iconName: "MdMedication",
      },
    ],
  },
];
// end nav Admin ===================================================================

const _navClinic: Item[] = [
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
    name: "Clinic",
  },
  {
    component: "NavItem",
    name: "CSYT",
    to: "/home/myclinic",
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
        name: "Gói khám",
        to: "/clinic/manager/carepackage",
        iconName: "MdSupervisedUserCircle",
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
