import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ServiceDetail from "@/components/services/ServiceDetail"
import { serviceQueries } from "@/lib/database"

async function getService(id) {
  try {
    const result = await serviceQueries.getServiceById(id)

    if (result.rowCount === 0) {
      return null
    }

    return result.rows[0]
  } catch (error) {
    console.error("Error fetching service:", error)
    return null
  }
}

export default async function ServiceDetailPage({ params }) {
  const serviceId = Number.parseInt(params.id)
  const service = await getService(serviceId)

  if (!service) {
    notFound()
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
