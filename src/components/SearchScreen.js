import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { Card } from './Card';
import { getPokemonByName } from '../selectors/getPokemonByName';
import useForm from '../hooks/useForm';

export const SearchScreen = () => {

  const navigate = useNavigate()
  const location = useLocation();
  
  const {q = ''} = queryString.parse(location.search)
  
  const [state, setState] = useState();

  
  const [formValues, handleInputChange] = useForm({
    searchText: q
  })

  const { searchText } = formValues;

  
  const handleSubmitForm = async(e) => {
    e.preventDefault();
    if (searchText.length > 3) {
      navigate(`?q=${searchText}`)
      const data = await getPokemonByName(q)
      console.log(data);
      if (data !== null) {
        console.log('aca');
        setState(data)
      }
    }else {
      alert('Debe ingresar mas de 3 dígitos');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <input className='input-search' type="text"  autoComplete='off' placeholder='Buscar pokemón' name='searchText' value={searchText} onChange={handleInputChange}/>
      </form>
      {
        state && 
        <Card data={state} bigImg={state.sprites.other.dream_world.front_default} img={state.sprites.front_default} experience={state.base_experience} heal={state.stats[0].base_stat} ataque={state.stats[1].base_stat} defensa={state.stats[2].base_stat} specialAttack={state.stats[3].base_stat}/>
      }
    </>
  )
}
