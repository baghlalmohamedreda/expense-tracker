import pool from "./config/db.js";
import dotenv from 'dotenv'
dotenv.config()

async function testconnection(){
    try{
        const result = await pool.query("SELECT NOW()")
        console.log("la conexion est reussit ",result.rows[0].new)
        
    }
    catch(err){
        console.error(err.message)

    }
    finally{
        await pool.end()
    }
}
testconnection()