import {CalendarFold} from 'lucide-react'

function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">
          Welcome back! here your financial overview.
        </p>
      </div>

      <div className="mt-4 md:mt-0 flex items-center bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm cursor-pointer hover:bg-slate-50">
        <span className="mr-2"><CalendarFold/></span>
        <span className="text-sm font-medium text-slate-700">Aug 20 - Aug 26, 2024</span>
        <span className="ml-2 text-slate-400 text-xs">▼</span>
      </div>
    </div>
  );
}
export default DashboardHeader