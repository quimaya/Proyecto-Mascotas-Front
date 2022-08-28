import { useEffect, useState } from "react"
import { API } from "../services/API"


const Mascotas = () => {

    const [allMascotas, setMascotas] =useState([])

    const getAllMascotas = async () => {
        API.get("/mascotas").then((resMascotas) => {
            setMascotas(resMascotas.data.mascotas)
        })
    }

    useEffect(() => {
        getAllMascotas()
    }, [])

    return (
        <section>
            <h2>Estas son las mascotas</h2>
            <div>
                {allMascotas.length ? (
                    allMascotas.map((mascota) => <p>{mascota.name}</p>)
                ) : (
                    <p>Cargando mascotas..</p>
                )}
            </div>
            
        </section>
    )
    
    }
    export default Mascotas