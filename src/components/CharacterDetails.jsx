import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterDetails = ({ characters, resetFilters }) => {
    const { id } = useParams();
    const selectedCharacter = characters.find((character) => character.id === id)
    const placeholder = 'https://placehold.co/300x400?text=Harry+Potter';

    //Datos no cargados
    if (characters.length === 0) {
        return <p>Cargando...</p>
    }

    //URL no válida
    if (!selectedCharacter) {
        return <p>El personaje que buscas se ha puesto la capa de invisibilidad y no damos con él.</p>
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

        <Link to="/" onClick={resetFilters}>¡Travesura realizada!</Link>
        </>
    )
}

CharacterDetails.propTypes = {
    characters: PropTypes.array.isRequired,
    resetFilters: PropTypes.func,
};

export default CharacterDetails