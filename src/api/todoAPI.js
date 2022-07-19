import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        // baseUrl: process.env.baseUrl,
        baseUrl: "http://localhost:3005/",
    }),
    endpoints: (builders) => ({
        getTodos: builders.query({
            query: () => "/todos"
        }),
        getNewTodos: builders.query({
            query: () => "/todos?status=New"
        }),
        getDoingTodos: builders.query({
            query: () => "/todos?status=Doing"
        }),
        getDoneTodos: builders.query({
            query: () => "/todos?status=Done"
        }),
        getTodo: builders.query({
            query: () => "/todos/:id"
        }),
        addTodo: builders.mutation({
            query: (todo) => ({
                url: "/todos",
                method: "POST",
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

export const { useGetTodosQuery, useGetNewTodosQuery, useGetDoneTodosQuery, useGetDoingTodosQuery, useGetTodoQuery, useAddTodoMutation, useUpdateTodoMutation } = apiSlice; 
