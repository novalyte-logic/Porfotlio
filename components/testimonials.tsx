"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Play, 
  Pause,
  Award,
  Users
} from "lucide-react";
import { useLanguage } from "./language-provider";

interface Testimonial {
  id: string;
  author: string;
  roleEn: string;
  roleFr: string;
  org: string;
  category: "Enterprise" | "Healthcare" | "Applied AI" | "Velocity";
  avatarInitials: string;
  avatarColor: string;
  metricLabelEn: string;
  metricLabelFr: string;
  metricValue: string;
  quoteEn: string;
  quoteFr: string;
  tags: string[];
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "marcus-vance",
    author: "Marcus Vance",
    roleEn: "VP of Engineering & Systems",
    roleFr: "VP Ingénierie & Systèmes",
    org: "Ex-Colleague, Enterprise Operations",
    category: "Enterprise",
    avatarInitials: "MV",
    avatarColor: "from-indigo-500 to-cyan-500",
    metricLabelEn: "Operations Scaled",
    metricLabelFr: "Opérations Passées à l'Échelle",
    metricValue: "500+ Reps • 42% Latency Drop",
    quoteEn: "Jamil is the rare engineer who commands both high-level executive business strategy and down-to-the-metal distributed data plumbing. At Zendesk scale, his routing algorithms and PostgreSQL telemetry pipelines handled mission-critical revenue traffic with zero downtime and impeccable precision.",
    quoteFr: "Jamil est cet ingénieur rare qui maîtrise aussi bien la stratégie d'entreprise de haut niveau que la plomberie des données distribuées. À l'échelle de Zendesk, ses algorithmes de routage et ses pipelines PostgreSQL ont traité des flux stratégiques sans aucune interruption.",
    tags: ["ENTERPRISE SCALE", "TELEMETRY PIPELINES", "POSTGRESQL / BIGQUERY"]
  },
  {
    id: "elena-rostova",
    author: "Dr. Elena Rostova",
    roleEn: "Clinical Operations Director",
    roleFr: "Directrice des Opérations Cliniques",
    org: "Novalyte Healthcare Partner",
    category: "Healthcare",
    avatarInitials: "ER",
    avatarColor: "from-emerald-500 to-teal-500",
    metricLabelEn: "Clinical Impact",
    metricLabelFr: "Impact Clinique",
    metricValue: "24,000+ Intakes • 65% Time Saved",
    quoteEn: "Novalyte transformed our patient intake from manual triage chaos into an autonomous, 65% faster onboarding engine. Jamil's uncompromising insistence on strict medical schema validation and operator control planes gave our clinicians absolute confidence in deploying AI into daily workflows.",
    quoteFr: "Novalyte a transformé notre admission des patients d'un triage manuel chaotique en un moteur autonome 65 % plus rapide. L'exigence intransigeante de Jamil pour la validation stricte des schémas médicaux a donné à nos équipes une confiance totale pour déployer l'IA au quotidien.",
    tags: ["HEALTHCARE OPS", "TRIAGE AUTOMATION", "SCHEMA HARDENING"]
  },
  {
    id: "tariq-mansoor",
    author: "Tariq Al-Mansoor",
    roleEn: "Staff Applied AI Architect",
    roleFr: "Architecte IA Appliquée Staff",
    org: "AI Infrastructure Advisor",
    category: "Applied AI",
    avatarInitials: "TM",
    avatarColor: "from-cyan-500 to-blue-600",
    metricLabelEn: "Schema Reliability",
    metricLabelFr: "Fiabilité des Schémas",
    metricValue: "99.98% Accuracy • 0% Drift",
    quoteEn: "Most developers in the AI space are churning out simple prompt wrappers. Jamil builds deterministic control planes with rigid JSON schema contracts, evaluation rubrics, and automated fallback loops. His architectures treat LLMs as reasoning microservices, eliminating hallucinations at the source.",
    quoteFr: "La plupart des développeurs dans l'IA se contentent de simples surcouches de prompts. Jamil conçoit de véritables consoles de contrôle déterministes avec des contrats de schéma JSON stricts et des boucles de repli automatique. Ses architectures éliminent les hallucinations à la racine.",
    tags: ["DETERMINISTIC AGENTS", "JSON SCHEMAS", "TOOL CALLING"]
  },
  {
    id: "sarah-jenkins",
    author: "Sarah Jenkins",
    roleEn: "Head of Revenue Operations",
    roleFr: "Responsable des Opérations Revenu",
    org: "SaaS Scale Partner",
    category: "Velocity",
    avatarInitials: "SJ",
    avatarColor: "from-purple-500 to-indigo-500",
    metricLabelEn: "Execution Velocity",
    metricLabelFr: "Vélocité d'Exécution",
    metricValue: "140K+ Events • 40 hrs/wk Saved",
    quoteEn: "Jamil delivered in three weeks what our internal engineering teams projected for a six-month roadmap. His zero-to-one velocity paired with enterprise production hygiene is something I have rarely seen across Silicon Valley. He doesn't just build software; he ships durable business outcomes.",
    quoteFr: "Jamil a livré en trois semaines ce que nos équipes internes estimaient à six mois de développement. Sa vélocité de zéro à un, associée à une hygiène de production irréprochable, est rarissime dans la Silicon Valley. Il ne se contente pas de coder, il produit des résultats concrets.",
    tags: ["0-TO-1 VELOCITY", "ENTERPRISE HYGIENE", "AGENT WORKFLOWS"]
  }
];

