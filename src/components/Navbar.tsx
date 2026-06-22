"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { LABELS } from "@/data/portfolio";
export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const NAV_LINKS = [
    { label: t(LABELS.nav.about), href: "#about" },
    { label: t(LABELS.nav.experience), href: "#experience" },
    { label: t(LABELS.nav.stack), href: "#stack" },
    { label: t(LABELS.nav.projects), href: "#projects" },
    { label: t(LABELS.nav.repos), href: "#repos" },
    { label: t(LABELS.nav.contact), href: "#contact" },
  ];
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-indigo-500/20 shadow-[0_4px_30px_rgba(99,102,241,0.1)]"
          : "bg-transparent"
      }`}
    >
      {scrolled && (
        <motion.div 
          layoutId="navbar-glow"
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-50"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-lg font-bold tracking-tight relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute -inset-2 bg-indigo-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-white">Jonathan </span>
            <span className="relative z-10 text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]">Vargas</span>
            <span className="relative z-10 text-emerald-400 animate-pulse">.</span>
          </motion.a>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <button
              id="lang-toggle"
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="ml-2 px-3 py-2 text-xs font-bold tracking-widest text-slate-300 hover:text-white transition-colors rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
              aria-label="Toggle language"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <a
              href="https://github.com/LfJohnVo"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
            >
              GitHub
            </a>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="lang-toggle-mobile"
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="px-3 py-1.5 text-xs font-bold tracking-widest text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-lg transition-colors"
              aria-label="Toggle language"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/LfJohnVo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 text-sm font-semibold text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
