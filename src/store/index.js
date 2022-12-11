import { configureStore } from "@reduxjs/toolkit";
import configurationApi from "./configurationApi";
import userApi from "./userApi";

const store = configureStore({
  reducer: {
    [configurationApi.reducerPath]: configurationApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(configurationApi.middleware)
      .concat(userApi.middleware),
});

export default store;
