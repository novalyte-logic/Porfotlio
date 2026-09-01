"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Compass, 
  Terminal, 
  Lightbulb, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Calendar,
  Layers,
  Sparkles,
  TrendingUp,
  Clock,
  BookOpen
} from "lucide-react";
import { useLanguage } from "./language-provider";

interface Milestone {
  year: string;
  phase: string;
  roleEn: string;
  roleFr: string;
  titleEn: string;
  titleFr: string;
  summaryEn: string;
  summaryFr: string;
  achievementsEn: string[];
  achievementsFr: string[];
  stack: string[];
  metricEn: string;
  metricFr: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2021 — 2022",
    phase: "01",
    roleEn: "Enterprise Systems",
    roleFr: "Systèmes d'Entreprise",
    titleEn: "High-Scale Revenue Telemetry & Operations",
    titleFr: "Télémétrie de Revenu & Opérations à Grande Échelle",
    summaryEn: "Cut my teeth re-architecting complex enterprise data pipelines, lead distribution matrices, and executive forecasting telemetry at Zendesk across 500+ rep operations.",
    summaryFr: "Refonte de pipelines de données d'entreprise complexes, matrices de distribution de prospects et télémétrie prévisionnelle chez Zendesk pour 500+ commerciaux.",
    achievementsEn: [
      "Engineered automated CRM data hygiene systems eliminating duplicate intake records",
      "Constructed low-latency lead routing logic reducing customer response time by 42%",
      "Maintained real-time BigQuery & PostgreSQL analytics syncs for leadership visibility"
    ],
    achievementsFr: [
      "Systèmes automatisés d'hygiène des données CRM éliminant les doublons",
      "Logique de routage de prospects à faible latence réduisant le temps de réponse de 42 %",
      "Synchronisation analytique BigQuery & PostgreSQL en temps réel pour la direction"
    ],
    stack: ["Salesforce", "PostgreSQL", "SQL", "BigQuery", "Zendesk"],
    metricEn: "500+ Reps Scaled",
    metricFr: "500+ Commerciaux Équipés"
  },
  {
    year: "2023",
    phase: "02",
    roleEn: "Applied AI Engineer",
    roleFr: "Ingénieur IA Appliquée",
    titleEn: "LLM Agentic Systems & Schema Hardening",
    titleFr: "Systèmes d'Agents LLM & Durcissement de Schémas",
    summaryEn: "Dove deep into emerging foundation models, pioneering deterministic structured output architectures, function calling engines, and prompt validation pipelines.",
    summaryFr: "Immersion dans les modèles de fondation, pionnier des architectures de sorties structurées déterministes et pipelines de validation de prompts.",
    achievementsEn: [
      "Pioneered strict JSON Schema validation patterns preventing prompt hallucination",
      "Designed event-driven agentic pipelines chaining webhooks to LLM tool calls",
      "Constructed automated data enrichment waterfalls with Clay, n8n, and custom Python microservices"
    ],
    achievementsFr: [
      "Modèles de validation JSON Schema stricts éliminant les hallucinations de prompt",
      "Pipelines d'agents événementiels reliant webhooks et appels d'outils LLM",
      "Cascades d'enrichissement de données avec Clay, n8n et microservices Python"
    ],
    stack: ["OpenAI API", "Python", "TypeScript", "JSON Schema", "n8n", "Clay"],
    metricEn: "0% Schema Drift",
    metricFr: "0% Dérive de Schéma"
  },
  {
    year: "2024",
    phase: "03",
    roleEn: "Founder & Architect",
    roleFr: "Fondateur & Architecte",
    titleEn: "Novalyte AI & Healthtech Control Planes",
    titleFr: "Novalyte AI & Consoles de Contrôle Santé",
    summaryEn: "Conceived and shipped an end-to-end healthcare coordination platform and 12-tool operator revenue command center from zero to one.",
    summaryFr: "Conception et déploiement de bout en bout d'une plateforme de santé et d'un centre de commandement opérateur à 12 outils.",
    achievementsEn: [
      "Built patient intake triage transforming messy freeform medical text into structured records",
      "Engineered automated clinic onboarding & specialty provider dispatch workflows",
      "Delivered real-time telemetry surfaces with Next.js, Supabase, and custom AI agents"
    ],
    achievementsFr: [
      "Triage des admissions patients convertissant les textes médicaux bruts en données structurées",
      "Intégration automatisée des cliniques et dispatching vers les prestataires spécialisés",
      "Surfaces de télémétrie temps réel avec Next.js, Supabase et agents IA sur-mesure"
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "Python", "Tool Calling", "Tailwind CSS"],
    metricEn: "12 Tools Shipped",
    metricFr: "12 Outils Déployés"
  },
  {
    year: "Present",
    phase: "04",
    roleEn: "Forward Deployed AI",
    roleFr: "IA Déployée & Systèmes",
    titleEn: "Autonomous Control Planes & Operator Systems",
    titleFr: "Consoles de Contrôle Autonomes & Systèmes Opérateurs",
    summaryEn: "Partnering with high-growth teams to build mission-critical AI control planes, multimodal workflows, and high-reliability operator command surfaces.",
    summaryFr: "Partenariats avec des équipes à forte croissance pour bâtir des consoles IA critiques et des surfaces de commandement fiables.",
    achievementsEn: [
      "Architecting enterprise-grade Gemini 3.1 Pro tool-calling agent systems",
      "Developing low-latency decision support dashboards and geospatial intelligence tools",
      "Focusing on high-impact zero-to-one product velocity paired with production reliability"
    ],
    achievementsFr: [
      "Architecture de systèmes d'agents avec appels d'outils Gemini 3.1 Pro",
      "Tableaux de bord d'aide à la décision et outils géospatiaux à faible latence",
      "Vélocité produit 0-à-1 associée à une fiabilité de production rigoureuse"
    ],
    stack: ["Gemini 3.1", "TypeScript", "PostgreSQL", "Next.js", "Cloud Run"],
    metricEn: "Production-Ready",
    metricFr: "Prêt pour la Production"
  }
];

