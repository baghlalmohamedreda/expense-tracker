import React from 'react'
import StateGrid from '../../_components/StateGrid'
import DashboardHeader from '../../_components/DashboardHeader'
import RecentTransactions from '../../_components/RecentTransactions'
import ExpenseCategory from '../../_components/ExpenseCategory'
import CashFlowChart from '../../_components/CashFlowChart'
function Dashboard() {
  return (
   <div className="p-8 bg-slate-50 min-h-screen">
      <DashboardHeader />
      <StateGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <CashFlowChart />
        <ExpenseCategory />
      </div>

      <RecentTransactions />
    </div>
    
  ) 
}

export default Dashboard