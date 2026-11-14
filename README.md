# Portafolio · Daniela Zanella

Sitio estático (HTML, CSS y JavaScript, sin dependencias ni build) con selector de idioma **ES / EN** (español por defecto).

## Estructura

```
.
├── index.html              Home con la lista de proyectos
├── project-nexus.html      Caso de estudio de Nexus (base para duplicar en los siguientes)
├── css/style.css
├── js/
│   ├── i18n.js             Todos los textos en ES y EN + lógica del selector de idioma
│   └── script.js           Animaciones, navbar, cursor, scroll
└── assets/images/
    ├── home/               Imágenes del home
    └── nexus/              Imágenes del proyecto Nexus
```

El favicon está en `assets/favicon/` (reemplaza `favicon-512.png` y regenera los demás tamaños si lo cambias).

## Ver en local

Abre `index.html` en el navegador, o usa un servidor local:

```bash
python3 -m http.server 8000
```

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a un repositorio (`index.html` debe quedar en la raíz).
2. En GitHub: **Settings → Pages → Deploy from a branch → `main` / `(root)`**.
3. El sitio quedará en https://danizanella.github.io/portfolio/ (el repositorio debe llamarse `portfolio`). Si cambias de URL o usas dominio propio, actualiza `og:url` y `og:image` en los `<head>`.

## Agregar un proyecto nuevo

1. Duplica `project-nexus.html` y nómbralo `project-<nombre>.html` (ej. `project-wildflower.html`).
2. Crea `assets/images/<proyecto>/` con sus imágenes y actualiza las rutas.
3. En `js/i18n.js`, copia el bloque `nexus.*` (ES y EN) con un prefijo nuevo y reemplaza los textos.
4. Cambia las llaves `nexus.` por el prefijo nuevo en el HTML nuevo.
5. Agrega su card en `index.html` y enlaza los botones de "Otros proyectos" (en cada página deben mostrarse los *otros* proyectos, no el actual).
6. Actualiza `og:title`, `og:description`, `og:image` y `og:url` del `<head>`.

## URLs limpias

En el sitio publicado, `script.js` quita `index.html` y `.html` de la barra de direcciones
(`/portfolio/` y `/portfolio/project-nexus`). GitHub Pages sirve las páginas sin extensión, así que recargar funciona.
En local no se aplica. Al crear páginas nuevas, usa en `og:url` y `canonical` la URL sin `.html`.
