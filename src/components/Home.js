import React from 'react'
import github from '../assets/img/social-media/github.png'
import linkedin from '../assets/img/social-media/linkedin.png'

export const Home = () => {
  return (
    <>
      <div className='container-home'>
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="imgPokeApi" />
        <div className='container-redes'>
          <div className='redes'>
            <a href="https://github.com/agustinricardo1" target="_blank"><img src={github} alt="icon-github" width='40px'/></a>
            <a href="https://www.linkedin.com/in/agustin-ricardo/" target="_blank"><img src={linkedin} alt="icon-linkedin" width='40px'/></a>
          </div>
        </div>
      </div>
    </>
  )
}
