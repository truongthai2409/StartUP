import { Suspense } from "react";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '@config/i18n/i18n';
import store, { persistor } from "./stores";
import AppRouter from "./config/routers";
import Loader from "@components/loader/loader";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Toaster richColors />
          <Suspense fallback={<Loader />}>
            <AppRouter />
          </Suspense>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
