import { NextResponse } from "next/server"
import { serviceQueries } from "@/lib/database"

export async function GET(request, { params }) {
  try {
    const { id } = params
    const result = await serviceQueries.getServiceById(Number.parseInt(id))

    if (result.rowCount === 0) {
      return NextResponse.json({ success: false, error: "Servicio no encontrado" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: result.rows[0] })
  } catch (error) {
    console.error("Error fetching service:", error)
    return NextResponse.json({ success: false, error: "Error al obtener servicio" }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params
    const body = await request.json()

    const serviceData = {
      name: body.name,
      description: body.description,
      price: Number.parseFloat(body.price),
      category: body.category,
      stock: Number.parseInt(body.stock),
      onPromotion: body.onPromotion || false,
      originalPrice: body.originalPrice ? Number.parseFloat(body.originalPrice) : null,
      imageUrl: body.imageUrl || "/tech-service.png",
      features: body.features || [],
    }

    const result = await serviceQueries.updateService(Number.parseInt(id), serviceData)

    if (result.rowCount === 0) {
      return NextResponse.json({ success: false, error: "Servicio no encontrado" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: result.rows[0] })
  } catch (error) {
    console.error("Error updating service:", error)
    return NextResponse.json({ success: false, error: "Error al actualizar servicio" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params
    const result = await serviceQueries.deleteService(Number.parseInt(id))

    if (result.rowCount === 0) {
      return NextResponse.json({ success: false, error: "Servicio no encontrado" }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: "Servicio eliminado correctamente" })
  } catch (error) {
    console.error("Error deleting service:", error)
    return NextResponse.json({ success: false, error: "Error al eliminar servicio" }, { status: 500 })
  }
}
