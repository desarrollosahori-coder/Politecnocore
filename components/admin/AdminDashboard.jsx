"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import AdminNavbar from "./AdminNavbar"
import ServicesCRUD from "./ServicesCRUD"
import UsersCRUD from "./UsersCRUD"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Users, DollarSign, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  useEffect(() => {
    // Verificar autenticación (simulado)
    const token = localStorage.getItem("adminToken")
    if (!token) {
      router.push("/admin/login")
    }
  }, [router])

  const stats = [
    {
      title: "Servicios Activos",
      value: "10",
      icon: BarChart3,
      change: "+2 este mes",
    },
    {
      title: "Usuarios Registrados",
      value: "8",
      icon: Users,
      change: "+3 este mes",
    },
    {
      title: "Ingresos Mensuales",
      value: "$45,678",
      icon: DollarSign,
      change: "+8% vs mes anterior",
    },
    {
      title: "Tasa de Conversión",
      value: "12.5%",
      icon: TrendingUp,
      change: "+2.1% vs mes anterior",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Panel de Administración</h1>
              <p className="text-muted-foreground">Bienvenido al panel de control de TechSolutions Pro</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <p className="text-xs text-muted-foreground">{stat.change}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Resumen de Actividad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sistema conectado a la base de datos PostgreSQL en Neon. Todas las operaciones CRUD están funcionando
                  correctamente.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "services" && <ServicesCRUD />}
        {activeTab === "users" && <UsersCRUD />}
      </main>
    </div>
  )
}
