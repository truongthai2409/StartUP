import { lazy } from "react";

const Admin = lazy(() => import("@pages/admin"));
const Dashboard = lazy(() => import("@pages/admin/dashboard/dashboard"));
const Settings = lazy(() => import("@pages/admin/settings/settings"));
const Customers = lazy(() => import("@pages/admin/customers/customers"));
const Templates = lazy(() => import("@pages/admin/templates/templates"));

const adminRoutes = {
  path: "admin",
  element: <Admin />,
  children: [
    { path: "dashboard", element: <Dashboard /> },
    { path: "settings", element: <Settings /> },
    { path: "customers", element: <Customers /> },
    { path: "templates", element: <Templates /> },
  ],
};

export default adminRoutes;
