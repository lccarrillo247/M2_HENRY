import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (evento) => {
    setInputs({
      ...inputs,
      [evento.target.name]: evento.target.value
    }
    )

    setErrors(
      validate({
        ...inputs,
        [evento.target.name]: evento.target.value
      })
    )
    };

    const handleSubmit = (evento) => {
      evento.preventDefault();

      if(Object.keys(errors).length){ // Object.keys trae las propiedades en un arreglo
        window.alert('Debe llenar todos los campos');
      } else {
        window.alert('Datos completos');
      }
    };

  return <div>Crear Formulario
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input
      className={errors.name && 'warning'}
      name="name"
      value={inputs.name}
      placeholder="Escribe tu nombre..."
      type="text"
      onChange={handleChange}
      />
      {errors.name && <p className='danger'>{errors.name}</p>}
      <label>Correo Electrónico:</label>
      <input
      className={errors.email && 'warning'}
      name="email"
      value={inputs.email}
      placeholder="Escribe tu email..."
      type="text"
      onChange={handleChange}
      />
      {errors.email && <p className='danger'>{errors.email}</p>}
      <label>Mensaje:</label>
      <textarea
      className={errors.message && 'warning'}
      name="message"
      value={inputs.message}
      placeholder="Escribe tu mensaje..."
      type="text"
      onChange={handleChange}
      />
      {errors.message && <p className='danger'>{errors.message}</p>}
      <button type="submit">Enviar</button>
    </form>
  </div>
}

export function validate(inputs) {

let errors = {};

if (!inputs.name) {
  errors.name = 'Se requiere un nombre'
}
if (!regexEmail.test(inputs.email)) {
  errors.email = 'Debe ser un correo electrónico'
}
if (!inputs.message) {
  errors.message = 'Se requiere un mensaje'
}

return errors

}
