# JuegiStore - Tienda de Videojuegos Online

## 1. Descripcion del Proyecto
**JuegiStore** es una plataforma web para la venta de videojuegos digitales para PC y consolas. Esta desarrollada con **React** y **Vite**, e integrada con **Bootstrap 5** bajo una paleta oscura sobria y limpia.

El sitio permite a los usuarios:
1. Explorar un catalogo dinamico cargado desde un archivo de datos (`productos.json`).
2. Filtrar videojuegos en tiempo real por genero (Accion, Aventura, RPG, Deportes).
3. Administrar un carrito de compras reactivo (agregar titulos, evitar duplicados, eliminar items individuales, vaciar carrito y calcular el costo total dinamicamente).
4. Comunicarse mediante un formulario de contacto controlado con validaciones en tiempo real y retroalimentacion visual.

---

## 2. Tecnologias Utilizadas
* **HTML5 Semantico:** Estructura con etiquetas `<header>`, `<nav>`, `<main>`, `<section>` y `<footer>`.
* **CSS3:** Variables CSS para la paleta de colores y desplazamiento suave.
* **Bootstrap 5:** Maquetacion responsive (Grid y Flexbox), barra de navegacion, tarjetas (cards), alertas, insignias y utilidades de espaciado.
* **JavaScript (ES6+):** Programacion funcional con metodos de arreglos (`map`, `filter`, `some`, `reduce`), manejo asincrono con `fetch` y validacion con expresiones regulares.
* **React 19:** Componentes funcionales modulares, manejo de estado con Hooks (`useState`, `useEffect`) y paso de propiedades via `props`.
* **Vite:** Entorno de ejecucion y compilacion para produccion.
* **Git y GitHub:** Control de versiones con historial de commits progresivos.

---

## 3. Estructura del Proyecto
```text
JuegiStore/
├── public/
│   ├── assets/
│   │   └── img/               # Caratulas de los videojuegos
│   │       ├── cyberpunk-2077.jpg
│   │       ├── ea-fc-24.jpg
│   │       ├── elden-ring.jpg
│   │       ├── god-of-war.jpg
│   │       ├── hogwarts-legacy.jpg
│   │       ├── red-dead-redemption-2.jpg
│   │       └── spiderman.jpg
│   └── productos.json         # Datos de videojuegos (nombre, precio, genero)
├── src/
│   ├── components/            # Componentes modulares
│   │   ├── Navbar.jsx         # Barra de navegacion superior
│   │   ├── Catalogo.jsx       # Grilla de productos y botones de filtro
│   │   ├── ProductoCard.jsx   # Tarjeta individual de videojuego
│   │   ├── Carrito.jsx        # Carrito de compras con calculo de total
│   │   ├── Contacto.jsx       # Formulario con validaciones en tiempo real
│   │   └── Footer.jsx         # Pie de pagina semantico
│   ├── App.jsx                # Componente principal y estado global
│   ├── main.jsx               # Punto de entrada de React en el DOM
│   └── styles.css             # Estilos personalizados y tema oscuro
├── index.html                 # Plantilla HTML principal
├── package.json               # Dependencias y scripts
├── vite.config.js             # Configuracion de Vite
└── README.md                  # Documentacion del proyecto
```

---

## 4. Instalacion y Ejecucion Local

### Prerrequisitos
Tener instalado Node.js (version 18 o superior recomendada).

### Pasos:
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/BenjaminRuiz141/JuegiStore.git
   cd JuegiStore
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:5173`.

4. **Compilar para produccion:**
   ```bash
   npm run build
   ```

5. **Previsualizar la compilacion de produccion:**
   ```bash
   npm run preview
   ```

---

## 5. Guia de Uso del Sitio Web

### Navegacion
* La barra de navegacion superior (`Navbar`) permite desplazarse a las secciones de **Catalogo**, **Carrito** y **Contacto**.
* En pantallas moviles cuenta con un boton de colapso para facilitar la navegacion adaptativa.

### Catalogo y Filtros
* Los videojuegos se cargan dinamicamente desde `public/productos.json` al iniciar la aplicacion.
* Se puede seleccionar un genero en la botonera de filtros (**Todos los generos**, **Accion**, **Aventura**, **RPG**, **Deportes**) para visualizar los titulos correspondientes.

### Carrito de Compras
* Al hacer clic en **Agregar al Carrito** en cualquier tarjeta, el videojuego se suma a la lista y su boton cambia a **En el carrito** (deshabilitado para evitar duplicados).
* El contador en el boton de la barra de navegacion se actualiza de inmediato.
* En la seccion del carrito se puede:
  * Revisar el detalle de los juegos agregados y el **Total a Pagar** en pesos chilenos ($ CLP).
  * Eliminar un videojuego individual pulsando el boton **Eliminar**. Al hacerlo, su tarjeta en el catalogo se vuelve a habilitar.
  * Vaciar el carrito completo mediante el boton **Vaciar Carrito**.

### Formulario de Contacto y Validacion
* Formulario controlado en React mediante el estado local.
* **Reglas de validacion antes del envio:**
  * **Nombre completo:** Campo obligatorio (minimo 3 caracteres).
  * **Correo electronico:** Campo obligatorio con formato valido verificado por expresion regular.
  * **Mensaje:** Campo obligatorio (minimo 10 caracteres).
* Si hay errores, se resaltan los campos no validos con Bootstrap mostrando mensajes explicativos.
* Al ingresar datos validos y enviar, se limpian los campos y se muestra una alerta de exito confirmando el envio.
