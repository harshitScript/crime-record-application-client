import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URI,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: ({ userId }) => {
        return `user/${userId}`;
      },
      providesTags: ["user"],
    }),
    createUser: builder.mutation({
      query: ({ body }) => ({
        url: "user/create",
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: ({ body }) => ({
        url: "user/login",
        method: "POST",
        body,
      }),
    }),
    listUser: builder.query({
      query: ({ page }) => ({
        url: `user/list/${page}`,
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useListUserQuery,
} = userApi;

export default userApi;
