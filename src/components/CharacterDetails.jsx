import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CharacterDetails = ({ characters }) => {
    const { id } = useParams();
    const selectedCharacter = characters.find((character) => character.id === id)
    const placeholder = 'https://placehold.co/300x400?text=Harry+Potter';

    if (!selectedCharacter) {
        return <p>Cargando...</p>
    }

    let speciesInSpanish = ""
    switch (selectedCharacter.species) {
        case "human":
            speciesInSpanish = "Humana/o"
            break;
        case "half-giant":
            speciesInSpanish = "Semigigante"
            break;
        case "werewolf":
            speciesInSpanish = "Hombre lobo"
            break
        case "ghost":
            speciesInSpanish = "Fantasma"
            break
        case "owl":
            speciesInSpanish = "Lechuza"
            break
        case "house-elf":
            speciesInSpanish = "Elfa/o doméstica/o"
            break
        default: 
        speciesInSpanish = selectedCharacter.species
    }

    let genderInSpanish = ""
    switch (selectedCharacter.gender) {
        case "male":
            genderInSpanish = "Masculino"
            break
        case "female":
            genderInSpanish = "Femenino"
            break
        default:
            genderInSpanish = selectedCharacter.gender
    }

    let otherNames = "";
        if (selectedCharacter.alternate_names.length === 0) {
            otherNames = <p>No tiene</p>
        } else {
            otherNames = selectedCharacter.alternate_names.join(", ")
        }


    
    return (
        <>
        <div>
            <h2>{selectedCharacter.name}</h2>
            <p>{selectedCharacter.house}</p>
            <p>{speciesInSpanish}</p>
            <p>{genderInSpanish}</p>
            <p>{selectedCharacter.alive ? "Viva/o" : "Muerta/o"}</p>
            <img src={selectedCharacter.image || placeholder} alt={selectedCharacter.name} /> 
            <p>Otros nombres (en inglés): {otherNames}</p>
        </div>

        <Link to="/">¡Travesura realizada!</Link>
        </>
    )
}

export default CharacterDetails