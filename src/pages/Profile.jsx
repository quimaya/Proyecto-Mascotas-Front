import React from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { JwtContext } from '../context/jwtContext'
import { API } from '../services/API'
import Swal from "sweetalert2"
import './Profile.css'

const Profile = () => {

    const { mascota, logout } = useContext(JwtContext)

    const { register, handleSubmit } = useForm()

    let navigate = useNavigate()

    const envioFormulario = data => {
        const formulario = new FormData()
        formulario.append("name", data.name)
        formulario.append("raza", data.raza)
        formulario.append("pelaje", data.pelaje)
        formulario.append("color", data.color)
        formulario.append("images", data.images[0])
        API.patch(`/update/${mascota._id}`, formulario).then((res => {
            logout();

            Swal.fire({
                title: `Perfil actualizado de ${mascota.nick}`,
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
             navigate("/login")
        }))
    }


    return (

        <section>
            <div className='perfil'>
            <h3>Perfil de {mascota.name}</h3>
            <img src={mascota.images} alt={mascota.name} />
            <form onSubmit={handleSubmit(envioFormulario)}>

                <label htmlFor="name">Modificar Nombre</label>
                <input type="text" id="name" name="name" placeholder="Nuevo nombre"{...register("name")} />

                <label htmlFor="images">Modificar Imagen</label>
                <input type="file" id="images" name="images" placeholder="Nueva imagen"{...register("images")} />

                <label htmlFor="images">Modificar Raza</label>
                <input type="text" id="raza" name="raza" placeholder="Nueva raza"{...register("raza")} />

                <label htmlFor="images">Modificar Pelaje</label>
                <input type="text" id="pelaje" name="pelaje" placeholder="Nuevo pelaje"{...register("pelaje")} />

                <label htmlFor="images">Modificar Color</label>
                <input type="text" id="color" name="color" placeholder="Nuevo color"{...register("color")} />

                <button type="submit">Enviar Cambios</button>


            </form>
            </div>
        </section>
    )
}



export default Profile