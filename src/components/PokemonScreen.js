import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonByName } from '../selectors/getPokemonByName';

export const PokemonScreen = () => {
  // El params es una propiedad de react-router-dom, que muestra propiedades
  // Desestructuramos pokemonId desde el params, que es el id único del pokemon clickeado
  const {pokemonId} = useParams();
  const [state, setState] = useState()


  // const pokemonSc = async() => {
  //   const pokemon =  await getPokemonByName(pokemonId);
  //   setState(pokemon)
  //   console.log('pokemon',pokemon.name);
  //   console.log('estado', state);
  // }
  // const pokemons = useMemo(() => pokemonSc(), [])

  // console.log(pokemons);

  
  
  
  return (
    <>
    <div>En construcción ...</div>
    {/* <p>{pokemon.name}</p> */}
    </>
  )
}
