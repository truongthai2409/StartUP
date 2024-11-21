import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth_slice from "./slices/auth_slices" ;
import theme_slice from "./slices/theme_slices";
import { VITE_API_BE } from "@config/index";

const persistConfig = {
    key: "root",
    storage,
  };

const persistedAuthReducer = persistReducer(persistConfig, auth_slice);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    theme: theme_slice,
  },
  devTools: VITE_API_BE !== "product",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
