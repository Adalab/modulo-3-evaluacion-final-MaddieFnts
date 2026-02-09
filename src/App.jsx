import './App.scss';
import getCharacters from './services/api';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import CharacterDetails from './components/CharacterDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";


function App() {
const [characters, setCharacters] = useState([]); //array personajes
const [filterName, setFilterName] = useState (""); //input
const [filterHouse, setFilterHouse] = useState ("Gryffindor"); //casas
const [darkMode, setDarkMode] = useState(false); //modo noche
const [sortOrder, setSortOrder] = useState("none"); //orden alfab
const [cardsToShow, setCardsToShow] = useState(6); //mostrar más, menos

//API
useEffect(() => {
  getCharacters().then((data) => {
    setCharacters(data);
  });
}, []);


//MODO NOCHE
const toggleDarkMode = () => { 
  setDarkMode(!darkMode);
};

useEffect(() => {
  document.body.classList.toggle('dark-mode', darkMode);
}, [darkMode]);


//FILTROS

//Nombre y casa
const filteredCharacters = characters.filter((character) => character.name
.toLocaleLowerCase()
.includes(filterName.toLocaleLowerCase()) && (filterHouse === "All" || character.house === filterHouse)
);

//Alfabético
const sortedCharacters = [...filteredCharacters].sort((a, b) => {
  if (sortOrder === "none") {
    return 0;
  } else if (sortOrder === "asc") {
    return a.name.localeCompare(b.name);
  } else if (sortOrder === "desc") {
    return b.name.localeCompare(a.name);
  }
});


//MOSTRAR MÁS
const visibleCards = sortedCharacters.slice(0, cardsToShow);


//BORRAR FILTROS
const resetFilters = () => {
  setFilterName("");
  setFilterHouse("Gryffindor");
  setSortOrder("none");
  setCardsToShow(6);
};


//RETURN
return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <header className="page-header">

              <img src="/images/header-fondo.png" alt="Buscador HP" className="page-header__logo" />

              <div className='filters-container'>
                <Filters filterName={filterName} setFilterName={setFilterName} filterHouse={filterHouse} setFilterHouse={setFilterHouse} sortOrder={sortOrder} setSortOrder={setSortOrder} setCardsToShow={setCardsToShow} />

                <button onClick={resetFilters} className="btn-reset">Borrar</button>
              </div>

              <div className="theme-button">
                <button className={darkMode ? "btn-lumos" : "btn-nox"} onClick={toggleDarkMode}>{darkMode ? "¡Lumos!" : "¡Nox!"}</button>
              </div>

            </header>

            <main className="page-main">

              {sortedCharacters.length === 0 ? 
              (<p>¿Seguro que querías buscar "{filterName}"? ¿No estará en otra casa?</p>) : 
                (
                <>
                  <CharacterList characters={visibleCards} />

                  {cardsToShow < sortedCharacters.length && 
                  (<button className="btn-load-more" onClick={() => setCardsToShow(cardsToShow + 6)}>Más</button>)}

                  {cardsToShow > 6 && 
                  (<button className="btn-load-more" onClick={() => setCardsToShow(6)}>Menos</button>)}
                </>
              )};

            </main>
          </>
        }
      />

      <Route
        path="/detail/:id" 
        element={<CharacterDetails characters={characters} />} //Renderizar CharacterDetails con una prop characters con valor characters
      />
    </Routes>
  );
} 

export default App
