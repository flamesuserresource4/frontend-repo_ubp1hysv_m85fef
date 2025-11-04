import { useState } from 'react';

export default function FiltersBar({ onChange }) {
  const [rank, setRank] = useState('');
  const [vessel, setVessel] = useState('');
  const [contract, setContract] = useState('');

  function handleChange(next) {
    onChange?.(next);
  }

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-16 rounded-md border border-neutral-200 bg-white p-4">
        <h3 className="mb-3 text-sm font-semibold text-neutral-800">Filters</h3>

        <div className="space-y-4 text-sm">
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Rank</label>
            <select
              value={rank}
              onChange={(e) => { setRank(e.target.value); handleChange({ rank: e.target.value, vessel, contract }); }}
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2"
            >
              <option value="">Any</option>
              <option>Master</option>
              <option>Chief Officer</option>
              <option>2nd Officer</option>
              <option>3rd Officer</option>
              <option>Chief Engineer</option>
              <option>2nd Engineer</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-neutral-500 mb-1">Vessel type</label>
            <select
              value={vessel}
              onChange={(e) => { setVessel(e.target.value); handleChange({ rank, vessel: e.target.value, contract }); }}
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2"
            >
              <option value="">Any</option>
              <option>Bulk Carrier</option>
              <option>Container</option>
              <option>Tanker</option>
              <option>Offshore</option>
              <option>Passenger</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-neutral-500 mb-1">Contract</label>
            <select
              value={contract}
              onChange={(e) => { setContract(e.target.value); handleChange({ rank, vessel, contract: e.target.value }); }}
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2"
            >
              <option value="">Any</option>
              <option>2-3 months</option>
              <option>4-6 months</option>
              <option>Permanent</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
