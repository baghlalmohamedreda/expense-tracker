import express from 'express'
import cors from  "cors"
import dashboardRoutes from "./routes/dashboardRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import categoriesRoutes from "./routes/categoriesRoutes.js"
const app=express()
app.use(cors({
  origin: "http://localhost:3000"
}))
app.use(express.json())
app.use("/api/transactions",dashboardRoutes)
app.use("/api/auth/",authRoutes)
app.use("/api/transactions",categoriesRoutes)

export default app