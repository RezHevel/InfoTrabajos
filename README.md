# InfoTrabajos Web

Aplicación web de React + TypeScript para la plataforma InfoTrabajos, orientada a conectar clientes con profesionales y gestionar diferentes tipos de dashboard según el rol.

## Stack principal

- React 19
- Vite
- TypeScript
- React Router DOM
- Tailwind CSS
- Lucide React
- Base UI

## Objetivo del proyecto

La app está pensada para manejar:

- landing page pública con información del producto
- registro e inicio de sesión
- navegación por roles (cliente, empleado, administrador)
- dashboards específicos por tipo de usuario
- futuras funcionalidades de servicios, cotizaciones y perfiles

## Estructura del proyecto

```text
infotrabajos-web/
├── public/                     # Archivos públicos estáticos
├── src/
│   ├── App.tsx                 # Componente raíz y montaje del router
│   ├── main.tsx                # Punto de entrada de React
│   ├── assets/                 # Imágenes, iconos y recursos estáticos
│   ├── components/
│   │   ├── layout/             # Layouts reutilizables del sistema
│   │   └── ui/                 # Componentes UI reutilizables (botones, inputs, etc.)
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/     # Componentes específicos de autenticación
│   │   │   └── pages/          # RegisterPage.tsx, SignInPage.tsx
│   │   ├── dashboard/
│   │   │   └── pages/          # Dashboards por rol
│   │   └── home/
│   │       └── pages/          # HomePage.tsx
│   ├── lib/
│   │   └── utils.ts            # Helpers generales (ej. cn)
│   ├── routes/
│   │   └── index.tsx           # Definición centralizada de rutas
│   └── styles/
│       ├── auth.css            # Estilos de autenticación
│       └── home.css            # Estilos de la landing page
├── index.html                  # HTML base de Vite
├── package.json                # Scripts, dependencias y configuración del proyecto
├── tsconfig.json               # Configuración principal de TypeScript
├── tsconfig.app.json           # Configuración TS para aplicación
├── tsconfig.node.json          # Configuración TS para Vite/Node
├── vite.config.ts              # Configuración de Vite y aliases
├── .oxlintrc.json              # Reglas de linting
├── README.md                   # Documentación del proyecto
└── package-lock.json           # Lockfile de dependencias
```

## Qué hace cada carpeta

### src/App.tsx

Es el componente principal que monta el router de la aplicación. Aquí se registran las rutas de navegación y se renderiza la vista correspondiente según la URL.

### src/main.tsx

Archivo de entrada de la aplicación. Crea el árbol de React y monta la app dentro del elemento `#root` de `index.html`.

### src/features

Es la capa principal de la arquitectura actual por funcionalidades.

#### src/features/auth

Contiene todo lo relacionado con la autenticación:

- `pages/` → pantallas de inicio de sesión y registro
- `components/` → componentes visuales reutilizables del flujo de auth

#### src/features/home

Contiene la landing page principal y sus secciones:

- hero section
- buscador de servicios
- categorías
- beneficios
- CTA de registro

#### src/features/dashboard

Contiene los dashboards por tipo de usuario:

- administrador
- cliente
- empleado

Cada dashboard sirve como punto de inicio para modularizar contenido futuro por rol.

### src/routes

Centraliza la configuración de rutas para evitar que la navegación quede dispersa en cada vista o archivo.

#### index.tsx

Exporta un arreglo de rutas con:

- `path`
- `element`

Esto permite mantener una base más ordenada cuando la app crece.

### src/components

Aquí van reutilizaciones visuales de la UI global.

- `layout/` → contenedores, shell principal, headers o layouts compartidos
- `ui/` → botones, inputs, cards, etc.

### src/lib

Contiene utilidades reutilizables.

- `utils.ts` incluye helpers como `cn` para combinar clases CSS con Tailwind y resolver conflictos entre estilos.

### src/styles

Archivos CSS globales o por módulo visual.

- `home.css` → estilos de la landing page
- `auth.css` → estilos del flujo de autenticación

### src/assets

Lugar para imágenes, logos o recursos gráficos que se reutilicen por la aplicación.

## Rutas actuales

Actualmente la app define estas rutas principales:

- `/` → Home
- `/auth/signin` → Inicio de sesión
- `/auth/register` → Registro
- `/dashboard/admin` → Dashboard del administrador
- `/dashboard/client` → Dashboard del cliente
- `/dashboard/employee` → Dashboard del empleado

## Scripts

En el proyecto puedes ejecutar:

```bash
npm install
npm run dev
npm run build
npm run preview
```

### Descripción de scripts

- `npm run dev` → inicia el entorno de desarrollo de Vite
- `npm run build` → compila la aplicación para producción
- `npm run preview` → sirve la build localmente para revisión

## Buenas prácticas que se están siguiendo

- separación por features para escalar la app
- centralización de rutas
- uso de alias de importación (`@/`, `@pages/` en configuración)
- separación entre lógica de negocio y UI por módulos

## Recomendaciones futuras

Para seguir creciendo sin duplicación, conviene continuar con:

- un `AuthLayout` compartido para login/registro
- componentes reutilizables de formularios
- un `DashboardLayout` común para todos los dashboards
- una estructura por módulos según negocio: `services`, `profile`, `orders`, `users`

## Conclusión

El proyecto ya tiene una buena base de React + Vite y una estructura mejor organizada. La separación por features y rutas centralizadas es un buen punto de partida para que la app crezca sin volverse difícil de mantener.
