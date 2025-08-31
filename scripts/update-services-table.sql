-- Actualización de la tabla de servicios para incluir campos faltantes
-- Agregar columna para el nombre del icono
ALTER TABLE services ADD COLUMN IF NOT EXISTS icon_name VARCHAR(50);

-- Actualizar los servicios existentes con los nombres de iconos
UPDATE services SET icon_name = 'Brain' WHERE name = 'Consultoría en IA';
UPDATE services SET icon_name = 'Bot' WHERE name = 'Desarrollo de Chatbots';
UPDATE services SET icon_name = 'BarChart3' WHERE name = 'Análisis de Datos';
UPDATE services SET icon_name = 'Database' WHERE name = 'Integración de Sistemas';
UPDATE services SET icon_name = 'Shield' WHERE name = 'Ciberseguridad IA';
UPDATE services SET icon_name = 'Zap' WHERE name = 'Automatización de Procesos';
UPDATE services SET icon_name = 'Cloud' WHERE name = 'Soluciones Cloud';
UPDATE services SET icon_name = 'Smartphone' WHERE name = 'Apps Móviles IA';
UPDATE services SET icon_name = 'Globe' WHERE name = 'Desarrollo Web IA';
UPDATE services SET icon_name = 'Headphones' WHERE name = 'Soporte Técnico 24/7';

-- Actualizar las URLs de las imágenes
UPDATE services SET image_url = '/ai-consultation-meeting-with-business-professional.png' WHERE name = 'Consultoría en IA';
UPDATE services SET image_url = '/modern-chatbot-interface-design-with-ai-conversati.png' WHERE name = 'Desarrollo de Chatbots';
UPDATE services SET image_url = '/data-analytics-dashboard-with-charts-and-graphs.png' WHERE name = 'Análisis de Datos';
UPDATE services SET image_url = '/system-integration-diagram-with-connected-networks.png' WHERE name = 'Integración de Sistemas';
UPDATE services SET image_url = '/cybersecurity-shield-with-ai-protection-technology.png' WHERE name = 'Ciberseguridad IA';
UPDATE services SET image_url = '/process-automation-workflow-with-robotic-elements.png' WHERE name = 'Automatización de Procesos';
UPDATE services SET image_url = '/cloud-computing-infrastructure-with-servers.png' WHERE name = 'Soluciones Cloud';
UPDATE services SET image_url = '/mobile-ai-application-interface-on-smartphone.png' WHERE name = 'Apps Móviles IA';
UPDATE services SET image_url = '/ai-web-development-with-modern-interface-design.png' WHERE name = 'Desarrollo Web IA';
UPDATE services SET image_url = '/technical-support-team-working-with-computers.png' WHERE name = 'Soporte Técnico 24/7';
