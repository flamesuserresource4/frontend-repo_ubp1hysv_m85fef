import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FiltersBar from './components/FiltersBar';
import JobList from './components/JobList';

const SAMPLE_JOBS = [
  {
    id: 1,
    title: 'Chief Officer on Bulk Carrier',
    company: 'Oceanic Marine Ltd',
    vesselType: 'Bulk Carrier',
    location: 'Worldwide',
    posted: '2 days ago',
    salary: '7 500 - 8 500 USD',
  },
  {
    id: 2,
    title: '2nd Engineer for Container Vessel',
    company: 'BlueWave Shipping',
    vesselType: 'Container',
    location: 'EU Ports',
    posted: '1 day ago',
    salary: '6 000 - 7 000 USD',
  },
  {
    id: 3,
    title: 'Master for Oil Tanker',
    company: 'NorthSea Crewing',
    vesselType: 'Tanker',
    location: 'Middle East',
    posted: '5 hours ago',
    salary: '10 000 - 12 000 USD',
  },
  {
    id: 4,
    title: 'AB for Offshore Support',
    company: 'Sealine Services',
    vesselType: 'Offshore',
    location: 'North Sea',
    posted: '3 days ago',
    salary: '2 500 - 3 200 USD',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('vacancies');
  const [filters, setFilters] = useState({});
  const [query, setQuery] = useState({ query: '', location: '' });
  const [sort, setSort] = useState('newest');

  const stats = [
    { label: 'Open vacancies', value: '1,284' },
    { label: 'Verified companies', value: '312' },
    { label: 'New today', value: '46' },
    { label: 'Seafarers CVs', value: '8,903' },
  ];

  const filtered = useMemo(() => {
    let list = [...SAMPLE_JOBS];

    if (filters.rank) {
      const r = filters.rank.toLowerCase();
      list = list.filter((j) => j.title.toLowerCase().includes(r));
    }
    if (filters.vessel) {
      list = list.filter((j) => j.vesselType === filters.vessel);
    }
    if (query.query) {
      const q = query.query.toLowerCase();
      list = list.filter(
        (j) => j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q)
      );
    }
    if (query.location) {
      const ql = query.location.toLowerCase();
      list = list.filter((j) => j.location.toLowerCase().includes(ql));
    }

    if (sort === 'salary') {
      // naive parse by first number
      list.sort((a, b) => {
        const an = parseInt(a.salary.replace(/[^0-9]/g, '')) || 0;
        const bn = parseInt(b.salary.replace(/[^0-9]/g, '')) || 0;
        return bn - an;
      });
    }
    return list;
  }, [filters, query, sort]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />

      <SearchBar
        onSearch={(q) => setQuery(q)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        stats={stats}
      />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-neutral-600">
            Showing <span className="font-semibold text-neutral-800">{filtered.length}</span> results
          </p>
          <label className="inline-flex items-center gap-2 text-sm">
            <span className="text-neutral-600">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-md border border-neutral-300 bg-white px-2 py-1.5 text-sm"
            >
              <option value="newest">Newest</option>
              <option value="salary">Highest salary</option>
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-6">
          <FiltersBar onChange={(f) => setFilters(f)} />

          <section>
            {activeTab === 'vacancies' ? (
              <JobList items={filtered} />
            ) : (
              <div className="rounded-md border border-neutral-200 bg-white p-8 text-center text-sm text-neutral-600">
                Companies directory is coming soon.
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} SeaJobs. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
