import { useState } from 'react';
import { Rocket, Settings, Sun, Moon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((d) => !d);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/50 border-b border-white/30 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-xl blur-md bg-gradient-to-br from-[#ca722c]/60 via-pink-400/50 to-cyan-400/50 opacity-60" />
            <div className="relative p-2 rounded-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/10 backdrop-blur-md">
              <Rocket className="w-5 h-5 text-[#522735] dark:text-white" />
            </div>
          </div>
          <div className="leading-tight">
            <span className="block text-sm tracking-widest text-[#522735] dark:text-white/90 font-semibold">CreatorSuite</span>
            <span className="block text-[10px] text-neutral-600 dark:text-neutral-300">All-in-One Content Companion</span>
          </div>
        </motion.div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="relative group inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/50 dark:border-white/10 bg-white/40 dark:bg-white/10 backdrop-blur-md text-sm text-[#522735] dark:text-white hover:bg-white/70 dark:hover:bg-white/20 transition-colors"
          >
            <span className="absolute -inset-px rounded-lg bg-gradient-to-r from-amber-300/0 via-fuchsia-300/0 to-cyan-300/0 group-hover:from-amber-300/20 group-hover:via-fuchsia-300/20 group-hover:to-cyan-300/20 pointer-events-none" />
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="hidden sm:block">{dark ? 'Light' : 'Dark'}</span>
          </button>
          <button className="relative group inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/50 dark:border-white/10 bg-white/40 dark:bg-white/10 backdrop-blur-md text-sm text-[#522735] dark:text-white hover:bg-white/70 dark:hover:bg-white/20 transition-colors">
            <span className="absolute -inset-px rounded-lg bg-gradient-to-r from-emerald-300/0 via-sky-300/0 to-violet-300/0 group-hover:from-emerald-300/20 group-hover:via-sky-300/20 group-hover:to-violet-300/20 pointer-events-none" />
            <Settings className="w-4 h-4" />
            <span className="hidden sm:block">Settings</span>
          </button>
          <button className="relative hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/50 dark:border-white/10 bg-[#ca722c] text-white hover:brightness-110 transition-colors">
            <span className="absolute -inset-px rounded-lg bg-gradient-to-r from-amber-300/0 via-fuchsia-300/0 to-cyan-300/0 group-hover:from-amber-300/20 group-hover:via-fuchsia-300/20 group-hover:to-cyan-300/20 pointer-events-none" />
            <Sparkles className="w-4 h-4" />
            New Idea
          </button>
        </div>
      </div>
    </div>
  );
}
