
export default function RecentTransactions() {
  const transactions = [
    { id: 1, title: "Whole Foods", category: "Groceries", date: "Oct 28, 2026", amount: "-$150.50", type: "expense" },
    { id: 2, title: "Monthly Salary", category: "Income", date: "Oct 27, 2026", amount: "+$4,200.00", type: "income" },
    { id: 3, title: "Netflix Subscription", category: "Entertainment", date: "Oct 25, 2026", amount: "-$15.99", type: "expense" },
    { id: 4, title: "Electric Bill", category: "Utilities", date: "Oct 24, 2026", amount: "-$85.20", type: "expense" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-900">Recent Transactions</h3>
        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 text-xs uppercase tracking-wider">
              <th className="pb-3 font-semibold">Description</th>
              <th className="pb-3 font-semibold">Category</th>
              <th className="pb-3 font-semibold">Date</th>
              <th className="pb-3 font-semibold text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 font-medium text-slate-900">{tx.title}</td>
                <td className="py-4 text-slate-500">
                  <span className="px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">
                    {tx.category}
                  </span>
                </td>
                <td className="py-4 text-slate-500">{tx.date}</td>
                <td className={`py-4 font-semibold text-right ${tx.type === 'income' ? 'text-emerald-600' : 'text-slate-900'}`}>
                  {tx.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
