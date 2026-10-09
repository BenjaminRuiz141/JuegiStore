import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Catalogo from './components/Catalogo.jsx'
import Carrito from './components/Carrito.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'

/**
 * Componente Principal App:
 * Gestiona el estado global (videojuegos, carrito, filtro activo) y la carga de datos.
 */
function App() {
  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useState([])
  const [categoria, setCategoria] = useState('Todas')
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  // Carga dinámica de videojuegos desde el archivo JSON al montar el componente
  useEffect(() => {
    fetch('./productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar el archivo de videojuegos.')
        }
        return respuesta.json()
      })
      .then((datos) => {
        setProductos(datos)
        setCargando(false)
      })
      .catch((err) => {
        console.error('Error al obtener los videojuegos:', err)
        setError('Ocurrió un error al cargar el catálogo de videojuegos. Intenta nuevamente.')
        setCargando(false)
      })
  }, [])

  // Agrega un videojuego al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => [...carritoActual, producto])
  }

  // Elimina un videojuego del carrito según su índice
  const eliminarDelCarrito = (indiceAEliminar) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((_, indice) => indice !== indiceAEliminar)
    )
  }

  // Vacía por completo el carrito de compras
  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Encabezado semántico con barra de navegación */}
      <header>
        <Navbar totalCarrito={carrito.length} />
      </header>

      {/* Contenedor principal semántico */}
      <main className="container py-4">
        {/* Banner de bienvenida sobrio */}
        <div className="p-4 p-md-5 mb-4 rounded bg-dark border border-secondary text-center">
          <h1 className="display-6 fw-bold text-info mb-2">Bienvenido a JuegiStore</h1>
          <p className="lead text-secondary mb-0">
            Tu tienda favorita de videojuegos para PC y consolas. Encuentra los títulos más aclamados al mejor precio.
          </p>
        </div>

        {/* Mensaje de error si falla la carga */}
        {error && (
          <div className="alert alert-danger shadow-sm mb-4" role="alert">
            {error}
          </div>
        )}

        {/* Indicador de carga dinámico */}
        {cargando ? (
          <div className="text-center py-5">
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Cargando catálogo...</span>
            </div>
            <p className="text-secondary mt-3">Cargando videojuegos...</p>
          </div>
        ) : (
          /* Catálogo de videojuegos con filtrado */
          <Catalogo
            productos={productos}
            carrito={carrito}
            categoriaActiva={categoria}
            onSeleccionarCategoria={setCategoria}
            onAgregar={agregarAlCarrito}
          />
        )}

        {/* Sección del Carrito de Compras */}
        <Carrito
          carrito={carrito}
          onEliminar={eliminarDelCarrito}
          onVaciar={vaciarCarrito}
        />

        {/* Formulario de Contacto interactivo */}
        <Contacto />
      </main>

      {/* Pie de página semántico */}
      <Footer />
    </div>
  )
}

export default App