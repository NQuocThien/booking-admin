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
const _nav: Item[] = [
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
                name: 'Thông tin User',
                to: '/users',
                iconName: 'MdSupervisedUserCircle'
            },
            {
                component: 'NavItem',
                name: 'Thông tin Website',
                to: '/infor',
                iconName: 'MdWebhook'
            },
        ],
    },
    {
        component: 'NavGroup',
        name: 'Chung',
        iconName: 'MdDisplaySettings',
        items: [
            {
                component: 'NavItem',
                name: 'Thông tin User',
                to: '/base/accordion',
                iconName: 'MdSupervisedUserCircle'
            },
            {
                component: 'NavItem',
                name: 'Thông tin Website',
                to: '/base/accordion',
                iconName: 'MdWebhook'
            },
        ],
    },
]
export default _nav
