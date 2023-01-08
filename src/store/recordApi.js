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
    getRecordsId: builder.query({
      query: ({ page }) => `/record/list-ids/${page}`,
    }),
    uploadRecordImage: builder.mutation({
      query: ({ body, recordId, type }) => ({
        url: `record/${recordId}/uploads/${type}`,
        body,
        method: "POST",
      }),
    }),
    getRecordInfo: builder.query({
      query: ({ recordId }) => ({
        url: `record/${recordId}`,
      }),
    }),
    deleteRecordImage: builder.mutation({
      query: ({ recordId, type }) => ({
        url: `/record/${recordId}/delete-image/${type}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateRecordMutation,
  useGetRecordsIdQuery,
  useUploadRecordImageMutation,
  useGetRecordInfoQuery,
  useDeleteRecordImageMutation,
} = recordApi;

export default recordApi;
