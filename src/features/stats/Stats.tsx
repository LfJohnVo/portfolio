"use client";
import { motion } from "framer-motion";
import type { GitHubUser } from "@/infrastructure/api/github";
import { LABELS } from "@/infrastructure/data/portfolio";
import { useLang } from "@/core/i18n/LangContext";
import { FadeIn, StaggerContainer, StaggerItem } from "@/shared/ui/MotionWrapper";
interface StatsProps {
  user: GitHubUser | null;
  totalStars: number;
}
export default function Stats({ user, totalStars }: StatsProps) {
  const { t } = useLang();
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
    <section id="stats" className="py-16 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">{t(LABELS.stats.title)}</h2>
            <a
              href="https://github.com/LfJohnVo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              →
            </a>
          </div>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4" staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.id}>
              <motion.div
                id={stat.id}
                whileHover={{ scale: 1.04, y: -4 }}
                className="relative overflow-hidden p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03]"
              >
                <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${stat.color}`} />
                <div className="relative">
                  <div className="text-2xl mb-3">{stat.icon}</div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value.toLocaleString()}
                  </motion.div>
                  <div className="mt-1 text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
