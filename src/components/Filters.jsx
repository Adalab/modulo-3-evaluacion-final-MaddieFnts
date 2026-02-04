const Filters = ({filterNameInCard, setFilterNameInCard, filterHouse, setFilterHouse}) => {
return (
<form onSubmit={(e) => e.preventDefault()}>
<input type="text" placeholder="Busca un personaje" value={filterNameInCard} onChange={(e) => setFilterNameInCard(e.target.value)} />

<select name="" id="" value={filterHouse} onChange={(e) => setFilterHouse(e.target.value)}>
    <option value="All">Todo</option>
    <option value="Gryffindor">Gryffindor</option>
    <option value="Hufflepuff">Hufflepuff</option>
    <option value="Ravenclaw">Ravenclaw</option>
    <option value="Slytherin">Slytherin</option>
    <option value="">Sin casa</option>
</select>
</form>
)
}

export default Filters