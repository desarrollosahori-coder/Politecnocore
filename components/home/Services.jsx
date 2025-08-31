"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Bot, Database, Shield, Zap, BarChart3, Cloud, Smartphone, Globe, Headphones } from "lucide-react"

const iconMap = {
  Brain,
  Bot,
  Database,
  Shield,
  Zap,
  BarChart3,
  Cloud,
  Smartphone,
  Globe,
  Headphones,
}

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services")
        if (response.ok) {
          const result = await response.json()
          if (result.success && result.data) {
            setServices(result.data)
          } else {
            console.error("Error in API response:", result)
            setServices([])
          }
        } else {
          console.error("API request failed:", response.status)
          setServices([])
        }
      } catch (error) {
        console.error("Error fetching services:", error)
        setServices([])
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  if (loading) {
    return (
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Cargando servicios...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ofrecemos una amplia gama de servicios tecnológicos especializados en inteligencia artificial para impulsar
            la transformación digital de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const Icon = iconMap[service.icon_name] || Brain
            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {service.on_promotion && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Promoción</Badge>
                )}

                <div className="relative">
                  <img
                    src={service.image_url || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/90 p-2 rounded-lg">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {service.name}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {service.category}
                  </Badge>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-accent">${service.price}</span>
                      {service.on_promotion && service.original_price && (
                        <span className="text-sm text-muted-foreground line-through">${service.original_price}</span>
                      )}
                    </div>
                    <Link href={`/services/${service.id}`}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                      >
                        Ver Detalles
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="text-lg px-8 py-3">
              Ver Todos los Servicios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
