const Filters = ({filterNameInCard, setFilterNameInCard}) => {
return (
    <form>
        <input type="text" value={filterNameInCard} onChange={(e) => setFilterNameInCard(e.target.value)} />
    </form>
)
}

export default Filters