import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
export function authMiddleware(req,res,next){
    const authheader=req.headers.authorization
    if(!authheader){
        return res.status(401).json({
            message :"token manquent"
        })

    }
    const token =authheader.split(" ")[1]
    const decode=jwt.verify(token,process.env.JWT_SECRET)
    console.log("decode = ",decode)
    req.userId=decode.userId
    next()

}