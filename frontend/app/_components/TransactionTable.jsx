"use client"
import {useState,useEffect} from "react"
function TransactionTable({search,selectType,selectCategory,setIsedit,setTransactionid,transaction,setTransaction}) {
  const [searchtranasction,setSearchtransaction]=useState([])
  useEffect(()=>{
    async function getTransactions(){
        const token=localStorage.getItem("token")
        const response=await fetch("http://localhost:5000/api/transactions",{
        method:"GET",
        headers:{
          "Authorization": `Bearer ${token}`

        }
      }
      )
      if(response.ok){
        const data=await response.json()
        setTransaction(data)
        setSearchtransaction(data)
      }

    }
    getTransactions()

  },[])
 async function handleDeleteTransaction(id){
    const token=localStorage.getItem("token")
    const response=await fetch(`http://localhost:5000/api/transactions/${id}`,{
        method:"DELETE",
        headers:{
          "Authorization": `Bearer ${token}`
        }
      }
      )
      if(response.ok){
        const newData=transaction.filter((e)=>e.id!==id)
        setTransaction(newData)
      }

 } 
useEffect(()=>{
  function handleSearch(){
    let result=transaction
    if(search){
        result=result.filter((e)=>
      e.title.toLowerCase().includes(search.toLowerCase()))
   

    }
    if(selectCategory!=="all"){
     result=result.filter((e)=>e.category.toLowerCase()===selectCategory.toLowerCase())
      

    }
    if(selectType!=="all"){
      result=result.filter((e)=>e.type.toLowerCase()===selectType.toLowerCase())
      
    }
    setSearchtransaction(result)

  }
handleSearch()
},[search,transaction,selectCategory,selectType])
function handleEdit(id){
  setIsedit(true)
  setTransactionid(id)
}

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-100
        bg-white
        px-8 py-6
        shadow-sm
      "
    >

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-slate-100 text-sm text-slate-400">

              <th className="pb-4 font-medium">
                Title
              </th>

              <th className="pb-4 font-medium">
                Category
              </th>

              <th className="pb-4 font-medium">
                Type
              </th>

              <th className="pb-4 font-medium">
                Date
              </th>

              <th className="pb-4 font-medium">
                Amount
              </th>

              <th className="pb-4 text-right font-medium">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {searchtranasction.map((e) => (

              <tr
                key={e.id}
                className="border-b border-slate-100 last:border-none"
              >

                <td className="py-5 font-medium text-slate-900">
                  {e.title}
                </td>

                <td className="py-5 text-slate-600">
                  {e.category}
                </td>

                <td className="py-5">

                  <span
                    className={`
                      rounded-full
                      px-3 py-1
                      text-xs
                      font-medium

                      ${
                        e.type === "income"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-red-50 text-red-500"
                      }
                    `}
                  >
                    {e.type}
                  </span>

                </td>

                <td className="py-5 text-slate-500">
                  {e.date}
                </td>

                <td
                  className={`
                    py-5
                    font-semibold

                    ${
                      e.type === "income"
                        ? "text-emerald-600"
                        : "text-red-500"
                    }
                  `}
                >
                  {e.type === "income" ? "+" : "-"}
                  ${e.amount}
                </td>

                <td className="py-5">

                  <div className="flex justify-end gap-2">

                 <button
                 onClick={()=>handleEdit(e.id)}
  className="
    cursor-pointer
    rounded-lg
    border
    border-slate-300
    bg-white
    px-3
    py-2
    text-sm
    font-medium
    text-slate-700
    transition
    hover:bg-slate-100
  "
>
  Edit
</button>

                 <button
  className="
  
  cursor-pointer
  rounded-lg
    border
    border-red-200
    bg-red-50
    px-3
    py-2
    text-sm
    font-medium
    text-red-600
    transition
    hover:bg-red-100
    hover:border-red-300
  "
  onClick={()=>handleDeleteTransaction(e.id)}
>
  Delete
</button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default TransactionTable
