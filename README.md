# InfoTrabajos — Design AppSystem

Sistema de diseño para **InfoTrabajos**, una plataforma multiplataforma (app móvil + sitio web) que conecta trabajadores de oficios independientes con clientes que necesitan sus servicios.

**Contexto del problema** (documento informativo): en México el trabajo informal representa alrededor del 54 % del empleo. Plomeros, albañiles, pintores, electricistas, carpinteros, herreros, jardineros, personal de limpieza y técnicos consiguen clientes por recomendación, redes sociales o grupos de WhatsApp, sin historial profesional verificable. Del otro lado, los clientes no tienen referencias confiables ni certidumbre de precios. El reto declarado es **generar confianza entre las dos partes con una interfaz usable por personas con distintos niveles de alfabetización digital**. Eso es lo que manda en este sistema: etiquetas explícitas, jerarquía fuerte, controles grandes, cero adornos.

Tagline de marca: **“Conecta tu talento, encuentra oportunidades”.**

## Fuentes usadas

- **Repositorio:** <https://github.com/RezHevel/InfoTrabajos> (rama `main`). Al momento de armar el sistema contiene sólo `README.md` y `LICENSE` — no hay código de app, tokens ni componentes. Cuando exista código, sus valores reales deben reemplazar los de aquí.
- **Documento informativo del proyecto** (`uploads/Proyecto InfoTrabajos Documento informativo.docx`, texto extraído en `uploads/…informativo.txt`): problema, objetivos, estado del arte (TaskRabbit, Thumbtack, Facebook Marketplace, Uber/Rappi), diferenciadores y usuarios.
- **Documento técnico** (`uploads/Proyecto InfoTrabajos Documento tecnico.docx` → `.txt`): stack y flujos. App móvil **React Native + Expo**; web y panel **Next.js**; backend **NestJS**; **PostgreSQL + PostGIS** (búsqueda por radio) y **Redis**; chat por **WebSocket/Socket.io**; push con **Firebase Cloud Messaging**; SMS/WhatsApp con **Twilio**; pagos **Stripe + OXXO Pay** (alternativas Conekta y Clip); **Google Maps Platform** para mapa y geocodificación; registro con **KYC**.
- **Logo:** `uploads/logoinfotrabajos1.png`, copiado a `assets/` en cuatro recortes.
- **Imagen de referencia** de login (tarjeta translúcida sobre navy) — origen del set de tokens `--auth-*`.
- **Iconografía:** [Lucide](https://github.com/lucide-icons/lucide) (ISC) en `assets/icons/`.
- **Tipografía:** Barlow / Barlow Condensed / IBM Plex Mono (Google Fonts).

## Productos representados

| Superficie | Kit | Estado |
| --- | --- | --- |
| **App móvil** (cliente y trabajador) — React Native/Expo | `ui_kits/app/` | Foco actual: login, registro con KYC, inicio, cerca de ti, perfil, chat, publicar solicitud, cotizaciones, historial, bandeja del trabajador |
| Sitio web público + panel administrativo — Next.js | `ui_kits/web/` | Base navegable: home, resultados, perfil público, panel |

---

## Content fundamentals

**Idioma:** español de México, trato de **tú**. “Publica tu solicitud”, “Encuentra al profesional”, “Cuéntanos qué necesitas”. Nunca voseo (“publicá”) ni “usted”.

**Persona:** le hablamos al usuario en segunda persona. La plataforma habla de sí misma sólo para asumir responsabilidad: “No pudimos enviar el mensaje”.

**Registro:** claro y de oficio, frases cortas, sin jerga de producto. Las palabras del dominio son fijas: **solicitud, cotización, trabajo, oficio, zona, tarifa, reseña, historial**. No “gig”, no “match”, no “booking”.

**Casing:** sentence case en interfaz, títulos y botones (“Publicar solicitud”). MAYÚSCULAS sólo en display condensado y eyebrows.

**Botones:** verbo + objeto: “Enviar solicitud”, “Aceptar cotización”, “Crear mi cuenta”. Nunca “Click aquí”.

**Confianza (vocabulario cerrado):** “Identidad verificada”, “Trabajo confirmado”, “Disponible”, “Ocupado esta semana”, “Urgente”, “Nueva” (cotización). No se inventan sinónimos: son etiquetas de sistema ligadas al KYC y al estado de los trabajos.

**Estados vacíos:** qué pasó + qué hacer. “Sin resultados en tu zona — prueba ampliar el radio a 20 km o quitar algún filtro.”

**Cifras y formatos MX:** `$450/h`, `$3,200` (coma de miles, punto decimal), `2.4 km`, `4.8` de calificación, teléfono `33 1234 5678`. Tipografía mono con `tabular-nums` en precios y tablas.

**Tiempo:** relativo y corto: “hace 2 h”, “ayer”, “mar 2026”.

**Emoji:** no se usan en ninguna superficie. La expresividad viene del glifo de oficio y del color de estado.

**Ejemplos del sistema:**

- Login: “Conecta tu talento, encuentra oportunidades”
- Registro: “¿Cómo vas a usar InfoTrabajos?” / “Busco un profesional” / “Ofrezco mis servicios”
- KYC: “La verificación se hace una sola vez y es lo que muestra el sello Identidad verificada en tu perfil.”
- Ayuda de campo: “Agrega medidas, materiales y fotos si tienes”
- Confirmación: “Solicitud publicada · SOL-20470”
- Reseña: “Puntual y ordenada. Dejó todo limpio y explicó cada cambio antes de hacerlo.”

---

## Visual foundations

**Idea central:** confianza y legibilidad. Superficies claras y planas, bordes de 1 px que construyen la estructura, esquinas casi rectas, tipografía condensada en los títulos. El color viene del logo: **azul brillante** `--blue-500` `#0B70F0` (marca, acciones) y **navy** `--navy-700/800/900` (superficies oscuras: login, footer, sidebar del panel). El ámbar `--hivis-500` es acento secundario con cuentagotas: estrellas, urgencia, disponibilidad.

**Color.** Cuatro rampas base — blue (marca, muestreada del logo), navy (oscuros del logo), slate (12 neutros fríos) y ámbar — más go/warn/stop/info para estados. Los componentes usan siempre alias semánticos (`--brand`, `--surface-card`, `--text-body`, `--border-default`), nunca los pasos crudos. Máximo dos fondos claros por vista: `--surface-page` `#F9FAFC` y `--surface-card` `#FFFFFF`. El ámbar nunca es color de texto sobre claro.

**Temas claro y oscuro.** La app tiene los dos, y el usuario elige. El interruptor vive en `tokens/theme.css`: `data-theme="light"` y `data-theme="dark"` sobre cualquier contenedor (la raíz de la app, el mock del teléfono o `<html>`) reescriben **todos los alias semánticos** — superficies, tinta, bordes, sombras, marca y tintes de estado. Ningún componente conoce el tema: usan los alias y funcionan en ambos.

En oscuro las superficies son navy (`--navy-900` página, `--navy-800` tarjeta), los bordes pasan a blanco translúcido en tres niveles, la marca sube a `--blue-400` para mantener contraste, y las sombras se refuerzan a negro porque el borde solo no alcanza sobre fondo oscuro.

**Dónde se cambia el tema:** botón pequeño sol/luna arriba a la derecha en login y registro (34 px, pill, translúcido — visible pero sin competir con el logo ni con el CTA), y la opción completa **Claro / Oscuro / Automático** en Cuenta → Ajustes, primera sección de la hoja. “Automático” sigue `prefers-color-scheme`. La preferencia se guarda por usuario.

**Autenticación.** Login, registro y splash usan su propio set de tokens `--auth-*`, que también cambia con el tema. En oscuro: degradado radial navy (`--auth-bg`), tarjeta translúcida con blur (`--auth-card` + `--auth-card-border`), campos al 9 % de blanco, CTA con degradado azul (`--auth-cta`). Ese degradado es el **único** de la marca; en el resto del producto los rellenos son planos.

**Tipografía.** Barlow Condensed para display (uppercase, 600–700, line-height 0.94–1.04, tracking +0.005em); Barlow para todo lo demás (sentence case, 400/500/600); IBM Plex Mono para dinero, distancias, folios y tablas. Los eyebrows son el único estilo tracked-out (+0.14em). Cuerpo 15 px, denso 13.5 px, labels 13 px, captions 12 px.

**Espaciado.** Base 4 px, escala 4→96. Inset de tarjeta 16 px, gap de grilla 16 px, gutter 24 px (16 en móvil), separación entre secciones 56–96 px. Controles 34/40/48/52 px; en la app nada táctil baja de 52 px — el documento informativo exige usabilidad para baja alfabetización digital.

**Fondos.** Planos. Sin gradientes decorativos (salvo `--auth-bg` y `--auth-cta`), sin patrones, sin texturas, sin ilustraciones dibujadas. El único gradiente de contenido es el de protección (`--scrim-bottom`) bajo texto sobre fotografía. **No hay fotografía provista**: donde haga falta una foto, se deja el hueco marcado y no se inventa.

**Mapa.** La geolocalización se resuelve con Google Maps Platform. En los kits el mapa es un **hueco declarado** (`MapPlaceholder` en `ui_kits/app/MapScreen.jsx`), no un mapa dibujado a mano.

**Tarjetas.** `--surface-card`, borde 1 px `--border-default`, radio 10 px, `--shadow-1`. Si son clickeables: hover a `--shadow-2` y borde `--border-strong`. Nada de tarjetas con borde izquierdo de color.

**Sombras.** Cuatro niveles discretos: 1 tarjeta, 2 hover, 3 popover/toast, 4 modal. La jerarquía la carga el borde.

**Bordes y radios.** 1 px para todo. Divisores `--border-hairline`. Radios: 3 px etiquetas, 6 px controles, 10 px tarjetas, 14 px modales y pantalla; pill sólo en chips (`Tag`) y avatares.

**Transparencia y blur.** Barras fijas sobre contenido que scrollea (`--bar-veil` + `--blur-bar`) y las tarjetas de autenticación. En ningún otro lugar.

**Animación.** Corta y plana: 90–320 ms, `cubic-bezier(.2,0,.2,1)`, sin rebote. Los sheets suben en 200 ms. `prefers-reduced-motion` anula todo.

**Estados.** Hover: un paso más oscuro en rellenos de marca, `--surface-hover` en secundarios y fantasmas. Press: dos pasos + `scale(0.985)`. Focus: `--focus-ring` (3 px azul al 30 %), nunca se elimina. Disabled: `--surface-disabled` + `--text-subtle`.

**Layout.** App: canvas 390 px, TopBar 52 px, TabBar de 5 destinos (Inicio, Cerca, Publicar, Mensajes, Cuenta), CTA fija sobre la TabBar en el perfil. Web: ancho máximo 1200 px, header sticky de 64 px, sidebar de filtros 248 px, footer navy a ancho completo.

---

## Iconography

- **Logo:** archivo real, en cuatro recortes: `assets/logo-infotrabajos.png` (lockup completo con tagline), `assets/logo-mark.png` (símbolo: dos figuras dándose la mano formando un corazón), `assets/logo-wordmark.png` (wordmark + tagline), `assets/logo-word-only.png` (wordmark). Se usa vía el componente `Logotype`. **No se redibuja, no se recolorea, no se rota.** Sobre navy va en placa blanca (`tile`) porque la mitad oscura del logo desaparece.
- **Set de iconos:** [Lucide](https://lucide.dev) — 24×24, trazo 2 px, caps redondeadas, `currentColor`. Es una **sustitución declarada**: el proyecto no tiene set propio. Si aparece uno, reemplazar `assets/icons/` y regenerar `components/core/icon-paths.js`.
- **Uso:** siempre vía `Icon` (`<Icon name="wrench" size={20} />`). 13–16 inline con texto, 20 en UI, 22 en navegación, 32+ en tiles de categoría.
- **Glifo por oficio** (vocabulario fijo): plomería `droplets`, electricidad `zap`, albañilería `brick-wall`, carpintería `hammer`, pintura `paint-roller`, jardinería `sprout`, limpieza `spray-can`, mantenimiento `wrench`, obra `hard-hat`, fletes `truck`, corte `scissors`. Herrería usa `hammer` por ahora (pendiente de glifo propio).
- **Sin iconos de color, sin emoji, sin unicode como icono** (`★`, `→`, `✓` se dibujan con `Icon`). El separador `·` sí se usa como puntuación.

---

## Índice

**Raíz:** `styles.css` (sólo `@import`s) · `thumbnail.html` · `readme.md` · `SKILL.md` · `github.md`

**Tokens** (`tokens/`): `fonts.css`, `colors.css`, `theme.css` (scopes claro/oscuro), `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`

**Foundations** (`guidelines/`, 22 cards): colores (azul, navy, slate, ámbar, estados, alias semánticos, temas claro/oscuro, superficies de autenticación), tipografía (display, headings, body, mono, eyebrow), espaciado (escala, controles, layout), forma (radios, elevación, bordes), marca (logo, glifos de oficio, glifos de UI, motion y estados).

**Componentes**

- `components/core/` — `Icon`, `Button`, `IconButton`, `Badge`, `Tag`, `Card` (+`CardSection`), `Avatar`, `Rating`, `Logotype`
- `components/forms/` — `Field`, `Input`, `Textarea`, `Select`, `SearchField`, `Checkbox`, `Radio` (+`RadioGroup`), `Switch`
- `components/navigation/` — `Tabs`, `TabBar`, `TopBar`
- `components/feedback/` — `Dialog`, `Toast`, `Tooltip`, `EmptyState`
- `components/marketplace/` — `WorkerCard`, `RequestCard`, `CategoryTile`, `ReviewItem`, `ChatBubble`, `StatTile`

**UI kits:** `ui_kits/app/` (app móvil, foco actual) y `ui_kits/web/` (web + panel). Cada uno con su `README.md`.

**Assets:** `assets/` (4 recortes del logo) y `assets/icons/` (50 SVG Lucide).

### Intentional additions

El repositorio no define inventario de componentes, así que se autoró el set estándar (Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip) más:

- `Icon` — envoltorio del set Lucide, para no dibujar SVG a mano.
- `Logotype` — lockups del logo real.
- `Field`, `Textarea`, `SearchField`, `TabBar`, `TopBar`, `EmptyState` — necesarios para las pantallas de los documentos (búsqueda, solicitudes, navegación móvil).
- `Avatar`, `Rating`, `WorkerCard`, `RequestCard`, `CategoryTile`, `ReviewItem`, `ChatBubble`, `StatTile` — los objetos del dominio nombrados en los documentos (perfiles, solicitudes, cotizaciones, mensajería, reputación, historial, panel).

### Sustituciones y huecos pendientes

1. **Tipografías:** no hay archivos ni familia definida por el equipo. Barlow + Barlow Condensed + IBM Plex Mono se cargan por `@import` de Google Fonts en `tokens/fonts.css` (por eso el compilador reporta 0 fuentes locales). Si definen otra familia, se cambia ahí.
2. **Iconos:** Lucide como sustituto declarado.
3. **Fotografía:** ausente. Los kits no usan imágenes.
4. **Mapa:** hueco declarado, no ilustrado.
5. **Pagos (Stripe/OXXO), notificaciones y flujo de cotización → trabajo → reseña** están descritos en el documento técnico pero **aún no diseñados** como pantallas. Son el siguiente bloque natural de la app.
