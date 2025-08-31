'use client'

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
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Automatización Inteligente",
    subtitle: "Automatiza procesos complejos con tecnología de vanguardia",
    description: "Desarrollamos soluciones de automatización que reducen costos operativos y mejoran la eficiencia.",
    icon: Zap,
    cta: "Ver Automatización",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Seguridad y Confiabilidad",
    subtitle: "Protección de datos con los más altos estándares",
    description: "Garantizamos la seguridad de tu información con protocolos de encriptación y monitoreo 24/7.",
    icon: Shield,
    cta: "Conocer Más",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)
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
    <section className="relative bg-black text-white overflow-hidden min-h-[700px] flex items-center">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-40" : "opacity-0"}`}
          style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
      ))}
      
      <div className="ai-pattern absolute inset-0 opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full border border-white/20">
              <CurrentIcon className="h-16 w-16 text-accent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 min-h-[300px] flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-balance tracking-tight">
              {slides[currentSlide].title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 text-balance max-w-3xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>

            <p className="text-lg text-gray-400 text-pretty max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link href="/services">
                <Button size="lg" className="text-lg px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground">
                  {slides[currentSlide].cta}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent border-white/50 hover:bg-white/10 hover:text-white">
                  Contactar Ahora
                </Button>
              </Link>
            </div>
          </div>

          {/* Slide Controls */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <Button variant="ghost" size="sm" onClick={prevSlide} className="p-2 hover:bg-white/10 rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-accent w-6" : "bg-gray-500 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button variant="ghost" size="sm" onClick={nextSlide} className="p-2 hover:bg-white/10 rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
