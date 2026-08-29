import express from "express"
import { getUserTransaction } from "../controllers/dashboardController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const router=express.Router()
router.get("/",authMiddleware,getUserTransaction)
export default router