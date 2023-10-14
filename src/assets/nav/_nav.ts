import { NavItem } from "react-bootstrap"
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
        iconName: 'RiDashboard2Line',
        badge: {
            nameBadge: 'Mới',
            color: 'info'
        }
    },
    {
        component: 'NavTitle',
        name: 'Components',
    },
    {
        component: 'NavGroup',
        name: 'Item Groups',
        iconName: 'FaCoffee',
        items: [
            {
                component: 'NavItem',
                name: 'Item 1 ',
                to: '/base/accordion',
                iconName: 'FaMusic'
            },
            {
                component: 'NavItem',
                name: 'Item 2 ',
                to: '/base/accordion',
                iconName: 'FaCar'
            },
        ],
    },
]
export default _nav
