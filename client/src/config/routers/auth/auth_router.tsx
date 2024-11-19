import { lazy } from "react";

const Login = lazy(() => import("@pages/auth/login/login"));
const Register = lazy(() => import("@pages/auth/register/register"));

const authRoutes = [
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
];

export default authRoutes;
