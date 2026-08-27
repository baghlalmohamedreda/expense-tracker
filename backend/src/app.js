import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
app.use(express.json())
app.get("/api/test",(req,res)=>{
    res.json({message:"api is working"})
})
export default app