"use client";
import { useEffect,useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function ExpenseCategory() {
  const [data,setData]=useState([])
  useEffect(()=>{
    async function getCategory() {
      const token=localStorage.getItem("token")
      const response=await fetch("http://localhost:5000/api/transactions/category",{
        method:"GET",
        headers:{
          "Authorization": `Bearer ${token}`
        }
      })
      const  donnes=await response.json()
      if(response.ok){
        const Texpense=donnes.reduce((sum,category)=>{
          return sum+Number(category.total)
        },0)
        const newData=donnes.map((category)=>{
          let percentage
          if(Texpense>0){
            percentage=(Number(category.total)/Texpense)*100
          }
          else{
            percentage=0
          }
          return {
            ...category,
            percentage:percentage
          }
        })
        setData(newData)
      }
    
    }
   getCategory()


  },[])
    const COLORS = [
  "#6366f1",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
  "#8b5cf6"
]



  return (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:col-span-1 flex flex-col justify-between">

    <h3 className="text-lg font-bold text-slate-900 mb-4">
      Expenses by Category
    </h3>

    <div className="w-full h-48 flex items-center justify-center my-2">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={75}
            paddingAngle={4}
            dataKey="percentage"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>

    <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100">

      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-slate-50 p-2 rounded-xl"
        >

          <div className="flex items-center space-x-2 truncate mr-2">

            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{
                backgroundColor: COLORS[index % COLORS.length]
              }}
            />

            <span
              className="text-xs font-medium text-slate-700 truncate"
              title={item.name}
            >
              {item.name}
            </span>

          </div>

          <span className="text-xs font-bold text-slate-900 bg-white px-2 py-0.5 rounded-md shadow-2xs">
            {Math.round(item.percentage)}%
          </span>

        </div>
      ))}

    </div>
  </div>
)
}