import { lazy } from "react";

const Login = lazy(() => import("@pages/auth/login/login"));
const Register = lazy(() => import("@pages/auth/register/register"));
const Account = lazy(() => import("@pages/auth/account/account"));

const authRoutes = [
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "account", element: <Account /> },
];

export default authRoutes;
