import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        // baseUrl: process.env.REACT_APP_API,
        baseUrl: "http://localhost:3005/",
    }),
    tagTypes: ['Todos'],
    endpoints: (builders) => ({
        getTodos: builders.query({
            query: (params) => {
                return {
                    url: "/todos",
                    params: params ? params : "" 
                }
            },
            // transformResponse: res => res.sort((a, b) => b.create_At - a.create_At),
            providesTags: ['Todos']
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
            }),
            invalidatesTags: ['Todos']
        }),
        updateTodo: builders.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: "PATCH",
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTodo: builders.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: "DELETE",
                body: todo
            }),
            invalidatesTags: ['Todos']
        })
    })
})

export const { useGetTodosQuery, useGetNewTodosQuery, useGetDoneTodosQuery, useGetDoingTodosQuery, useGetTodoQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation} = apiSlice; 

