import { regesterUser,login } from "../controllers/authConotroller.js";
import express from 'express'
const route=express.Router()

route.post("/regester",regesterUser)
route.post("/login",login)

export default route

