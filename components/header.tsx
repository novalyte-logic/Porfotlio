"use client";

import React, { useState } from "react";
import {
  Terminal,
  Moon,
  Sun,
  Globe,
  Menu,
  X,
  Volume2,
  VolumeX,
  ShieldCheck,
  Radio
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./theme-provider";
import { useLanguage } from "./language-provider";
import { useSound } from "./sound-provider";
import { AdminDashboardModal, useAdminDashboardTrigger } from "./admin-dashboard";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const { soundEnabled, toggleSound, playClick } = useSound();
  const { isOpen: isAdminOpen, open: openAdmin, close: closeAdmin } = useAdminDashboardTrigger();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0b0f17]/80 border-b border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand / Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onDoubleClick={(e) => {
                e.preventDefault();
                openAdmin();
              }}
              className="flex items-center gap-2.5 group"
              title="Double-click to open Restricted Telemetry HUD"
            >
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
                <Terminal size={15} className="text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
                  JAMIL YAKASAI
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {t.nav.brandSubtitle}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              {t.nav.about}
            </a>
            <a href="#systems" className="hover:text-emerald-400 transition-colors">
              {t.nav.systems}
            </a>
            <a href="#architecture" className="hover:text-emerald-400 transition-colors">
              {t.nav.architecture}
            </a>
            <a href="#testimonials" className="hover:text-emerald-400 transition-colors">
              {t.nav.testimonials}
            </a>
            <a href="#capabilities" className="hover:text-emerald-400 transition-colors">
              {t.nav.capabilities}
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              {t.nav.getInTouch}
            </a>
          </nav>

          {/* Right Tools: Sound Toggle, Language Switcher, Theme Switcher & Admin HUD */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Global Tactile Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`relative p-2 rounded-xl border transition-all overflow-hidden ${
                soundEnabled
                  ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10"
              }`}
              aria-label={soundEnabled ? t.sound.soundOn : t.sound.soundOff}
              title={`${soundEnabled ? t.sound.soundOn : t.sound.soundOff} (${t.sound.tooltip})`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={soundEnabled ? "sound-on" : "sound-off"}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-center"
                >
                  {soundEnabled ? (
                    <Volume2 size={15} className="text-emerald-400" />
                  ) : (
                    <VolumeX size={15} className="text-slate-400" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Language Switcher Pill */}
            <div className="flex items-center rounded-xl bg-white/5 border border-white/10 p-0.5">
              <button
                onClick={() => lang !== "en" && toggleLang()}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                  lang === "en"
                    ? "bg-emerald-500 text-slate-950 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => lang !== "fr" && toggleLang()}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                  lang === "fr"
                    ? "bg-emerald-500 text-slate-950 shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
                aria-label="Passer en Français"
              >
                FR
              </button>
            </div>

            {/* Smooth Morph Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all overflow-hidden"
              aria-label="Toggle visual theme"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -16, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 16, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {theme === "dark" ? (
                    <Sun size={15} className="text-amber-400" />
                  ) : (
                    <Moon size={15} className="text-indigo-400" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Admin HUD Discreet Shortcut Button */}
            <button
              onClick={() => {
                playClick();
                openAdmin();
              }}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-slate-400 hover:text-emerald-400 transition-all group"
              title="Admin Telemetry HUD (Shortcut: Ctrl + Shift + A)"
            >
              <ShieldCheck size={13} className="text-slate-500 group-hover:text-emerald-400 transition-colors" />
              <span className="hidden xl:inline text-[9px] uppercase tracking-wider text-slate-500 group-hover:text-slate-300 font-semibold">HUD</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b border-white/10 bg-[#0b0f17]/95 px-6 py-4 flex flex-col gap-3 font-mono text-xs text-slate-300 backdrop-blur-2xl"
            >
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-emerald-400 border-b border-white/5"
              >
                {t.nav.about}
              </a>
              <a
                href="#systems"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-emerald-400 border-b border-white/5"
              >
                {t.nav.systems}
              </a>
              <a
                href="#architecture"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-emerald-400 border-b border-white/5"
              >
                {t.nav.architecture}
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-emerald-400 border-b border-white/5"
              >
                {t.nav.testimonials}
              </a>
              <a
                href="#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-emerald-400 border-b border-white/5"
              >
                {t.nav.capabilities}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-emerald-400 border-b border-white/5"
              >
                {t.nav.getInTouch}
              </a>

              {/* Mobile Sound & Admin Controls */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5">
                <button
                  onClick={() => {
                    toggleSound();
                  }}
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 py-1"
                >
                  {soundEnabled ? <Volume2 size={14} className="text-emerald-400" /> : <VolumeX size={14} />}
                  <span>{soundEnabled ? t.sound.soundOn : t.sound.soundOff}</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAdmin();
                  }}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-emerald-400 py-1"
                >
                  <ShieldCheck size={14} />
                  <span>Admin HUD</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Admin Dashboard Modal */}
      <AdminDashboardModal isOpen={isAdminOpen} onClose={closeAdmin} />
    </>
  );
}
