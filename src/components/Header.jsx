import "./Header.css"
import { Link } from "react-router-dom"
import { JwtContext } from "../context/jwtContext"
import { useContext } from "react"


const Header = () => {
    const { mascota, logout } = useContext(JwtContext)

    return (
        <header>
            <nav>
                <h2>Su tienda de mascotas favorita</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/mascotas" >Mascotas</Link></li>
                </ul>
            </nav>
            <div>
                {mascota ?
                    (<>
                        <p>
                            ¡Bienvenido {mascota.nick}!
                        </p>
                        <button onClick={()=>
                        logout()
                        }>Cerrar sesión</button>
                    </>)
                    :
                    (<div>
                        <ul>
                            <li><Link to="login"> Login</Link> </li>

                            <li><Link to="register"> Registrar</Link></li>
                        </ul>

                    </div>)}
            </div>
        </header>
    )

}
export default Header