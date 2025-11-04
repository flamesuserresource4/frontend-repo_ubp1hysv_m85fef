import { Clock, DollarSign, MapPin, Ship } from 'lucide-react';

export default function JobList({ jobs }) {
  if (!jobs.length) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-500 bg-white">Вакансии не найдены.</div>
    );
  }

  return (
    <div className="grid gap-2">
      {jobs.map((job) => (
        <article key={job.id} className="rounded-md border border-slate-200 bg-white p-4 hover:shadow-sm transition">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                <Ship size={18} />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-slate-900">{job.title}</h3>
                <div className="text-sm text-slate-600">
                  <span className="font-medium text-slate-700">{job.company}</span>
                  <span className="mx-2 text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">{job.vesselType}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1"><MapPin size={14} className="text-blue-600"/> {job.location}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={14} className="text-blue-600"/> {job.contract}</span>
                  {job.salary && (
                    <span className="inline-flex items-center gap-1 font-medium text-emerald-700"><DollarSign size={14} className="text-emerald-600"/> {job.salary}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="rounded-md border border-slate-300 px-3 py-2 text-xs hover:bg-slate-50">Сохранить</button>
              <button className="rounded-md bg-blue-600 px-3 py-2 text-xs text-white hover:bg-blue-700">Откликнуться</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
