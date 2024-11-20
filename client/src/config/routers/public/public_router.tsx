import { lazy } from "react";

const Home = lazy(() => import("@pages/home/home"));
const Privacy = lazy(() => import("@pages/utils/privacy/privacy"));
const Contact = lazy(() => import("@pages/utils/contact/contact"));
const AboutUs = lazy(() => import("@pages/utils/about/about"));
const Services = lazy(() => import("@pages/utils/services/services"));
const Gallery = lazy(() => import("@pages/utils/gallery/gallery"));
// const Vip = lazy(() => import("@pages/utils/vip/vip"));
const VIPUpgrade = lazy(() => import("@pages/utils/vip/vip_accept"));

const publicRoutes = [
  { path: "home", element: <Home /> },
  { path: "privacy", element: <Privacy /> },
  { path: "contact", element: <Contact /> },
  { path: "about", element: <AboutUs /> },
  { path: "services", element: <Services /> },
  { path: "gallery", element: <Gallery /> },
  { path: "vip", element: <VIPUpgrade /> },
];

export default publicRoutes;
