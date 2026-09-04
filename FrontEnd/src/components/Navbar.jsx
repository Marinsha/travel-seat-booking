import { Bus, Ticket, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-emerald-500/20">
            <Bus className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <span className="text-xl font-bold text-white tracking-tight">Seat<span className="text-emerald-400">Flow</span></span>
            <span className="hidden sm:inline-block ml-2 text-[10px] bg-emerald-500/10 text-emerald-400 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/20">Live Sync</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition px-3 py-1.5 rounded-lg hover:bg-slate-800">
            <Ticket className="w-4 h-4 text-emerald-400" />
            <span>My Bookings</span>
          </button>
          <button className="flex items-center gap-2 text-sm bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-4 py-2 rounded-lg transition shadow-sm">
            <User className="w-4 h-4" />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
}