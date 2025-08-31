import { neon } from "@neondatabase/serverless"

// Conexión a la base de datos Neon
const sql = neon(process.env.DATABASE_URL)

// Funciones de utilidad para operaciones CRUD de servicios
export const serviceQueries = {
  // Obtener todos los servicios
  getAllServices: async () => {
    try {
      const result = await sql`
        SELECT id, name, description, price, category, stock, 
               on_promotion, original_price, image_url, features,
               created_at, updated_at
        FROM services 
        ORDER BY created_at DESC
      `
      return { rows: result, rowCount: result.length }
    } catch (error) {
      console.error("Error getting services:", error)
      throw error
    }
  },

  // Obtener un servicio por ID
  getServiceById: async (id) => {
    try {
      const result = await sql`
        SELECT id, name, description, price, category, stock, 
               on_promotion, original_price, image_url, features,
               created_at, updated_at
        FROM services 
        WHERE id = ${id}
      `
      return { rows: result, rowCount: result.length }
    } catch (error) {
      console.error("Error getting service by ID:", error)
      throw error
    }
  },

  // Crear un nuevo servicio
  createService: async (serviceData) => {
    try {
      const result = await sql`
        INSERT INTO services (name, description, price, category, stock, 
                             on_promotion, original_price, image_url, features)
        VALUES (${serviceData.name}, ${serviceData.description}, ${serviceData.price}, 
                ${serviceData.category}, ${serviceData.stock}, ${serviceData.onPromotion}, 
                ${serviceData.originalPrice}, ${serviceData.imageUrl}, ${serviceData.features})
        RETURNING *
      `
      return { rows: result, rowCount: result.length }
    } catch (error) {
      console.error("Error creating service:", error)
      throw error
    }
  },

  // Actualizar un servicio
  updateService: async (id, serviceData) => {
    try {
      const result = await sql`
        UPDATE services 
        SET name = ${serviceData.name}, description = ${serviceData.description}, 
            price = ${serviceData.price}, category = ${serviceData.category}, 
            stock = ${serviceData.stock}, on_promotion = ${serviceData.onPromotion}, 
            original_price = ${serviceData.originalPrice}, image_url = ${serviceData.imageUrl}, 
            features = ${serviceData.features}, updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id}
        RETURNING *
      `
      return { rows: result, rowCount: result.length }
    } catch (error) {
      console.error("Error updating service:", error)
      throw error
    }
  },

  // Eliminar un servicio
  deleteService: async (id) => {
    try {
      const result = await sql`DELETE FROM services WHERE id = ${id} RETURNING *`
      return { rows: result, rowCount: result.length }
    } catch (error) {
      console.error("Error deleting service:", error)
      throw error
    }
  },
}

export const userQueries = {
  // Obtener todos los usuarios
  getAllUsers: async () => {
    try {
      const result = await sql`
        SELECT id, email, name, role, created_at, updated_at
        FROM users 
        ORDER BY created_at DESC
      `
      return { rows: result, rowCount: result.length }
    } catch (error) {
      console.error("Error getting users:", error)
      throw error
    }
  },

  // Obtener usuario por email
  getUserByEmail: async (email) => {
    try {
      const result = await sql`
        SELECT id, email, password_hash, name, role, created_at, updated_at
        FROM users 
        WHERE email = ${email}
      `
      return { rows: result, rowCount: result.length }
    } catch (error) {
      console.error("Error getting user by email:", error)
      throw error
    }
  },

  // Crear un nuevo usuario
  createUser: async (userData) => {
    try {
      const result = await sql`
        INSERT INTO users (email, password_hash, name, role)
        VALUES (${userData.email}, ${userData.passwordHash}, ${userData.name}, ${userData.role || "admin"})
        RETURNING id, email, name, role, created_at
      `
      return { rows: result, rowCount: result.length }
    } catch (error) {
      console.error("Error creating user:", error)
      throw error
    }
  },

  // Actualizar un usuario
  updateUser: async (id, userData) => {
    try {
      const result = await sql`
        UPDATE users 
        SET email = ${userData.email}, name = ${userData.name}, 
            role = ${userData.role}, updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id}
        RETURNING id, email, name, role, created_at, updated_at
      `
      return { rows: result, rowCount: result.length }
    } catch (error) {
      console.error("Error updating user:", error)
      throw error
    }
  },

  // Eliminar un usuario
  deleteUser: async (id) => {
    try {
      const result = await sql`DELETE FROM users WHERE id = ${id} RETURNING *`
      return { rows: result, rowCount: result.length }
    } catch (error) {
      console.error("Error deleting user:", error)
      throw error
    }
  },
}
