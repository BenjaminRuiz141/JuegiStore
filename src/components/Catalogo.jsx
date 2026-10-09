import React from 'react'
import ProductoCard from './ProductoCard.jsx'

/**
 * Componente Catalogo: Muestra el listado de videojuegos y el filtrado interactivo por categoría.
 */
function Catalogo({
  productos,
  carrito,
  categoriaActiva,
  onSeleccionarCategoria,
  onAgregar,
}) {
  const categorias = ['Todas', 'Acción', 'Aventura', 'RPG', 'Deportes']

  // Filtrado de videojuegos según la categoría seleccionada
  const productosFiltrados =
    categoriaActiva === 'Todas'
      ? productos
      : productos.filter(
          (p) => p.categoria.toLowerCase() === categoriaActiva.toLowerCase()
        )

  return (
    <section id="catalogo" className="mb-5">
      {/* Encabezado y filtro por categorías */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <h2 className="h3 fw-bold mb-1">Catálogo de Videojuegos</h2>
          <p className="text-secondary small mb-0">
            Explora los mejores títulos disponibles y filtra por tu género favorito.
          </p>
        </div>

        {/* Botonera de filtro por categoría */}
        <div className="btn-group flex-wrap" role="group" aria-label="Filtro de categorías">
          {categorias.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`btn btn-sm ${
                categoriaActiva === cat
                  ? 'btn-info text-dark fw-bold'
                  : 'btn-outline-secondary'
              }`}
              onClick={() => onSeleccionarCategoria(cat)}
            >
              {cat === 'Todas' ? 'Todos los géneros' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Renderizado condicional si no hay productos */}
      {productosFiltrados.length === 0 ? (
        <div className="alert alert-secondary text-center py-4">
          No se encontraron videojuegos en la categoría seleccionada.
        </div>
      ) : (
        /* Grilla responsiva de tarjetas con Bootstrap */
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {productosFiltrados.map((producto) => {
            const yaEnCarrito = carrito.some((item) => item.id === producto.id)

            return (
              <ProductoCard
                key={producto.id}
                producto={producto}
                enCarrito={yaEnCarrito}
                onAgregar={onAgregar}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Catalogo