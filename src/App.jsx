import { useState } from 'react';
import './App.scss';
import { useEffect } from 'react';
import getCharacters from './services/api';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import { Routes, Route } from "react-router-dom";
import CharacterDetails from './components/CharacterDetails';


function App() {
const [characters, setCharacters] = useState([]);
const [filterName, setFilterName] = useState ("");
const [filterHouse, setFilterHouse] = useState ("Gryffindor");
const [darkMode, setDarkMode] = useState(false);
const toggleDarkMode = () => {
  setDarkMode(!darkMode);
}

useEffect(() => {
  getCharacters().then((data) => {
    setCharacters(data);
  });
}, []);


useEffect(() => {
  document.body.classList.toggle('dark-mode', darkMode);
}, [darkMode]);


const filteredCharacters = characters.filter((character) => character.name
.toLocaleLowerCase()
.includes(filterName.toLocaleLowerCase()) && (filterHouse === "All" || character.house === filterHouse)
);
// .sort((a, b) => a.name.localeCompare(b.name))

//Resetear filtros al volver
const resetFilters = () => {
  setFilterName("");
  setFilterHouse("Gryffindor");
};

return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <header className="page-header">
              <img src="/images/header-fondo.png" alt="Buscador HP" className="page-header__logo" />

              <Filters filterName={filterName} setFilterName={setFilterName} filterHouse={filterHouse} setFilterHouse={setFilterHouse} />

              <div className="theme-button">
                <button className={darkMode ? "btn-nox" : "btn-lumos"} onClick={toggleDarkMode}>{darkMode ? "¡Lumos!" : "¡Nox!"}
                </button>
              </div>

            </header>

            <main className={`page-main ${darkMode ? 'dark-mode' : ''}`}>
              {filteredCharacters.length === 0 ? (
                <p>¿Seguro que querías buscar "{filterName}"? ¿No estará en otra casa?</p>
              ) : (
                <CharacterList characters={filteredCharacters} />
              )}
            </main>
          </>
        }
      />

      <Route
        path="/detail/:id" 
        element={<CharacterDetails characters={characters} resetFilters={resetFilters} />} 
      />
    </Routes>
  );
} 

export default App
