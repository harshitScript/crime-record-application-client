import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const viewApi = createApi({
  reducerPath: "view",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URI,
    //? Required to set cookie in CORS.
    credentials: "include",
  }),
  endpoints: (builder) => ({
    trackVisitor: builder.query({
      query: () => `visitor/track`,
    }),
  }),
});

export const { useLazyTrackVisitorQuery } = viewApi;

export default viewApi;
