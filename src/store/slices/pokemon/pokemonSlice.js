import { createSlice } from "@reduxjs/toolkit";

export const pokemonSliceName = "pokemon";

const initialState = {
  page: 0,
  pokemons: [],
  loading: false,
};

export const pokemonSlice = createSlice({
  name: pokemonSliceName,
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.loading = true;
    },
    setPokemons: (state, action) => {
      state.loading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
