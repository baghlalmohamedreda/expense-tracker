import { createUser,findUserByEmail } from "../services/authService.js";
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