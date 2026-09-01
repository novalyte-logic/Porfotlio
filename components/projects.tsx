"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Layers, 
  Map, 
  Workflow, 
  Database, 
  X, 
  Users, 
  Zap, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight,
  RotateCw,
  Sparkles
} from "lucide-react";
import { useLanguage } from "./language-provider";

interface ProjectMetric {
  labelKey: keyof typeof import("@/lib/i18n").translations.en.projects.metrics;
  value: string;
  icon: React.ReactNode;
}

interface ProjectArchitectureStep {
  label: string;
  textEn: string;
  textFr: string;
  color: string;
}

interface ProjectItem {
  id: string;
  title: string;
  roleEn: string;
  roleFr: string;
  badgeEn: string;
  badgeFr: string;
  icon: React.ReactNode;
  overviewEn: string;
  overviewFr: string;
  featuresEn: string[];
  featuresFr: string[];
  metrics: ProjectMetric[];
  architecture?: ProjectArchitectureStep[];
  tags: string[];
  colSpan: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "novalyte",
    title: "Novalyte AI",
    roleEn: "Founder & Architect",
    roleFr: "Fondateur & Architecte",
    badgeEn: "HEALTHCARE ECOSYSTEM",
    badgeFr: "ÉCOSYSTÈME SANTÉ",
    icon: <Layers size={22} className="text-emerald-400" />,
    overviewEn: "Conceived, architected, and shipped an end-to-end healthcare ecosystem connecting patient demand, specialty clinics, and service providers with autonomous data workflows.",
    overviewFr: "Conception, architecture et déploiement d'un écosystème de santé reliant la demande des patients, cliniques spécialisées et prestataires via des flux de données autonomes.",
    metrics: [
      { labelKey: "usersImpacted", value: "24,000+", icon: <Users size={13} className="text-emerald-400" /> },
      { labelKey: "apiRequests", value: "1.8M / mo", icon: <Zap size={13} className="text-cyan-400" /> },
      { labelKey: "timeSaved", value: "65%", icon: <Clock size={13} className="text-indigo-400" /> }
    ],
    featuresEn: [
      "Public patient intake triage & automated clinic onboarding tools",
      "Centralized 12-tool operator Revenue Command Center",
      "Strict structured JSON schema LLM extraction",
      "High-throughput SQL data pipelines in Supabase/Postgres & BigQuery"
    ],
    featuresFr: [
      "Triage des admissions patients & intégration automatisée des cliniques",
      "Centre de commande opérateur centralisé à 12 outils",
      "Extraction LLM avec schémas JSON stricts et typés",
      "Pipelines de données SQL haut débit sur Supabase/Postgres & BigQuery"
    ],
    architecture: [
      { label: "[In]", textEn: "Unstructured Patient Intake", textFr: "Admission Patient Brute", color: "text-slate-400" },
      { label: "[LLM]", textEn: "JSON Schema Extraction", textFr: "Extraction Schéma JSON", color: "text-indigo-400" },
      { label: "[DB]", textEn: "Postgres / BigQuery Sync", textFr: "Synchro Postgres / BigQuery", color: "text-cyan-400" }
    ],
    tags: ["SUPABASE", "NEXT.JS", "PYTHON", "BIGQUERY", "TOOL CALLING", "POSTGRESQL"],
    colSpan: "lg:col-span-8",
  },
  {
    id: "geospatialabs",
    title: "Geospatialabs",
    roleEn: "Prototype Engineer",
    roleFr: "Ingénieur Prototype",
    badgeEn: "DECISION SUPPORT",
    badgeFr: "AIDE À LA DÉCISION",
    icon: <Map size={22} className="text-cyan-400" />,
    overviewEn: "Interactive decision-support prototype mapping regional clinic distribution, demographic health trends, and local demand signals with real-time radius queries.",
    overviewFr: "Prototype d'aide à la décision cartographiant la distribution des cliniques régionales, les tendances démographiques et la demande locale avec requêtes spatiales temps réel.",
    metrics: [
      { labelKey: "queriesPerSec", value: "450 QPS", icon: <Zap size={13} className="text-cyan-400" /> },
      { labelKey: "latencyReduced", value: "<85ms", icon: <Clock size={13} className="text-emerald-400" /> },
      { labelKey: "regionsMapped", value: "12 Metros", icon: <Users size={13} className="text-indigo-400" /> }
    ],
    featuresEn: [
      "Custom vector map visualizations with real-time radius queries",
      "Data normalization & ETL pipelines",
      "High-performance query interfaces in JavaScript, Python, and SQL"
    ],
    featuresFr: [
      "Visualisations cartographiques vectorielles sur-mesure",
      "Pipelines ETL et normalisation des flux de données",
      "Interfaces de requêtes haute performance en JS, Python et SQL"
    ],
    tags: ["GEOSPATIAL", "MAPBOX", "PYTHON", "DATA PIPELINES", "SQL"],
    colSpan: "lg:col-span-4",
  },
  {
    id: "autonomous-workflow",
    title: "Autonomous AI Engine",
    roleEn: "Systems Architect",
    roleFr: "Architecte Systèmes",
    badgeEn: "AGENTIC PIPELINES",
    badgeFr: "PIPELINES D'AGENTS",
    icon: <Workflow size={22} className="text-emerald-400" />,
    overviewEn: "Production event-driven agentic pipelines chaining webhooks, LLM tool calling, and automated enrichment waterfalls with zero schema drift.",
    overviewFr: "Pipelines d'agents événementiels en production enchaînant webhooks, appels d'outils LLM et enrichissements automatisés sans dérive de schéma.",
    metrics: [
      { labelKey: "tasksAutomated", value: "140K+", icon: <Zap size={13} className="text-emerald-400" /> },
      { labelKey: "schemaAccuracy", value: "99.98%", icon: <CheckCircle2 size={13} className="text-cyan-400" /> },
      { labelKey: "manualEffortSaved", value: "40 hrs/wk", icon: <Clock size={13} className="text-indigo-400" /> }
    ],
    featuresEn: [
      "Strict schema validation & LLM extraction",
      "Automated deduplication and normalization logic",
      "CRM writeback without prompt drift"
    ],
    featuresFr: [
      "Validation stricte des schémas & extraction typée",
      "Logique de déduplication et de normalisation automatisée",
      "Synchronisation CRM sans dérive de prompt"
    ],
    tags: ["AI AGENTS", "WEBHOOKS", "JSON SCHEMAS", "N8N", "CLAY"],
    colSpan: "lg:col-span-5",
  },
  {
    id: "zendesk-enterprise",
    title: "Enterprise Revenue Infrastructure",
    roleEn: "Zendesk",
    roleFr: "Zendesk",
    badgeEn: "ENTERPRISE TELEMETRY",
    badgeFr: "TÉLÉMÉTRIE D'ENTREPRISE",
    icon: <Database size={22} className="text-indigo-400" />,
    overviewEn: "Re-architected enterprise CRM workflows, dynamic lead routing algorithms, and executive forecasting dashboards for North American sales operations.",
    overviewFr: "Refonte des flux CRM d'entreprise, algorithmes de routage dynamique des prospects et tableaux de bord de prévision pour les équipes commerciales.",
    metrics: [
      { labelKey: "repsSupported", value: "500+ Reps", icon: <Users size={13} className="text-indigo-400" /> },
      { labelKey: "responseTime", value: "42% Faster", icon: <Clock size={13} className="text-emerald-400" /> },
      { labelKey: "dataQuality", value: "100% Dedupe", icon: <CheckCircle2 size={13} className="text-cyan-400" /> }
    ],
    featuresEn: [
      "Complex CRM data hygiene and field deduplication",
      "Dynamic lead routing algorithms across 500+ rep teams",
      "Real-time executive revenue telemetry dashboards"
    ],
    featuresFr: [
      "Hygiène rigoureuse des données CRM et déduplication",
      "Algorithmes de routage dynamique pour plus de 500 commerciaux",
      "Tableaux de bord de télémétrie de revenu en temps réel"
    ],
    tags: ["SALESFORCE", "HUBSPOT", "DATA HYGIENE", "EXECUTIVE TELEMETRY", "SQL"],
    colSpan: "lg:col-span-7",
  }
];

