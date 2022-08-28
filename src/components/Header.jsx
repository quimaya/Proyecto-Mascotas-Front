import "./Header.css"
import {Link} from "react-router-dom"



const Header = () => {
    return (
        <div>
            <nav>
                <h2>Su tienda de mascotas favorita</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/mascotas" >Mascotas</Link>
                        <Link to="login"> Login</Link>
                        <Link to="register"> Registrar</Link>

                    </li>
                </ul>
            
            
            
            </nav>
            Header
        </div>
    )
    
    }
    export default Header