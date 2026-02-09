import CharacterCard from './CharacterCard';
import PropTypes from "prop-types";

const CharacterList = ({characters}) => { //Recibir la prop characters (filteredCharacters) enviada desde app
    return (
    <ul className="character-list">
    {characters.map((character, index) => ( //Por cada personaje filtrado se crea un li, en el que se renderiza CharacterCard, y le pasamos 3 props
        <li key={index}>
            <CharacterCard id={character.id} name={character.name} image={character.image} /> 
        </li>
        ))}
    </ul>
    )
};

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
}; 

export default CharacterList