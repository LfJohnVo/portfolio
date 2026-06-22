"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PROFILE, LABELS } from "@/data/portfolio";
import { useLang } from "@/context/LangContext";
function TypewriterBadge({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles]);
  return (
    <div className="flex justify-center h-12 mt-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 30, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -30, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
          className="flex items-center justify-center px-6 py-2 text-sm sm:text-base font-bold tracking-wide rounded-full bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 border border-indigo-500/50 text-white shadow-[0_0_20px_rgba(99,102,241,0.6)] backdrop-blur-md"
        >
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default function Hero() {
  const { lang, t } = useLang();
  const roles = PROFILE.rolesList[lang];
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.4, 0.8, 0.4], 
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[40rem] h-[40rem] rounded-full bg-fuchsia-600/30 blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.3, 0.7, 0.3], 
            x: [0, -100, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/4 -right-20 w-[45rem] h-[45rem] rounded-full bg-cyan-500/20 blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.2, 0.6, 0.2], 
            y: [0, -100, 0],
            x: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-32 left-1/4 w-[50rem] h-[50rem] rounded-full bg-indigo-600/30 blur-[120px] mix-blend-screen"
        />
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
          }}
        />
        <div className="absolute inset-0 overflow-hidden perspective-[1000px]">
          {mounted && [...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full shadow-[0_0_15px_3px_rgba(255,255,255,0.9)]"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
              }}
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
                rotateX: Math.random() * 360,
                rotateY: Math.random() * 360,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, "-10%"],
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0, 1, 0],
                rotateX: "+=360",
                rotateY: "+=360",
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
          📍 {PROFILE.location}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.5 }}
          whileHover={{ scale: 1.05, rotateZ: 5, boxShadow: "0 0 60px rgba(99,102,241,0.8)" }}
          className="mx-auto mb-8 relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.6),inset_0_0_20px_rgba(99,102,241,0.5)] cursor-pointer group z-20 bg-slate-900 transition-shadow duration-500"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 opacity-70 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,1)_360deg)] group-hover:opacity-100 mix-blend-overlay"
          />
          <div className="absolute inset-1 rounded-full overflow-hidden bg-slate-950 z-10">
            <Image
              src={PROFILE.avatarUrl}
              alt={PROFILE.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          <span className="text-white">Jonathan</span>{" "}
          <motion.span 
            animate={{ 
              textShadow: [
                "0 0 20px rgba(167,139,250,0.5)", 
                "0 0 40px rgba(167,139,250,0.8)", 
                "0 0 20px rgba(167,139,250,0.5)"
              ] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent inline-block"
          >
            Vargas
          </motion.span>
        </motion.h1>
        <TypewriterBadge roles={roles} />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          {PROFILE.tagline[lang]}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(52,211,153,0.4)" }}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold cursor-default"
        >
          🌍 {PROFILE.openToWork[lang]}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <motion.a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-github-btn"
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 25px -5px rgba(99,102,241,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
          >
            <GitHubIcon />
            {t(LABELS.hero.viewGithub)}
          </motion.a>
          <motion.a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-linkedin-btn"
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 25px -5px rgba(0,119,181,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[#0077B5] bg-white/5 border border-[#0077B5]/40 hover:bg-[#0077B5]/10 hover:border-[#0077B5] transition-all backdrop-blur-sm shadow-[0_0_15px_rgba(0,119,181,0.2)]"
          >
            <LinkedInIcon />
            LinkedIn
          </motion.a>
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            id="hero-scroll-btn"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            {t(LABELS.hero.explore)}
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-12 rounded-full border-2 border-indigo-400/30 flex items-start justify-center pt-2 shadow-[0_0_15px_rgba(99,102,241,0.2)] bg-slate-900/50 backdrop-blur-sm"
          >
            <div className="w-1.5 h-3 bg-indigo-400 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
