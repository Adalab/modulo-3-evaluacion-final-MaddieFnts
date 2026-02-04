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

const filteredCharacters = characters.filter((character) =>
  character.name
    .toLocaleLowerCase()
    .includes(filterNameInCard.toLocaleLowerCase())
);


  return (
    <>
    <Filters filterNameInCard={filterNameInCard} setFilterNameInCard={setFilterNameInCard} />
    <CharacterList characters={filteredCharacters} />
    </>
    )
}

export default App
