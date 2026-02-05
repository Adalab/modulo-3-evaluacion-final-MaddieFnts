import { Link } from "react-router-dom";

const placeholder = 'https://placehold.co/300x400?text=Harry+Potter';

const CharacterCard = ({id, name, house, image}) => {
    return <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
        <p>{house}</p>
        <img src={image || placeholder} alt={name} />
    </Link>
}


export default CharacterCard