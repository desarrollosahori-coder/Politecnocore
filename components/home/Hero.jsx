"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Zap, Shield, Cpu } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    title: "Soluciones de IA Empresarial",
    subtitle: "Transformamos tu negocio con inteligencia artificial avanzada",
    description:
      "Implementamos sistemas de IA personalizados que optimizan procesos y aumentan la productividad de tu empresa.",
    icon: Cpu,
    cta: "Explorar Servicios",
  },
  {
    title: "Automatización Inteligente",
    subtitle: "Automatiza procesos complejos con tecnología de vanguardia",
    description: "Desarrollamos soluciones de automatización que reducen costos operativos y mejoran la eficiencia.",
    icon: Zap,
    cta: "Ver Automatización",
  },
  {
    title: "Seguridad y Confiabilidad",
    subtitle: "Protección de datos con los más altos estándares",
    description: "Garantizamos la seguridad de tu información con protocolos de encriptación y monitoreo 24/7.",
    icon: Shield,
    cta: "Conocer Más",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const CurrentIcon = slides[currentSlide].icon

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="ai-pattern absolute inset-0 opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-accent/10 p-6 rounded-full">
              <CurrentIcon className="h-16 w-16 text-accent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 min-h-[300px] flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
              {slides[currentSlide].title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>

            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link href="/services">
                <Button size="lg" className="text-lg px-8 py-3">
                  {slides[currentSlide].cta}
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                Contactar Ahora
              </Button>
            </div>
          </div>

          {/* Slide Controls */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <Button variant="ghost" size="sm" onClick={prevSlide} className="p-2">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-accent" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button variant="ghost" size="sm" onClick={nextSlide} className="p-2">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
