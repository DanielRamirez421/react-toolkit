import { configureStore } from "@reduxjs/toolkit";
import { todosApi, todosApiName } from "./apis";
import { counterSliceName, counterSlice } from "./slices/counter";
import { pokemonSlice, pokemonSliceName } from "./slices/pokemon";

export const store = configureStore({
  reducer: {
    [counterSliceName]: counterSlice.reducer,
    [pokemonSliceName]: pokemonSlice.reducer,
    [todosApiName]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
