"use client";
import { EXPERIENCE, LABELS } from "@/data/portfolio";
import { useLang } from "@/context/LangContext";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
export default function Experience() {
  const { lang, t } = useLang();
  return (
    <section id="experience" className="py-24 sm:py-32 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge={t(LABELS.experience.badge)}
            title={t(LABELS.experience.title)}
            subtitle={t(LABELS.experience.subtitle)}
          />
        </FadeIn>
        <StaggerContainer className="mt-16 relative">
          <div className="absolute left-6 sm:left-[140px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent hidden sm:block" />
          <div className="space-y-10">
            {EXPERIENCE.map((job) => (
              <StaggerItem key={job.id}>
                <div className="relative sm:pl-[168px] group">
                  <div className="hidden sm:block absolute left-0 top-4 w-[128px] text-right pr-6">
                    <span className="text-sm font-medium text-slate-500">{job.period}</span>
                  </div>
                  <div className="hidden sm:flex absolute left-[133px] top-[18px] w-5 h-5 rounded-full bg-slate-950 border-4 border-slate-700 group-hover:border-indigo-500 transition-colors z-10" />
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-6 sm:p-8 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all">
                    <div className="sm:hidden text-xs font-medium text-slate-500 mb-3">{job.period}</div>
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-2xl flex-shrink-0">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
                          {job.role[lang]}
                        </h3>
                        <div className="text-slate-400 text-sm mt-0.5">
                          <span className="font-semibold text-slate-300">{job.company}</span>
                          {" · "}
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm mb-5">
                      {job.description[lang]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
