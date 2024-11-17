import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
const Login = lazy(() => import("@pages/login/login"));
const Home = lazy(() => import("@pages/home/home"));
const Admin = lazy(() => import("@pages/admin/admin"));
const Page404 = lazy(() => import("@pages/404/error"));


const routerDefinitions = [
    { path: 'home', element: <Home/>},
    { path: 'login', element: <Login/>},
    { path: 'admin', element: <Admin/>},
    { path: 'profile', element: <Page404/>},
    { path: 'register', element: <Page404/>},
]

const createLocalizedRoutes = (langPrefix: string): RouteObject => ({
    path: langPrefix,
    children: routerDefinitions.map((route)=>({
        path: route.path,
        element: route.element
    }))
})

const routers: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/vi/home" replace />
    },
    {
        path: '*',
        element: <Page404/>,
    },
    createLocalizedRoutes(''),
    createLocalizedRoutes('en'),
    createLocalizedRoutes('vi'),
]

export default routers;