import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import About from "@/components/home/About"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  )
}
