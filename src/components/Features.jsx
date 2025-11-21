import { CheckCircle2, Rocket, Box, Clock, Shield, DollarSign } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-lg bg-purple-600/10 p-2 text-purple-700">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-slate-900 font-semibold">{title}</h3>
          <p className="mt-2 text-slate-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Features that power your store</h2>
          <p className="mt-3 text-slate-600">Built for speed, reliability, and scale — without the complexity.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={Rocket} title="Fast onboarding" description="Launch in days with guided setup and plug-and-play integrations." />
          <FeatureCard icon={Box} title="Vetted suppliers" description="Access a curated network for quality products and consistent inventory." />
          <FeatureCard icon={Clock} title="2-7 day delivery" description="Reliable fulfillment with global shipping zones and live tracking." />
          <FeatureCard icon={Shield} title="Order protection" description="Dispute resolution, replacement handling, and fraud checks built-in." />
          <FeatureCard icon={DollarSign} title="Transparent pricing" description="Simple, predictable fees and optimized shipping rates." />
          <FeatureCard icon={CheckCircle2} title="Automation ready" description="Sync orders, inventory, and status updates automatically." />
        </div>
      </div>
    </section>
  );
}

export default Features;
