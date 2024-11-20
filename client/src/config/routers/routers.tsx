import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import publicRoutes from "./public/public_router";
import authRoutes from "./auth/auth_router";
import adminRoutes from "./admin/admin_router";
import Page404 from "@pages/404/error";

const Home = lazy(() => import("@pages/home/home"));
const language = 'vi'; // Lấy từ localStorage hoặc context

const createLocalizedRoutes = (langPrefix: string): RouteObject => ({
  path: langPrefix,
  children: [
    ...publicRoutes,
    ...authRoutes,
    adminRoutes,
  ],
  errorElement: <Page404 />,
});

const languages = ['vi', 'en', 'kr',''];
const languageRoutes = languages.map((lang) => createLocalizedRoutes(lang));

const routerParents = languages.map((lang) => ({
  path: lang,
  element: <Home />,
  errorElement: <Page404 />,
}));

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={`/${language}/home`} replace />,
    errorElement: <Page404 />,
  },
  ...routerParents,
  ...languageRoutes
];

export default routers;
