import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Bot, Database, Shield, Zap, BarChart3, Cloud, Smartphone, Globe, Headphones } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Consultoría en IA",
    price: "$2,500",
    image: "/ai-consultation-meeting-professional.png",
    icon: Brain,
    category: "Consultoría",
    featured: true,
    shortDescription: "Asesoramiento estratégico para implementar IA en tu empresa",
  },
  {
    id: 2,
    name: "Desarrollo de Chatbots",
    price: "$1,800",
    image: "/chatbot-interface-design-modern.png",
    icon: Bot,
    category: "Desarrollo",
    shortDescription: "Chatbots inteligentes para atención al cliente 24/7",
  },
  {
    id: 3,
    name: "Análisis de Datos",
    price: "$3,200",
    image: "/data-analytics-dashboard.png",
    icon: BarChart3,
    category: "Analytics",
    shortDescription: "Insights accionables a partir de tus datos empresariales",
  },
  {
    id: 4,
    name: "Integración de Sistemas",
    price: "$4,500",
    image: "/system-integration-network.png",
    icon: Database,
    category: "Integración",
    shortDescription: "Conectamos todos tus sistemas para máxima eficiencia",
  },
  {
    id: 5,
    name: "Ciberseguridad IA",
    price: "$3,800",
    image: "/cybersecurity-shield.png",
    icon: Shield,
    category: "Seguridad",
    featured: true,
    shortDescription: "Protección avanzada con inteligencia artificial",
  },
  {
    id: 6,
    name: "Automatización de Procesos",
    price: "$2,900",
    image: "/process-automation-workflow-robots.png",
    icon: Zap,
    category: "Automatización",
    shortDescription: "Automatiza tareas repetitivas y optimiza recursos",
  },
  {
    id: 7,
    name: "Soluciones Cloud",
    price: "$3,600",
    image: "/cloud-computing-infrastructure-servers.png",
    icon: Cloud,
    category: "Cloud",
    shortDescription: "Migración y optimización de infraestructura en la nube",
  },
  {
    id: 8,
    name: "Apps Móviles IA",
    price: "$5,200",
    image: "/mobile-ai-application-smartphone.png",
    icon: Smartphone,
    category: "Móvil",
    shortDescription: "Aplicaciones móviles inteligentes y personalizadas",
  },
  {
    id: 9,
    name: "Desarrollo Web IA",
    price: "$4,100",
    image: "/ai-web-development-interface.png",
    icon: Globe,
    category: "Web",
    shortDescription: "Sitios web inteligentes con funcionalidades de IA",
  },
  {
    id: 10,
    name: "Soporte Técnico 24/7",
    price: "$1,200",
    image: "/technical-support-team-headset.png",
    icon: Headphones,
    category: "Soporte",
    featured: true,
    shortDescription: "Soporte técnico especializado disponible siempre",
  },
]

export default function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => {
        const Icon = service.icon
        return (
          <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {service.featured && (
              <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Destacado</Badge>
            )}

            <div className="relative">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"></div>
              <div className="absolute top-4 left-4">
                <div className="bg-background/90 p-3 rounded-lg">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
              </div>
            </div>

            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {service.name}
                </CardTitle>
              </div>
              <Badge variant="secondary" className="w-fit mb-2">
                {service.category}
              </Badge>
              <p className="text-muted-foreground text-sm text-pretty">{service.shortDescription}</p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-accent">{service.price}</span>
                <Link href={`/services/${service.id}`}>
                  <Button className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Ver Detalles
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
