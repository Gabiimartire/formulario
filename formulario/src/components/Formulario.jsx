import React, { useState } from 'react'
import Input from './Input'
import Boton from './Boton'
function Formulario() {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    tel: '',  
    text: '' 
  })
  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `Formulario enviado\n` +
      `Nombre: ${datos.nombre}\n` +
      `Email: ${datos.email}\n` +
      `Celular: ${datos.tel}\n` +
      `Mensaje: ${datos.text}`
    )
    setDatos({
      nombre: '',
      email: '',
      tel: '',
      text: ''
    });
  }
  return (
    <form onSubmit={handleSubmit} className="mi-formulario">
      <h2>Formulario de Contacto</h2>
      <Input 
        label="Nombre Completo:"
        type="text"
        name="nombre"
        value={datos.nombre}
        onChange={handleInputChange}
        placeholder="Ej. Juan Pérez"
      />
      
      <Input 
        label="Correo Electrónico:"
        type="email"
        name="email"
        value={datos.email}
        onChange={handleInputChange}
        placeholder="Ej. juan@correo.com"
      />
      
      <Input 
        label="Celular:"
        type="tel"
        name="tel"
        value={datos.tel}
        onChange={handleInputChange}
        placeholder="Ej. +54 9 123456789"
      />
      
      <Input 
        label="Texto Breve:"
        type="text"
        name="text"
        value={datos.text}
        onChange={handleInputChange}
        placeholder="Un breve texto de comunicación"
      />
      
      <Boton texto="Enviar" />     
    </form>
  )
}
export default Formulario
