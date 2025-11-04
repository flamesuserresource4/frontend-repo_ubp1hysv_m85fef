import { Clock, DollarSign, MapPin, Ship } from 'lucide-react';

export default function JobList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((job) => (
        <article key={job.id} className="rounded-md border border-neutral-200 bg-white p-4 hover:shadow-sm transition-shadow">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
                <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-0.5 text-blue-700">
                  <Ship className="h-3.5 w-3.5" /> {job.vesselType}
                </span>
                <span className="truncate">{job.company}</span>
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 truncate">{job.title}</h3>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-600">
                <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.location}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {job.posted}</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium"><DollarSign className="h-3.5 w-3.5" /> {job.salary}</span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button className="h-9 rounded-md border border-neutral-200 px-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50">Save</button>
              <button className="h-9 rounded-md bg-blue-600 px-3 text-sm font-medium text-white hover:bg-blue-700">Apply</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
