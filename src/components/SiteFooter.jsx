function SiteFooter() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} PurpleShip. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-purple-700">Features</a>
          <a href="#connect" className="hover:text-purple-700">Connect</a>
          <a href="#register" className="hover:text-purple-700">Register</a>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
