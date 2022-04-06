  import './App.css';
  import './sass/App.scss'
  import { Navbar } from './components/Navbar';
  import { Pokedex } from './components/Pokedex';
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import { Home } from './components/Home';
import { PokemonScreen } from './components/PokemonScreen';
import { SearchScreen } from './components/SearchScreen';

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='pokedex' element={<Pokedex/>}/>
        <Route path='search' element={<SearchScreen/>}/>
        <Route path='pokemon/:pokemonId' element={<PokemonScreen/>}/>

        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
