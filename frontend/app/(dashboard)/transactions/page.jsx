"use client"
import React from 'react'
import HeaderTransactionsPage from '../../_components/HeaderTransactionsPage'
import TransactionsFilter from '../../_components/TransactionsFilter'
import TransactionTable from '../../_components/TransactionTable'
import EditTransactionForm from '../../_components/EditTransactionForm'
import { useState } from 'react'
function Transactions() {
  const [search,setSearch]=useState("")
  const [selectCategory,setSelectCategory]=useState("all")
  const [selectType,setSelectType]=useState("all")
  const [transactionid,setTransactionid]=useState()
  const [iseddit,setIsedit]=useState(false)
  const [transaction,setTransaction]=useState([])


  return (
    <main className="flex-1 bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <HeaderTransactionsPage />

        <div className="mt-6">
          <TransactionsFilter setSearch={setSearch}
                              setSelectCategory={setSelectCategory}
                              setSelectType={setSelectType}
                              search={search}
           />
        </div>

        <div className="mt-6">
          <TransactionTable search={search}
                            transaction={transaction}
                            setTransaction={setTransaction}
                            selectCategory={selectCategory}
                            selectType={selectType}
                            setIsedit={setIsedit}
                            setTransactionid={setTransactionid}
           />
        </div>
       {iseddit && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">

    <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">

      <EditTransactionForm
        transaction={transaction}
        transactionid={transactionid}
        setIsedit={setIsedit}
      />

    </div>

  </div>
)}
      </div>

    </main>
  )
}

export default Transactions