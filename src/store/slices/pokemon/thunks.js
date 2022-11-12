import { pokemonApi } from "../../../api/pokemonApi";
import { startLoadingPokemons, setPokemons } from "./pokemonSlice";

// Thunks: Asyncronous action that triggers another action

export const getPokemons = (page = 0) => {
  return async ( dispatch ) => {
    dispatch( startLoadingPokemons() );
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
  };
}