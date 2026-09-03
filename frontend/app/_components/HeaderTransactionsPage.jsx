import { Plus } from "lucide-react"

function HeaderTransactionsPage() {
  return (
    <div className="flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Transactions
        </h1>

        <p className="mt-1 text-slate-500">
          Manage your income and expenses
        </p>
      </div>

      <button
        className="
          flex items-center gap-2
          rounded-xl
          bg-slate-900
          px-5 py-3
          text-sm font-medium
          text-white
          transition
          hover:bg-slate-800
        "
      >
        <Plus size={18} />
        Add Transaction
      </button>

    </div>
  )
}

export default HeaderTransactionsPage