import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import getCharacters from './services/api';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import { Routes, Route } from "react-router-dom";
import CharacterDetails from './components/CharacterDetails';


function App() {
const [characters, setCharacters] = useState([]);

useEffect(() => {
  getCharacters().then((data) => {
    setCharacters(data);
  });
}, []);


const [filterName, setfilterName] = useState ("");
const [filterHouse, setFilterHouse] = useState ("Gryffindor");


const filteredCharacters = characters.filter((character) => character.name
.toLocaleLowerCase()
.includes(filterName.toLocaleLowerCase()) && (filterHouse === "All" || character.house === filterHouse)
);
// .sort((a, b) => a.name.localeCompare(b.name))

//Resetear filtros al volver
const resetFilters = () => {
  setfilterName("");
  setFilterHouse("Gryffindor");
};

  return (
  <Routes>
    <Route
      path="/"
      element={
        <>
        <Filters filterName={filterName} setfilterName={setfilterName} filterHouse={filterHouse} setFilterHouse={setFilterHouse} />

        {filteredCharacters.length === 0 ? (<p>¿Seguro que querías buscar "{filterName}"? ¿No estará en otra casa?</p>) : <CharacterList characters={filteredCharacters} />
        }
        </>
      }
    />

    <Route
      path="/detail/:id" 
      element={<CharacterDetails characters={characters} resetFilters={resetFilters} />} />
  </Routes>
    )
}

export default App
