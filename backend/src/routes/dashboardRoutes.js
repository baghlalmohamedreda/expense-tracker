import express from "express"
import { getUserTransaction,addNewTransaction,updateTransaction,getCashFlowController,deleteTransaction,getGrid } from "../controllers/dashboardController.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const router=express.Router()
router.get("/",authMiddleware,getUserTransaction)
router.post("/",authMiddleware,addNewTransaction)
router.put("/:id",authMiddleware,updateTransaction)
router.delete("/:id",authMiddleware,deleteTransaction)
router.get("/grid",authMiddleware,getGrid)
router.get("/cash",authMiddleware,getCashFlowController)
export default router