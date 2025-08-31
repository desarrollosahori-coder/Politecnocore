# Documentación de Mockups - TechSolutions Pro

## Aplicación Web para Venta de Servicios Tecnológicos

### Empresa: TechSolutions Pro
**Descripción:** Empresa de servicios tecnológicos especializada en soluciones de inteligencia artificial, desarrollo de software, consultoría tecnológica y automatización de procesos empresariales.

---

## Mockup 1: Página Principal (Home)

**Funcionalidad Detallada:**
La página principal de TechSolutions Pro será el punto de entrada principal para los visitantes y potenciales clientes. Esta página implementará un diseño moderno y profesional con temática de inteligencia artificial, utilizando una paleta de colores predominantemente blanca con acentos tecnológicos en azul y gris. El header contendrá el logo de la empresa (icono de CPU) junto con el nombre "TechSolutions Pro" y un menú de navegación horizontal que incluirá las secciones: Inicio, Servicios, Nosotros, y Contacto, además de un botón destacado para "Admin" que llevará al login administrativo. 

El componente principal será un slider/carrusel hero que mostrará 3-4 slides con mensajes clave sobre los servicios de IA, cada slide tendrá una imagen de fondo relacionada con tecnología, un título principal, subtítulo descriptivo y un call-to-action button. Debajo del slider se ubicará una sección "Acerca de Nosotros" con una descripción de la empresa, misión y valores, acompañada de iconos representativos de tecnología. La sección de servicios destacados mostrará una vista previa de los 3 servicios más populares en formato de tarjetas con imagen, nombre, precio y botón "Ver más". El footer incluirá información de contacto, enlaces a redes sociales, mapa del sitio y copyright. Todo el diseño será completamente responsivo y optimizado para dispositivos móviles, tablets y desktop.

---

## Mockup 2: Catálogo de Servicios

**Funcionalidad Detallada:**
La página de servicios presentará un catálogo completo y organizado de los 10 servicios tecnológicos que ofrece TechSolutions Pro. La interfaz implementará un sistema de filtrado y búsqueda en la parte superior, permitiendo a los usuarios filtrar por categoría (Consultoría, Desarrollo, Analytics, Integración, Seguridad, Automatización, Cloud, Móvil, Web, Soporte), rango de precios, y disponibilidad. Los servicios se mostrarán en una grilla responsiva de tarjetas (3 columnas en desktop, 2 en tablet, 1 en móvil), cada tarjeta contendrá una imagen representativa del servicio, nombre del servicio, precio destacado, categoría como badge, indicador de stock disponible, y un badge especial para servicios en promoción.

Cada tarjeta será clickeable y llevará a la página de detalle del servicio. La página incluirá paginación si hay más de 12 servicios, un contador de resultados encontrados, y opciones de ordenamiento (por precio, popularidad, fecha de creación). Se implementará un diseño de loading skeleton mientras se cargan los datos desde la base de datos, y estados de error en caso de problemas de conectividad. La navegación breadcrumb permitirá a los usuarios saber su ubicación actual. Un botón flotante de "Volver arriba" aparecerá al hacer scroll. La página mantendrá el header y footer consistentes con el resto del sitio.

---

## Mockup 3: Detalle de Servicio

**Funcionalidad Detallada:**
La página de detalle de servicio proporcionará información completa y detallada sobre un servicio específico seleccionado desde el catálogo. El layout se dividirá en dos columnas principales: la columna izquierda contendrá una galería de imágenes del servicio (imagen principal grande con thumbnails debajo), mientras que la columna derecha mostrará toda la información del servicio incluyendo nombre, descripción completa, precio actual, precio original (si está en promoción), categoría, cantidad disponible en stock, y una lista detallada de características/features del servicio.

La sección de características se presentará como una lista con iconos de check, destacando los beneficios y funcionalidades incluidas. Si el servicio está en promoción, se mostrará un badge destacado con el porcentaje de descuento y el precio tachado. Un indicador visual de stock mostrará la disponibilidad (Verde: >10 unidades, Amarillo: 5-10 unidades, Rojo: <5 unidades). La página incluirá botones de acción como "Solicitar Cotización" y "Contactar Asesor", breadcrumb navigation, servicios relacionados en la parte inferior, y un botón para volver al catálogo. Todo el contenido será dinámico y se cargará desde la base de datos PostgreSQL.

---

## Mockup 4: Panel de Login Administrativo

