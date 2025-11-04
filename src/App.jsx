import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import FiltersBar from './components/FiltersBar.jsx';
import JobList from './components/JobList.jsx';

function App() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ rank: '', vesselType: '', contract: '', location: '' });

  const jobs = useMemo(
    () => [
      {
        id: 1,
        title: 'Chief Officer',
        company: 'BlueWave Shipping',
        vesselType: 'Container',
        location: 'Worldwide rotation',
        contract: '4-6 months',
        salary: '€8,500 - €9,500',
      },
      {
        id: 2,
        title: 'Second Engineer',
        company: 'Northern Marine',
        vesselType: 'Tanker',
        location: 'EU Ports',
        contract: '4-6 months',
        salary: 'USD 7,000 - 8,000',
      },
      {
        id: 3,
        title: 'AB Seaman',
        company: 'OceanCrew',
        vesselType: 'Bulk Carrier',
        location: 'Asia',
        contract: '6 months',
        salary: 'USD 1,800 - 2,100',
      },
      {
        id: 4,
        title: 'ETO (Electro-Technical Officer)',
        company: 'Arctic Lines',
        vesselType: 'LNG',
        location: 'Worldwide',
        contract: '2-3 months',
        salary: '€6,500 - €7,200',
      },
      {
        id: 5,
        title: 'Cook',
        company: 'CruiseX',
        vesselType: 'Cruise',
        location: 'Mediterranean',
        contract: '6 months',
        salary: 'USD 2,500 - 3,000',
      },
    ],
    []
  );

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((job) => {
      const qMatch = !q || [job.title, job.company, job.vesselType, job.location].some((f) =>
        (f || '').toLowerCase().includes(q)
      );
      const rankMatch = !filters.rank || job.title.toLowerCase().includes(filters.rank.toLowerCase());
      const vesselMatch = !filters.vesselType || job.vesselType === filters.vesselType;
      const contractMatch = !filters.contract || (job.contract && job.contract.toLowerCase().includes(filters.contract.toLowerCase()));
      const locationMatch = !filters.location || (job.location && job.location.toLowerCase().includes(filters.location.toLowerCase()));
      return qMatch && rankMatch && vesselMatch && contractMatch && locationMatch;
    });
  }, [jobs, query, filters]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSubmit={() => {}}
        stats={{ vacancies: 1243, companies: 312, seafarers: '50k+' }}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-3">
            <FiltersBar filters={filters} setFilters={setFilters} />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900">Вакансии</h2>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div>Найдено: <span className="font-medium text-slate-800">{filteredJobs.length}</span></div>
                <select className="rounded-md border border-slate-300 px-2 py-1 text-sm bg-white">
                  <option>Сначала новые</option>
                  <option>По зарплате</option>
                </select>
              </div>
            </div>
            <JobList jobs={filteredJobs} />
          </div>
        </div>
      </main>

      <footer id="about" className="mt-6 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7 text-sm text-slate-600">
          <p className="font-medium text-slate-800">Maritime Jobs — поиск работы для моряков</p>
          <p className="mt-1">Вакансии от проверенных компаний. Офицерский и рядовой состав, офшор, круизы и др.</p>
          <p id="contact" className="mt-3">Связаться: hello@maritime-jobs.example</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
