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
const [darkMode, setdarkMode] = useState(false);

useEffect(() => {
  getCharacters().then((data) => {
    setCharacters(data);
  });
}, []);


useEffect(() => {
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
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
              <img src="../public/images/header-fondo.png" alt="Buscador HP" className="page-header__logo" />

              <Filters filterName={filterName} setFilterName={setFilterName} filterHouse={filterHouse} setFilterHouse={setFilterHouse} />

              <div className="theme-buttons">
                <button 
                  className="btn-lumos" 
                  onClick={() => setdarkMode(false)}>¡Lumos!</button>

                <button 
                  className="btn-nox" 
                  onClick={() => setdarkMode(true)}>¡Nox!</button>
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
