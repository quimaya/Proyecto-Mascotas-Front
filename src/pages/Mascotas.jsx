import { useEffect, useState } from "react"
import MascotaCard from "../components/MascotaCard"
import { API } from "../services/API"


const Mascotas = () => {
  



    const [allMascotas, setMascotas] =useState([])

    const getAllMascotas = async () => {
        API.get("/").then((resMascotas) => {
            setMascotas(resMascotas.data.results.mascotas)
        })
    }

    useEffect(() => {
        getAllMascotas()
    }, [])

    return (
        <section>
            <h2>Estas son las mascotas</h2>
            
           {allMascotas.length  ?
           <MascotaCard mascotas={allMascotas}/>  
           :
           <p>Cargando Mascotas</p>
           } 
            
        </section>
    )
    
    }
    export default Mascotas