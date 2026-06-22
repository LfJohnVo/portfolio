"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK, LABELS } from "@/data/portfolio";
import { useLang } from "@/context/LangContext";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
export default function TechStack() {
  const { lang, t } = useLang();
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = TECH_STACK[activeTab];
  return (
    <section id="stack" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge={t(LABELS.stack.badge)}
            title={t(LABELS.stack.title)}
            subtitle={t(LABELS.stack.subtitle)}
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {TECH_STACK.map((category, i) => (
              <button
                key={category.label.en}
                id={`stack-tab-${category.label.en.toLowerCase()}`}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeTab === i
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{category.emoji}</span>
                {category.label[lang]}
              </button>
            ))}
          </div>
        </FadeIn>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer
              className="flex flex-wrap justify-center gap-3"
              staggerDelay={0.05}
            >
              {activeCategory.items.map((item) => (
                <StaggerItem key={item.name}>
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all cursor-default"
                  >
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/5 to-emerald-500/5" />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>
        <FadeIn delay={0.4} className="mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {TECH_STACK.map((category, i) => (
              <div
                key={category.label.en}
                onClick={() => setActiveTab(i)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  activeTab === i
                    ? "border-indigo-500/40 bg-indigo-500/10"
                    : "border-white/[0.07] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <div className="text-2xl mb-2">{category.emoji}</div>
                <div className="text-sm font-semibold text-white">{category.label[lang]}</div>
                <div className="text-xs text-slate-500 mt-1">
                  {category.items.length} {lang === "en" ? "technologies" : "tecnologías"}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
