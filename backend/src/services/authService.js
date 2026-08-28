import pool from "../config/db"
import bcrypt from 'bcrypt'

export async function createUser(user){
    const hashedpassword =await bcrypt(user.password,10)
    const result= await pool.query(`insert into users(name,email,password) values ($1,$2,$3) 
        returning name,email,password`,
        [user.name,user.email,hashedpassword]

    )
    return result.rows[0]

}