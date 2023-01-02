import { configureStore } from "@reduxjs/toolkit";
import configurationApi from "./configurationApi";
import recordApi from "./recordApi";
import dashboardSlice from "./slices/DashBoardPage.slice";
import userApi from "./userApi";

const store = configureStore({
  reducer: {
    [configurationApi.reducerPath]: configurationApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [recordApi.reducerPath]: recordApi.reducer,
    [dashboardSlice.name]: dashboardSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(configurationApi.middleware)
      .concat(userApi.middleware)
      .concat(recordApi.middleware),
});

export default store;
