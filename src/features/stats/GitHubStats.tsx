"use client";

import { motion } from "framer-motion";
import type { GitHubUser } from "@/infrastructure/api/github";
import { LABELS } from "@/infrastructure/data/portfolio";
import { useLang } from "@/core/i18n/LangContext";
import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/ui/MotionWrapper";

interface GitHubStatsProps {
  user: GitHubUser | null;
  totalStars: number;
  topLanguages: string[];
}

export default function GitHubStats({ user, totalStars, topLanguages }: GitHubStatsProps) {
  const { t, lang } = useLang();

  const stats = [
    {
      id: "stat-repos",
      label: t(LABELS.stats.repos),
      value: user?.public_repos ?? 0,
      icon: "📁",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      id: "stat-followers",
      label: t(LABELS.stats.followers),
      value: user?.followers ?? 0,
      icon: "👥",
      color: "from-violet-500 to-violet-700",
    },
    {
      id: "stat-following",
      label: t(LABELS.stats.following),
      value: user?.following ?? 0,
      icon: "🔗",
      color: "from-sky-500 to-sky-700",
    },
    {
      id: "stat-stars",
      label: t(LABELS.stats.stars),
      value: totalStars,
      icon: "⭐",
      color: "from-amber-500 to-amber-700",
    },
  ];

  return (
    <section id="stats" className="py-16 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <svg className="w-7 h-7 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              {t(LABELS.stats.title)}
            </h2>
            <a
              href="https://github.com/LfJohnVo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              @LfJohnVo →
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.id}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="relative overflow-hidden p-6 md:p-8 rounded-3xl border border-white/[0.07] bg-slate-900/50 backdrop-blur-md h-full flex flex-col justify-center items-center text-center group"
                  >
                    <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${stat.color} transition-opacity duration-300 group-hover:opacity-20`} />
                    <div className="relative z-10">
                      <div className="text-3xl md:text-4xl mb-4 opacity-90 drop-shadow-lg">{stat.icon}</div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      >
                        {stat.value.toLocaleString()}
                      </motion.div>
                      <div className="text-sm md:text-base text-slate-400 font-semibold uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="lg:col-span-1">
            <FadeIn delay={0.4} className="h-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden p-6 md:p-8 rounded-3xl border border-white/[0.07] bg-slate-900/50 backdrop-blur-md h-full flex flex-col group"
              >
                <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-emerald-500 to-teal-700 transition-opacity duration-300 group-hover:opacity-10" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {lang === "en" ? "Top Languages" : "Lenguajes Principales"}
                    </h3>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center gap-6">
                    {topLanguages.length > 0 ? (
                      topLanguages.map((language, index) => {
                        const progressMap: Record<number, number> = { 0: 85, 1: 55, 2: 30 };
                        return (
                          <div key={language} className="w-full">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="font-semibold text-slate-200 text-base">{language}</span>
                            </div>
                            <div className="h-3 w-full bg-slate-950/50 rounded-full overflow-hidden shadow-inner border border-white/5">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${progressMap[index] ?? 20}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 0.5 + (index * 0.2), ease: "easeOut" }}
                                className={`h-full rounded-full relative overflow-hidden ${
                                  index === 0 ? "bg-emerald-500" : index === 1 ? "bg-teal-500" : "bg-cyan-500"
                                }`}
                              >
                                <div className="absolute inset-0 bg-white/20 w-full h-full" style={{ backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem' }} />
                              </motion.div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center text-slate-500 text-sm">
                        Loading languages...
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
