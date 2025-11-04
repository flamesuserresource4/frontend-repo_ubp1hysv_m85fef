import { Search } from 'lucide-react';

export default function SearchBar({ query, setQuery, onSubmit, stats }) {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="flex-1"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Найти вакансию: должность, компания, тип судна"
                className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>

          <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-600">
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <div className="font-semibold text-slate-900">{stats.vacancies}</div>
              <div>вакансий</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <div className="font-semibold text-slate-900">{stats.companies}</div>
              <div>компаний</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <div className="font-semibold text-slate-900">{stats.seafarers}</div>
              <div>моряков</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
