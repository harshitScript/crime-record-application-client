import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const viewApi = createApi({
  reducerPath: "view",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URI,
  }),
  endpoints: (builder) => ({
    trackVisitor: builder.query({
      query: () => `visitor/track`,
      headers: {
        //? Tells the browser that the upcoming response has cookies.
        withCredentials: true,
      },
    }),
  }),
});

export const { useLazyTrackVisitorQuery } = viewApi;

export default viewApi;
