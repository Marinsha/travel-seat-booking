import { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRightLeft, Search } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [from, setFrom] = useState('Jaffna');
  const [to, setTo] = useState('Colombo');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [passengers, setPassengers] = useState(1);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ from, to, date, passengers });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-900/90 backdrop-blur-md border border-slate-800 p-4 sm:p-6 rounded-2xl shadow-xl">
      <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* From City */}
        <div className="md:col-span-3 bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center gap-3">
          <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="flex-1">
            <label className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">Leaving From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="e.g. Jaffna"
              className="w-full bg-transparent text-white font-medium text-sm focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="hidden md:flex md:col-span-1 justify-center">
          <button
            type="button"
            onClick={handleSwap}
            className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 hover:border-emerald-500/50 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition"
          >
            <ArrowRightLeft className="w-4 h-4" />
          </button>
        </div>

        {/* To City */}
        <div className="md:col-span-3 bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center gap-3">
          <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
          <div className="flex-1">
            <label className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">Going To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="e.g. Colombo"
              className="w-full bg-transparent text-white font-medium text-sm focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Date */}
        <div className="md:col-span-3 bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 flex items-center gap-3">
          <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="flex-1">
            <label className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">Date of Journey</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-white font-medium text-sm focus:outline-none [color-scheme:dark]"
              required
            />
          </div>
        </div>

        {/* Search CTA */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full h-[52px] bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition cursor-pointer"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}