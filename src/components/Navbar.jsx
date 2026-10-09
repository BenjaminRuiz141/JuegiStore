import React from 'react'

/**
 * Componente Navbar: Barra de navegación superior responsive.
 * Muestra las secciones principales y el contador del carrito.
 */
function Navbar({ totalCarrito }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top shadow-sm">
      <div className="container">
        {/* Marca del sitio */}
        <a className="navbar-brand fw-bold" href="#catalogo">
          <span className="brand-accent">Juegi</span>Store
        </a>

        {/* Botón responsive para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContenido"
          aria-controls="navbarContenido"
          aria-expanded="false"
          aria-label="Alternar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContenido">
          {/* Enlaces de navegación y filtros */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#catalogo">
                Catálogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>

          {/* Acceso directo al Carrito de compras */}
          <div className="ms-lg-3 mt-2 mt-lg-0">
            <a
              href="#seccion-carrito"
              className="btn btn-outline-light position-relative"
              title="Ver carrito de compras"
            >
              Carrito
              <span className="badge bg-danger rounded-pill ms-2">
                {totalCarrito}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar