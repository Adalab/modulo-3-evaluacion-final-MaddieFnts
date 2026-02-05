import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CharacterDetails = ({ characters }) => {
    const { id } = useParams();
    const selectedCharacter = characters.find((character) => character.id === id)

    // if (!selectedCharacter) {
    //     return <p>Cargando...</p>
    // }
    
    return (
        <>
        <div>
            <h2>{selectedCharacter.name}</h2>
            <p>{selectedCharacter.house}</p>
            <img src={selectedCharacter.image} alt={selectedCharacter.name} /> 
        </div>

        <Link to="/">¡Travesura realizada!</Link>
        </>
    )
}

export default CharacterDetails