# Estructura del Proyecto - TechSolutions Pro

## 📁 Estructura de Directorios

\`\`\`
techsolutions-app/
├── 📁 app/                          # App Router de Next.js
│   ├── 📄 layout.tsx               # Layout principal de la aplicación
│   ├── 📄 page.jsx                 # Página de inicio (Home)
│   ├── 📄 globals.css              # Estilos globales y tokens de diseño
│   ├── 📁 services/                # Rutas de servicios
│   │   ├── 📄 page.jsx            # Lista de todos los servicios
│   │   └── 📁 [id]/               # Rutas dinámicas para detalles
│   │       └── 📄 page.jsx        # Detalle específico de servicio
│   └── 📁 admin/                   # Área administrativa
│       ├── 📁 login/              # Autenticación administrativa
│       │   └── 📄 page.jsx        # Página de login
│       └── 📁 dashboard/          # Panel de control
│           └── 📄 page.jsx        # Dashboard principal
├── 📁 components/                   # Componentes reutilizables
│   ├── 📁 layout/                  # Componentes de layout
│   │   ├── 📄 Navbar.jsx          # Navegación principal
│   │   └── 📄 Footer.jsx          # Pie de página
│   ├── 📁 home/                    # Componentes de la página inicio
│   │   ├── 📄 Hero.jsx            # Sección hero con slider
│   │   ├── 📄 About.jsx           # Sección sobre nosotros
│   │   └── 📄 Services.jsx        # Vista previa de servicios
│   ├── 📁 services/                # Componentes de servicios
│   │   ├── 📄 ServicesList.jsx    # Lista completa de servicios
│   │   └── 📄 ServiceDetail.jsx   # Detalle individual de servicio
│   ├── 📁 admin/                   # Componentes administrativos
│   │   ├── 📄 AdminLogin.jsx      # Formulario de login
│   │   ├── 📄 AdminDashboard.jsx  # Dashboard principal
│   │   ├── 📄 AdminNavbar.jsx     # Navegación administrativa
│   │   └── 📄 ServicesCRUD.jsx    # CRUD completo de servicios
│   └── 📁 ui/                      # Componentes UI base (shadcn/ui)
│       ├── 📄 button.tsx          # Componente Button
│       ├── 📄 card.tsx            # Componente Card
│       ├── 📄 input.tsx           # Componente Input
│       ├── 📄 label.tsx           # Componente Label
│       ├── 📄 badge.tsx           # Componente Badge
│       ├── 📄 dialog.tsx          # Componente Dialog
│       ├── 📄 table.tsx           # Componente Table
│       ├── 📄 textarea.tsx        # Componente Textarea
│       └── 📄 alert.tsx           # Componente Alert
├── 📁 lib/                         # Utilidades y configuraciones
│   ├── 📄 utils.ts                # Funciones de utilidad
│   └── 📄 database.js             # Configuración de base de datos
├── 📁 scripts/                     # Scripts de base de datos
│   └── 📄 create-database-tables.sql # Script de creación de tablas
├── 📁 docs/                        # Documentación del proyecto
│   ├── 📄 MOCKUPS_SPECIFICATION.md # Especificación detallada de mockups
│   └── 📄 PROJECT_STRUCTURE.md    # Este archivo
├── 📁 hooks/                       # Custom hooks de React
│   ├── 📄 use-mobile.tsx          # Hook para detección móvil
│   └── 📄 use-toast.ts            # Hook para notificaciones
├── 📄 next.config.mjs              # Configuración de Next.js
├── 📄 package.json                 # Dependencias del proyecto
├── 📄 tsconfig.json                # Configuración de TypeScript
└── 📄 README.md                    # Documentación principal
\`\`\`

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Primario**: `#1f2937` (gray-800) - Base profesional
- **Fondo**: `#ffffff` - Claridad y brillo
- **Tarjetas**: `#f1f5f9` - Contraste sutil
- **Texto Secundario**: `#6b7280` - Legibilidad
- **Acento**: `#8b5cf6` - Elementos interactivos

### Tipografía
- **Headings**: Geist Sans - Limpio y moderno
- **Body**: Geist Sans - Legibilidad profesional
- **Monospace**: Geist Mono - Código y datos técnicos

