import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import getCharacters from './services/api';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';

function App() {
const [characters, setCharacters] = useState([]);

useEffect(() => {
  getCharacters().then((data) => {
    setCharacters(data);
  });
}, []);

const [filterNameInCard, setFilterNameInCard] = useState ("");
const [filterHouse, setFilterHouse] = useState ("All");

const filteredByName = characters.filter((character) =>
  character.name
    .toLocaleLowerCase()
    .includes(filterNameInCard.toLocaleLowerCase())
);

const filteredCharacters = filteredByName.filter((character) => {
  if (filterHouse === "All") {
    return true;
  }

  return character.house === filterHouse;
})


  return (
    <>
    <Filters filterNameInCard={filterNameInCard} setFilterNameInCard={setFilterNameInCard} filterHouse={filterHouse} setFilterHouse={setFilterHouse} />

    {filteredCharacters.length === 0 ? (<p>¿Seguro que querías buscar {filterNameInCard}? ¿No estará en otra casa?</p>) : <CharacterList characters={filteredCharacters} />
    }
    </>
    )
}

export default App
