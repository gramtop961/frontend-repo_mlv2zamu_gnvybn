import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import DashboardPreview from './components/DashboardPreview';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-white">
      <Navbar />
      <HeroSection />
      <FeatureGrid />
      <DashboardPreview />
      <footer className="border-t border-white/60 dark:border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            © {new Date().getFullYear()} CreatorSuite. Dibuat untuk kreator modern.
          </p>
          <div className="text-xs text-neutral-600 dark:text-neutral-400">
            Liquid Glass • Rainbow Glare • Industrial Modern
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