function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-pulse">
      {/* 8-col Skeleton */}
      <div className="lg:col-span-8 p-7 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between min-h-[460px]">
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="w-28 h-5 rounded bg-white/10 animate-shimmer" />
            <div className="w-20 h-4 rounded bg-white/10" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10" />
            <div className="space-y-1.5 flex-1">
              <div className="w-48 h-6 rounded bg-white/10" />
              <div className="w-32 h-3.5 rounded bg-white/5" />
            </div>
          </div>
          <div className="space-y-2 mb-6">
            <div className="w-full h-3.5 rounded bg-white/5" />
            <div className="w-5/6 h-3.5 rounded bg-white/5" />
          </div>
          {/* Metrics skeleton */}
          <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-black/30 border border-white/5 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-1.5">
                <div className="w-14 h-2.5 rounded bg-white/10" />
                <div className="w-16 h-4 rounded bg-white/15" />
              </div>
            ))}
          </div>
          {/* Pipeline block skeleton */}
          <div className="h-20 rounded-xl bg-black/40 border border-white/5 p-3 space-y-2">
            <div className="w-24 h-2.5 rounded bg-white/10" />
            <div className="w-40 h-2.5 rounded bg-white/5" />
          </div>
        </div>
        <div className="flex gap-2 pt-4 border-t border-white/5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-16 h-5 rounded bg-white/5" />
          ))}
        </div>
      </div>

      {/* 4-col Skeleton */}
      <div className="lg:col-span-4 p-7 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between min-h-[460px]">
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="w-24 h-5 rounded bg-white/10" />
            <div className="w-16 h-4 rounded bg-white/10" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10" />
            <div className="space-y-1.5">
              <div className="w-32 h-6 rounded bg-white/10" />
              <div className="w-24 h-3.5 rounded bg-white/5" />
            </div>
          </div>
          <div className="w-full h-16 rounded bg-white/5 mb-6" />
          <div className="h-28 rounded-xl bg-black/30 border border-white/5 mb-6" />
        </div>
        <div className="flex gap-2 pt-4 border-t border-white/5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-14 h-5 rounded bg-white/5" />
          ))}
        </div>
      </div>

      {/* 5-col Skeleton */}
      <div className="lg:col-span-5 p-7 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between min-h-[360px]">
        <div>
          <div className="w-28 h-5 rounded bg-white/10 mb-5" />
          <div className="w-40 h-6 rounded bg-white/10 mb-4" />
          <div className="w-full h-12 rounded bg-white/5 mb-6" />
          <div className="grid grid-cols-3 gap-2 p-3 bg-black/30 rounded-xl">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full h-6 rounded bg-white/10" />
            ))}
          </div>
        </div>
        <div className="flex gap-2 pt-4 border-t border-white/5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-14 h-5 rounded bg-white/5" />
          ))}
        </div>
      </div>

      {/* 7-col Skeleton */}
      <div className="lg:col-span-7 p-7 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between min-h-[360px]">
        <div>
          <div className="w-32 h-5 rounded bg-white/10 mb-5" />
          <div className="w-56 h-6 rounded bg-white/10 mb-4" />
          <div className="w-full h-12 rounded bg-white/5 mb-6" />
          <div className="grid grid-cols-3 gap-2.5 p-3 bg-black/30 rounded-xl">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full h-8 rounded bg-white/10" />
            ))}
          </div>
        </div>
        <div className="flex gap-2 pt-4 border-t border-white/5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-16 h-5 rounded bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { lang, t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const simulateReload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 750);
  };

  return (
    <section id="systems" className="py-20 px-6 max-w-7xl mx-auto relative">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded mb-3 inline-block font-semibold">
            {t.projects.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t.projects.title}
          </h2>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-slate-400 max-w-md text-sm leading-relaxed">
            {t.projects.subtitle}
          </p>
          
          <button
            onClick={simulateReload}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors disabled:opacity-50"
            title="Simulate loading state"
          >
            <RotateCw size={12} className={isLoading ? "animate-spin text-emerald-400" : ""} />
            <span>{isLoading ? t.projects.reloading : t.projects.simulateReload}</span>
          </button>
        </div>
      </div>

      {/* Render Skeleton or Main Grid */}
      {isLoading ? (
        <ProjectsSkeleton />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {PROJECTS.map((project) => {
            const arch = project.architecture;
            return (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                onClick={() => setSelectedId(project.id)}
                whileHover={{ 
                  scale: 1.015,
                  y: -4,
                  transition: { duration: 0.25, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.99 }}
                className={`${project.colSpan} cursor-pointer group flex flex-col p-7 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.06] hover:shadow-[0_0_35px_rgba(16,185,129,0.12)] transition-all relative overflow-hidden backdrop-blur-sm shadow-xl`}
              >
                {/* Subtle Gradient Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-indigo-500/0 group-hover:from-emerald-500/[0.04] group-hover:to-indigo-500/[0.04] transition-all duration-300 pointer-events-none" />

                <div className="flex items-center justify-between mb-5 relative z-10">
                  <span className="text-[10px] font-mono text-emerald-400 tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 font-semibold">
                    {lang === "fr" ? project.badgeFr : project.badgeEn}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981] group-hover:scale-125 transition-transform" />
                    <span className="text-[10px] font-mono text-slate-400 group-hover:text-emerald-400 transition-colors flex items-center gap-1 font-semibold">
                      {t.projects.deepDive} <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/10 transition-colors">
                    {project.icon}
                  </div>
                  <div>
                    <motion.h3 layoutId={`title-${project.id}`} className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </motion.h3>
                    <p className="text-xs font-mono text-slate-400">
                      {lang === "fr" ? project.roleFr : project.roleEn}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 mt-3 relative z-10">
                  {lang === "fr" ? project.overviewFr : project.overviewEn}
                </p>

                {/* Quantitative Metrics Row */}
                <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-black/40 border border-white/5 mb-6 relative z-10 group-hover:border-white/10 transition-colors">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 mb-1">
                        {metric.icon}
                        <span className="truncate">{t.projects.metrics[metric.labelKey]}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-bold font-mono text-white group-hover:text-emerald-400 transition-colors">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Architecture Preview for Novalyte AI */}
                {arch && arch.length > 0 && (
                  <div className="bg-slate-900/60 rounded-xl border border-white/5 p-4 flex flex-col gap-2 font-mono text-[11px] mb-6 shadow-inner relative z-10">
                    <div className="text-emerald-400 font-semibold">{t.projects.systemPipeline}</div>
                    {arch.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <div className="flex items-center gap-2">
                          <span className={step.color}>{step.label}</span>
                          <span className="text-slate-200">{lang === "fr" ? step.textFr : step.textEn}</span>
                        </div>
                        {idx < arch.length - 1 && (
                          <div className="w-0.5 h-3 bg-white/10 ml-2.5" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {/* Visual Geospatial Preview for Geospatialabs */}
                {project.id === "geospatialabs" && (
                  <div className="h-28 mb-6 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-25"
                      style={{
                        backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                        backgroundSize: "12px 12px",
                      }}
                    />
                    <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_12px_#10b981] animate-ping" />
                    <div className="absolute top-1/2 left-1/3 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
                    <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]" />
                    <span className="relative z-10 font-mono text-[10px] text-slate-400 bg-black/60 px-2 py-1 rounded border border-white/10">
                      Interactive Spatial Map Matrix
                    </span>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5 relative z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded-lg text-[10px] font-mono border border-white/10 text-slate-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Deep-Dive Modal */}
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-50 bg-[#0b0f17]/85 backdrop-blur-md"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedId}`}
                className="w-full max-w-2xl bg-[#0f172a] border border-white/15 rounded-3xl shadow-2xl pointer-events-auto overflow-hidden flex flex-col max-h-[90vh]"
              >
                {PROJECTS.filter((p) => p.id === selectedId).map((project) => (
                  <div key={project.id} className="flex flex-col h-full overflow-y-auto p-8 relative">
                    <button
                      onClick={() => setSelectedId(null)}
                      className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
                      aria-label="Close dialog"
                    >
                      <X size={18} />
                    </button>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded font-semibold">
                          {lang === "fr" ? project.badgeFr : project.badgeEn}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Modal Metrics Banner */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 my-4">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="flex flex-col">
                          <span className="text-[10px] font-mono text-slate-400 mb-1 flex items-center gap-1">
                            {metric.icon}
                            {t.projects.metrics[metric.labelKey]}
                          </span>
                          <span className="text-base sm:text-lg font-bold font-mono text-emerald-400">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-6 my-4">
                      <div>
                        <h4 className="text-[11px] font-mono text-indigo-400 uppercase tracking-widest mb-2 font-semibold">
                          {t.projects.systemSummary}
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {lang === "fr" ? project.overviewFr : project.overviewEn}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-mono text-indigo-400 uppercase tracking-widest mb-3 font-semibold">
                          {t.projects.keyHighlights}
                        </h4>
                        <ul className="space-y-2.5">
                          {(lang === "fr" ? project.featuresFr : project.featuresEn).map((feat, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 text-slate-300 rounded text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
