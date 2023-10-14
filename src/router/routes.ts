import DashboardPage from "src/pages/Dashboard";
interface IRoute {
    path: string;
    name: string;
    element?: React.FC;
    exact?: boolean;
}
const routes: IRoute[] = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: DashboardPage },
    // { path: '/dashboard', name: 'Dashboard', element: DashboardPage },
]
export default routes;