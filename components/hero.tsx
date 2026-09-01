"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Activity, Blocks, Code2, Mail } from "lucide-react";
import { ShareButton } from "./share-modal";
import { ContactButton } from "./contact-modal";
import { useLanguage } from "./language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-[85vh] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Available for roles badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
        <span className="font-semibold tracking-wide uppercase text-[11px]">
          {t.hero.badge}
        </span>
      </motion.div>

      {/* Hero Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.08] mb-6"
      >
        {t.hero.headline}
      </motion.h1>

      {/* Subhead */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-400 text-lg sm:text-xl max-w-3xl leading-relaxed mb-10"
      >
        {t.hero.subhead}
      </motion.p>

      {/* Live System Telemetry Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
      >
        <div className="flex items-center gap-3 p-2">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Activity size={18} />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
              {t.hero.focusTitle}
            </div>
            <div className="text-xs sm:text-sm font-mono text-white font-semibold">
              {t.hero.focusValue}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-2 border-t sm:border-t-0 sm:border-l border-white/5">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Blocks size={18} />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
              {t.hero.coreSystemsTitle}
            </div>
            <div className="text-xs sm:text-sm font-mono text-white font-semibold">
              {t.hero.coreSystemsValue}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-2 border-t sm:border-t-0 sm:border-l border-white/5">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Code2 size={18} />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
              {t.hero.toolchainsTitle}
            </div>
            <div className="text-xs sm:text-sm font-mono text-white font-semibold">
              {t.hero.toolchainsValue}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
      >
        <a
          href="#systems"
          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/20"
        >
          <span>{t.hero.exploreBtn}</span>
          <ArrowRight size={16} />
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const link = document.createElement("a");
            link.href = "#";
            link.download = "Jamil_Yakasai_Resume.pdf";
            // Simulate direct resume viewing/download
            window.open("https://novalyte.io", "_blank");
          }}
          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-indigo-500/10"
        >
          <Download size={16} />
          {t.hero.resumeBtn}
        </a>
        <ContactButton variant="secondary" className="px-5 py-3.5" />
        <ShareButton className="px-5 py-3.5" />
      </motion.div>
    </section>
  );
}
