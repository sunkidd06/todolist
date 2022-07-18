import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.baseUrl,
    }),
    endpoints: (builders) => ({
        getTodos: builders.query({
            query: () => "/todos"
        }),
        getTodo: builders.query({
            query: () => "/todos/:id"
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

export const { useGetTodosQuery, useGetTodoQuery, useAddTodoMutation, useUpdateTodoMutation } = apiSlice;