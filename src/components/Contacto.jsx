import React, { useState } from 'react'

/**
 * Componente Contacto: Formulario interactivo con validación de campos.
 * Cumple con los requerimientos de la EFT (nombre, email, mensaje y validaciones).
 */
function Contacto() {
  // Estado para los campos del formulario
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })

  // Estado para los mensajes de error
  const [errores, setErrores] = useState({})

  // Estado para controlar el mensaje de exito
  const [enviadoExitoso, setEnviadoExitoso] = useState(false)

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormulario({
      ...formulario,
      [name]: value,
    })

    // Limpia el error del campo al escribir
    if (errores[name]) {
      setErrores({
        ...errores,
        [name]: '',
      })
    }
  }

  // Validacion de los datos ingresados
  const validarFormulario = () => {
    const nuevosErrores = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.'
    } else if (formulario.nombre.trim().length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres.'
    }

    if (!formulario.email.trim()) {
      nuevosErrores.email = 'El correo electrónico es obligatorio.'
    } else if (!emailRegex.test(formulario.email)) {
      nuevosErrores.email = 'Por favor ingresa un formato de correo válido.'
    }

    if (!formulario.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje no puede estar vacío.'
    } else if (formulario.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    }

    return nuevosErrores
  }

  // Manejador del envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    const erroresValidacion = validarFormulario()

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion)
      setEnviadoExitoso(false)
    } else {
      // Formulario valido
      setErrores({})
      setEnviadoExitoso(true)
      // Reiniciar campos
      setFormulario({
        nombre: '',
        email: '',
        mensaje: '',
      })
    }
  }

  return (
    <section id="contacto" className="py-5 mb-4">
      <div className="card card-theme p-4 mx-auto shadow-sm" style={{ maxWidth: '650px' }}>
        <div className="text-center mb-4">
          <h3 className="h4 fw-bold mb-1">Contacto y Soporte</h3>
          <p className="text-secondary small mb-0">
            ¿Tienes alguna consulta o buscas un videojuego específico? Escríbenos.
          </p>
        </div>

        {/* Alerta de exito condicional */}
        {enviadoExitoso && (
          <div className="alert alert-success mb-4" role="alert">
            <strong>¡Mensaje enviado con éxito!</strong> Nos pondremos en contacto contigo a la brevedad.
          </div>
        )}

        {/* Alerta general si hay errores */}
        {Object.keys(errores).length > 0 && (
          <div className="alert alert-danger mb-4" role="alert">
            Por favor completa los campos requeridos correctamente antes de enviar.
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Campo Nombre */}
          <div className="mb-3 text-start">
            <label htmlFor="nombre" className="form-label text-light small fw-semibold">
              Nombre completo:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className={`form-control bg-dark text-light border-secondary ${
                errores.nombre ? 'is-invalid' : ''
              }`}
              placeholder="Ej: Benjamin Ruiz"
              value={formulario.nombre}
              onChange={handleChange}
            />
            {errores.nombre && (
              <div className="invalid-feedback">{errores.nombre}</div>
            )}
          </div>

          {/* Campo Email */}
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label text-light small fw-semibold">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control bg-dark text-light border-secondary ${
                errores.email ? 'is-invalid' : ''
              }`}
              placeholder="nombre@ejemplo.com"
              value={formulario.email}
              onChange={handleChange}
            />
            {errores.email && (
              <div className="invalid-feedback">{errores.email}</div>
            )}
          </div>

          {/* Campo Mensaje */}
          <div className="mb-4 text-start">
            <label htmlFor="mensaje" className="form-label text-light small fw-semibold">
              Mensaje o consulta:
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              className={`form-control bg-dark text-light border-secondary ${
                errores.mensaje ? 'is-invalid' : ''
              }`}
              placeholder="Escribe tu consulta o duda sobre algún videojuego..."
              value={formulario.mensaje}
              onChange={handleChange}
            ></textarea>
            {errores.mensaje && (
              <div className="invalid-feedback">{errores.mensaje}</div>
            )}
          </div>

          {/* Boton Enviar */}
          <button type="submit" className="btn btn-accent w-100 fw-bold py-2">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacto