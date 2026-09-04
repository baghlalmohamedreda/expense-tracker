

export default function TransactionsFilter({search,setSearch,setSelectCategory,setSelectType}) {
  return (
    <div className="flex items-center justify-between gap-6">

      <input
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
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
  onChange={(e) => setSelectType(e.target.value)}
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
  <option value="all">all</option>
  <option value="expense">Expense</option>
  <option value="income">Income</option>
</select>

<select
  onChange={(e) => setSelectCategory(e.target.value)}
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
  <option value="all">all</option>
  <option value="food">Food</option>
  <option value="transport">Transport</option>
  <option value="shopping">Shopping</option>
  <option value="entertainment">Entertainment</option>
</select>
      </div>

    </div>
  )
}