export function About() {
  const { lang, t } = useLanguage();
  const [activeMilestone, setActiveMilestone] = useState(MILESTONES[2]);

  const philosophies = [
    {
      icon: <ShieldCheck className="text-emerald-400" size={22} />,
      title: t.about.principles.p1Title,
      description: t.about.principles.p1Desc
    },
    {
      icon: <Terminal className="text-cyan-400" size={22} />,
      title: t.about.principles.p2Title,
      description: t.about.principles.p2Desc
    },
    {
      icon: <Zap className="text-indigo-400" size={22} />,
      title: t.about.principles.p3Title,
      description: t.about.principles.p3Desc
    }
  ];

  const evolutionStages = [
    {
      category: lang === "fr" ? "Chaînes d'Outils LLM & Agents" : "LLM & Agent Toolchains",
      level: "Expert",
      growth: 95,
      highlight: lang === "fr" 
        ? "Sorties structurées, appels d'outils, cadres d'évaluation, orchestration multi-agents" 
        : "Structured outputs, function calling, evaluation frameworks, multi-agent orchestration"
    },
    {
      category: lang === "fr" ? "Architecture Systèmes Full-Stack" : "Full-Stack System Architecture",
      level: "Staff",
      growth: 92,
      highlight: lang === "fr" 
        ? "Next.js App Router, TypeScript, machines à états, interfaces réactives fluides" 
        : "Next.js App Router, TypeScript, state machines, fluid reactive UI with Framer Motion"
    },
    {
      category: lang === "fr" ? "Pipelines & Synchros de Données" : "Data Pipelines & Syncs",
      level: "Senior",
      growth: 88,
      highlight: lang === "fr" 
        ? "PostgreSQL, BigQuery, Supabase, streaming CDC, sécurité des migrations" 
        : "PostgreSQL, BigQuery, Supabase, CDC streaming, schema migration safety"
    },
    {
      category: lang === "fr" ? "Opérations Revenu & Entreprise" : "Revenue & Enterprise Ops",
      level: "Senior",
      growth: 90,
      highlight: lang === "fr" 
        ? "Télémétrie Salesforce, Zendesk, cascades de webhooks, surveillance des SLA" 
        : "Salesforce, Zendesk, HubSpot telemetry, webhook waterfalls, SLA monitoring"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header with Estimated Reading Time Gauge */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded font-semibold">
              {t.about.badge}
            </span>
            
            {/* Reading Time Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-slate-300 text-[10px] font-mono shadow-sm">
              <Clock size={12} className="text-cyan-400" />
              <span className="text-white font-medium">{t.about.readingTimeEstimate}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{t.about.readingTimeWords}</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            {t.about.title}
          </h2>
          <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Content Depth Tag for fast reader evaluation */}
        <div className="flex items-center gap-3 bg-white/[0.02] border border-white/10 rounded-2xl px-4 py-3 self-start md:self-auto backdrop-blur-sm">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <BookOpen size={15} />
          </div>
          <div>
            <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
              {t.about.readingTimeBadge}
            </div>
            <div className="text-xs font-mono font-bold text-white">
              {t.about.readingTimeDepth}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout: Journey Narrative & Mission Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        {/* Narrative Box */}
        <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-sm shadow-xl flex flex-col justify-between">
          <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <Compass size={16} />
              <span>{t.about.journeyTitle}</span>
            </div>
            
            <p>{t.about.journeyP1}</p>
            <p>{t.about.journeyP2}</p>
            <p>{t.about.journeyP3}</p>
            <p>{t.about.journeyP4}</p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300">{t.about.locationTag}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span>Focus:</span>
              <span className="text-white font-semibold">{t.about.focusTag}</span>
            </div>
          </div>
        </div>

        {/* Builder Ethos / Quote Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-indigo-950/40 via-[#0b0f17] to-slate-900/60 border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl pointer-events-none" />
            
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded mb-4 inline-block font-semibold">
                {t.about.ethosBadge}
              </span>
              <blockquote className="text-lg sm:text-xl font-medium text-white leading-snug tracking-tight mb-6">
                {t.about.ethosQuote}
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white font-mono">{t.about.ethosAuthor}</div>
                <div className="text-xs text-slate-400 font-mono">{t.about.ethosRole}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-lg shadow-indigo-500/20">
                JY
              </div>
            </div>
          </div>

          {/* Quick Stats Bento mini */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
              <div className="text-2xl font-bold font-mono text-white mb-1">{t.about.statVelocity}</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{t.about.statVelocityLabel}</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
              <div className="text-2xl font-bold font-mono text-emerald-400 mb-1">{t.about.statSchemas}</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{t.about.statSchemasLabel}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Engineering Philosophies */}
      <div className="mb-20">
        <div className="mb-8">
          <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded mb-2 inline-block font-semibold">
            {t.about.principlesBadge}
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {t.about.principlesTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-white/20 transition-all backdrop-blur-sm shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>PRINCIPLE_0{idx + 1}</span>
                <span className="text-emerald-400">ENFORCED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Career Timeline & Milestones */}
      <div className="mb-20">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded mb-2 inline-block font-semibold">
              {t.about.timelineBadge}
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {t.about.timelineTitle}
            </h3>
          </div>
          <p className="text-xs font-mono text-slate-400">
            {t.about.timelineSubtitle}
          </p>
        </div>

        {/* Timeline Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {MILESTONES.map((m) => {
            const isSelected = activeMilestone.year === m.year;
            return (
              <button
                key={m.year}
                onClick={() => setActiveMilestone(m)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "bg-white/[0.08] border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-emerald-400" : "text-slate-500"}`}>
                    STAGE_{m.phase}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                    {m.year}
                  </span>
                </div>
                <div className="font-bold text-xs sm:text-sm text-white truncate">
                  {lang === "fr" ? m.roleFr : m.roleEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Milestone Card */}
        <motion.div
          key={activeMilestone.year}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  {activeMilestone.year}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {lang === "fr" ? activeMilestone.roleFr : activeMilestone.roleEn}
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {lang === "fr" ? activeMilestone.titleFr : activeMilestone.titleEn}
              </h4>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Impact Metric
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                {lang === "fr" ? activeMilestone.metricFr : activeMilestone.metricEn}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <h5 className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3 font-semibold">
                {t.about.milestoneContext}
              </h5>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {lang === "fr" ? activeMilestone.summaryFr : activeMilestone.summaryEn}
              </p>

              <h5 className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3 font-semibold">
                {t.about.milestoneHighlights}
              </h5>
              <ul className="space-y-3">
                {(lang === "fr" ? activeMilestone.achievementsFr : activeMilestone.achievementsEn).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 bg-black/30 rounded-2xl border border-white/5 p-6 flex flex-col justify-between">
              <div>
                <h5 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4 font-semibold">
                  {t.about.milestoneTech}
                </h5>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeMilestone.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>VERIFIED_TELEMETRY</span>
                <span className="text-emerald-400">✓ SHIPPED</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skill Growth Matrix */}
      <div>
        <div className="mb-8">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded mb-2 inline-block font-semibold">
            {t.about.growthBadge}
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {t.about.growthTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {evolutionStages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white font-mono">{item.category}</span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {item.level}
                  </span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 rounded-full"
                    style={{ width: `${item.growth}%` }}
                  />
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                {item.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
