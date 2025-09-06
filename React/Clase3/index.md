# Comandos para crear el proyecto

## Crear un nuevo proyecto de React con Vite

```bash
npm create vite@latest user-mini-app -- --template react
cd user-mini-app
npm install
```
## Agregar Tailwind CSS

```bash
npm add -D tailwindcss@latest @tailwindcss/vite@latest
```

Luego, configura Tailwind al vite.config.js y al archivo index.css

## Agregar react-router-dom

```bash
npm install react-router-dom@latest
```

## Estructura sugeridad

src/
  components/
    Navbar.jsx        // navegación principal con <Link> / <NavLink>
    UserCard.jsx      // componente reutilizable para mostrar persona
    SkeletonCard.jsx  // skeleton loading para grilla
  pages/
    Home.jsx          // lista + filtros
    UserDetail.jsx    // ficha completa
    About.jsx
  App.jsx.            // Router
  main.jsx
  index.css
