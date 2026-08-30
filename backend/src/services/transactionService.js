import pool from "../config/db.js";

export async function getTransactionByUser(userId){
    const result= await pool.query(
        "select *from transactions where user_id=$1",
        [userId]
        )
        return result.rows
}
export async function createTransaction(transaction){
    const result =await pool.query(
       `insert into transations (user_id,
       category_id,
       title,
       amount,
       type,
       descreption,
       transation_date)
       values($1,$2,$3,$4,$5,$6,$7)
       RETURNING id, user_id, category_id, title, amount, type, description, transaction_date
       `,
       [transaction.userId,
      transaction.category_id,
      transaction.title,
      transaction.amount,
      transaction.type,
      transaction.description,
      transaction.transaction_date]
       
    )
    return result.rows[0]
}
