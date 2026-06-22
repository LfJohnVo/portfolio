"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
  { text: "ssh john@engineering-console", type: "input" },
  { text: "Welcome to LfJohnVo Engineering Core v2.0", type: "system" },
  { text: "Connecting to GitHub (@LfJohnVo)... SUCCESS", type: "success" },
  { text: "Loading modules...", type: "system" },
  { text: "> Software Architecture... [LOADED]", type: "module" },
  { text: "> Laravel API Services... [LOADED]", type: "module" },
  { text: "> Go Microservices... [LOADED]", type: "module" },
  { text: "> Next.js Frontend... [LOADED]", type: "module" },
  { text: "> AI Workflows & LLM Agents... [ACTIVE]", type: "module-active" },
  { text: "> CI/CD Automation... [ACTIVE]", type: "module-active" },
  { text: "> Blockchain Nodes... [SYNCED]", type: "module-sync" },
  { text: "All systems operational. Ready for deployment.", type: "success-bold" }
];

export default function GitHubCommandCenter() {
  const [lines, setLines] = useState<typeof terminalLines>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < terminalLines.length) {
      const delay = currentIndex === 0 ? 1000 : currentIndex === 3 ? 1200 : 400 + Math.random() * 300;
      const timer = setTimeout(() => {
        setLines(prev => [...prev, terminalLines[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const getColor = (type: string) => {
    switch(type) {
      case "input": return "text-indigo-300 font-bold";
      case "system": return "text-slate-400";
      case "success": return "text-emerald-400";
      case "success-bold": return "text-emerald-400 font-bold mt-4";
      case "module": return "text-sky-300";
      case "module-active": return "text-violet-300";
      case "module-sync": return "text-amber-300";
      default: return "text-slate-300";
    }
  };

  return (
    <section className="py-16 bg-slate-950 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden border border-indigo-500/20 bg-[#0a0a14] shadow-[0_0_50px_rgba(99,102,241,0.15)]"
        >
          {/* Mac-style Window Header */}
          <div className="bg-slate-900/80 border-b border-white/5 px-4 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>
            <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 15a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 00-2 2v6z" />
              </svg>
              root@lfjohnvo-core:~
            </div>
            <div className="w-12" /> {/* Spacer for centering */}
          </div>
          
          {/* Terminal Content */}
          <div className="p-4 sm:p-6 lg:p-8 font-mono text-xs sm:text-sm md:text-base min-h-[300px] sm:min-h-[420px] text-slate-300">
            <AnimatePresence>
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-2 sm:mb-2.5 ${getColor(line.type)} flex`}
                >
                  {line.type === "input" ? (
                    <span className="text-slate-600 mr-2 sm:mr-3 select-none">$</span>
                  ) : (
                    <span className="text-slate-700 mr-2 sm:mr-3 select-none">›</span>
                  )}
                  <span dangerouslySetInnerHTML={{ __html: line.text.replace(/(\[.*?\])/g, '<span class="opacity-80">$1</span>') }} />
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Blinking Cursor */}
            <div className="mt-3 sm:mt-4 flex">
              <span className="text-slate-600 mr-2 sm:mr-3 select-none">$</span>
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 sm:w-2.5 h-4 sm:h-5 bg-indigo-400"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
