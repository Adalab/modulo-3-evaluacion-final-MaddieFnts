import PropTypes from "prop-types";

const Filters = ({filterName, setfilterName, filterHouse, setFilterHouse}) => {
return (
<>
    <form onSubmit={(e) => e.preventDefault()}>
    <input type="text" placeholder="Busca un personaje" value={filterName} onChange={(e) => setfilterName(e.target.value)} />

    <select value={filterHouse} onChange={(e) => {
        setFilterHouse(e.target.value) 
        setfilterName("")}}>
        <option value="All">Todo</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="">Sin casa</option>
    </select>
    </form>
</>
)
}

Filters.PropTypes = {
    filterName: PropTypes.string.isRequired,
    setfilterName: PropTypes.func.isRequired,
    filterHouse: PropTypes.string.isRequired,
    setFilterHouse: PropTypes.func.isRequired,
};

export default Filters