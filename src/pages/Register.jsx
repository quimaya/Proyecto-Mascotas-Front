import { useForm } from "react-hook-form";
import { API } from "../services/API";
import "./register.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit } = useForm();

  let navigate = useNavigate();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("nick", data.nick);
    formData.append("password", data.password);
    formData.append("raza", data.raza);
    formData.append("images", data.images[0]);
    API.post("/register", formData).then((res) => {
      Swal.fire({
        title: `Tu mascota ${data.nick} ha sido registrada correctamente`,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate("/login");
      if (res) navigate("/login");
      console.log("mascota regitrada", res);
    });
  };

  return (
    <section className="register">
      <h2>Registra tu mascota aquí</h2>
      <div className="registerForm">
        <div>
          <img
            src="/logoRegister.webp"
            alt="logoRegister"
            className="logoRegister"
          />
        </div>

        <form onSubmit={handleSubmit(formSubmit)}>
          <label htmlFor="name">Nombre de la Mascota</label>
          <input type="text" id="name" name="name" {...register("name")} />
          <label htmlFor="name">Nick</label>
          <input type="text" id="nick" name="nick" {...register("nick")} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password")}
          />
          <label htmlFor="images">Foto</label>
          <input
            type="file"
            id="images"
            name="images"
            {...register("images")}
          />
          <label htmlFor="raza">Raza</label>
          <input type="text" id="raza" name="raza" {...register("raza")} />
          <button type="submit" className="btn-register"> Registro Terminado</button>
        </form>
      </div>
    </section>
  );
};
export default Register;
