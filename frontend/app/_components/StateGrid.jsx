"use client"
import { useState,useEffect } from "react";

export default function StatsGrid() {
  const [stats,setStats]=useState({monthly_income:0,
    monthly_expense:0,
     balance:0
  })
 useEffect(() => {

  async function getStats() {

    try {

      const token = localStorage.getItem("token")

      const response = await fetch(
        "http://localhost:5000/api/transactions/grid",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      if (!response.ok) {
        const errorText = await response.text()
        console.log("Erreur backend :", errorText)
        return
      }

      const donnes = await response.json()

      setStats(donnes)

    } catch (e) {
      console.log(e)
    }
  }

  getStats()

}, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
    <p className="text-sm text-slate-500 font-medium">
      Total Balance
    </p>

    <h3 className="text-2xl font-bold mt-2 text-slate-900">
      ${Number(stats.balance).toFixed(2)}
    </h3>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
    <p className="text-sm text-slate-500 font-medium">
      Monthly Income
    </p>

    <h3 className="text-2xl font-bold mt-2 text-emerald-600">
      ${Number(stats.monthly_income).toFixed(2)}
    </h3>
  </div>

  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
    <p className="text-sm text-slate-500 font-medium">
      Monthly Expenses
    </p>

    <h3 className="text-2xl font-bold mt-2 text-red-500">
      ${Number(stats.monthly_expense).toFixed(2)}
    </h3>
  </div>

</div>
  );
}