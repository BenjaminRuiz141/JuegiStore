# JuegiStore - Tienda de Videojuegos Online 🎮

Proyecto desarrollado para la **Evaluación Final Transversal (EFT)** de la asignatura **Desarrollo Frontend I (PFY2201)** - Duoc UC.

## Descripción del Proyecto
JuegiStore es una aplicación web interactiva desarrollada con **React** y **Vite**, estilizada con **Bootstrap 5** y CSS personalizado. Permite a los usuarios explorar un catálogo dinámico de videojuegos clasificados por género, filtrar por categorías, gestionar un carrito de compras y comunicarse a través de un formulario de contacto con validación en tiempo real.

## Tecnologías Utilizadas
- **HTML5 semántico**: Estructuración accesible y estándar (`<header>`, `<main>`, `<section>`, `<footer>`).
- **CSS3 personalizado**: Diseño oscuro (Dark Theme gamer) y animaciones de interacción.
- **Bootstrap 5**: Maquetación responsive, sistema de grillas (Flexbox/Grid), barra de navegación y tarjetas.
- **JavaScript (ES6+)**: Filtrado dinámico, métodos de arreglos y validaciones lógicas.
- **React (Componentes Funcionales & Hooks)**: Modularización con `useState` y `useEffect`.
- **Vite**: Entorno de desarrollo ágil y optimización de compilación.

## Estructura del Proyecto
```
JuegiStore/
├── public/               # Archivos estáticos y datos JSON (productos.json)
├── src/
│   ├── components/       # Componentes modulares en React
│   │   ├── Navbar.jsx        # Barra de navegación responsive
│   │   ├── Catalogo.jsx      # Grilla de videojuegos y botones de filtro
│   │   ├── ProductoCard.jsx  # Tarjeta individual de videojuego
│   │   ├── Carrito.jsx       # Carrito de compras con cálculo de total
│   │   ├── Contacto.jsx      # Formulario de contacto con validaciones
│   │   └── Footer.jsx        # Pie de página informativo
│   ├── App.jsx           # Componente principal y gestión de estado
│   ├── main.jsx          # Punto de entrada de React en el DOM
│   └── styles.css        # Estilos personalizados y tema oscuro
├── index.html            # Plantilla HTML principal
├── vite.config.js        # Configuración de compilación de Vite
└── package.json          # Dependencias y scripts del proyecto
```

## 🛠️ Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd JuegiStore
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:5173`.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
