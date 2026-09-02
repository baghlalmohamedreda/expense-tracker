import pool from "../config/db.js";

export async function getTransactionByUser(userId){
    const result= await pool.query(
        `SELECT
          transactions.id,
          transactions.title,
          transactions.amount,
          transactions.type,
          transactions.transaction_date,
          category.name AS category
          FROM transactions
          JOIN category
          ON transactions.category_id = category.id
          WHERE transactions.user_id = $1`,
        [userId]
        )
        return result.rows
}
export async function createTransaction(transaction){
    const result =await pool.query(
       `insert into transactions (user_id,
       category_id,
       title,
       amount,
       type,
       description,
       transaction_date)
       values($1,$2,$3,$4,$5,$6,$7)
       RETURNING *
       `,
       [transaction.user_id,
      transaction.category_id,
      transaction.title,
      transaction.amount,
      transaction.type,
      transaction.description,
      transaction.transaction_date]
       
    )
    return result.rows[0]
}
export async function updateTransactions(transaction){
    const result =await pool.query(`update transactions set 
    category_id = $1,
    title = $2,
    amount = $3,
    type = $4,
    description = $5,
    transaction_date = $6
    where id=$7 and user_id=$8
    RETURNING *
        `,
     [
      transaction.category_id,
      transaction.title,
      transaction.amount,
      transaction.type,
      transaction.description,
      transaction.transaction_date,
      transaction.transactionId,
      transaction.userId
    ])
       
      return result.rows[0]
}
export async function deleteTransactions(userId,transactionId){
    const result =await pool.query(`delete from transactions 
        where id=$1 and user_id=$2
        RETURNING *
        `,[transactionId,userId])
    return result.rows[0]    

}

export async function getExpenseByCategory(user_id){
    const result=await pool.query(`select c.name ,COALESCE(SUM(t.amount), 0)as total
        from category c  left join transactions t on t.category_id=c.id and t.user_id=$1
        and t.type='expense' group by c.name
        `,[user_id])
    return result.rows
}