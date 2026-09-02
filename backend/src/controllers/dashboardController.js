import { getTransactionByUser,createTransaction,updateTransactions ,deleteTransactions,getExpenseByCategory,getStateGrid} from "../services/transactionService.js";

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
export async function addNewTransaction(req,res){
    try{
        const user_id=req.userId
        const {category_id, title, amount, type, description, transaction_date}=req.body
        const transaction={user_id,category_id, title, amount, type, description, transaction_date}
        const newTransaction=await createTransaction(transaction)
        if(newTransaction){
           return res.status(201).json({
               message:"insertion succes",
               transaction:newTransaction
         })
      }
        
    }catch(error){
        console.error(error)
        return res.status(500).json({message:"erreur leur de la creation de transaction"})
    }
    

}
export async function updateTransaction(req,res){
    try{
         const userId=req.userId
         const transactionId=req.params.id
         const {category_id,title, amount, type, description, transaction_date}=req.body
         const transaction={userId,transactionId,category_id,title, amount, type, description, transaction_date}
         const upT=await updateTransactions(transaction)
         if(upT){
            return res.status(200).json({
                message:"update succes",
                transaction:upT
            })
         }
          if (!upT) {
      return res.status(404).json({
        message: "Transaction introuvable"
      })
    }

    }catch(error){
        res.status(500).json({message:error.message})
    }
   
}
export async function deleteTransaction (req,res){
    try{
         const userId=req.userId
         const transactionId=req.params.id
         const deletedTransaction=await deleteTransactions(userId,transactionId)
         if(deletedTransaction){
            return res.status(200).json({message:"delele success"})

          }
          if(!deletedTransaction){
            return res.status(404).json({message:"on a pas trouve ce transaction"})
          }

    }catch(error){
        return res.status(500).json({message:error.message})
    }
   
}
export async function getCategory(req,res) {
    try{
         const user_id=req.userId
         const categories=await getExpenseByCategory(user_id)
         return res.status(200).json(categories)
          
    }catch(error){
        res.status(500).json({message:error.message})
    }
   
}
export async function getGrid(req, res) {

  try {

    const user_id = req.userId

    const grid = await getStateGrid(user_id)

    return res.status(200).json(grid)

  } catch (error) {

    console.log("ERREUR GET GRID :", error)

    return res.status(500).json({
      message: "Erreur serveur"
    })
  }
}
