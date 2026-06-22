"use client";
import { motion } from "framer-motion";
import { PROJECTS, LANGUAGE_COLORS, LABELS } from "@/data/portfolio";
import { useLang } from "@/context/LangContext";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
export default function Projects() {
  const { lang, t } = useLang();
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);
  return (
    <section id="projects" className="py-24 sm:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge={t(LABELS.projects.badge)}
            title={t(LABELS.projects.title)}
            subtitle={t(LABELS.projects.subtitle)}
          />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" staggerDelay={0.12}>
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} lang={lang} featured />
            </StaggerItem>
          ))}
        </StaggerContainer>
        {others.length > 0 && (
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
            {others.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} lang={lang} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
        <FadeIn delay={0.4} className="mt-12 text-center">
          <motion.a
            href="https://github.com/LfJohnVo"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-view-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-indigo-400 border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all"
          >
            {t(LABELS.projects.viewAll)}
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
function ProjectCard({
  project,
  lang,
  featured = false,
}: {
  project: (typeof PROJECTS)[0];
  lang: "en" | "es";
  featured?: boolean;
}) {
  const langColor = project.language
    ? LANGUAGE_COLORS[project.language] ?? "#6b7280"
    : "#6b7280";
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-indigo-500/20 transition-all ${
        featured ? "min-h-[220px]" : ""
      }`}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/5 to-emerald-500/5" />
      <div className="relative flex flex-col flex-1 gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10">
              <FolderIcon className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors text-sm sm:text-base">
              {project.name}
            </h3>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
            aria-label={`View ${project.name} on GitHub`}
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed flex-1">{project.description[lang]}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-400 border border-white/[0.07]"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.language && (
          <div className="flex items-center gap-1.5 mt-2">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: langColor }}
            />
            <span className="text-xs text-slate-500">{project.language}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
function FolderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current stroke-2 ${className}`} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </svg>
  );
}
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
