import express from "express"
import { getUserTransaction,addNewTransaction,updateTransaction } from "../controllers/dashboardController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const router=express.Router()
router.get("/",authMiddleware,getUserTransaction)
router.post("/",authMiddleware,addNewTransaction)
router.put("/:id",authMiddleware,updateTransaction)
export default router