import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

export default function App() {
  const handleSearch = (searchData) => {
    console.log('User searched for:', searchData);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-10">
        {/* Hero title */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Fast & Real-Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Seat Reservation</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Select seats in real time with instant lock protection. Zero double-booking, guaranteed.
          </p>
        </div>

        {/* Search Box */}
        <SearchBar onSearch={handleSearch} />
      </main>
    </div>
  );
}