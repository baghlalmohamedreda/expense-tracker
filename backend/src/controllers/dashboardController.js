import { getTransactionByUser } from "../services/transactionService.js";

export async function getUserTransaction(req,res){
    try{
        const user_id=req.userId
        const transaction=await getTransactionByUser(user_id)
        res.json(transaction)

    }catch(err){
        console.error(err.message)
         res.status(500).json({
            message: "Server error"
        });
    }
}