**Funcionalidad Detallada:**
La página de login administrativo implementará un diseño centrado y minimalista enfocado en la seguridad y profesionalismo. El formulario de autenticación estará contenido en una tarjeta elegante con sombra sutil, centrada tanto vertical como horizontalmente en la pantalla. El header de la tarjeta mostrará el logo de TechSolutions Pro y el título "Acceso Administrativo". El formulario incluirá campos para email y contraseña con validación en tiempo real, labels flotantes, iconos representativos, y un botón toggle para mostrar/ocultar la contraseña.

Se implementará validación tanto del lado del cliente como del servidor, mostrando mensajes de error específicos para credenciales incorrectas, campos vacíos, o problemas de conectividad. Un indicador de loading aparecerá durante el proceso de autenticación. La página incluirá un enlace para "¿Olvidaste tu contraseña?" (aunque no funcional en esta versión), y un botón para regresar al sitio principal. Se mostrarán las credenciales de prueba para facilitar el testing (admin@techsolutionspro.com / admin123). El diseño será completamente responsivo y mantendrá la consistencia visual con el resto de la aplicación. Tras un login exitoso, el usuario será redirigido automáticamente al dashboard administrativo.

---

## Mockup 5: Dashboard Administrativo con CRUD

**Funcionalidad Detallada:**
El dashboard administrativo será una interfaz completa de gestión que permitirá a los administradores controlar todos los aspectos de la aplicación. La interfaz implementará un layout de sidebar navigation con las secciones: Resumen/Overview, Gestión de Servicios, y Gestión de Usuarios. El header del dashboard mostrará el logo, título "Panel de Administración", información del usuario logueado, y botón de logout. La sección de resumen presentará tarjetas con estadísticas clave como número de servicios activos, usuarios registrados, ingresos mensuales, y métricas de conversión, cada una con iconos representativos y indicadores de cambio porcentual.

La gestión de servicios incluirá una tabla completa con todos los servicios, mostrando nombre, precio, categoría, stock, estado de promoción, y acciones (editar/eliminar). Un botón "Nuevo Servicio" abrirá un modal con formulario que incluirá campos para nombre, precio, categoría (dropdown con opciones predefinidas), cantidad disponible (dropdown con opciones: 5, 10, 15, 20, 25, 50 unidades), descripción, checkbox para promoción, y campo para imagen. La gestión de usuarios permitirá crear, editar y eliminar usuarios administrativos con campos para nombre, email, contraseña, y rol (dropdown: Administrador, Gerente, Editor). Todas las operaciones CRUD estarán conectadas a la base de datos PostgreSQL en Neon, con confirmaciones para acciones destructivas, validación de formularios, y feedback visual para operaciones exitosas o fallidas.

---

## Estructura de Archivos del Proyecto

\`\`\`
techsolutions-pro/
├── app/
│   ├── layout.tsx
│   ├── page.jsx                    # Página principal (Mockup 1)
│   ├── globals.css
│   ├── services/
│   │   ├── page.jsx               # Catálogo de servicios (Mockup 2)
│   │   └── [id]/
│   │       └── page.jsx           # Detalle de servicio (Mockup 3)
│   ├── admin/
│   │   ├── login/
│   │   │   └── page.jsx           # Login admin (Mockup 4)
│   │   └── dashboard/
│   │       └── page.jsx           # Dashboard admin (Mockup 5)
│   └── api/
│       ├── services/
│       ├── users/
│       └── auth/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   └── Services.jsx
│   ├── services/
│   │   ├── ServiceCard.jsx
│   │   └── ServiceDetail.jsx
│   └── admin/
│       ├── AdminLogin.jsx
│       ├── AdminDashboard.jsx
│       ├── AdminNavbar.jsx
│       ├── ServicesCRUD.jsx
│       └── UsersCRUD.jsx
├── lib/
│   └── database.js
├── scripts/
│   └── create-database-tables.sql
├── .env.local
└── package.json
\`\`\`

## Tecnologías Utilizadas

- **Frontend:** React 18, Next.js 15, JavaScript (NO TypeScript)
- **Styling:** Tailwind CSS, shadcn/ui components
- **Base de Datos:** PostgreSQL en Neon
- **Autenticación:** JWT + bcryptjs
- **Iconos:** Lucide React
- **Deployment:** Vercel

## Notas de Diseño

- Paleta de colores: Blanco predominante con acentos en azul (#3B82F6) y grises
- Tipografía: Fuentes profesionales y legibles
- Sin gradientes, diseño limpio y minimalista
- Temática de IA con iconos tecnológicos
- Completamente responsivo
- Interfaz intuitiva y profesional