### Tokens de Diseño
Utilizamos tokens semánticos definidos en `globals.css`:
- `--primary`, `--secondary`, `--accent`
- `--background`, `--foreground`, `--muted`
- `--card`, `--border`, `--input`

## 🗄️ Base de Datos

### Estructura de Tablas

#### Tabla `users`
\`\`\`sql
- id (SERIAL PRIMARY KEY)
- email (VARCHAR UNIQUE)
- password_hash (VARCHAR)
- name (VARCHAR)
- role (VARCHAR DEFAULT 'admin')
- created_at, updated_at (TIMESTAMP)
\`\`\`

#### Tabla `services`
\`\`\`sql
- id (SERIAL PRIMARY KEY)
- name (VARCHAR)
- description (TEXT)
- price (DECIMAL)
- category (VARCHAR)
- stock (INTEGER)
- on_promotion (BOOLEAN)
- original_price (DECIMAL)
- image_url (VARCHAR)
- features (TEXT[])
- created_at, updated_at (TIMESTAMP)
\`\`\`

### Configuración de Conexión
- **Proveedor**: PostgreSQL en Neon
- **Variables de Entorno**: `DATABASE_URL`, `NEON_DATABASE_URL`
- **Archivo de Configuración**: `lib/database.js`

## 🔧 Funcionalidades Principales

### 1. Página de Inicio
- ✅ Slider dinámico con 3 slides rotativos
- ✅ Navegación responsive con menú móvil
- ✅ Sección "Sobre Nosotros" con estadísticas
- ✅ Vista previa de servicios (grid responsivo)
- ✅ Footer comprehensive con enlaces

### 2. Sistema de Servicios
- ✅ Lista completa con filtros y categorías
- ✅ Páginas de detalle individuales
- ✅ Información completa (precio, stock, promociones)
- ✅ Características detalladas por servicio
- ✅ Navegación breadcrumb

### 3. Área Administrativa
- ✅ Sistema de autenticación seguro
- ✅ Dashboard con métricas clave
- ✅ CRUD completo de servicios
- ✅ Interfaz modal para creación/edición
- ✅ Confirmaciones de eliminación

### 4. Características Técnicas
- ✅ Diseño responsive (móvil-first)
- ✅ Componentes reutilizables
- ✅ Sistema de tokens de diseño
- ✅ Navegación intuitiva
- ✅ Feedback visual en interacciones

## 🚀 Tecnologías Utilizadas

### Frontend
- **Next.js 14** - Framework React con App Router
- **React 18** - Librería de interfaz de usuario
- **Tailwind CSS v4** - Framework de estilos
- **Lucide React** - Iconografía moderna
- **shadcn/ui** - Componentes UI base

### Backend (Preparado)
- **PostgreSQL** - Base de datos relacional
- **Neon** - Proveedor de base de datos
- **Node.js** - Runtime de JavaScript

### Herramientas de Desarrollo
- **TypeScript** - Tipado estático (configurado)
- **ESLint** - Linting de código
- **Prettier** - Formateo de código

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (1 columna)
- **Tablet**: 768px - 1024px (2 columnas)
- **Desktop**: > 1024px (3-4 columnas)

### Componentes Adaptativos
- Navegación con menú hamburguesa en móvil
- Grid de servicios responsivo
- Formularios optimizados para touch
- Imágenes con lazy loading

## 🔐 Seguridad

### Autenticación
- Hash de contraseñas con bcrypt
- Tokens JWT para sesiones
- Validación de entrada en formularios
- Protección CSRF

### Base de Datos
- Consultas parametrizadas
- Validación de tipos de datos
- Índices para optimización
- Triggers para auditoría

## 📋 Próximos Pasos

1. **Integración de Base de Datos Real**
   - Configurar conexión con Neon
   - Implementar queries reales
   - Agregar manejo de errores

2. **Funcionalidades Adicionales**
   - Sistema de usuarios completo
   - Carrito de compras
   - Procesamiento de pagos
   - Sistema de notificaciones

3. **Optimizaciones**
   - Caché de datos
   - Optimización de imágenes
   - SEO avanz
