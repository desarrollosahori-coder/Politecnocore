import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Clientes Satisfechos",
    description: "Empresas que confían en nuestras soluciones",
  },
  {
    icon: Award,
    number: "15+",
    label: "Años de Experiencia",
    description: "Liderando la innovación tecnológica",
  },
  {
    icon: Globe,
    number: "25+",
    label: "Países Atendidos",
    description: "Presencia internacional consolidada",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Tasa de Éxito",
    description: "Proyectos completados exitosamente",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Sobre TechSolutions Pro</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Somos una empresa líder en servicios tecnológicos especializizada en inteligencia artificial, comprometida
            con la transformación digital de las empresas a través de soluciones innovadoras y personalizadas que
            impulsan el crecimiento y la eficiencia operativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground text-pretty">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 bg-card rounded-lg p-8 tech-gradient">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground text-pretty mb-6">
                Democratizar el acceso a la inteligencia artificial y las tecnologías emergentes, proporcionando
                soluciones accesibles y efectivas que permitan a las empresas de todos los tamaños competir en la era
                digital.
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground text-pretty">
                Ser la empresa de referencia en servicios tecnológicos de IA en América Latina, reconocida por nuestra
                innovación, calidad de servicio y compromiso con el éxito de nuestros clientes.
              </p>
            </div>
            <div className="bg-background/50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Nuestros Valores</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Innovación constante y adaptación tecnológica
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Excelencia en el servicio al cliente
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Transparencia y ética profesional
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Compromiso con resultados medibles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
