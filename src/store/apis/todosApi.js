import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApiName = "todosApi";

export const todosApi = createApi({
  reducerPath: todosApiName,

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    getTodos: builder.query({ query: () => "/todos" }),
    getTodosById: builder.query({ query: (id) => `/todos/${id}` }),
  }),
});

export const { useGetTodosQuery, useGetTodosByIdQuery } = todosApi;
