# UI kit — Sitio web (InfoTrabajos)

Recreación navegable del sitio: ancho máximo 1200 px, gutter 24 px, header sticky con veil translúcido y footer oscuro.

| Archivo | Vista |
| --- | --- |
| `index.html` | Shell del sitio: ruteo entre vistas, modal de publicación, toast |
| `WebChrome.jsx` | `WebHeader` (sticky, nav subrayada, CTA) y `WebFooter` (4 columnas, fondo stone-900) |
| `HomePage.jsx` | Home: hero clay-900, buscador, categorías, cómo funciona, destacados, CTA para profesionales |
| `ResultsPage.jsx` | Resultados: sidebar de filtros sticky, orden, lista de WorkerCard, estado vacío |
| `ProfilePage.jsx` | Perfil público: cabecera, métricas, tabs, panel lateral de contacto y cotización |
| `AdminPage.jsx` | Panel administrativo: sidebar oscura, métricas, tabla de verificación con paginado |

Los datos de muestra se comparten con el kit de la app (`../app/data.js`).
