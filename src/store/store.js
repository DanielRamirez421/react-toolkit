import { configureStore } from '@reduxjs/toolkit'
import { counterSliceName, counterSlice } from './slices/counter'
import { pokemonSlice, pokemonSliceName } from './slices/pokemon'

export const store = configureStore({
  reducer: {
    [counterSliceName]: counterSlice.reducer,
    [pokemonSliceName]: pokemonSlice.reducer,
  },
})
