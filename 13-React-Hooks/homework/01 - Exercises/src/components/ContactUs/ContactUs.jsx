import React from "react";
import {useDispatch} from "react-redux";
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {

  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleInput = (evento) => {
    setForm({
      ...form,
      [evento.target.name]: evento.target.value,
  })
  }

  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(enviarForm(form));
    // setForm({
    //   nombre: "",
    //   email: "",
    //   asunto: "",
    //   mensaje: "",
    // })
  };

  return (
    <div>
      <form className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre" onChange={handleInput} />
        <label htmlFor="email">Email: </label>
        <input name="email" onChange={handleInput} />
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" onChange={handleInput} />
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" onChange={handleInput} />
        <button onClick={handleSubmit} type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
