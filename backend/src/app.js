import express from 'express'
import dashboardRoutes from "./routes/dashboardRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import categoriesRoutes from "./routes/categoriesRoutes.js"
const app=express()
app.use(express.json())
app.use("/api/transactions",dashboardRoutes)
app.use("/api/auth/",authRoutes)
app.use("/api/categories",categoriesRoutes)

export default app