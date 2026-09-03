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
export async function getStateGrid(user_id) {

  const result = await pool.query(`
    SELECT

      COALESCE(SUM(CASE 
        WHEN type = 'income' 
        AND DATE_TRUNC('month', transaction_date) =
            DATE_TRUNC('month', CURRENT_DATE)
        THEN amount
        ELSE 0
      END), 0) AS monthly_income,

      COALESCE(SUM(CASE 
        WHEN type = 'expense' 
        AND DATE_TRUNC('month', transaction_date) =
            DATE_TRUNC('month', CURRENT_DATE)
        THEN amount
        ELSE 0
      END), 0) AS monthly_expense,

      COALESCE(SUM(CASE 
        WHEN type = 'income' THEN amount
        WHEN type = 'expense' THEN -amount
        ELSE 0
      END), 0) AS balance

    FROM transactions
    WHERE user_id = $1
  `, [user_id])

  return result.rows[0]
}
export async function getCashFlow(user_id){
  const result=await pool.query(`
    SELECT
    TO_CHAR(transaction_date, 'Mon') AS month,

    COALESCE(
        SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END),
        0
    ) AS income,

    COALESCE(
        SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END),
        0
    ) AS expenses

FROM transactions

WHERE user_id = $1

GROUP BY
    EXTRACT(YEAR FROM transaction_date),
    EXTRACT(MONTH FROM transaction_date),
    TO_CHAR(transaction_date, 'Mon')

ORDER BY
    EXTRACT(YEAR FROM transaction_date),
    EXTRACT(MONTH FROM transaction_date);
    
    `,[user_id])
  return result.rows  

}