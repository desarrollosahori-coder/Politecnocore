"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Loader2, X } from "lucide-react"

const CATEGORIES = [
  "Consultoría",
  "Desarrollo",
  "Analytics",
  "Integración",
  "Seguridad",
  "Automatización",
  "Cloud",
  "Móvil",
  "Web",
  "Soporte",
]

const STOCK_OPTIONS = [
  { value: "5", label: "5 unidades" },
  { value: "10", label: "10 unidades" },
  { value: "15", label: "15 unidades" },
  { value: "20", label: "20 unidades" },
  { value: "25", label: "25 unidades" },
  { value: "50", label: "50 unidades" },
]

const FEATURE_OPTIONS = [
  "Análisis completo de procesos empresariales",
  "Identificación de oportunidades de IA",
  "Hoja de ruta personalizada de implementación",
  "Evaluación de infraestructura tecnológica",
  "Análisis de ROI y casos de negocio",
  "Recomendaciones de tecnologías específicas",
  "Sesiones de capacitación para equipos",
  "Soporte post-consultoría por 3 meses",
  "Procesamiento de lenguaje natural avanzado",
  "Integración con sistemas CRM y ERP",
  "Capacidades multicanal (web, WhatsApp, Telegram)",
  "Entrenamiento con datos específicos",
  "Dashboard de analytics y métricas",
  "Escalamiento automático a agentes humanos",
  "Soporte para múltiples idiomas",
  "Actualizaciones y mejoras continuas",
  "Análisis descriptivo, predictivo y prescriptivo",
  "Dashboards interactivos personalizados",
  "Modelos de machine learning avanzados",
  "Integración con múltiples fuentes de datos",
  "Reportes automatizados y programados",
  "Visualizaciones avanzadas y storytelling de datos",
  "Alertas inteligentes y monitoreo en tiempo real",
  "Capacitación en interpretación de resultados",
  "APIs RESTful y GraphQL personalizadas",
  "Sincronización de datos en tiempo real",
  "Arquitectura de microservicios escalable",
  "Middleware inteligente y orquestación",
  "Monitoreo y logging avanzado",
  "Protocolos de seguridad empresarial",
  "Documentación técnica completa",
  "Detección de amenazas en tiempo real",
  "Análisis de comportamiento con IA",
  "Respuesta automatizada a incidentes",
  "Monitoreo 24/7 con SOC especializado",
  "Protección contra malware avanzado",
  "Auditorías de seguridad regulares",
  "Capacitación en concientización",
  "Cumplimiento normativo (GDPR, ISO 27001)",
]

export default function ServicesCRUD() {
  const [services, setServices] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    onPromotion: false,
    description: "",
    features: [],
    imageUrl: "",
  })

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch("/api/services")
      const result = await response.json()

      if (result.success) {
        setServices(result.data)
      } else {
        console.error("Error fetching services:", result.error)
      }
    } catch (error) {
      console.error("Error fetching services:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const url = editingService ? `/api/services/${editingService.id}` : "/api/services"
      const method = editingService ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: Number.parseFloat(formData.price),
          stock: Number.parseInt(formData.stock),
          features: formData.features,
          image_url: formData.imageUrl,
        }),
      })

      const result = await response.json()

      if (result.success) {
        await fetchServices()
        resetForm()
        setIsDialogOpen(false)
      } else {
        console.error("Error saving service:", result.error)
        alert("Error al guardar el servicio: " + result.error)
      }
    } catch (error) {
      console.error("Error saving service:", error)
      alert("Error al guardar el servicio")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (service) => {
    setEditingService(service)
    setFormData({
      name: service.name,
      price: service.price.toString(),
      category: service.category,
      stock: service.stock.toString(),
      onPromotion: service.on_promotion,
      description: service.description,
      features: service.features || [],
      imageUrl: service.image_url || "",
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async (id) => {
    if (confirm("¿Estás seguro de que quieres eliminar este servicio?")) {
      try {
        const response = await fetch(`/api/services/${id}`, {
          method: "DELETE",
        })

        const result = await response.json()

        if (result.success) {
          await fetchServices()
        } else {
          console.error("Error deleting service:", result.error)
          alert("Error al eliminar el servicio: " + result.error)
        }
      } catch (error) {
        console.error("Error deleting service:", error)
        alert("Error al eliminar el servicio")
      }
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const addFeature = (feature) => {
    if (!formData.features.includes(feature)) {
      setFormData({
        ...formData,
        features: [...formData.features, feature],
      })
    }
  }

  const removeFeature = (index) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    })
  }

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      category: "",
      stock: "",
      onPromotion: false,
      description: "",
      features: [],
      imageUrl: "",
    })
    setEditingService(null)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Cargando servicios...</span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestión de Servicios</h1>
          <p className="text-muted-foreground">Administra los servicios de tu empresa</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={(isOpen) => {
          setIsDialogOpen(isOpen);
          if (isOpen) {
            resetForm();
          }
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Servicio
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingService ? "Editar Servicio" : "Nuevo Servicio"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre del Servicio</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Precio (USD)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="1000.00"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Categoría</Label>
                  <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Cantidad Disponible</Label>
                  <Select value={formData.stock} onValueChange={(value) => handleSelectChange("stock", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona cantidad" />
                    </SelectTrigger>
                    <SelectContent>
                      {STOCK_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">URL de Imagen</Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Características Incluidas</Label>
                <Select onValueChange={addFeature}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona características para agregar" />
                  </SelectTrigger>
                  <SelectContent>
                    {FEATURE_OPTIONS.filter((feature) => !formData.features.includes(feature)).map((feature) => (
                      <SelectItem key={feature} value={feature}>
                        {feature}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {formData.features.length > 0 && (
                  <div className="mt-2 space-y-2">
                    <Label className="text-sm text-muted-foreground">Características seleccionadas:</Label>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {formData.features.map((feature, index) => (
                        <div key={index} className="flex items-center justify-between bg-muted p-2 rounded text-sm">
                          <span>{feature}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFeature(index)}
                            className="h-6 w-6 p-0"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="onPromotion"
                  name="onPromotion"
                  checked={formData.onPromotion}
                  onChange={handleChange}
                  className="rounded border-border"
                />
                <Label htmlFor="onPromotion">En promoción</Label>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      {editingService ? "Actualizando..." : "Creando..."}
                    </>
                  ) : editingService ? (
                    "Actualizar"
                  ) : (
                    "Crear"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Servicios ({services.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>${service.price}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{service.category}</Badge>
                  </TableCell>
                  <TableCell>{service.stock}</TableCell>
                  <TableCell>
                    {service.on_promotion && (
                      <Badge className="bg-destructive text-destructive-foreground">Promoción</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(service)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(service.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
