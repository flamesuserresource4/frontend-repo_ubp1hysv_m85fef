import { Search, Ship, MapPin } from 'lucide-react';

export default function HeroSearch({ query, setQuery, onSubmit }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-blue-200 px-3 py-1 text-xs text-blue-700 shadow-sm">
              <Ship size={14} /> Работа для моряков
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Найдите вашу следующую
              <span className="text-blue-600"> морскую вакансию</span>
            </h1>
            <p className="mt-3 text-slate-600 max-w-xl">
              Свежие вакансии от судоходных компаний: офицеры, рядовой состав, офшор, круизы и др.
              Умный поиск по должностям, типам судов и локациям.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
              className="mt-6"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Должность, компания, тип судна"
                    className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-700"
                >
                  Найти вакансии
                </button>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1"><MapPin size={16} className="text-blue-600"/> Популярно: Worldwide, EU Ports, Asia</span>
              </div>
            </form>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
