import "./login.css"
import {useForm} from "react-hook-form"
import { API } from "../services/API"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const {register, handleSubmit} = useForm()

    let navigate = useNavigate()

    const formSubmit = formData => {
        //Post a https://localhost:8080/api/v1/login
        //Enviar formData = nick y password
        API.post("/login", formData).then(
            (res) => {navigate("/mascotas")
            console.log(formSubmit)

            localStorage.setItem("token",res.data.token)
            localStorage.setItem("nick",JSON.stringify(res.data.mascotaInDB))

        })
        
    }

    return (
        <section className="Login">
                 <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit(formSubmit)}>

                <label htmlFor="nick">Introduce Nick</label>
                <input type="text" id="nick" name="nick" placeholder="El nick de tu mascota" {... register("nick")}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Introduce contraseña"{... register("password")}/>
                <button type="submit">Enviar</button>

            </form>
        </section>
    )
    
    }
    export default Login