import { useEffect, useState } from "react"
import MascotaCard from "../components/MascotaCard"
import Buscador from "../components/Buscador"
import { get } from "../services/API"
import './Mascotas.css'

const Mascotas = () => {
  
    const [allMascotas, setMascotas] =useState([])

    const [filtro, setFiltro] = useState("")

    const filtroMascotas = allMascotas.filter((mascota) =>
    mascota.name.toLowerCase().includes(filtro) ||
    mascota.raza.toLowerCase().includes(filtro) 
    )

    const getAllMascotas = async () => {
        const resMascotas = await httpGet("/pets");
        setMascotas(resMascotas.data.results.mascotas)
    }

    useEffect(() => {
        getAllMascotas()
    }, [])

    return (
        <section>
            <h2>Estas son las mascotas</h2>
            <Buscador setFiltro = {setFiltro} />
            
           {allMascotas.length  ?
           <MascotaCard mascotas={filtroMascotas} />  
           :
           <p>Cargando Mascotas</p>
           } 
            
        </section>
    )
    
    }
    export default Mascotas
