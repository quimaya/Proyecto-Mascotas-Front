import { Link } from "react-router-dom"
import "./Home.css"


const Home = () => {
return (
    <section>
        <h2>Bienvenido a tu web de Mascotas favorita</h2>
        <img src="/mascotasHome.jpg" alt="logoMascotas" className="logoMascotas"/>
        <Link to="/register" className="registrarMascota">¡ Registra ya tu mascota !</Link>
        <p>O inicia sesión <Link to="/login" className="loginMascota">login</Link></p>    
    </section>
)

}
export default Home