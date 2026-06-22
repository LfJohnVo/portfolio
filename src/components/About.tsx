"use client";
import { PROFILE, LABELS, CAREER_STATS } from "@/data/portfolio";
import { useLang } from "@/context/LangContext";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
export default function About() {
  const { lang, t } = useLang();
  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge={t(LABELS.about.badge)}
            title={t(LABELS.about.title)}
            subtitle={t(LABELS.about.subtitle)}
          />
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div className="space-y-6">
              {PROFILE.bio[lang].map((paragraph, i) => (
                <p key={i} className="text-slate-400 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-github-link"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  {t(LABELS.about.githubProfile)}
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-linkedin-link"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              staggerDelay={0.08}
            >
              {PROFILE.highlights[lang].map((highlight, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all group">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 group-hover:bg-emerald-400 transition-colors" />
                    </span>
                    <span className="text-sm text-slate-300 leading-relaxed">{highlight}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
        <FadeIn delay={0.4} className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CAREER_STATS[lang].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
              >
                <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
