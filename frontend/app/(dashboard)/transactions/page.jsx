"use client"
import React from 'react'
import HeaderTransactionsPage from '../../_components/HeaderTransactionsPage'
import TransactionsFilter from '../../_components/TransactionsFilter'
import TransactionTable from '../../_components/TransactionTable'
import { useState } from 'react'
function Transactions() {
  const [search,setSearch]=useState("")
  const [selectCategory,setSelectCategory]=useState("all")
  const [selectType,setSelectType]=useState("all")

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
                            selectCategory={selectCategory}
                            selectType={selectType}
           />
        </div>

      </div>

    </main>
  )
}

export default Transactions