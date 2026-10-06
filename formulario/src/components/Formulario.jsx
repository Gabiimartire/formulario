import React, { useState } from 'react'
import Input from './Input'
import Boton from './Boton'
import Swal from 'sweetalert2' 

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
    Swal.fire({
      title: '¡Formulario enviado con éxito!',
      html: `
        <div style="text-align: left margin-top: 10px">
          <p><strong>Nombre:</strong> ${datos.nombre}</p>
          <p><strong>Email:</strong> ${datos.email}</p>
          <p><strong>Celular:</strong> ${datos.tel}</p>
          <p><strong>Mensaje:</strong> ${datos.text}</p>
        </div>
      `,
      icon: 'success',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#4a90e2', 
    })
    setDatos({
      nombre: '',
      email: '',
      tel: '',
      text: ''
    })
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
