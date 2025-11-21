function HowToConnect() {
  return (
    <section id="connect" className="relative bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How to connect with us</h2>
          <p className="mt-3 text-slate-600">It takes just a few steps to get connected and start fulfilling orders with us.</p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-purple-700">Step 1</div>
            <h3 className="mt-1 font-semibold text-slate-900">Share your store details</h3>
            <p className="mt-2 text-slate-600">Tell us about your products, target markets, and current volume so we can tailor the setup.</p>
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-purple-700">Step 2</div>
            <h3 className="mt-1 font-semibold text-slate-900">Connect your platform</h3>
            <p className="mt-2 text-slate-600">We support Shopify, WooCommerce, and custom stores via API for seamless syncing.</p>
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-purple-700">Step 3</div>
            <h3 className="mt-1 font-semibold text-slate-900">Select suppliers and SKUs</h3>
            <p className="mt-2 text-slate-600">Choose from our vetted catalog or bring your own suppliers — we’ll handle the rest.</p>
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-purple-700">Step 4</div>
            <h3 className="mt-1 font-semibold text-slate-900">Go live and monitor</h3>
            <p className="mt-2 text-slate-600">Orders flow automatically. Track performance from your dashboard and scale confidently.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default HowToConnect;
