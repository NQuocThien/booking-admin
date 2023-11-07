export interface Item {
    component: 'NavItem' | 'NavGroup' | 'NavTitle';
    name: string;
    to?: string;
    iconName?: string;
    items?: Item[];
    badge?: {
        nameBadge: string;
        color: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary' | 'light' | 'dark';
    }
}
const _navAdmin: Item[] = [
    {
        component: 'NavItem',
        name: 'Dashboard',
        to: '/dashboard',
        iconName: 'MdDashboardCustomize',
        badge: {
            nameBadge: 'Mới',
            color: 'info'
        }
    },
    {
        component: 'NavTitle',
        name: 'Admin',
    },
    {
        component: 'NavGroup',
        name: 'Chung',
        iconName: 'MdDisplaySettings',
        items: [
            {
                component: 'NavItem',
                name: 'Quản lý User',
                to: '/general/users',
                iconName: 'MdSupervisedUserCircle'
            },
            {
                component: 'NavItem',
                name: 'Thông tin Website',
                to: '/general/client',
                iconName: 'MdWebhook'
            },
        ],
    }
]
const _navClinic: Item[] = [
    {
        component: 'NavItem',
        name: 'Trang chủ',
        to: '/home',
        iconName: 'MdHomeFilled',
        badge: {
            nameBadge: 'Mới',
            color: 'info'
        }
    },
    {
        component: 'NavTitle',
        name: 'Clinic',
    },
    {
        component: 'NavGroup',
        name: 'Bệnh Nhân',
        iconName: 'MdOutlineManageAccounts',
        items: [
            {
                component: 'NavItem',
                name: 'Danh sách đăng ký',
                to: '/',
                iconName: 'MdSupervisedUserCircle'
            },
            {
                component: 'NavItem',
                name: '',
                to: '/infor',
                iconName: 'MdWebhook'
            },
        ],
    }
]
export { _navAdmin, _navClinic } 
