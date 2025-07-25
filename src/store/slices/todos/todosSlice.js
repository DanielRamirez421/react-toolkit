import { createSlice } from "@reduxjs/toolkit";

export const todoSliceName = "todo";

const initialState = {
  counter: 10,
};

export const todoSlice = createSlice({
  name: todoSliceName,
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = todoSlice.actions;
