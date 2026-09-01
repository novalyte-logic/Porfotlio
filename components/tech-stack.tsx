"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Cpu, Code, Database, Network, RotateCw, CheckCircle2 } from "lucide-react";
import { useLanguage } from "./language-provider";

interface StackGroup {
  categoryEn: string;
  categoryFr: string;
  proficiencyEn: string;
  proficiencyFr: string;
  barColor: string;
  barPercent: string;
  icon: React.ReactNode;
  badgeKey: keyof typeof import("@/lib/i18n").translations.en.techStack;
  skills: string[];
}

const STACK_GROUPS: StackGroup[] = [
  {
    categoryEn: "Applied AI & LLMs",
    categoryFr: "IA Appliquée & Grands Modèles LLM",
    proficiencyEn: "Expert",
    proficiencyFr: "Expert",
    barColor: "bg-emerald-500",
    barPercent: "95%",
    icon: <Cpu size={20} className="text-emerald-400" />,
    badgeKey: "coreStrength",
    skills: ["Prompt Engineering", "Structured Outputs", "JSON Schemas", "Tool Calling", "Evaluation Rubrics", "Gemini 3.1", "OpenAI"]
  },
  {
    categoryEn: "Languages & Frameworks",
    categoryFr: "Langages & Frameworks Modernes",
    proficiencyEn: "Senior",
    proficiencyFr: "Senior",
    barColor: "bg-cyan-500",
    barPercent: "92%",
    icon: <Code size={20} className="text-cyan-400" />,
    badgeKey: "fullStack",
    skills: ["TypeScript", "Python", "React", "Next.js", "Node.js", "SQL", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    categoryEn: "Data Systems & Cloud",
    categoryFr: "Systèmes de Données & Cloud",
    proficiencyEn: "Senior",
    proficiencyFr: "Senior",
    barColor: "bg-indigo-500",
    barPercent: "88%",
    icon: <Database size={20} className="text-indigo-400" />,
    badgeKey: "infrastructure",
    skills: ["PostgreSQL", "Supabase", "Google BigQuery", "Schema Migration", "Data Hygiene", "ETL Pipelines"]
  },
  {
    categoryEn: "Integrations & Revenue Ops",
    categoryFr: "Intégrations & Opérations Revenu",
    proficiencyEn: "Staff",
    proficiencyFr: "Staff",
    barColor: "bg-teal-500",
    barPercent: "90%",
    icon: <Network size={20} className="text-teal-400" />,
    badgeKey: "enterprise",
    skills: ["Salesforce", "HubSpot", "Zendesk", "Webhooks", "n8n", "Clay", "REST APIs", "Git/CI-CD"]
  }
];

function TechStackSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
      {[1, 2, 3, 4].map((idx) => (
        <div
          key={idx}
          className="p-7 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10" />
                <div className="space-y-1.5">
                  <div className="w-36 h-5 rounded bg-white/10" />
                  <div className="w-24 h-3 rounded bg-white/5" />
                </div>
              </div>
              <div className="w-16 h-5 rounded bg-white/10" />
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-white/10 w-2/3 animate-shimmer" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <div key={s} className="w-20 h-6 rounded-lg bg-white/5" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function TechStack() {
  const { lang, t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const simulateReload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

  return (
    <section id="capabilities" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded mb-3 inline-block font-semibold">
            {t.techStack.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {t.techStack.title}
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-slate-400 max-w-xl text-sm leading-relaxed">
            {t.techStack.subtitle}
          </p>

          <button
            onClick={simulateReload}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors disabled:opacity-50"
            title="Simulate loading state"
          >
            <RotateCw size={12} className={isLoading ? "animate-spin text-emerald-400" : ""} />
            <span>{isLoading ? t.techStack.reloading : t.techStack.simulateReload}</span>
          </button>
        </div>
      </div>

      {isLoading ? (
        <TechStackSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STACK_GROUPS.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between backdrop-blur-sm shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {lang === "fr" ? group.categoryFr : group.categoryEn}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                        {String(t.techStack[group.badgeKey] || "")}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    {lang === "fr" ? group.proficiencyFr : group.proficiencyEn}
                  </span>
                </div>

                {/* Progress bar indicator */}
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-6">
                  <div
                    className={`h-full ${group.barColor} rounded-full`}
                    style={{ width: group.barPercent }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
