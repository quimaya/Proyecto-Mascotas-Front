const Buscador = ({setFiltro}) => {
    
    return (
        <div>

            <input type = "text" onChange={(e) => setFiltro(e.target.value.toLowerCase())} placeholder="Busca tu mascota aquí"/>
        </div>
    )
    
    }
    export default Buscador