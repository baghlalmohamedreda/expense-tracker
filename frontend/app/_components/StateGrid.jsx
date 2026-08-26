export default function StatsGrid() {
  const stats = [
    { title: "Total Balance", amount: "$12,450.80", textColor: "text-slate-900" },
    { title: "Monthly Income", amount: "$4,200.00", textColor: "text-emerald-600" },
    { title: "Monthly Expenses", amount: "$1,850.40", textColor: "text-rose-600" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 font-medium">{stat.title}</p>
          <h3 className={`text-2xl font-bold mt-2 ${stat.textColor}`}>{stat.amount}</h3>
        </div>
      ))}
    </div>
  );
}