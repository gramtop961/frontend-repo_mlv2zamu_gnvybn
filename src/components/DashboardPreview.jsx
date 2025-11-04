import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, PlayCircle } from 'lucide-react';

function StatCard({ icon: Icon, label, value, delta }) {
  return (
    <div className="relative p-4 rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-white/10 backdrop-blur-xl">
      <div className="absolute -inset-px rounded-2xl pointer-events-none bg-gradient-to-br from-amber-300/10 via-fuchsia-300/10 to-cyan-300/10 opacity-60" />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs text-neutral-700/70 dark:text-neutral-300/90">{label}</p>
          <p className="mt-1 text-2xl font-semibold text-[#522735] dark:text-white">{value}</p>
          <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-300">{delta}</p>
        </div>
        <div className="p-3 rounded-xl bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/10 text-[#522735] dark:text-white">
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

function MiniChart() {
  // Simple decorative chart using SVG
  return (
    <svg viewBox="0 0 200 80" className="w-full h-24">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#ca722c" />
          <stop offset="60%" stopColor="#ff61d2" />
          <stop offset="100%" stopColor="#4dd0e1" />
        </linearGradient>
      </defs>
      <polyline
        points="0,60 20,55 40,58 60,45 80,50 100,38 120,42 140,28 160,35 180,20 200,22"
        fill="none"
        stroke="url(#g)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <linearGradient id="fillg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#ca722c" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <polygon points="0,80 0,60 200,22 200,80" fill="url(#fillg)" />
    </svg>
  );
}

export default function DashboardPreview() {
  return (
    <section id="planner" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_250px_at_20%_10%,rgba(82,39,53,0.08),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#522735] dark:text-white">Dasbor Ringkas & Insight AI</h2>
          <p className="mt-2 text-neutral-700/80 dark:text-neutral-300">Pantau performa, jadwal, dan rekomendasi perbaikan dalam tampilan liquid glass yang elegan.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 p-5 rounded-2xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/10 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-[#522735] dark:text-white">Performa Mingguan</h3>
              <span className="text-sm text-neutral-600 dark:text-neutral-300">IG • TikTok • YouTube</span>
            </div>
            <MiniChart />
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard icon={TrendingUp} label="Engagement" value="8.4%" delta="+1.2% vs last week" />
              <StatCard icon={Users} label="Followers" value="12.8k" delta="+420 this week" />
              <StatCard icon={Clock} label="Watch Time" value="1,280h" delta="+8.5%" />
              <StatCard icon={PlayCircle} label="Views" value="248k" delta="+12%" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-5 rounded-2xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/10 backdrop-blur-xl"
          >
            <h3 className="text-lg font-semibold text-[#522735] dark:text-white">Saran AI</h3>
            <ul className="mt-3 space-y-3 text-sm text-neutral-700 dark:text-neutral-200">
              <li className="p-3 rounded-xl bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/10">Hook di 3 video terakhir terlalu panjang (7-9 detik). Coba 3-5 detik.</li>
              <li className="p-3 rounded-xl bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/10">Kontras thumbnail rendah. Tingkatkan luminance dan gunakan outline.</li>
              <li className="p-3 rounded-xl bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/10">Eksperimen format square untuk Reels yang lebih mobile-first.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
