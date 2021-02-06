
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        decrement: (state, action) => {
            state.count -= action.payload
        },
        increment: (state, action) => {
            state.count += action.payload
        },
    }
});

export const { actions, reducer } = counterSlice