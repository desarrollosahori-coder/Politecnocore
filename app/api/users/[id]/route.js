import { NextResponse } from "next/server"
import { userQueries } from "@/lib/database"

export async function PUT(request, { params }) {
  try {
    const { id } = params
    const body = await request.json()

    const userData = {
      email: body.email,
      name: body.name,
      role: body.role,
    }

    const result = await userQueries.updateUser(Number.parseInt(id), userData)

    if (result.rowCount === 0) {
      return NextResponse.json({ success: false, error: "Usuario no encontrado" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: result.rows[0] })
  } catch (error) {
    console.error("Error updating user:", error)
    return NextResponse.json({ success: false, error: "Error al actualizar usuario" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params
    const result = await userQueries.deleteUser(Number.parseInt(id))

    if (result.rowCount === 0) {
      return NextResponse.json({ success: false, error: "Usuario no encontrado" }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: "Usuario eliminado correctamente" })
  } catch (error) {
    console.error("Error deleting user:", error)
    return NextResponse.json({ success: false, error: "Error al eliminar usuario" }, { status: 500 })
  }
}
