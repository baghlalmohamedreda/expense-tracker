import express from "express"
import { getUserTransaction,addNewTransaction,updateTransaction,deleteTransaction,getCategory } from "../controllers/dashboardController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const router=express.Router()
router.get("/",authMiddleware,getUserTransaction)
router.post("/",authMiddleware,addNewTransaction)
router.put("/:id",authMiddleware,updateTransaction)
router.delete("/:id",authMiddleware,deleteTransaction)

export default router