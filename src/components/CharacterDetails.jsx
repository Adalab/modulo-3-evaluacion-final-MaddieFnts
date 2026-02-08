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
            otherNames = "No tiene"
        } else {
            otherNames = selectedCharacter.alternate_names.join(", ")
        }

    
    let houseCrest = "";
    switch (selectedCharacter.house) {
        case "Gryffindor":
            houseCrest = "Gryffindor 🦁"
            break
        case "Slytherin":
            houseCrest = "Slytherin 🐍"
            break
        case "Hufflepuff":
            houseCrest = "Hufflepuff 🦡"
            break
        case "Ravenclaw":
            houseCrest = "Ravenclaw 🦅"
            break
        default:
            houseCrest = "Desconocida o no tiene ❌"
    }

    
    return (
        <>
        <section className="character-content">
        <div className="character-image">
            <img src={selectedCharacter.image || placeholder} alt={selectedCharacter.name} /> 
        </div>

        <div className="content-info">
            <h2 className="name"><strong>Nombre:</strong> {selectedCharacter.name}</h2>
            <p className="house"><strong>Casa:</strong> {houseCrest}</p>
            <p className="species"><strong>Especie:</strong> {speciesInSpanish}</p>
            <p className="genre"><strong>Género:</strong> {genderInSpanish}</p>
            <p className="status"><strong>Estado:</strong> {selectedCharacter.alive ? "En su casa 🏠" : "Con Dios 🪦"}</p>
            <p className="other-names"><strong>Otros nombres (en inglés):</strong> {otherNames}</p>
        </div>

        <div className="hogwarts">
            <img src="/images/hogwarts.png" alt="Escudo de Hogwarts" />
        </div>
        </section>

        <section className="character-btn">
            <Link to="/" onClick={resetFilters} className="btn-mischief">¡Travesura realizada!</Link>
        </section>
        </>
    )
}

CharacterDetails.propTypes = {
    characters: PropTypes.array.isRequired,
    resetFilters: PropTypes.func,
};

export default CharacterDetails