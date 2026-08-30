import { getTransactionByUser,createTransaction } from "../services/transactionService.js";

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
export async function setNewTransaction(req,res){
    try{
        const userId=req.userId
        const {category_id, title, amount, type, description, transaction_date}=req.body
        const transaction={userId,category_id, title, amount, type, description, transaction_date}
        const newTransaction=await createTransaction(transaction)
        if(newTransaction){
           return res.status(201).json({
               message:"insertion succes",
               transaction:newTransaction
         })
      }
        

    }catch(error){
        console.error(message.error)
        return res.status(500).json({message:"erreur leur de la creation de transaction"})

    }
    

}