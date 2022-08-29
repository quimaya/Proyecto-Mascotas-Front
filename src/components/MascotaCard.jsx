import './MascotaCard.css';
import { Link } from 'react-router-dom';

const MascotaCard = ({ mascotas }) => {
  return (
    <div className='mascota'>
      {mascotas.map((mascota) => (
        <div className="mascotaCard" key={mascota._id}>
          <h2>{mascota.name}</h2>
          <img className='image' src={mascota.images} />
          <Link to="/infoMascota" className='infoMascota'>Info mascota</Link>
        </div>
      ))}
    </div>
  );
};
export default MascotaCard;
