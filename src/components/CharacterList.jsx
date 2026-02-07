import CharacterCard from './CharacterCard';

const CharacterList = ({characters}) => {
    return (
    <>
    {characters
    .map((character, index) => <CharacterCard key={index} id={character.id} name={character.name} house={character.house} image={character.image}/>)}
    </>
    )
}

export default CharacterList