import { Menu } from 'lucide-react';

function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-6xl px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-purple-600"></div>
          <span className="font-semibold text-slate-900">PurpleShip</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#about" className="hover:text-purple-700">Company</a>
          <a href="#features" className="hover:text-purple-700">Features</a>
          <a href="#connect" className="hover:text-purple-700">Connect</a>
          <a href="#register" className="hover:text-purple-700">Register</a>
        </nav>
        <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700">
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}

export default SiteHeader;
