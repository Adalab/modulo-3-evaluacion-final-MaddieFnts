import PropTypes from "prop-types";

const Filters = ({ filterName, setFilterName, filterHouse, setFilterHouse, sortOrder, setSortOrder, setCardsToShow }) => { //Recibir las props de app
return (
<>
    <form className="filters" onSubmit={(e) => e.preventDefault()}>
    <input className="filter-name" type="text" placeholder="Busca un personaje" value={filterName} onChange={(e) => {
        setFilterName(e.target.value)
        setCardsToShow(6)}} />

    <select className="filter-house" value={filterHouse} onChange={(e) => {
        setFilterHouse(e.target.value) 
        setFilterName("")
        setCardsToShow(6)}} >

        <option value="All">Todo</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="">Sin casa</option>
    </select>

    <select className="filter-sort" value={sortOrder} onChange={(e) => {
        setSortOrder(e.target.value)
        setCardsToShow(6)}} >
        <option value="none">Sin ordenar</option>
        <option value="asc">A a Z</option>
        <option value="desc">Z a A</option>
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
    sortOrder: PropTypes.string.isRequired,
    setSortOrder: PropTypes.func.isRequired,
};

export default Filters