export default function FiltersBar({ filters, setFilters }) {
  const onChange = (key) => (e) => setFilters((f) => ({ ...f, [key]: e.target.value }));

  return (
    <aside className="lg:sticky lg:top-20">
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-4">
        <h3 className="text-sm font-semibold text-slate-900 mb-3">Фильтры</h3>

        <div className="grid gap-4">
          <div className="grid gap-1">
            <label className="text-xs text-slate-500">Должность</label>
            <input
              type="text"
              value={filters.rank}
              onChange={onChange('rank')}
              placeholder="Напр. Chief Officer"
              className="rounded-lg border border-slate-300 px-3 py-2"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-xs text-slate-500">Тип судна</label>
            <select value={filters.vesselType} onChange={onChange('vesselType')} className="rounded-lg border border-slate-300 px-3 py-2">
              <option value="">Любой</option>
              <option value="Container">Container</option>
              <option value="Bulk Carrier">Bulk Carrier</option>
              <option value="Tanker">Tanker</option>
              <option value="Offshore">Offshore</option>
              <option value="Cruise">Cruise</option>
              <option value="Ro-Ro">Ro-Ro</option>
              <option value="LNG">LNG</option>
              <option value="General Cargo">General Cargo</option>
            </select>
          </div>

          <div className="grid gap-1">
            <label className="text-xs text-slate-500">Срок контракта</label>
            <select value={filters.contract} onChange={onChange('contract')} className="rounded-lg border border-slate-300 px-3 py-2">
              <option value="">Любой</option>
              <option value="2-3 months">2-3 месяца</option>
              <option value="4-6 months">4-6 месяцев</option>
              <option value="6 months">Более 6 месяцев</option>
            </select>
          </div>

          <div className="grid gap-1">
            <label className="text-xs text-slate-500">Локация/Ротация</label>
            <input
              type="text"
              value={filters.location}
              onChange={onChange('location')}
              placeholder="Worldwide, EU Ports"
              className="rounded-lg border border-slate-300 px-3 py-2"
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setFilters({ rank: '', vesselType: '', contract: '', location: '' })}
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50"
          >
            Сбросить
          </button>
          <button className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">Применить</button>
        </div>
      </div>
    </aside>
  );
}
