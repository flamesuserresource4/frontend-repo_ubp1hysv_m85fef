import { Clock, DollarSign, MapPin, Ship } from 'lucide-react';

export default function JobList({ jobs }) {
  if (!jobs.length) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500 bg-white">Вакансии не найдены.</div>
    );
  }

  return (
    <div className="grid gap-3">
      {jobs.map((job) => (
        <article key={job.id} className="rounded-lg border border-slate-200 bg-white p-4 hover:shadow-sm transition">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Ship size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">{job.title}</h3>
                <div className="text-sm text-slate-600">
                  <span className="font-medium text-slate-700">{job.company}</span> · {job.vesselType}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1"><MapPin size={14} className="text-blue-600"/> {job.location}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={14} className="text-blue-600"/> {job.contract}</span>
                  {job.salary && (
                    <span className="inline-flex items-center gap-1"><DollarSign size={14} className="text-blue-600"/> {job.salary}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="rounded-lg border border-slate-300 px-3 py-2 text-xs hover:bg-slate-50">Сохранить</button>
              <button className="rounded-lg bg-blue-600 px-3 py-2 text-xs text-white hover:bg-blue-700">Откликнуться</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
