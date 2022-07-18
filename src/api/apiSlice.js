import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
    }),
    endpoints: (builders) => ({
        getTodos: builders.query({
            query: () => "/todos"
        }),
        addTodo: builders.mutation({
            query: (todo) => ({
                url: "/todos",
                method: "post",
                body: todo
            })
        }),
        updateTodo: builders.mutation({
            query: (todo) => ({
                url: `/todo/${todo.id}`,
                method: "PATCH",
                body: todo
            })
        })
    })
})

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation } = apiSlice;