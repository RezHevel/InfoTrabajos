# UI kit — App móvil (InfoTrabajos)

Recreación interactiva de la app (React Native + Expo en producción). Canvas de 390 px, barra inferior de 5 destinos, hojas inferiores para filtros, zona de autenticación en navy.

| Archivo | Pantalla |
| --- | --- |
| `index.html` | Shell navegable: autenticación → app, TopBar, TabBar, sheet de filtros, toasts, switch de vista cliente/trabajador |
| `SettingsSheet.jsx` | Hoja de Ajustes: selector de tema (Claro / Oscuro / Automático), permisos, perfil, verificación, cerrar sesión |
| `AuthScreens.jsx` | `LoginScreen` (tarjeta translúcida sobre navy, Google/WhatsApp) y `RegisterScreen` (3 pasos: rol, datos, verificación KYC con INE, selfie y domicilio) |
| `HomeScreen.jsx` | Inicio — SearchField, chips, categorías y resultados con WorkerCard |
| `MapScreen.jsx` | Cerca de ti — filtros de radio, hueco declarado del mapa (`MapPlaceholder`) y disponibles ahora |
| `ProfileScreen.jsx` | Perfil del trabajador — cabecera, StatTiles, tabs Perfil/Reseñas/Trabajos, CTA fija |
| `ChatScreen.jsx` | Conversación cliente↔trabajador con composer funcional |
| `PublishScreen.jsx` | Publicar solicitud — categoría, zona, cotización estimada, urgencia |
| `QuotesScreen.jsx` | Cotizaciones recibidas e historial de trabajos (vista cliente) |
| `RequestsScreen.jsx` | Bandeja del trabajador — métricas, switch de disponibilidad, RequestCards |
| `data.js` | Datos de muestra (oficios, trabajadores, solicitudes, cotizaciones, mensajes, reseñas, historial) en contexto de Guadalajara |

**Temas:** la app soporta claro y oscuro vía `data-theme` en el contenedor del teléfono. Se cambia desde el botón sol/luna de login y registro, o desde Cuenta → Ajustes → Apariencia (incluye Automático, que sigue la configuración del sistema). La preferencia persiste en `localStorage`.

Reglas de la superficie móvil: altura mínima de toque 52 px (`--control-h-touch`), gutter 16 px, un botón primario por pantalla, modales siempre como `sheet`, autenticación en navy con tokens `--auth-*`.

Pendiente de diseñar (descrito en el documento técnico, no inventado aquí): pagos Stripe/OXXO, notificaciones push, y el ciclo cotización → trabajo aceptado → reseña con fotos.
