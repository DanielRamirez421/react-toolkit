import { createSlice } from "@reduxjs/toolkit";

export const counterSliceName = "counter";
const initialState = { counter: 10 };

export const counterSlice = createSlice({
  name: counterSliceName,
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
    setValue: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setValue } =
  counterSlice.actions;
