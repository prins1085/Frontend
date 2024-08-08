import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/test/' }),
  endpoints: (builder) => ({
    test: builder.query({
      query: () => "",
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "register",
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "login",
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useTestQuery, useRegisterMutation, useLoginMutation } = authApi
