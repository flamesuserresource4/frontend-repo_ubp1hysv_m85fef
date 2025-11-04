import { Menu, User, Ship } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-neutral-800">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
              <Ship className="h-5 w-5" />
            </span>
            <span className="text-base tracking-tight">SeaJobs</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
            <a href="#" className="hover:text-neutral-900">Vacancies</a>
            <a href="#" className="hover:text-neutral-900">Companies</a>
            <a href="#" className="hover:text-neutral-900">Seafarers</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex h-9 items-center gap-2 rounded-md border border-neutral-200 px-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
              <User className="h-4 w-4" /> Sign in
            </button>
            <button className="inline-flex h-9 items-center rounded-md bg-blue-600 px-3 text-sm font-medium text-white hover:bg-blue-700">
              Post a job
            </button>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
