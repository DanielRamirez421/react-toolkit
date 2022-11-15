import React from 'react'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, pokemonSliceName } from './store/slices/pokemon';

import { Paginator } from './components/Paginator.jsx';

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { pokemons, loading, page } = useSelector(state => state[pokemonSliceName]);
  
  useEffect(() => { 
    dispatch( getPokemons() );
  }, [])
  

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      { loading && <p>Loading...</p> }

      <ul>
        { pokemons.map( pokemon => ( <li key={ pokemon.name }>{ pokemon.name }</li> ) ) }
      </ul>

      <Paginator 
        page={ page } 
        onNext={ () => dispatch( getPokemons( page ) ) }
        onPrevious={ () => dispatch( getPokemons( page - 2 ) ) }
      />
    </>
  )
}
