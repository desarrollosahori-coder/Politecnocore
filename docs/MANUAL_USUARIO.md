# MANUAL DE USUARIO - TechSolutions Pro
## Aplicación Web para Servicios Tecnológicos

**Versión:** 1.0  
**Fecha:** Diciembre 2024  
**Desarrollado por:** Equipo TechSolutions Pro

---

## ÍNDICE DE FUNCIONES

### FUNCIONES GENERALES DEL SISTEMA

#### 1. **Navegación Principal**
**Ubicación:** Barra superior de navegación  
**Descripción:** Permite navegar entre las diferentes secciones de la aplicación mediante un menú responsive que se adapta a dispositivos móviles y de escritorio.  
**Uso:** Haga clic en los enlaces "Inicio", "Servicios" o "Admin" para navegar entre secciones. En dispositivos móviles, use el botón de menú hamburguesa para acceder a las opciones de navegación.

#### 2. **Búsqueda de Servicios**
**Ubicación:** Página de servicios (/services)  
**Descripción:** Sistema de búsqueda que permite filtrar servicios por nombre, categoría o precio para encontrar rápidamente el servicio deseado.  
**Uso:** Ingrese términos de búsqueda en el campo correspondiente. Los resultados se filtran automáticamente mientras escribe.

#### 3. **Visualización de Catálogo**
**Ubicación:** Página principal y página de servicios  
**Descripción:** Muestra todos los servicios disponibles en formato de tarjetas con imagen, nombre, precio y descripción breve.  
**Uso:** Navegue por el catálogo usando scroll o los controles de paginación. Haga clic en cualquier servicio para ver sus detalles completos.

#### 4. **Detalle de Servicios**
**Ubicación:** Páginas individuales de servicios (/services/[id])  
**Descripción:** Presenta información completa de cada servicio incluyendo descripción detallada, especificaciones, precio, disponibilidad y estado de promoción.  
**Uso:** Acceda desde el catálogo haciendo clic en "Ver Detalles" en cualquier servicio. Use los breadcrumbs para regresar al catálogo.

#### 5. **Slider Dinámico de Inicio**
**Ubicación:** Página principal - sección Hero  
**Descripción:** Presenta automáticamente los servicios destacados en un carrusel que cambia cada 5 segundos, con controles manuales de navegación.  
**Uso:** El slider funciona automáticamente. Use los puntos indicadores o las flechas laterales para navegar manualmente entre slides.

### FUNCIONES ADMINISTRATIVAS

#### 6. **Autenticación de Administrador**
**Ubicación:** /admin/login  
**Descripción:** Sistema seguro de login para acceder al panel administrativo usando credenciales encriptadas y tokens JWT.  
**Uso:** Ingrese email y contraseña de administrador. Use las credenciales de prueba: admin@techsolutions.com / admin123 para acceso de demostración.

#### 7. **Dashboard Administrativo**
**Ubicación:** /admin/dashboard  
**Descripción:** Panel central que muestra métricas del sistema, estadísticas de servicios y usuarios, con navegación por pestañas a diferentes módulos administrativos.  
**Uso:** Acceda después del login exitoso. Use las pestañas "Servicios" y "Usuarios" para navegar entre módulos de gestión.

#### 8. **Crear Nuevos Servicios**
**Ubicación:** Dashboard Admin > Pestaña Servicios > Botón "Nuevo Servicio"  
**Descripción:** Formulario modal completo para agregar nuevos servicios al catálogo con validación de datos y carga de imágenes.  
**Uso:** Complete todos los campos requeridos: nombre, descripción, precio, categoría (menú desplegable), cantidad disponible (menú desplegable), y URL de imagen. Haga clic en "Guardar" para crear el servicio.

#### 9. **Editar Servicios Existentes**
**Ubicación:** Dashboard Admin > Pestaña Servicios > Botón "Editar" en cada fila  
**Descripción:** Permite modificar cualquier aspecto de un servicio existente manteniendo la integridad de los datos y referencias.  
**Uso:** Haga clic en el ícono de edición junto al servicio deseado. Modifique los campos necesarios en el formulario modal y confirme los cambios.

#### 10. **Eliminar Servicios**
**Ubicación:** Dashboard Admin > Pestaña Servicios > Botón "Eliminar" en cada fila  
**Descripción:** Permite remover servicios del catálogo con confirmación de seguridad para prevenir eliminaciones accidentales.  
**Uso:** Haga clic en el ícono de eliminación (papelera) y confirme la acción en el diálogo de confirmación que aparece.

#### 11. **Gestión de Categorías de Servicios**
**Ubicación:** Formularios de creación/edición de servicios  
**Descripción:** Sistema de categorización que organiza los servicios en grupos lógicos para mejor navegación y gestión.  
**Uso:** Seleccione la categoría apropiada del menú desplegable: Desarrollo Web, Consultoría IT, Cloud Computing, Ciberseguridad, o Inteligencia Artificial.

#### 12. **Control de Inventario**
**Ubicación:** Formularios de servicios - campo "Cantidad Disponible"  
**Descripción:** Gestiona la disponibilidad de cada servicio con opciones predefinidas para control de capacidad.  
**Uso:** Seleccione del menú desplegable: Ilimitado, 1-10, 11-50, 51-100, o +100 según la capacidad del servicio.

#### 13. **Gestión de Promociones**
**Ubicación:** Formularios de servicios - checkbox "En Promoción"  
**Descripción:** Marca servicios como promocionales para destacarlos en el catálogo y aplicar descuentos especiales.  
**Uso:** Active o desactive el checkbox "En Promoción" al crear o editar servicios. Los servicios promocionales se destacan visualmente en el catálogo.

