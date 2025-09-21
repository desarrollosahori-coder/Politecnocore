# 🚀 TechSolutions Pro

## APLICACIÓN WEB PARA VENTA DE SERVICIOS TECNOLÓGICOS

### **ENTREGA 2 - SEMANA 5**
**FRONT END - [GRUPO B01] – [SUBGRUPO 22]**

---

## 👥 Integrantes del Equipo

- **LEÓN RUIZ JUAN NICOLÁS**
- **EDGAR MANTILLA GARZON**
- **DAVID STIVEN DIAZ JIMENEZ**
- **LEANDRO NICOLAS VARGAS CUBIDES**
- **BRAYAN MORENO GARCIA**

---

## 📋 Tabla de Contenido

- [Introducción](#-introducción)
- [Objetivos](#-objetivos)
- [Generalidades de la Plataforma](#-generalidades-de-la-plataforma)
- [Mockups y Diseño](#-mockups-y-diseño)
- [Tecnologías Implementadas](#-tecnologías-implementadas)
- [Arquitectura del Sistema](#-arquitectura-del-sistema)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Vistas y Funcionalidades](#-vistas-y-funcionalidades)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Uso del Sistema](#-uso-del-sistema)
- [Contribuir](#-contribuir)

---

## 🎯 Introducción

**TechSolutions Pro** es una plataforma web moderna y profesional diseñada para conectar clientes con soluciones tecnológicas de vanguardia. La aplicación ofrece una experiencia de usuario intuitiva tanto para clientes que buscan servicios tecnológicos como para administradores que gestionan el contenido de la plataforma.

### Características Principales:
- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con UX optimizada
- 🔐 **Panel Administrativo**: Sistema completo de gestión con autenticación JWT
- 📱 **Responsive**: Adaptable a todos los dispositivos
- ⚡ **Alto Rendimiento**: Optimizado con Next.js 15 y Server Components
- 🛡️ **Seguro**: Autenticación robusta y validaciones completas

---

## 🎯 Objetivos

### General:
Diseñar y documentar una interfaz de usuario clara, intuitiva y funcional para la plataforma web TechSolutions Pro, que facilite a los usuarios la exploración, selección y adquisición de servicios tecnológicos.

### Específicos:
- ✅ Crear mockups de alta fidelidad para páginas clave de la plataforma
- ✅ Especificar funcionalidades interactivas y flujos de navegación
- ✅ Establecer una guía visual y estructural detallada para el desarrollo
- ✅ Implementar un sistema de gestión administrativa completo

---

## 🌟 Generalidades de la Plataforma

TechSolutions Pro ha sido concebida como un **ecosistema digital integral** que conecta a los clientes con soluciones tecnológicas de vanguardia de manera sencilla y directa.

### Funcionalidades Clave:

#### Para Clientes:
- 🏠 **Página de Inicio**: Hero dinámico con servicios destacados
- 📋 **Catálogo de Servicios**: Sistema de filtrado y búsqueda avanzada
- 🔍 **Detalle de Servicios**: Información completa y especificaciones técnicas
- 📊 **Estadísticas**: Métricas de confianza y credibilidad

#### Para Administradores:
- 🔑 **Login Seguro**: Autenticación con JWT
- 📊 **Dashboard**: Métricas clave del negocio
- ⚙️ **CRUD Servicios**: Gestión completa de servicios
- 👥 **CRUD Usuarios**: Administración de usuarios del sistema

---

## 🎨 Mockups y Diseño

### Páginas Principales:

1. **🏠 Página de Inicio (Home)**
   - Hero section con slider dinámico
   - Sección "Sobre Nosotros" con estadísticas
   - Vista previa de servicios principales

2. **📋 Página de Servicios**
   - Grid responsivo de tarjetas de servicios
   - Sistema de filtrado por categorías
   - Información esencial: precio, descripción, categoría

3. **🔍 Página de Detalle**
   - Información completa del servicio
   - Especificaciones técnicas detalladas
   - Botones de acción para contratación

4. **🔐 Login Administrativo**
   - Formulario de autenticación seguro
   - Validación en tiempo real
   - Credenciales de demo incluidas

5. **📊 Panel de Administración**
   - Dashboard con métricas clave
   - Tablas interactivas para CRUD
   - Modales para creación/edición

---

## 💻 Tecnologías Implementadas

### Frontend
- **⚛️ React 18** - Biblioteca de componentes
- **🚀 Next.js 15** - Framework con App Router
- **🎨 Tailwind CSS** - Framework de estilos
- **🧩 shadcn/ui** - Sistema de componentes UI
- **✨ Geist Fonts** - Tipografía profesional

### Backend
- **🔌 API Routes** - Endpoints de Next.js
- **🔐 JWT** - Autenticación segura
- **🗄️ PostgreSQL** - Base de datos relacional
- **☁️ Neon** - Base de datos serverless

### Herramientas de Desarrollo
- **📦 npm** - Gestor de paquetes
- **🔧 ESLint** - Linter de código
- **🎯 TypeScript** - Tipado estático

---

## 🏗️ Arquitectura del Sistema

La aplicación sigue una **arquitectura modular** con separación clara de responsabilidades, implementando el patrón **MVC adaptado** para aplicaciones React modernas.

### Principios Arquitectónicos:
- 🧩 **Modularidad**: Componentes reutilizables
- 🔄 **Separación de Responsabilidades**: Lógica, datos y presentación separados
- ⚡ **Optimización**: Server y Client Components híbridos
- 🛡️ **Seguridad**: Autenticación y autorización robustas

---

## 📁 Estructura del Proyecto

```
techsolutions-pro/
├── 📂 app/                    # App Router de Next.js
│   ├── 📂 api/               # API Routes (Backend)
│   │   ├── 📂 auth/          # Autenticación
│   │   ├── 📂 services/      # CRUD Servicios
│   │   └── 📂 users/         # CRUD Usuarios
│   ├── 📂 admin/             # Área administrativa
│   │   ├── 📂 dashboard/     # Panel de control
│   │   └── 📂 login/         # Login administrativo
│   ├── 📂 services/          # Páginas de servicios
│   │   └── 📂 [id]/          # Detalle dinámico
│   ├── 📄 layout.jsx         # Layout principal
│   └── 📄 page.jsx           # Página de inicio
├── 📂 components/            # Componentes React
│   ├── 📂 ui/               # Componentes base (shadcn/ui)
│   ├── 📂 layout/           # Navbar, Footer
│   ├── 📂 home/             # Componentes de inicio
│   ├── 📂 admin/            # Componentes administrativos
│   └── 📂 services/         # Componentes de servicios
├── 📂 lib/                  # Utilidades y configuración
│   ├── 📄 database.js       # Conexión PostgreSQL
│   └── 📄 utils.ts          # Funciones de ayuda
├── 📂 public/               # Archivos estáticos
│   ├── 📂 images/           # Imágenes
│   └── 📂 icons/            # Iconos
└── 📂 scripts/              # Scripts SQL y utilidades
    └── 📄 schema.sql        # Esquema de base de datos
```

---

## 🖥️ Vistas y Funcionalidades

### 🏠 Vista Principal (Home Page)
**Ubicación:** `/app/page.jsx`

- **Hero Section**: Carrusel dinámico con rotación automática cada 5 segundos
- **Sección Nosotros**: Estadísticas de confianza y credibilidad
- **Vista Previa Servicios**: Los 10 servicios principales
- **Renderizado Híbrido**: Server Components para performance, Client Components para interactividad

### 📋 Vista de Servicios
**Ubicación:** `/app/services/page.jsx`

- **Grid Responsivo**: 1 columna (móvil), 2 (tablet), 3 (desktop)
- **Tarjetas Informativas**: Imagen, nombre, precio, categoría
- **Carga Dinámica**: Client-side fetching para datos actualizados
- **Estados de UI**: Loading, error y éxito

### 🔍 Vista de Detalle
**Ubicación:** `/app/services/[id]/page.jsx`

- **Enrutamiento Dinámico**: Parámetros de URL para IDs de servicios
- **Información Completa**: Descripción, especificaciones, precio
- **Breadcrumbs**: Navegación contextual
- **Error Handling**: Página 404 para servicios inexistentes

### 🔐 Vistas de Administración
**Ubicación:** `/app/admin/login/page.jsx` y `/app/admin/dashboard/page.jsx`

#### Login:
- **Autenticación JWT**: Tokens seguros para sesiones
- **Validación en Tiempo Real**: Feedback inmediato
- **Credenciales Demo**: Para testing y evaluación

#### Dashboard:
- **Métricas Clave**: Servicios activos, clientes, ingresos
- **Navegación por Pestañas**: Servicios y usuarios
- **Componentes Modulares**: ServicesCRUD y UsersCRUD

### ⚙️ Vistas CRUD
**Componentes:** `ServicesCRUD.jsx` y `UsersCRUD.jsx`

- **Tablas Interactivas**: Paginación, búsqueda, filtros
- **Modales de Formulario**: Creación y edición sin recargas
- **Confirmaciones**: Diálogos para acciones destructivas
- **Validación Doble**: Frontend (UX) y Backend (seguridad)

---

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Base de datos PostgreSQL (Neon recomendado)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/desarrollosahori-coder/Politecnocore.git
   cd Politecnocore
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local` con tus configuraciones:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   JWT_SECRET=your_jwt_secret_key
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Configurar base de datos**
   ```bash
   # Ejecutar script SQL para crear tablas
   psql -d your_database -f scripts/schema.sql
   ```

5. **Iniciar en modo desarrollo**
   ```bash
   npm run dev
   ```

6. **Acceder a la aplicación**
   - Frontend: `http://localhost:3000`
   - Admin Panel: `http://localhost:3000/admin/login`

---

## 🎮 Uso del Sistema

### Para Usuarios Finales:
1. 🏠 Visita la página de inicio para explorar servicios destacados
2. 📋 Navega al catálogo completo en `/services`
3. 🔍 Haz clic en cualquier servicio para ver detalles completos
4. 📞 Utiliza la información de contacto para solicitar servicios

### Para Administradores:
1. 🔑 Accede a `/admin/login` con credenciales válidas
2. 📊 Revisa métricas en el dashboard principal
3. ⚙️ Gestiona servicios desde la pestaña "Servicios"
4. 👥 Administra usuarios desde la pestaña "Usuarios"

### Credenciales de Demo:
- **Email**: `admin@techsolutionspro.com`
- **Password**: `admin123`

---

## 🔧 Scripts Disponibles

```bash
npm run dev          # Modo desarrollo
npm run build        # Build de producción
npm run start        # Iniciar aplicación compilada
npm run lint         # Verificar código con ESLint
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. 🍴 Fork el proyecto
2. 🌿 Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. 📝 Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push a la rama (`git push origin feature/AmazingFeature`)
5. 🔄 Abre un Pull Request

---

## 📚 Referencias

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## 📄 Licencia

Este proyecto fue desarrollado como parte de un proyecto académico para el curso de Frontend Development.

---

## 📞 Contacto

**Equipo de Desarrollo - Grupo B01 - Subgrupo 22**

- 📧 Email: contact@techsolutionspro.com
- 🌐 Website: [TechSolutions Pro](#)
- 📂 Repositorio: [GitHub](https://github.com/desarrollosahori-coder/Politecnocore)

---

<div align="center">

### 🚀 **TechSolutions Pro** - Conectando el futuro tecnológico

*Desarrollado con ❤️ por el Equipo B01-22*

</div>
