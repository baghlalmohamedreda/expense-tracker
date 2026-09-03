import React from 'react'
import HeaderTransactionsPage from '../../_components/HeaderTransactionsPage'
import TransactionsFilter from '../../_components/TransactionsFilter'
import TransactionTable from '../../_components/TransactionTable'
function Transactions() {
  return (
    <main className="flex-1 bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <HeaderTransactionsPage />

        <div className="mt-6">
          <TransactionsFilter />
        </div>

        <div className="mt-6">
          <TransactionTable />
        </div>

      </div>

    </main>
  )
}

export default Transactions