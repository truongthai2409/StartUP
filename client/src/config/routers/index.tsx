import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routers from "./routers";

const AppRouter = () => {
  const router = createBrowserRouter(routers, {
    future: {
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  });
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default AppRouter;
