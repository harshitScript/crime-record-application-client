import { configureStore } from "@reduxjs/toolkit";
import configurationApi from "./configurationApi";

const store = configureStore({
  reducer: {
    [configurationApi.reducerPath]: configurationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(configurationApi.middleware),
});

export default store;
