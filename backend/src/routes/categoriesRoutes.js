import express from "express"
import { authMiddleware } from "../middleware/authMiddleware"
import { getCategory } from "../controllers/dashboardController"
const router=express.Router()

router.get("/",authMiddleware,getCategory)

export default router