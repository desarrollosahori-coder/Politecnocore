import { NextResponse } from "next/server"
import { userQueries } from "@/lib/database"
import bcrypt from "bcryptjs"

export async function GET() {
  try {
    const result = await userQueries.getAllUsers()
    return NextResponse.json({ success: true, data: result.rows })
  } catch (error) {
    console.error("Error fetching users:", error)
    return NextResponse.json({ success: false, error: "Error al obtener usuarios" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    // Hash de la contraseña
    const passwordHash = await bcrypt.hash(body.password, 10)

    const userData = {
      email: body.email,
      passwordHash,
      name: body.name,
      role: body.role || "admin",
    }

    const result = await userQueries.createUser(userData)
    return NextResponse.json({ success: true, data: result.rows[0] })
  } catch (error) {
    console.error("Error creating user:", error)
    return NextResponse.json({ success: false, error: "Error al crear usuario" }, { status: 500 })
  }
}
