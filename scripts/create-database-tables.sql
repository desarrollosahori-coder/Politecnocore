-- Creación de la base de datos para TechSolutions Pro
-- PostgreSQL en Neon

-- Tabla de usuarios (administradores)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de servicios
CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    stock INTEGER DEFAULT 0,
    on_promotion BOOLEAN DEFAULT FALSE,
    original_price DECIMAL(10, 2),
    image_url VARCHAR(500),
    features TEXT[], -- Array de características
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para optimizar consultas
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_services_on_promotion ON services(on_promotion);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Insertar usuario administrador por defecto
INSERT INTO users (email, password_hash, name, role) 
VALUES (
    'admin@techsolutionspro.com', 
    '$2b$10$rQZ8kHWKQYXHZYXHZYXHZYXHZYXHZYXHZYXHZYXHZYXHZYXHZYXHZY', -- Hash de 'admin123'
    'Administrador Principal',
    'admin'
) ON CONFLICT (email) DO NOTHING;

-- Insertar servicios iniciales
INSERT INTO services (name, description, price, category, stock, on_promotion, original_price, features) VALUES
(
    'Consultoría en IA',
    'Nuestro servicio de consultoría en inteligencia artificial está diseñado para empresas que buscan implementar soluciones de IA de manera estratégica y efectiva.',
    2500.00,
    'Consultoría',
    15,
    TRUE,
    3000.00,
    ARRAY[
        'Análisis completo de procesos empresariales',
        'Identificación de oportunidades de IA',
        'Hoja de ruta personalizada de implementación',
        'Evaluación de infraestructura tecnológica',
        'Análisis de ROI y casos de negocio',
        'Recomendaciones de tecnologías específicas',
        'Sesiones de capacitación para equipos',
        'Soporte post-consultoría por 3 meses'
    ]
),
(
    'Desarrollo de Chatbots',
    'Desarrollamos chatbots inteligentes y conversacionales que revolucionan la atención al cliente de tu empresa.',
    1800.00,
    'Desarrollo',
    8,
    FALSE,
    NULL,
    ARRAY[
        'Procesamiento de lenguaje natural avanzado',
        'Integración con sistemas CRM y ERP',
        'Capacidades multicanal (web, WhatsApp, Telegram)',
        'Entrenamiento con datos específicos',
        'Dashboard de analytics y métricas',
        'Escalamiento automático a agentes humanos',
        'Soporte para múltiples idiomas',
        'Actualizaciones y mejoras continuas'
    ]
),
(
    'Análisis de Datos',
    'Transformamos tus datos en insights accionables mediante técnicas avanzadas de análisis y machine learning.',
    3200.00,
    'Analytics',
    12,
    TRUE,
    3800.00,
    ARRAY[
        'Análisis descriptivo, predictivo y prescriptivo',
        'Dashboards interactivos personalizados',
        'Modelos de machine learning avanzados',
        'Integración con múltiples fuentes de datos',
        'Reportes automatizados y programados',
        'Visualizaciones avanzadas y storytelling de datos',
        'Alertas inteligentes y monitoreo en tiempo real',
        'Capacitación en interpretación de resultados'
    ]
),
(
    'Integración de Sistemas',
    'Conectamos y sincronizamos todos tus sistemas empresariales para crear un ecosistema tecnológico cohesivo y eficiente.',
    4500.00,
    'Integración',
    6,
    FALSE,
    NULL,
    ARRAY[
        'Integración de ERP, CRM y sistemas legacy',
        'APIs RESTful y GraphQL personalizadas',
        'Sincronización de datos en tiempo real',
        'Arquitectura de microservicios escalable',
        'Middleware inteligente y orquestación',
        'Monitoreo y logging avanzado',
        'Protocolos de seguridad empresarial',
        'Documentación técnica completa'
    ]
),
(
    'Ciberseguridad IA',
    'Protegemos tu infraestructura digital con soluciones de ciberseguridad potenciadas por inteligencia artificial.',
    3800.00,
    'Seguridad',
    10,
    TRUE,
    4200.00,
    ARRAY[
        'Detección de amenazas en tiempo real',
        'Análisis de comportamiento con IA',
        'Respuesta automatizada a incidentes',
        'Monitoreo 24/7 con SOC especializado',
        'Protección contra malware avanzado',
        'Auditorías de seguridad regulares',
        'Capacitación en concientización',
        'Cumplimiento normativo (GDPR, ISO 27001)'
    ]
),
(
    'Automatización de Procesos',
    'Automatizamos procesos empresariales repetitivos y complejos mediante RPA e inteligencia artificial.',
    2900.00,
    'Automatización',
    14,
    FALSE,
    NULL,
    ARRAY[
        'Análisis y mapeo de procesos existentes',
        'Desarrollo de bots RPA personalizados',
        'Automatización de documentos y formularios',
        'Integración con sistemas empresariales',
        'Monitoreo y optimización continua',
        'Escalabilidad automática de recursos',
        'Dashboard de control y métricas',
        'Soporte y mantenimiento especializado'
    ]
),
(
    'Soluciones Cloud',
    'Migramos y optimizamos tu infraestructura tecnológica hacia la nube con soluciones escalables y seguras.',
    3600.00,
    'Cloud',
    9,
    FALSE,
    NULL,
    ARRAY[
        'Migración completa a AWS, Azure o Google Cloud',
        'Arquitecturas cloud-native optimizadas',
        'Implementación de DevOps y CI/CD',
        'Optimización automática de costos',
        'Alta disponibilidad y disaster recovery',
        'Monitoreo y alertas inteligentes',
        'Seguridad y compliance empresarial',
        'Capacitación en gestión cloud'
    ]
),
(
    'Apps Móviles IA',
    'Desarrollamos aplicaciones móviles inteligentes que incorporan capacidades avanzadas de inteligencia artificial.',
    5200.00,
    'Móvil',
    5,
    FALSE,
    NULL,
    ARRAY[
        'Desarrollo nativo iOS y Android',
        'Integración de APIs de IA avanzadas',
        'Reconocimiento de voz y procesamiento NLP',
        'Análisis de imágenes y computer vision',
        'Personalización basada en machine learning',
        'Funcionalidades de realidad aumentada',
        'Analytics y métricas de usuario',
        'Deployment y soporte post-lanzamiento'
    ]
),
(
    'Desarrollo Web IA',
    'Creamos sitios web y aplicaciones web inteligentes que incorporan funcionalidades de inteligencia artificial.',
    4100.00,
    'Web',
    11,
    FALSE,
    NULL,
    ARRAY[
        'Desarrollo con frameworks modernos (React, Vue, Angular)',
        'Integración de chatbots y asistentes virtuales',
        'Sistemas de recomendación personalizados',
        'Análisis predictivo de usuarios',
        'Optimización SEO con IA',
        'Personalización dinámica de contenido',
        'Integración con APIs de terceros',
        'Analytics avanzados y reporting'
    ]
),
(
    'Soporte Técnico 24/7',
    'Proporcionamos soporte técnico especializado disponible las 24 horas del día, los 7 días de la semana.',
    1200.00,
    'Soporte',
    20,
    TRUE,
    1500.00,
    ARRAY[
        'Soporte 24/7 con técnicos certificados',
        'Monitoreo proactivo de sistemas',
        'Resolución remota y presencial',
        'Mantenimiento preventivo programado',
        'Backup automatizado y recovery',
        'Diagnóstico predictivo con IA',
        'Diferentes niveles de SLA',
        'Portal de tickets y seguimiento'
    ]
);

-- Función para actualizar el timestamp de updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para actualizar automáticamente updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
