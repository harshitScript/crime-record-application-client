import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const configurationApi = createApi({
  reducerPath: "configuration",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URI,
    headers: {
      Authorization: localStorage.getItem("authToken"),
    },
  }),
  endpoints: (builder) => ({
    getConfiguration: builder.query({
      query: () => `general/configuration/${process.env.REACT_APP_TENANT}`,
    }),
  }),
});
export const { useGetConfigurationQuery } = configurationApi;

export default configurationApi;
