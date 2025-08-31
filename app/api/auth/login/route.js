import { NextResponse } from "next/server"
import { userQueries } from "@/lib/database"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Buscar usuario por email
    const result = await userQueries.getUserByEmail(email)

    if (result.rowCount === 0) {
      return NextResponse.json({ success: false, error: "Credenciales incorrectas" }, { status: 401 })
    }

    const user = result.rows[0]

    // Verificar contraseña
    const isValidPassword = await bcrypt.compare(password, user.password_hash)

    if (!isValidPassword) {
      return NextResponse.json({ success: false, error: "Credenciales incorrectas" }, { status: 401 })
    }

    // Crear JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "fallback-secret-key",
      { expiresIn: "24h" },
    )

    return NextResponse.json({
      success: true,
      data: {
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      },
    })
  } catch (error) {
    console.error("Error during login:", error)
    return NextResponse.json({ success: false, error: "Error al iniciar sesión" }, { status: 500 })
  }
}
