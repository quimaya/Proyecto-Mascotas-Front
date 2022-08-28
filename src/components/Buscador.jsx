const Buscador = ({setFiltro}) => {
    
    return (
        <div>

            <input type = "text" onChange={(e) => setFiltro(e.target.value.toLowerCase())}/>
        </div>
    )
    
    }
    export default Buscador