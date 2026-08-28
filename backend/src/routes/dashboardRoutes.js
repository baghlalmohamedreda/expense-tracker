import express from "express"
import { getUserTransaction } from "../controllers/dashboardController.js"

const router=express.Router()
router.get("/",getUserTransaction)
export default router