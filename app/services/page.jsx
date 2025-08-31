import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ServicesList from "@/components/services/ServicesList"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Nuestros Servicios</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Descubre nuestra completa gama de servicios tecnológicos especializados en inteligencia artificial para
              transformar tu negocio.
            </p>
          </div>
          <ServicesList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
