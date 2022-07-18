import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        setTodos: (state, action) => {
            return action.payload;
        },

    },
})

export const { setTodos } = todoSlice.actions;
export default todoSlice.reducer;