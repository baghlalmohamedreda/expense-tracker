"use client"

import React, { useEffect, useState } from "react"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function CashFlowChart() {

  const [data, setData] = useState([])

  useEffect(() => {

    async function getFlowChart() {

      try {

        const token = localStorage.getItem("token")

        const response = await fetch(
          "http://localhost:5000/api/transactions/cash",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        if (response.ok) {

          const donnes = await response.json()

          const formattedData = donnes.map(item => ({
            month: item.month,
            income: Number(item.income),
            expenses: Number(item.expenses)
          }))
c
          setData(formattedData)

        } else {
          console.log("Erreur lors de la récupération du cash flow")
        }

      } catch (e) {
        console.log(e.message)
      }

    }

    getFlowChart()

  }, [])


  return (

    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:col-span-2 flex flex-col justify-between">

      <div className="flex justify-between items-center mb-6">

        <h3 className="text-lg font-bold text-slate-900">
          Cash Flow Trend
        </h3>

        <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-lg">
          Last 6 Months
        </span>

      </div>


      <div className="w-full h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0
            }}
          >

            <defs>

              <linearGradient
                id="colorIncome"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#10b981"
                  stopOpacity={0.3}
                />

                <stop
                  offset="95%"
                  stopColor="#10b981"
                  stopOpacity={0}
                />

              </linearGradient>


              <linearGradient
                id="colorExpenses"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#ef4444"
                  stopOpacity={0.3}
                />

                <stop
                  offset="95%"
                  stopColor="#ef4444"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>


            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />


            <XAxis
              dataKey="month"
              stroke="#94a3b8"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />


            <YAxis
              stroke="#94a3b8"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />


            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
              }}
            />


            <Area
              type="monotone"
              dataKey="income"
              name="Income"
              stroke="#10b981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorIncome)"
            />


            <Area
              type="monotone"
              dataKey="expenses"
              name="Expenses"
              stroke="#ef4444"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}