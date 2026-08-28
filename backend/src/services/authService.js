import pool from "../config/db"

export async function createUser(user){
    const result= await pool.query(`insert into users(name,email,password) values ($1,$2,$3) 
        returning name,email,password`,
        [user.name,user.email,user.password]


    )
    return result.rows[0]


}