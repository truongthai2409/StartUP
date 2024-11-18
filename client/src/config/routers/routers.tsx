import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
const Page404 = lazy(() => import("@pages/404/error"));
const Login = lazy(() => import("@pages/auth/login/login"));
const Home = lazy(() => import("@pages/home/home"));
const Privacy = lazy(() => import("@pages/utils/privacy/privacy"));
const Contact = lazy(() => import("@pages/utils/contact/contact"));
const AboutUs = lazy(() => import("@pages/utils/about/about"));

const Admin = lazy(() => import("@pages/admin"));
const Register = lazy(() => import("@pages/auth/register/register"));
const Settings = lazy(() => import("@pages/admin/settings/settings"));
const Dashboard = lazy(() => import("@pages/admin/dashboard/dashboard"));
const Customers = lazy(() => import("@pages/admin/customers/customers"));
const Templates = lazy(() => import("@pages/admin/templates/templates"));

const routerDefinitions = [
  { path: "home", element: <Home /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "profile", element: <Page404 /> },
  { path: "privacy", element: <Privacy /> },
  { path: "contact", element: <Contact /> },
  { path: "about", element: <AboutUs /> },
  {
    path: "admin",
    element: <Admin />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "settings", element: <Settings /> },
      { path: "customers", element: <Customers /> },
      { path: "templates", element: <Templates /> },
    ],
  },
];

const createLocalizedRoutes = (langPrefix: string): RouteObject => ({
  path: langPrefix,
  children: routerDefinitions.map((route) => ({
    path: route.path,
    element: route.element,
    children: route.children,
  })),
});

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/vi/home" replace />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
  createLocalizedRoutes(""),
  createLocalizedRoutes("en"),
  createLocalizedRoutes("vi"),
  createLocalizedRoutes("kr"),
];

export default routers;
