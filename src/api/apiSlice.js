import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints: (builders) => ({
        getTodos: builders.query({
            query: () => "/todos"
        })
    })
})

export const {useGetTodosQuery} = apiSlice;