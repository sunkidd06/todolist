import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import { apiSlice } from "../api/apiSlice";
import {setupListeners} from "@reduxjs/toolkit/query/react";
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        todos: todoSlice,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
