import React from 'react'
import { NavLink } from 'react-router-dom';
import '../sass/Navbar.scss'


export const Navbar = () => {
  

  

  return (
    <>
      <div className='navbar-container'>
        <NavLink className={( {isActive} ) =>  "nav-item nav-link" + (isActive ? ' active' : '')} to="/home" >Home</NavLink>
        <NavLink className={( {isActive} ) =>  "nav-item nav-link" + (isActive ? ' active' : '')} to="/search" >Search</NavLink>
        <NavLink className={( {isActive} ) =>  "nav-item nav-link" + (isActive ? ' active' : '')} to="/pokedex" >PokeDex</NavLink>
      </div>
    </>
  )
}
