import React from 'react'
import '../sass/App.scss'
import PropTypes from 'prop-types';
import health from '../assets/img/health.png'
import attack from '../assets/img/attack.png'
import defense from '../assets/img/defense.png'
import exp from '../assets/img/exp.png'
import superAttack from '../assets/img/super-attack.png'

export const Card = ({data, bigImg, img, experience, heal, ataque, defensa, specialAttack}) => {


  return (
    <div className="App">
    <header className="App-header">
      {
          <div className='container-card'>
            <div className="card">
              <div className="card-header-img">
                <img src={bigImg} alt=""  width='180px'/>
              </div>
              <div className="card-stats">
                <div className="card-stats-experience">
                  <img src={exp} alt="" width='40px' height='40px'/>
                  <p>{experience}</p>
                  <p>Experience</p>
                </div>
                <div className="card-stats-health">
                  <img src={health} alt="" width='40px' height='40px'/>
                  <p>{heal}</p> {/* HP */}
                  <p>Health</p> 
                </div>
                <div className="card-stats-attack">
                  <img src={attack} alt="" width='40px' height='40px'/>
                  <p>{ataque}</p> {/* ATTACK */}
                  <p>Attack</p>
                </div>
                <div className="card-stats-defense">
                  <img src={defense} alt="" width='40px' height='40px'/>
                  <p>{defensa}</p> {/* DEFENSE */}
                  <p>Defense</p>
                </div>
                <div className="card-stats-special-attack">
                  <img src={superAttack} alt="" width='40px' height='40px'/>
                  <p>{specialAttack}</p> {/* SPECIAL-ATTACK */}
                  <p>Special Attack</p>
                </div>
              </div>
              <hr />
            <h2>{data.name}</h2>
              </div>
          </div>
      }
    </header>
  </div>
  )
}

Card.prototype = {
  img:PropTypes.src,
  experience:PropTypes.string,
  heal:PropTypes.string,
  ataque:PropTypes.string,
  defensa:PropTypes.string,
  specialAttack:PropTypes.string
};
