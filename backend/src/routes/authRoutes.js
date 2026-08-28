import { regesterUser } from "../controllers/authConotroller";
import express from 'express'
const route=express.Router()

route.get("/",regesterUser)