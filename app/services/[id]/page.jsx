'use client'

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ServiceDetail from "@/components/services/ServiceDetail"

async function getService(id) {
  try {
    const res = await fetch(`/api/services/${id}`)

    if (!res.ok) {
      return null
    }

    const data = await res.json()

    if (!data.success) {
      return null
    }

    return data.data
  } catch (error) {
    console.error("Error fetching service:", error)
    return null
  }
}

export default function ServiceDetailPage({ params }) {
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadService = async () => {
      const serviceId = Number.parseInt(params.id)
      if (isNaN(serviceId)) {
        notFound()
        return
      }

      const fetchedService = await getService(serviceId)

      if (!fetchedService) {
        notFound()
        return
      }

      setService(fetchedService)
      setLoading(false)
    }

    loadService()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="py-24">
          <div className="text-center">
            <p className="text-muted-foreground">Cargando detalle del servicio...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!service) {
    // This case is handled by notFound(), but as a fallback
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-24">
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </div>
  )
}
