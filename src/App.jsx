import Hero from './components/Hero';
import Intro from './components/Intro';
import Features from './components/Features';
import HowToConnect from './components/HowToConnect';
import RegisterCTA from './components/RegisterCTA';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main className="pt-16">
        <Hero />
        <Intro />
        <Features />
        <HowToConnect />
        <RegisterCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
