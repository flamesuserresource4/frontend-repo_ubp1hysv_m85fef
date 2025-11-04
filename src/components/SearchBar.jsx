import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

export default function SearchBar({ onSearch, activeTab, setActiveTab, stats }) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({ query, location });
  }

  return (
    <section className="border-b border-neutral-200 bg-gradient-to-b from-blue-50/60 to-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => setActiveTab('vacancies')}
            className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium border ${
              activeTab === 'vacancies'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            Vacancies
          </button>
          <button
            onClick={() => setActiveTab('companies')}
            className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium border ${
              activeTab === 'companies'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
            }`}
          >
            Companies
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_auto] gap-3">
          <label className="flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm">
            <Search className="h-4 w-4 text-neutral-500" />
            <input
              className="w-full bg-transparent outline-none placeholder:text-neutral-400"
              placeholder={activeTab === 'vacancies' ? 'Search positions, vessel type, company...' : 'Search companies...'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>

          <label className="flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm">
            <MapPin className="h-4 w-4 text-neutral-500" />
            <input
              className="w-full bg-transparent outline-none placeholder:text-neutral-400"
              placeholder="Any location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>

          <button type="submit" className="h-10 rounded-md bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700">
            Search
          </button>
        </form>

        {stats && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {stats.map((s) => (
              <div key={s.label} className="rounded-md border border-neutral-200 bg-white px-3 py-2">
                <div className="text-xs text-neutral-500">{s.label}</div>
                <div className="text-sm font-semibold text-neutral-800">{s.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
