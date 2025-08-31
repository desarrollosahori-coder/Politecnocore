"use client"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check, Package, Tag, Star, Phone, Mail } from "lucide-react"

export default function ServiceDetail({ service }) {
  const [isContacting, setIsContacting] = useState(false)

  const handleContractService = () => {
    setIsContacting(true)
    // Simular proceso de contratación
    setTimeout(() => {
      alert(`¡Gracias por tu interés en ${service.name}! Un especialista se contactará contigo pronto.`)
      setIsContacting(false)
    }, 1000)
  }

  const handleRequestQuote = () => {
    const subject = `Cotización para ${service.name}`
    const body = `Hola, estoy interesado en obtener una cotización para el servicio "${service.name}". Por favor, contáctenme para más detalles.`
    window.location.href = `mailto:ventas@techsolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleContactSpecialist = () => {
    const phoneNumber = "+1234567890"
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/services"
          className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a Servicios
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={service.image_url || "/placeholder.svg?height=400&width=600&query=technology service"}
              alt={service.name}
              className="w-full h-96 object-cover"
            />
            {service.on_promotion && (
              <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                ¡En Promoción!
              </Badge>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {service.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{service.name}</h1>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {service.on_promotion && service.original_price && (
                  <span className="text-2xl text-muted-foreground line-through mr-2">${service.original_price}</span>
                )}
                <span className="text-4xl font-bold text-accent">${service.price}</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <Package className="h-4 w-4 mr-1" />
                <span>{service.stock} disponibles</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>Servicio Premium</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-current text-yellow-500" />
                <span>4.9/5 (127 reseñas)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Descripción del Servicio</h2>
            <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
          </div>

          {service.features && service.features.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Características Incluidas</h2>
              <div className="grid grid-cols-1 gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" className="flex-1" onClick={handleContractService} disabled={isContacting}>
              {isContacting ? "Procesando..." : "Contratar Servicio"}
            </Button>
            <Button variant="outline" size="lg" className="flex-1 bg-transparent" onClick={handleRequestQuote}>
              Solicitar Cotización
            </Button>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">¿Necesitas más información?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Nuestros expertos están disponibles para resolver todas tus dudas y ayudarte a elegir la mejor solución
                para tu empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" className="flex-1 bg-transparent" onClick={handleContactSpecialist}>
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar Ahora
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent" onClick={handleRequestQuote}>
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
