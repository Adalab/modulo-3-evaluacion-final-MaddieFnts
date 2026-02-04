const placeholder = 'https://placehold.co/300x400?text=Harry+Potter';

const CharacterCard = ({name, species, house, image}) => {
    return <div>
        <h2>{name}</h2>
        <p>{species}</p>
        <p>{house}</p>
        <img src={image || placeholder} alt={name} />
    </div>
}


export default CharacterCard