"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { Clock, CheckCircle2, BookOpen } from "lucide-react";
import { useLanguage } from "./language-provider";

const TOTAL_ESTIMATED_MINUTES = 4; // Total estimated reading time for full portfolio content

export function ScrollProgressBar() {
  const { lang, t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const [percent, setPercent] = useState(0);
  const [currentSection, setCurrentSection] = useState<string>("");

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  // Section Observer to show current active section
  useEffect(() => {
    const sections = ["about", "systems", "architecture", "testimonials", "capabilities", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentSection(sectionId.toUpperCase());
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setCurrentSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute dynamic remaining time in minutes
  const remainingMinutes = Math.max(0, Math.ceil((1 - percent / 100) * TOTAL_ESTIMATED_MINUTES));
  const isCompleted = percent >= 95;

  const getRemainingTimeText = () => {
    if (isCompleted) {
      return t.readingProgress.completed;
    }
    if (remainingMinutes <= 1) {
      return t.readingProgress.lessThanMin;
    }
    return `~${remainingMinutes} ${t.readingProgress.minLeft}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-1 bg-white/[0.04]">
      {/* Dynamic Gradient Bar */}
      <motion.div
        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 origin-left shadow-[0_0_12px_#10b981]"
        style={{ scaleX }}
      />

      {/* Floating Dynamic Reading Time Remaining Micro HUD in Top Right */}
      <AnimatePresence>
        {percent > 2 && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-2.5 right-6 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/90 border border-white/15 text-[10px] font-mono backdrop-blur-md shadow-2xl pointer-events-auto"
          >
            {isCompleted ? (
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 size={13} className="text-emerald-400" />
                <span>{t.readingProgress.completed}</span>
                <span className="text-slate-500 font-normal">• 100%</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Clock size={12} className="animate-pulse" />
                  <span className="text-white font-medium">{getRemainingTimeText()}</span>
                </div>

                <span className="text-slate-500">•</span>
                <span className="text-emerald-400 font-bold">{percent}%</span>

                {currentSection && (
                  <>
                    <span className="text-slate-600 hidden lg:inline">|</span>
                    <span className="text-slate-400 text-[9px] uppercase hidden lg:inline font-semibold">
                      [{currentSection}]
                    </span>
                  </>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
