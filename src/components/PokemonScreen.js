import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../selectors/getPokemonByName";

import health from "../assets/img/health.png";
import attack from "../assets/img/attack.png";
import defense from "../assets/img/defense.png";
import exp from "../assets/img/exp.png";
import superAttack from "../assets/img/super-attack.png";

export const PokemonScreen = () => {
  // El params es una propiedad de react-router-dom, que muestra propiedades
  // Desestructuramos pokemonId desde el params, que es el id único del pokemon clickeado
  const { pokemonId } = useParams();
  const [state, setState] = useState("");

  const pokemonSc = async () => {
    const pokemon = await getPokemonByName(pokemonId);
    await setState(pokemon);
  };

  useMemo(() => pokemonSc(), []);


  return (
    <>
    {
      state &&
      <div className="App">
        <header className="App-header">
          <div className="container-card">
            <div className="card">
              <div className="card-header-img">
                <img src={state.sprites.other.dream_world.front_default} alt="" width="180px" />
              </div>
              <div className="card-stats">
                <div className="card-stats-experience">
                  <img src={exp} alt="" width="40px" height="40px" />
                  <p>{state.base_experience}</p>
                  <p>Experience</p>
                </div>
                <div className="card-stats-health">
                  <img src={health} alt="" width="40px" height="40px" />
                  <p>{state.stats[0].base_stat}</p>
                  <p>Health</p>
                </div>
                <div className="card-stats-attack">
                  <img src={attack} alt="" width="40px" height="40px" />
                  <p>{state.stats[1].base_stat}</p>
                  <p>Attack</p>
                </div>
                <div className="card-stats-defense">
                  <img src={defense} alt="" width="40px" height="40px" />
                  <p>{state.stats[2].base_stat}</p>
                  <p>Defense</p>
                </div>
                <div className="card-stats-special-attack">
                  <img src={superAttack} alt="" width="40px" height="40px" />
                  <p>{state.stats[3].base_stat}</p>
                  <p>Special Attack</p>
                </div>
              </div> 
              <hr />
              <h2>{state.name}</h2>
            </div>
          </div>
        </header>
      </div>
    }
    </>
  );
};
