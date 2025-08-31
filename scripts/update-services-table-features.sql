-- Agregar columna para características del servicio
ALTER TABLE services ADD COLUMN IF NOT EXISTS features TEXT[];

-- Actualizar servicios existentes con características de ejemplo
UPDATE services SET features = ARRAY[
  'Análisis completo de procesos empresariales',
  'Identificación de oportunidades de IA',
  'Hoja de ruta personalizada de implementación',
  'Evaluación de infraestructura tecnológica',
  'Análisis de ROI y casos de negocio',
  'Recomendaciones de tecnologías específicas',
  'Sesiones de capacitación para equipos',
  'Soporte post-consultoría por 3 meses'
] WHERE name = 'Consultoría en IA';

UPDATE services SET features = ARRAY[
  'Procesamiento de lenguaje natural avanzado',
  'Integración con sistemas CRM y ERP',
  'Capacidades multicanal (web, WhatsApp, Telegram)',
  'Entrenamiento con datos específicos',
  'Dashboard de analytics y métricas',
  'Escalamiento automático a agentes humanos',
  'Soporte para múltiples idiomas',
  'Actualizaciones y mejoras continuas'
] WHERE name = 'Desarrollo de Chatbots';

UPDATE services SET features = ARRAY[
  'Análisis descriptivo, predictivo y prescriptivo',
  'Dashboards interactivos personalizados',
  'Modelos de machine learning avanzados',
  'Integración con múltiples fuentes de datos',
  'Reportes automatizados y programados',
  'Visualizaciones avanzadas y storytelling de datos',
  'Alertas inteligentes y monitoreo en tiempo real',
  'Capacitación en interpretación de resultados'
] WHERE name = 'Análisis de Datos';

-- Agregar características para otros servicios
UPDATE services SET features = ARRAY[
  'Integración de ERP, CRM y sistemas legacy',
  'APIs RESTful y GraphQL personalizadas',
  'Sincronización de datos en tiempo real',
  'Arquitectura de microservicios escalable',
  'Middleware inteligente y orquestación',
  'Monitoreo y logging avanzado',
  'Protocolos de seguridad empresarial',
  'Documentación técnica completa'
] WHERE category = 'Integración';

UPDATE services SET features = ARRAY[
  'Detección de amenazas en tiempo real',
  'Análisis de comportamiento con IA',
  'Respuesta automatizada a incidentes',
  'Monitoreo 24/7 con SOC especializado',
  'Protección contra malware avanzado',
  'Auditorías de seguridad regulares',
  'Capacitación en concientización',
  'Cumplimiento normativo (GDPR, ISO 27001)'
] WHERE category = 'Seguridad';
