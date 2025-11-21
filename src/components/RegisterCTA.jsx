function RegisterCTA() {
  return (
    <section id="register" className="bg-gradient-to-b from-white to-purple-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="rounded-3xl border border-purple-200 bg-white p-8 md:p-12 shadow-sm">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Register and collaborate</h2>
              <p className="mt-3 text-slate-600">Create your partner account to access integrations, supplier catalog, and onboarding resources. Collaboration options are flexible — from fully-managed to API-only.</p>
              <ul className="mt-6 space-y-2 text-slate-700 text-sm list-disc list-inside">
                <li>Fill out the registration form with your store details</li>
                <li>Choose your collaboration model</li>
                <li>Sign the standard service agreement</li>
                <li>Start syncing orders and inventory</li>
              </ul>
            </div>
            <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Full name" />
                <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Work email" />
                <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Store URL" />
                <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Collaboration: Fully-managed</option>
                  <option>Collaboration: Hybrid</option>
                  <option>Collaboration: API-only</option>
                </select>
                <button type="button" className="rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white hover:bg-purple-700 transition">Request access</button>
                <p className="text-xs text-slate-500">By requesting access, you agree to our standard partner terms.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterCTA;
