import { Navigate, RouteObject } from "react-router-dom";
// import Page404 from "@pages/404/error";
import Home from "@pages/home/home";
import Login from "@pages/login/login";
import Page404 from "@pages/404/error";

const routerDefinitions = [
    { path: 'home', element: <Home/>},
    { path: 'login', element: <Login/>},
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