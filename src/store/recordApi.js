import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const recordApi = createApi({
  reducerPath: "record",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URI,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  }),
  endpoints: (builder) => ({
    createRecord: builder.mutation({
      query: ({ body }) => ({
        url: `record/create`,
        body,
        method: "POST",
      }),
    }),
    getRecords: builder.query({
      query: ({ page }) => `/record/list/${page}`,
    }),
  }),
});

export const { useCreateRecordMutation, useGetRecordsQuery } = recordApi;

export default recordApi;
