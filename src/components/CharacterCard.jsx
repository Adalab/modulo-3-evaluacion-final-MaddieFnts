import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const placeholder = 'https://placehold.co/300x400?text=Harry+Potter';

const CharacterCard = ({id, name, image}) => { //Recibir las props id, name e image que enviamos en CharacterList
    return <Link to={`/detail/${id}`}> 
    <div  className="character-card">
        <div className="character-card__window">
        <img src={image || placeholder} alt={name} className="character-card__photo" />
        </div>

        <div className="character-card__frame"></div>

        <h2>{name}</h2>
    </div>
    </Link>
    //Todo lo de dentro de link es clicable y lleva a detail/id
}

CharacterCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string,
    image: PropTypes.string
};

export default CharacterCard