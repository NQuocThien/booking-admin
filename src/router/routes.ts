import GeneralInforWebPage from "src/pages/GeneralnfoWeb/GeneralInforWeb";
import CurrentUserDetailPage from "src/pages/Account";
import DashboardPage from "src/pages/Dashboard";
interface IRoute {
    path: string;
    name: string;
    element?: React.FC;
    exact?: boolean;
}
const routes: IRoute[] = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/me', name: 'Dashboard', element: CurrentUserDetailPage },
    { path: '/dashboard', name: 'Dashboard', element: DashboardPage },
    { path: '/client', name: 'Dashboard', element: GeneralInforWebPage },
    // { path: '/dashboard', name: 'Dashboard', element: DashboardPage },
]
export default routes;