import CharacterCard from './CharacterCard';
import PropTypes from "prop-types";

const CharacterList = ({characters}) => {
    return (
    <ul className="character-list">
    {characters.map((character, index) => (
        <li key={index}>
            <CharacterCard 
            id={character.id} 
            name={character.name} 
            // house={character.house} 
            image={character.image}
            />
        </li>
        ))}
    </ul>
    )
};

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
};

export default CharacterList