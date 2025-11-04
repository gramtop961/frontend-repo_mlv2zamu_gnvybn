import { Lightbulb, Layout, Calendar, BarChart3, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Lightbulb,
    title: 'AI Ideation Hub',
    desc: 'Generator ide, hook, caption, dan konsep visual sesuai niche & tren.',
  },
  {
    icon: Layout,
    title: 'Storyboard & Script',
    desc: 'Drag-and-drop template, otomatisasi narasi, shot list, dan VO.',
  },
  {
    icon: Calendar,
    title: 'Planner & Scheduler',
    desc: 'Kalender lintas platform, rekomendasi waktu terbaik, pengingat otomatis.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    desc: 'Insight AI dengan grafik dinamis dan saran perbaikan berbasis data.',
  },
  {
    icon: Wand2,
    title: 'Trend & Hook Library',
    desc: 'Koleksi hook 2025, pantauan tren real-time, penyesuaian gaya bahasa.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_70%_10%,rgba(202,114,44,0.12),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#522735] dark:text-white">Dirancang untuk Alur Kerja Kreator</h2>
          <p className="mt-2 text-neutral-700/80 dark:text-neutral-300">
            Semua yang Anda butuhkan untuk ideasi, produksi, dan analisis — dalam satu aplikasi.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative p-5 rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
            >
              <div className="absolute -inset-px rounded-2xl pointer-events-none bg-gradient-to-br from-amber-300/10 via-fuchsia-300/10 to-cyan-300/10 opacity-60" />
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/10 backdrop-blur-md text-[#522735] dark:text-white">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#522735] dark:text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-neutral-700/80 dark:text-neutral-300">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