#### 14. **Crear Usuarios Administrativos**
**Ubicación:** Dashboard Admin > Pestaña Usuarios > Botón "Nuevo Usuario"  
**Descripción:** Permite crear nuevas cuentas de administrador con credenciales seguras y permisos específicos.  
**Uso:** Complete el formulario con nombre, email único, contraseña segura, y seleccione el rol de usuario. La contraseña se encripta automáticamente.

#### 15. **Editar Perfiles de Usuario**
**Ubicación:** Dashboard Admin > Pestaña Usuarios > Botón "Editar" en cada fila  
**Descripción:** Modifica información de usuarios existentes incluyendo datos personales y permisos de acceso.  
**Uso:** Seleccione el usuario a editar, modifique los campos necesarios, y guarde los cambios. Las contraseñas se reencriptan si se modifican.

#### 16. **Eliminar Usuarios del Sistema**
**Ubicación:** Dashboard Admin > Pestaña Usuarios > Botón "Eliminar" en cada fila  
**Descripción:** Remueve usuarios del sistema con confirmación de seguridad para mantener la integridad del acceso administrativo.  
**Uso:** Haga clic en eliminar junto al usuario deseado y confirme la acción. No se puede eliminar el último usuario administrador.

#### 17. **Búsqueda y Filtrado de Datos**
**Ubicación:** Tablas de servicios y usuarios en el dashboard  
**Descripción:** Herramientas de búsqueda en tiempo real que permiten encontrar rápidamente servicios o usuarios específicos.  
**Uso:** Use los campos de búsqueda en la parte superior de cada tabla. Los resultados se filtran automáticamente mientras escribe.

#### 18. **Validación de Datos en Tiempo Real**
**Ubicación:** Todos los formularios del sistema  
**Descripción:** Sistema de validación que verifica la integridad de los datos ingresados antes de enviarlos al servidor.  
**Uso:** Los campos se validan automáticamente. Los errores se muestran en rojo con mensajes descriptivos. Corrija los errores antes de enviar el formulario.

#### 19. **Gestión de Sesiones Administrativas**
**Ubicación:** Panel administrativo - botón "Cerrar Sesión"  
**Descripción:** Control seguro de sesiones con tokens JWT que expiran automáticamente y opción de logout manual.  
**Uso:** Use el botón "Cerrar Sesión" en la barra de navegación administrativa para terminar la sesión de forma segura.

#### 20. **Exportación de Datos**
**Ubicación:** Dashboard Admin - botones de exportación en tablas  
**Descripción:** Permite exportar listas de servicios y usuarios en formato CSV para análisis externo o respaldos.  
**Uso:** Haga clic en el botón "Exportar" en la parte superior de cada tabla para descargar los datos en formato CSV.

### FUNCIONES DE INTERFAZ Y EXPERIENCIA

#### 21. **Modo Responsive**
**Ubicación:** Toda la aplicación  
**Descripción:** La interfaz se adapta automáticamente a diferentes tamaños de pantalla proporcionando experiencia óptima en móviles, tablets y escritorio.  
**Uso:** La adaptación es automática. En móviles, use el menú hamburguesa para navegación y gestos táctiles para interactuar con elementos.

#### 22. **Tema Visual Futurista**
**Ubicación:** Toda la aplicación  
**Descripción:** Diseño moderno con paleta de colores tecnológica (azules, cianes, blancos) que refleja innovación y profesionalismo en IA.  
**Uso:** El tema se aplica automáticamente. Los colores y efectos visuales mejoran la experiencia sin requerir configuración del usuario.

#### 23. **Navegación por Breadcrumbs**
**Ubicación:** Páginas de detalle y secciones internas  
**Descripción:** Sistema de navegación contextual que muestra la ubicación actual del usuario y permite regresar a secciones anteriores.  
**Uso:** Haga clic en cualquier elemento del breadcrumb para navegar directamente a esa sección. Útil para orientación en navegación profunda.

#### 24. **Carga Asíncrona de Contenido**
**Ubicación:** Todas las páginas con datos dinámicos  
**Descripción:** Los datos se cargan de forma asíncrona con indicadores visuales de progreso para mejor experiencia de usuario.  
**Uso:** Los indicadores de carga aparecen automáticamente. Espere a que termine la carga antes de interactuar con elementos que requieren datos del servidor.

#### 25. **Manejo de Errores Informativos**
**Ubicación:** Toda la aplicación  
**Descripción:** Sistema de notificaciones que informa al usuario sobre errores, éxitos, y estados del sistema de manera clara y útil.  
**Uso:** Las notificaciones aparecen automáticamente. Lea los mensajes para entender el estado de las operaciones y siga las instrucciones proporcionadas.

---

## CREDENCIALES DE PRUEBA

**Administrador de Sistema:**
- Email: admin@techsolutions.com
- Contraseña: admin123

---

## SOPORTE TÉCNICO

Para asistencia técnica o reportar problemas:
- Email: soporte@techsolutions.com
- Teléfono: +1 (555) 123-4567
- Horario: Lunes a Viernes, 9:00 AM - 6:00 PM

---

## NOTAS IMPORTANTES

1. **Seguridad:** Cambie las credenciales por defecto en producción
2. **Respaldos:** Realice respaldos regulares de la base de datos
3. **Actualizaciones:** Mantenga el sistema actualizado para seguridad óptima
4. **Navegadores:** Compatible con Chrome, Firefox, Safari, y Edge (versiones recientes)
5. **Conectividad:** Requiere conexión a internet para funcionalidad completa

---

*Manual actualizado por última vez: Diciembre 2024*
