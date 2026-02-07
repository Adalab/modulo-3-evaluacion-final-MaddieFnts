import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const placeholder = 'https://placehold.co/300x400?text=Harry+Potter';

const CharacterCard = ({id, name, house, image}) => {
    return <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
        <p>{house}</p>
        <img src={image || placeholder} alt={name} />
    </Link>
}

CharacterCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string,
    image: PropTypes.string
};

export default CharacterCard