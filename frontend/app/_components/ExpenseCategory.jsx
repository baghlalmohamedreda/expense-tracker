"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function ExpenseCategory() {
  const data = [
    { name: "Food", value: 40, color: "#10b981" },
    { name: "Housing", value: 30, color: "#3b82f6" },
    { name: "Utilities", value: 15, color: "#f97316" },
    { name: "Entertainment", value: 15, color: "#a855f7" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:col-span-1 flex flex-col justify-between">
      <h3 className="text-lg font-bold text-slate-900 mb-4">Expenses by Category</h3>

      {/* Graphique Donut centré */}
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
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Légende compacte en dessous pour ne pas dépasser du cadre */}
      <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-100">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-slate-50 p-2 rounded-xl">
            <div className="flex items-center space-x-2 truncate mr-2">
              <span 
                className="w-3 h-3 rounded-full flex-shrink-0" 
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-xs font-medium text-slate-700 truncate" title={item.name}>
                {item.name}
              </span>
            </div>
            <span className="text-xs font-bold text-slate-900 bg-white px-2 py-0.5 rounded-md shadow-2xs">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}