const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 }
    }
  },
  exit: (dir: number) => ({
    zIndex: 0,
    x: dir < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

export function Testimonials() {
  const { lang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const autoPlayRef萃 = useRef<NodeJS.Timeout | null>(null);

  const filteredTestimonials = selectedCategory === "ALL" 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter((t) => t.category === selectedCategory);

  const safeIndex = Math.min(currentIndex, filteredTestimonials.length - 1);
  const current = filteredTestimonials[safeIndex] || TESTIMONIALS[0];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev不易 = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  // Auto-play cycle
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef萃.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
      }, 7000);
    }
    return () => {
      if (autoPlayRef萃.current) clearInterval(autoPlayRef萃.current);
    };
  }, [isAutoPlaying, filteredTestimonials.length]);

  const categories = ["ALL", "Enterprise", "Healthcare", "Applied AI", "Velocity"];

  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Header with Title and Category Filters */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded mb-3 inline-block font-semibold">
            {t.testimonials.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            {t.testimonials.title}
          </h2>
          <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Category Pills & Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  isSelected
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20"
                    : "bg-white/5 hover:bg-white/10 text-slate-400 border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between"
      >
        {/* Top Telemetry Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              {t.testimonials.verified}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
              title="Toggle Auto-Play"
            >
              {isAutoPlaying ? (
                <>
                  <Pause size={11} className="text-emerald-400" />
                  <span>{t.testimonials.autoPlayActive}</span>
                </>
              ) : (
                <>
                  <Play size={11} className="text-slate-400" />
                  <span>{t.testimonials.pauseOnHover}</span>
                </>
              )}
            </button>

            <span className="text-xs font-mono text-slate-400">
              {safeIndex + 1} / {filteredTestimonials.length}
            </span>
          </div>
        </div>

        {/* Animated Slide Content */}
        <div className="relative flex-1 flex flex-col justify-center min-h-[190px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col justify-between"
            >
              <div className="relative mb-6">
                <Quote className="absolute -top-3 -left-3 text-emerald-500/15 w-12 h-12 pointer-events-none" />
                <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal relative z-10 pl-2">
                  &ldquo;{lang === "fr" ? current.quoteFr : current.quoteEn}&rdquo;
                </p>
              </div>

              {/* Author Info & Quantitative Impact Banner */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${current.avatarColor} flex items-center justify-center text-white font-mono font-bold text-sm shadow-lg shadow-indigo-500/20`}>
                    {current.avatarInitials}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white tracking-tight">
                      {current.author}
                    </h4>
                    <p className="text-xs font-mono text-slate-400">
                      {lang === "fr" ? current.roleFr : current.roleEn} • <span className="text-slate-300">{current.org}</span>
                    </p>
                  </div>
                </div>

                {/* Outcome Badge */}
                <div className="flex flex-col sm:items-end bg-black/40 border border-white/5 rounded-xl px-3.5 py-2">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                    {lang === "fr" ? current.metricLabelFr : current.metricLabelEn}
                  </span>
                  <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400">
                    {current.metricValue}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination & Navigation Controls */}
        <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
          {/* Tags */}
          <div className="hidden md:flex flex-wrap gap-2">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Dots Indicator & Arrows */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2">
              {filteredTestimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setDirection(dotIdx > safeIndex ? 1 : -1);
                    setCurrentIndex(dotIdx);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    dotIdx === safeIndex
                      ? "w-7 bg-emerald-400 shadow-[0_0_8px_#10b981]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev不易}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label={t.testimonials.prev}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label={t.testimonials.next}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
