import { createUser,findUserByEmail,findUser } from "../services/authService.js";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()
export async function regesterUser(req,res){
    try{
    const {name,email,password}=req.body
    if(!name||!email||!password){
        return res.status(400).json({
            message:"tout les champs sont obligatoires"
        })
    }
    const userinfo={name,email,password}
    const isexist=await findUserByEmail(userinfo.email)
    if(isexist){
        return res.status(409).json({
            message:"cette email est deja exist"
        })
    }
    const user=await createUser(userinfo)
    res.status(201).json({
        message:"utilisateur cree avec succes",
        user
    })
}catch(error){
    return res.status(500).json({
        message:"erreur leur de la creation de user"
    })
}
}
export async function login(req,res){
    const {email,password}=req.body
    const user={email,password}
    const userdb=await findUser(user)
    if(userdb){
        const token=jwt.sign({userId:userdb.id},process.env.JWT_SECRET,{expiresIn:"1h"})
        return res.status(200).json({
            message:"login reussi ",
            token
        })
    }
    return res.status(404).json({message :"email ou mot de passe incorrect"})

}
