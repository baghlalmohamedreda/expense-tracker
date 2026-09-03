

export default function TransactionsFilter() {
  return (
    <div className="flex items-center justify-between gap-6">

      <input
        type="text"
        placeholder="Search transactions..."
        className="
          w-full
          max-w-md
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4 py-3
          text-sm
          text-slate-700
          shadow-sm
          outline-none
          transition
          placeholder:text-slate-400
          focus:border-slate-400
          focus:ring-2
          focus:ring-slate-100
        "
      />

      <div className="flex items-center gap-4">

        <select
          className="
            min-w-37.5
            cursor-pointer
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4 py-3
            text-sm
            text-slate-700
            shadow-sm
            outline-none
            transition
            hover:border-slate-300
            focus:border-slate-400
            focus:ring-2
            focus:ring-slate-100
          "
        >
          <option>All Types</option>
          <option>Expense</option>
          <option>Income</option>
        </select>

        <select
          className="
            min-w-42.5
            cursor-pointer
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4 py-3
            text-sm
            text-slate-700
            shadow-sm
            outline-none
            transition
            hover:border-slate-300
            focus:border-slate-400
            focus:ring-2
            focus:ring-slate-100
          "
        >
          <option>All Categories</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Entertainment</option>
        </select>

      </div>

    </div>
  )
}
