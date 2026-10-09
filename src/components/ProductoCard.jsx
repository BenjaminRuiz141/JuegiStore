import React from 'react'

/**
 * Componente ProductoCard: Tarjeta individual para cada videojuego.
 * Muestra la carátula, datos principales y botón de agregar al carrito.
 */
function ProductoCard({ producto, enCarrito, onAgregar }) {
  return (
    <div className="col">
      <div className="card h-100 card-theme">
        {/* Carátula del videojuego */}
        <div className="card-img-wrapper">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            loading="lazy"
          />
        </div>

        {/* Cuerpo de la tarjeta con información */}
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge bg-secondary">{producto.categoria}</span>
            <span className="precio fw-bold">
              ${producto.precio.toLocaleString('es-CL')}
            </span>
          </div>

          <h5 className="card-title fw-bold text-light mb-2">
            {producto.nombre}
          </h5>

          <p className="card-text text-secondary small flex-grow-1">
            {producto.descripcion}
          </p>

          {/* Botón de acción */}
          <div className="mt-3 pt-2 border-top border-secondary">
            {enCarrito ? (
              <button
                className="btn btn-outline-success btn-sm w-100 fw-semibold"
                disabled
              >
                En el carrito
              </button>
            ) : (
              <button
                className="btn btn-accent btn-sm w-100 fw-semibold"
                onClick={() => onAgregar(producto)}
              >
                Agregar al Carrito
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductoCard