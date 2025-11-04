import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSearch from './components/HeroSearch.jsx';
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
        description:
          'Требуется старший помощник капитана с опытом на контейнеровозах 3000+ TEU. Обязателен опыт работы с ECDIS, хорошее знание английского.',
      },
      {
        id: 2,
        title: 'Second Engineer',
        company: 'Northern Marine',
        vesselType: 'Tanker',
        location: 'EU Ports',
        contract: '4-6 months',
        salary: 'USD 7,000 - 8,000',
        description:
          'Ищем 2-го механика на нефтяной танкер. Опыт работы с MAN B&W, знание систем очистки балласта, сертификаты актуальны.',
      },
      {
        id: 3,
        title: 'AB Seaman',
        company: 'OceanCrew',
        vesselType: 'Bulk Carrier',
        location: 'Asia',
        contract: '6 months',
        salary: 'USD 1,800 - 2,100',
        description:
          'Нужен матрос 1 класса. Обязанности: швартовка, вахта, обслуживание палубы. Опыт на балкерах приветствуется.',
      },
      {
        id: 4,
        title: 'ETO (Electro-Technical Officer)',
        company: 'Arctic Lines',
        vesselType: 'LNG',
        location: 'Worldwide',
        contract: '2-3 months',
        salary: '€6,500 - €7,200',
        description:
          'Электромеханик с опытом на газовозах LNG. Работа с системами автоматики, PLC, навигационным оборудованием.',
      },
      {
        id: 5,
        title: 'Cook',
        company: 'CruiseX',
        vesselType: 'Cruise',
        location: 'Mediterranean',
        contract: '6 months',
        salary: 'USD 2,500 - 3,000',
        description:
          'Повар в круизную компанию. Опыт работы на судах, знание санитарных норм, умение работать в команде.',
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <HeroSearch query={query} setQuery={setQuery} onSubmit={() => {}} />
      <FiltersBar filters={filters} setFilters={setFilters} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Найдено вакансий: {filteredJobs.length}</h2>
          <div className="text-sm text-slate-600">Обновлено: сегодня</div>
        </div>
      </div>

      <JobList jobs={filteredJobs} />

      <footer id="about" className="mt-12 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600">
          <p className="font-medium text-slate-800">SeaJobs — платформа поиска работы для моряков</p>
          <p className="mt-1">Надежные вакансии от проверенных компаний. Помогаем офицерам и рядовому составу находить лучшие контракты.</p>
          <p id="contact" className="mt-4">Связаться: hello@seajobs.example</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
