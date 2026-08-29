import pool from "../config/db.js"
import bcrypt from 'bcrypt'

export async function createUser(user){
    const hashedpassword =await bcrypt.hash(user.password,10)
    const result= await pool.query(`insert into users(name,email,password) values ($1,$2,$3) 
        returning name,email,password`,
        [user.name,user.email,hashedpassword]

    )
    return result.rows[0]

}
export async function findUserByEmail(email){
    const result= await pool.query("select id,name,email from users where email=$1",
        [email]
    )
    return result.rows[0]
}
export async function findUser(user){
    const result=await pool.query("select id,email,password from users where email =$1 ",
        [user.email]
    )
    const userdb=result.rows[0]
    if(userdb){
        const utilisateur= await bcrypt.compare(
            user.password,
            userdb.password)
            return utilisateur

    }
    return null

}