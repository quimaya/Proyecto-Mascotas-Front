import { Link } from "react-router-dom"
import "./Home.css"


const Home = () => {
return (
    <section>
        <h2>Bienvenido a tu web de Mascotas favorita</h2>
        <Link to="/register">¡Registra ya tu mascota!</Link>
        <p>O inicia sesión <Link to="/login">aquí</Link></p>
        
        
        
    </section>
)

}
export default Home