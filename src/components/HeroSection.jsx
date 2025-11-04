import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Background Spline cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays with rainbow glare */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-neutral-900/80 dark:via-neutral-900/40 dark:to-neutral-900/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_30%_10%,rgba(202,114,44,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_180deg_at_60%_10%,rgba(255,179,0,0.18),rgba(255,0,179,0.12),rgba(0,255,255,0.12),rgba(255,179,0,0.18))] opacity-60" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/10 backdrop-blur-md text-xs text-[#522735] dark:text-white mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-[#ca722c]" />
            Liquid Glass • Rainbow Glare • Pro Workflow
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-[#522735] dark:text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.15)]">
            CreatorSuite
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#522735] via-[#ca722c] to-fuchsia-600 dark:from-white dark:via-amber-200 dark:to-cyan-200">All-in-One Content Creator Companion</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-700/80 dark:text-neutral-200/90 max-w-2xl">
            Susun ide, storyboard, jadwal, dan analitik performa dalam satu ruang kerja elegan. Didukung AI untuk insight, tren, dan eksekusi yang lebih cepat.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#planner" className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#ca722c] text-white shadow-lg shadow-amber-300/20 hover:brightness-110 transition">
              Mulai Rencanakan
            </a>
            <a href="#features" className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/50 dark:border-white/10 bg-white/50 dark:bg-white/10 backdrop-blur-md text-[#522735] dark:text-white hover:bg-white/70 dark:hover:bg-white/20 transition">
              Jelajahi Fitur
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
