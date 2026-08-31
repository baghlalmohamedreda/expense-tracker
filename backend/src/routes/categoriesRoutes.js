import express from "express"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { getCategory } from "../controllers/dashboardController.js"
const router=express.Router()

router.get("/category",authMiddleware,getCategory)

export default router