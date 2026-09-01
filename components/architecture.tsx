"use client";

import React from "react";
import { motion } from "motion/react";
import { Webhook, BrainCircuit, ShieldCheck, DatabaseZap, LayoutDashboard, ArrowRight } from "lucide-react";
import { useLanguage } from "./language-provider";

export function Architecture() {
  const { lang, t } = useLanguage();

  const flowSteps = [
    {
      step: "01",
      icon: <Webhook size={22} />,
      title: t.architecture.steps.s1Title,
      desc: t.architecture.steps.s1Desc,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      step: "02",
      icon: <BrainCircuit size={22} />,
      title: t.architecture.steps.s2Title,
      desc: t.architecture.steps.s2Desc,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      step: "03",
      icon: <ShieldCheck size={22} />,
      title: t.architecture.steps.s3Title,
      desc: t.architecture.steps.s3Desc,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      step: "04",
      icon: <DatabaseZap size={22} />,
      title: t.architecture.steps.s4Title,
      desc: t.architecture.steps.s4Desc,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      step: "05",
      icon: <LayoutDashboard size={22} />,
      title: t.architecture.steps.s5Title,
      desc: t.architecture.steps.s5Desc,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <section id="architecture" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded mb-3 inline-block font-semibold">
          {t.architecture.badge}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
          {t.architecture.title}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {t.architecture.subtitle}
        </p>
      </div>

      <div className="relative py-6">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500/20 via-emerald-500/40 to-cyan-500/20 -translate-y-1/2 z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
          {flowSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all group backdrop-blur-sm shadow-xl"
            >
              <div className="w-full flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono text-slate-500 font-bold">
                  STAGE_{step.step}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-emerald-400 transition-colors" />
              </div>

              <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.color} border ${step.border} flex items-center justify-center mb-5 shadow-inner`}>
                {step.icon}
              </div>
              <h3 className="font-bold text-sm text-white mb-1.5">{step.title}</h3>
              <p className="text-xs font-mono text-slate-400">{step.desc}</p>
              
              {/* Mobile Arrow */}
              {idx !== flowSteps.length - 1 && (
                <div className="lg:hidden mt-4 text-slate-600">
                  <ArrowRight className="rotate-90 md:rotate-0" size={18} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
