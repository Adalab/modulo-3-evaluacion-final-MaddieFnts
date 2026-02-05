import CharacterCard from './CharacterCard';

const CharacterList = ({characters}) => {
    return (
    <>
    {characters
    .map((character, index) => <CharacterCard key={index} id={character.id} name={character.name} species={character.species} house={character.house} image={character.image}/>)}
    </>
    )
}

export default CharacterList