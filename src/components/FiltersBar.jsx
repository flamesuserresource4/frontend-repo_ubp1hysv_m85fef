import { useMemo } from 'react';

const ranks = [
  'Master', 'Chief Officer', 'Second Officer', 'Third Officer',
  'Chief Engineer', 'Second Engineer', 'ETO', 'AB', 'OS', 'Cook',
];

const vesselTypes = [
  'Container', 'Bulk Carrier', 'Tanker', 'Offshore', 'Cruise', 'Ro-Ro', 'LNG', 'General Cargo',
];

export default function FiltersBar({ filters, setFilters }) {
  const onChange = (key) => (e) => setFilters((f) => ({ ...f, [key]: e.target.value }));

  const rankOptions = useMemo(() => ranks.map((r) => <option key={r} value={r}>{r}</option>), []);
  const vesselOptions = useMemo(() => vesselTypes.map((v) => <option key={v} value={v}>{v}</option>), []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8">
      <div className="rounded-xl border border-slate-200 bg-white shadow/5 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="grid gap-1">
            <label className="text-xs text-slate-500">Должность</label>
            <select value={filters.rank} onChange={onChange('rank')} className="rounded-lg border border-slate-300 px-3 py-2">
              <option value="">Любая</option>
              {rankOptions}
            </select>
          </div>

          <div className="grid gap-1">
            <label className="text-xs text-slate-500">Тип судна</label>
            <select value={filters.vesselType} onChange={onChange('vesselType')} className="rounded-lg border border-slate-300 px-3 py-2">
              <option value="">Любой</option>
              {vesselOptions}
            </select>
          </div>

          <div className="grid gap-1">
            <label className="text-xs text-slate-500">Срок контракта</label>
            <select value={filters.contract} onChange={onChange('contract')} className="rounded-lg border border-slate-300 px-3 py-2">
              <option value="">Любой</option>
              <option value="2-3 months">2-3 месяца</option>
              <option value="4-6 months">4-6 месяцев</option>
              <option value=">6 months">Более 6 месяцев</option>
            </select>
          </div>

          <div className="grid gap-1">
            <label className="text-xs text-slate-500">Локация/Ротация</label>
            <input
              type="text"
              value={filters.location}
              onChange={onChange('location')}
              placeholder="Напр. Worldwide, EU Ports"
              className="rounded-lg border border-slate-300 px-3 py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
