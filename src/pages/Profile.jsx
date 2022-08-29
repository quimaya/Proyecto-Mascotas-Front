import React from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { JwtContext } from '../context/jwtContext'
import { API } from '../services/API'
import Swal from "sweetalert2"

const Profile = () => {

    const { mascota, logout } = useContext(JwtContext)

    const { register, handleSubmit } = useForm()

    let navigate = useNavigate()

    const envioFormulario = data => {
        const formulario = new FormData()
        formulario.append("name", data.name)
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
            <h2>Perfil</h2>
            <h3>{mascota.name}</h3>

            <img src={mascota.images} alt={mascota.name} />
            <form onSubmit={handleSubmit(envioFormulario)}>

                <label htmlFor="name">Modificar Nombre</label>
                <input type="text" id="name" name="name" placeholder="Nuevo nombre"{...register("name")} />

                <label htmlFor="images">Modificar Imagen</label>
                <input type="file" id="images" name="images" placeholder="Nueva imagen"{...register("images")} />

                <button type="submit">Enviar Cambios</button>


            </form>
        </section>
    )
}



export default Profile