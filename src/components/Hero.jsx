import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[88vh] overflow-hidden bg-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t6fYoL-pmPsm38nx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil to improve text contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-purple-600/10 px-3 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20 mb-4">
              Minimal. Modern. Scalable.
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Launch your dropshipping brand with confidence
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600">
              We simplify sourcing, fulfillment, and growth so you can focus on building your brand. Seamless integrations, fast shipping, and transparent operations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#register" className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-purple-700 transition">
                Get started
              </a>
              <a href="#connect" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-purple-700 font-semibold ring-1 ring-inset ring-purple-200 hover:ring-purple-300 transition">
                How to connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
