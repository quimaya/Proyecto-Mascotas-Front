import "./Header.css"
import { Link } from "react-router-dom"
import { JwtContext } from "../context/jwtContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const { mascota, logout } = useContext(JwtContext)

    let navigate = useNavigate()

    return (
        <header>
            <nav>
                <h2>Mascotas & Pets</h2>
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li> <Link to="/mascotas" className="link">Mascotas</Link></li>
                    {mascota ? (<li>
                        <Link to ="/profile" className="link">Perfil</Link>
                    </li>) : 
                    null}
                </ul>
            </nav>
            <div className="sesion">
                {mascota ?
                    (<div className="login">
                        <p>
                            ¡Bienvenido {mascota.nick}!
                        </p>
                        <button onClick={()=>
                        logout() & navigate("/")
                        }>Cerrar sesión</button>
                    </div>)
                    :
                    (<div className="register">
                        <ul>
                            <li><Link to="login" className="loginLink"> Login</Link> </li>

                            <li><Link to="register" className="registerLink"> Registrar</Link></li>
                        </ul>

                    </div>)}
            </div>
        </header>
    )

}
export default Header