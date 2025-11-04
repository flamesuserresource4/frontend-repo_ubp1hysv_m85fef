import { Clock, DollarSign, MapPin, Ship } from 'lucide-react';

export default function JobList({ jobs }) {
  if (!jobs.length) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          Вакансии не найдены. Измените параметры поиска.
        </div>
      </div>
    );
  }

  return (
    <section id="jobs" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4">
        {jobs.map((job) => (
          <article key={job.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Ship size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                  <div className="text-slate-600">
                    <span className="font-medium text-slate-700">{job.company}</span> · {job.vesselType}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1"><MapPin size={16} className="text-blue-600"/> {job.location}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={16} className="text-blue-600"/> {job.contract}</span>
                    {job.salary && (
                      <span className="inline-flex items-center gap-1"><DollarSign size={16} className="text-blue-600"/> {job.salary}</span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-slate-600 max-w-2xl">{job.description}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50">Сохранить</button>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">Откликнуться</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
