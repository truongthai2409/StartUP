import { Navigate, RouteObject } from "react-router-dom";
import publicRoutes from "./public/public_router";
import authRoutes from "./auth/auth_router";
import adminRoutes from "./admin/admin_router";
import Page404 from "@pages/404/error";
import LanguageSync from "@components/langsync/language_sync";
import i18next from "i18next";


const createLocalizedRoutes = (langPrefix: string): RouteObject => ({
  path: langPrefix,
  element: <LanguageSync />,
  children: [
    { index: true, element: <Navigate to={`/${i18next.languages}/home`}  replace /> },
    ...publicRoutes,
    ...authRoutes,
    adminRoutes,
  ],
  errorElement: <Page404 />,
});

const languages = [":lang", ""];
const languageRoutes = languages.map((lang) => createLocalizedRoutes(lang));

const routers: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={`/${i18next.languages}/home`} replace />,
    errorElement: <Page404 />,
  },
  ...languageRoutes,
];

export default routers;
