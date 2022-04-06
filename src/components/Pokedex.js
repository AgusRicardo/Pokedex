import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const navigate = useNavigate();

  


  const pokemonData = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
    .then(resp => {
      for (let i = 0; i < resp.data.results.length; i++) {
          axios.get(resp.data.results[i].url)
            .then(result => {
              setPokemons(prevArray => [...prevArray, result.data])
            })
        
      }
    })
  }

  useEffect(() => pokemonData(), [])

  const handleClick = (name) => {
    navigate(`/pokemon/${name}`)
  }
  return (
    <>
    <p>100 randoms Pokemons spawn</p>
      <div className='pokedex-container'>
    {
        pokemons &&
        pokemons.map((pokemon, id) => 
      <div className="App-header" key={id}>
        <div className='pokedex-card'>
          <div className="card" onClick={() =>handleClick(pokemon.name)}>
            <div className="card-header-img">
              <img src={pokemon.sprites.front_default} alt=""  width='180px'/>
            </div>
              <hr />
              <h2>{pokemon.name}</h2>
          </div>
        </div>
      </div>
      )
    }
    </div>
    </>
  )
}
