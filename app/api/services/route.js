import { NextResponse } from "next/server"
import { serviceQueries } from "@/lib/database"

export async function GET() {
  try {
    const result = await serviceQueries.getAllServices()
    return NextResponse.json({ success: true, data: result.rows })
  } catch (error) {
    console.error("Error fetching services:", error)
    return NextResponse.json({ success: false, error: "Error al obtener servicios" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
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

    const result = await serviceQueries.createService(serviceData)
    return NextResponse.json({ success: true, data: result.rows[0] })
  } catch (error) {
    console.error("Error creating service:", error)
    return NextResponse.json({ success: false, error: "Error al crear servicio" }, { status: 500 })
  }
}
