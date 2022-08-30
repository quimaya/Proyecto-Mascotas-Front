import './Buscador.css';

const Buscador = ({ setFiltro }) => {
  return (
    <div className="buscador">
      <input
        type="text"
        onChange={(e) => setFiltro(e.target.value.toLowerCase())}
        placeholder="Busca tu mascota aquí"
      />
    </div>
  );
};
export default Buscador;
