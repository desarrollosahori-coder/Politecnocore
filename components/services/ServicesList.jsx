'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Brain, Bot, Database, Shield, Zap, BarChart3, Cloud, Smartphone, Globe, Headphones } from 'lucide-react'

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

export default function ServicesList() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services')
        if (response.ok) {
          const result = await response.json()
          if (result.success && result.data) {
            setServices(result.data)
          } else {
            console.error('Error in API response:', result)
            setServices([]) // Clear services on error
          }
        } else {
          console.error('API request failed:', response.status)
          setServices([]) // Clear services on error
        }
      } catch (error) {
        console.error('Error fetching services:', error)
        setServices([]) // Clear services on error
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-muted-foreground">Cargando servicios...</p>
        {/* You can add a spinner here */}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => {
        const Icon = iconMap[service.icon_name] || Brain
        return (
          <Card
            key={service.id}
            className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            {service.on_promotion && (
              <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
                Promoción
              </Badge>
            )}

            <div className="relative">
              <img
                src={service.image_url || '/placeholder.svg'}
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
              <p className="text-muted-foreground text-sm text-pretty">{service.description}</p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-accent">${service.price}</span>
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
