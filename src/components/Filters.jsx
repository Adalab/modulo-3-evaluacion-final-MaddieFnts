import PropTypes from "prop-types";

const Filters = ({filterName, setFilterName, filterHouse, setFilterHouse}) => {
return (
<>
    <form className="filters" onSubmit={(e) => e.preventDefault()}>
    <input className="filter-name" type="text" placeholder="Busca un personaje" value={filterName} onChange={(e) => setFilterName(e.target.value)} />

    <select className="filter-house" value={filterHouse} onChange={(e) => {
        setFilterHouse(e.target.value) 
        setFilterName("")}}>
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

Filters.propTypes = {
    filterName: PropTypes.string.isRequired,
    setFilterName: PropTypes.func.isRequired,
    filterHouse: PropTypes.string.isRequired,
    setFilterHouse: PropTypes.func.isRequired,
};

export default Filters