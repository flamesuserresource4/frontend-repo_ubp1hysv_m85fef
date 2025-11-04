import { useState } from 'react';
import { Anchor, Menu, Ship, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white">
              <Ship size={20} />
            </div>
            <span className="text-lg font-semibold tracking-tight">Maritime Jobs</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#jobs" className="hover:text-blue-600">Вакансии</a>
            <a href="#companies" className="hover:text-blue-600">Компании</a>
            <a href="#about" className="hover:text-blue-600">О сервисе</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">
              <User size={16} /> Войти
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">
              <Anchor size={16} /> Разместить вакансию
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <a href="#jobs" className="rounded-md px-3 py-2 hover:bg-slate-100">Вакансии</a>
              <a href="#companies" className="rounded-md px-3 py-2 hover:bg-slate-100">Компании</a>
              <a href="#about" className="rounded-md px-3 py-2 hover:bg-slate-100">О сервисе</a>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">Войти</button>
                <button className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">Разместить</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
