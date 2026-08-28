import pool from "../config/db.js";

export async function getTransactionByUser(userId){
    const result= await pool.query(
        "select *from transaction where user_id=$1",
        [userId]
        )
        return result.rows
}