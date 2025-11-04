import { useState } from 'react';
import { Anchor, Menu, Ship, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white">
              <Ship size={18} />
            </div>
            <span className="text-[15px] font-semibold tracking-tight">Maritime Jobs</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-[15px] text-slate-700">
            <a href="#jobs" className="hover:text-blue-600">Вакансии</a>
            <a href="#companies" className="hover:text-blue-600">Компании</a>
            <a href="#about" className="hover:text-blue-600">О сервисе</a>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50">
              <User size={16} /> Войти
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700">
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
          <div className="md:hidden pb-3">
            <div className="grid gap-1">
              <a href="#jobs" className="rounded-md px-3 py-2 hover:bg-slate-100">Вакансии</a>
              <a href="#companies" className="rounded-md px-3 py-2 hover:bg-slate-100">Компании</a>
              <a href="#about" className="rounded-md px-3 py-2 hover:bg-slate-100">О сервисе</a>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50">Войти</button>
                <button className="flex-1 rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">Разместить</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
