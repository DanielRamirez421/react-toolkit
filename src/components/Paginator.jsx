import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, pokemonSliceName } from "../store/slices/pokemon";

export const Paginator = () => {

  const dispatch = useDispatch();
  const { page } = useSelector(state => state[pokemonSliceName]);

  return (
    <>
      <button 
        onClick={() => dispatch(getPokemons(page-2))}
        disabled={page === 1}
      >Previous</button>
      {page}
      <button onClick={() => dispatch(getPokemons(page))}>Next</button>
    </>
  );
};
