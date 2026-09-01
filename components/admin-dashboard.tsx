"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  BarChart3,
  Clock,
  Globe,
  Lock,
  MousePointerClick,
  RefreshCw,
  Sparkles,
  TrendingUp,
  Users,
  X,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Radio,
  FileDown,
  Terminal,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "./language-provider";
import { useSound } from "./sound-provider";

interface TelemetryEvent {
  id: string;
  time: string;
  location: string;
  action: string;
  section: string;
  dwell: string;
  type: "conversion" | "dwell" | "interaction";
}

const INITIAL_EVENTS: TelemetryEvent[] = [
  {
    id: "evt-1",
    time: "2s ago",
    location: "San Francisco, US",
    action: "Opened 'Direct Inquiry' Modal",
    section: "Footer / Contact",
    dwell: "3m 42s",
    type: "conversion",
  },
  {
    id: "evt-2",
    time: "8s ago",
    location: "London, UK",
    action: "Engaged 'AI Command Terminal' query",
    section: "Floating HUD",
    dwell: "2m 15s",
    type: "interaction",
  },
  {
    id: "evt-3",
    time: "19s ago",
    location: "Paris, FR",
    action: "Deep Dwell on 'Healthtech Triage Pipeline'",
    section: "Systems Bento",
    dwell: "1m 48s",
    type: "dwell",
  },
  {
    id: "evt-4",
    time: "34s ago",
    location: "New York, US",
    action: "Downloaded Executive Resume (PDF)",
    section: "Hero CTA",
    dwell: "4m 10s",
    type: "conversion",
  },
  {
    id: "evt-5",
    time: "52s ago",
    location: "Zurich, CH",
    action: "Switched Architecture Step to 'Schema Validation'",
    section: "Architecture Flow",
    dwell: "1m 12s",
    type: "interaction",
  },
  {
    id: "evt-6",
    time: "1m 10s ago",
    location: "Tokyo, JP",
    action: "Copied direct transmission address",
    section: "Footer",
    dwell: "5m 02s",
    type: "conversion",
  },
];

export function AdminDashboardModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { lang, t } = useLanguage();
  const { playClick, playSuccess } = useSound();
  const [activeTab, setActiveTab] = useState<"overview" | "dwell" | "conversions" | "stream">("overview");
  const [events, setEvents] = useState<TelemetryEvent[]>(INITIAL_EVENTS);
  const [activeSessions, setActiveSessions] = useState(14);
  const [copiedSnapshot, setCopiedSnapshot] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Periodic simulated live sessions fluctuation
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setActiveSessions((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        return Math.max(8, Math.min(26, prev + delta));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleTriggerSimEvent = () => {
    playClick();
    const cities = [
      "San Francisco, US",
      "London, UK",
      "Seattle, US",
      "Berlin, DE",
      "Paris, FR",
      "Singapore, SG",
      "Toronto, CA",
      "Austin, US"
    ];
    const actions: Array<{ action: string; section: string; type: "conversion" | "dwell" | "interaction" }> = [
      { action: "Triggered Contact Form Transmission", section: "Contact", type: "conversion" },
      { action: "Inspected Live Architecture Step: Telemetry", section: "Architecture", type: "interaction" },
      { action: "Downloaded Resume PDF", section: "Hero", type: "conversion" },
      { action: "Deep Read: Zendesk Enterprise Section", section: "Systems Bento", type: "dwell" },
      { action: "Toggled Interface Audio FX", section: "Header", type: "interaction" },
      { action: "Consulted SYS_COMMAND_AI on Gemini tool chains", section: "AI Chat", type: "interaction" },
    ];

    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomDwell = `${Math.floor(Math.random() * 4) + 1}m ${Math.floor(Math.random() * 50) + 10}s`;

    const newEvt: TelemetryEvent = {
      id: `evt-${Date.now()}`,
      time: "Just now",
      location: randomCity,
      action: randomAction.action,
      section: randomAction.section,
      dwell: randomDwell,
      type: randomAction.type,
    };

    setEvents((prev) => [newEvt, ...prev.slice(0, 9)]);
    playSuccess();
  };

  const handleRefresh = () => {
    playClick();
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      playSuccess();
    }, 600);
  };

  const handleExportSnapshot = () => {
    playClick();
    const snapshot = {
      timestamp: new Date().toISOString(),
      activeSessions,
      totalVisitors24h: 2842,
      avgSessionDwellSeconds: 268,
      ctaConversionRate: 0.148,
      sectionDwellBreakdown: {
        systemsBento: "41%",
        aboutTrajectory: "24%",
        architectureFlow: "16%",
        socialProof: "12%",
        competencyMatrix: "7%",
      },
      conversions: {
        contactTransmissions: 182,
        resumeDownloads: 685,
        aiChatSessions: 926,
        emailCopies: 278,
      },
      recentEvents: events,
    };

    navigator.clipboard.writeText(JSON.stringify(snapshot, null, 2));
    setCopiedSnapshot(true);
    playSuccess();
    setTimeout(() => setCopiedSnapshot(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl bg-[#090d16] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto"
        >
          {/* Header Bar */}
          <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-emerald-950/20 via-transparent to-indigo-950/20">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-bold">
                    {t.admin.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded font-bold">
                    <Radio size={10} className="animate-pulse" />
                    {t.admin.liveBadge}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  {t.admin.title}
                </h2>
              </div>
            </div>

            {/* Quick Actions & Close */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-mono transition-all"
                title={t.admin.refreshData}
              >
                <RefreshCw size={13} className={isRefreshing ? "animate-spin text-emerald-400" : ""} />
                <span className="hidden sm:inline">{t.admin.refreshData}</span>
              </button>

              <button
                onClick={handleExportSnapshot}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono transition-all"
              >
                {copiedSnapshot ? <CheckCircle2 size={13} /> : <FileDown size={13} />}
                <span>{copiedSnapshot ? "JSON Copied!" : "Export JSON"}</span>
              </button>

              <button
                onClick={() => {
                  playClick();
                  onClose();
                }}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all ml-1"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="px-6 sm:px-8 py-3 bg-white/[0.02] border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs font-mono">
            {[
              { id: "overview", label: "Executive Overview", icon: Activity },
              { id: "dwell", label: "Section Dwell Times", icon: Clock },
              { id: "conversions", label: "CTA Funnel Telemetry", icon: MousePointerClick },
              { id: "stream", label: "Live Event Stream", icon: Radio },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive不易 = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playClick();
                    setActiveTab(tab.id as typeof activeTab);
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                    isActive不易
                      ? "bg-white/10 text-white font-bold border border-white/20 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <Icon size={14} className={isActive不易 ? "text-emerald-400" : "text-slate-500"} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Body Content */}
          <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
            {/* TAB: Executive Overview */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* 4 Metric Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm relative overflow-hidden">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                      <span>{t.admin.activeSessions}</span>
                      <Users size={15} className="text-emerald-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white flex items-center gap-2">
                      {activeSessions}
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        LIVE
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-mono mt-1">
                      Concurrently traversing portfolio
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                      <span>{t.admin.totalVisitors}</span>
                      <Globe size={15} className="text-cyan-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                      2,842
                    </div>
                    <p className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                      <TrendingUp size={11} /> +18.4% this week
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                      <span>{t.admin.avgDwellTime}</span>
                      <Clock size={15} className="text-indigo-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                      4m 28s
                    </div>
                    <p className="text-[11px] text-slate-500 font-mono mt-1">
                      84% average scroll depth
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                      <span>{t.admin.conversionRate}</span>
                      <Zap size={15} className="text-amber-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
                      14.8%
                    </div>
                    <p className="text-[11px] text-slate-500 font-mono mt-1">
                      Action conversion index
                    </p>
                  </div>
                </div>

                {/* Quick Section Dwell Preview + Conversion Preview */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Dwell Mini Breakdown */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                        <Clock size={15} className="text-emerald-400" />
                        Top Sections by Dwell Time
                      </h3>
                      <button
                        onClick={() => setActiveTab("dwell")}
                        className="text-[11px] font-mono text-emerald-400 hover:underline"
                      >
                        Details →
                      </button>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div>
                        <div className="flex justify-between text-slate-300 mb-1">
                          <span>1. Systems Bento & Novalyte Case Studies</span>
                          <span className="text-emerald-400 font-bold">2m 14s (41%)</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: "41%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-300 mb-1">
                          <span>2. About & Trajectory Narrative</span>
                          <span className="text-cyan-400 font-bold">1m 18s (24%)</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full bg-cyan-400 rounded-full" style={{ width: "24%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-300 mb-1">
                          <span>3. End-to-End Architecture Engine</span>
                          <span className="text-indigo-400 font-bold">52s (16%)</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full bg-indigo-400 rounded-full" style={{ width: "16%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Conversion Funnels */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                        <MousePointerClick size={15} className="text-cyan-400" />
                        Key Conversion Actions
                      </h3>
                      <button
                        onClick={() => setActiveTab("conversions")}
                        className="text-[11px] font-mono text-cyan-400 hover:underline"
                      >
                        Details →
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-[11px] text-slate-400 font-mono">Resume PDF Downloads</div>
                        <div className="text-xl font-bold font-mono text-white mt-1">24.1%</div>
                        <div className="text-[10px] text-slate-500 font-mono">685 total downloads</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-[11px] text-slate-400 font-mono">Direct Inquiries</div>
                        <div className="text-xl font-bold font-mono text-emerald-400 mt-1">6.4%</div>
                        <div className="text-[10px] text-slate-500 font-mono">182 messages sent</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-[11px] text-slate-400 font-mono">AI Command HUD</div>
                        <div className="text-xl font-bold font-mono text-indigo-400 mt-1">32.6%</div>
                        <div className="text-[10px] text-slate-500 font-mono">926 interactive queries</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-[11px] text-slate-400 font-mono">Direct Email Copy</div>
                        <div className="text-xl font-bold font-mono text-amber-400 mt-1">9.8%</div>
                        <div className="text-[10px] text-slate-500 font-mono">278 clipboard copies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Section Dwell Times */}
            {activeTab === "dwell" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white font-mono">
                    {t.admin.dwellSectionTitle}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {t.admin.dwellSectionSubtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Systems Bento (Novalyte, Healthtech, Geospatialabs, Zendesk)", dwell: "2m 14s", share: 41, color: "bg-emerald-500", note: "Highest deep-dive engagement; visitors spend considerable time on the live interactive modal and telemetry logs." },
                    { name: "About Jamil Yakasai (Trajectory, Principles & Ethos)", dwell: "1m 18s", share: 24, color: "bg-cyan-400", note: "High completion rate with readers spending time on the Zendesk 500+ scale breakdown." },
                    { name: "Architecture & Verification Pipeline (5-stage flow)", dwell: "52s", share: 16, color: "bg-indigo-500", note: "Strong step-clicking interaction rate (78% of viewers click through all 5 stages)." },
                    { name: "Social Proof & Recommendations (Engineering leaders)", dwell: "40s", share: 12, color: "bg-amber-400", note: "Visitors engage with verified recommendation citations and endorsements." },
                    { name: "Technical Competency Matrix (Full Stack & Distributed)", dwell: "24s", share: 7, color: "bg-rose-400", note: "Quick technical scanning with high click rate on the hydration simulation." },
                  ].map((sec, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono">
                        <span className="text-xs text-white font-bold">{sec.name}</span>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-slate-400">Avg Dwell: <strong className="text-white">{sec.dwell}</strong></span>
                          <span className="text-emerald-400 font-bold">({sec.share}%)</span>
                        </div>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className={`h-full ${sec.color} rounded-full`} style={{ width: `${sec.share}%` }} />
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {sec.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: CTA Funnel Telemetry */}
            {activeTab === "conversions" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-white font-mono">
                    {t.admin.conversionTitle}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {t.admin.conversionSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "AI Command Center Queries", rate: "32.6%", count: "926 interactions", desc: "Visitors asking custom questions about architectures and experience." },
                    { label: "Executive Resume PDF Downloads", rate: "24.1%", count: "685 downloads", desc: "Direct recruitment and client background evaluations." },
                    { label: "External Systems / GitHub Outbound", rate: "16.2%", count: "460 outbound clicks", desc: "Traffic directed to Novalyte AI, GitHub, and production repos." },
                    { label: "Direct Inquiries Transmitted", rate: "6.4%", count: "182 transmissions", desc: "Qualified inbound messages queued directly to mrjamilyakasai@gmail.com." },
                    { label: "Quick Email Address Copy", rate: "9.8%", count: "278 clipboard copies", desc: "Direct outreach through native mail clients." },
                    { label: "Language Toggle Switching", rate: "18.5%", count: "524 language switches", desc: "Visitors exploring bilingual English and French representations." },
                  ].map((conv, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 font-mono space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white font-bold">{conv.label}</span>
                        <span className="text-sm font-bold text-emerald-400">{conv.rate}</span>
                      </div>
                      <div className="text-[11px] text-slate-500">{conv.count}</div>
                      <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                        {conv.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: Live Event Stream */}
            {activeTab === "stream" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-white font-mono">
                      {t.admin.liveStreamTitle}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {t.admin.liveStreamSubtitle}
                    </p>
                  </div>

                  <button
                    onClick={handleTriggerSimEvent}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-mono font-bold text-xs hover:bg-emerald-400 transition-all self-start sm:self-auto shadow-md"
                  >
                    <Sparkles size={13} />
                    <span>{t.admin.triggerSimEvent}</span>
                  </button>
                </div>

                <div className="space-y-2.5 font-mono">
                  {events.map((evt) => (
                    <motion.div
                      key={evt.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            evt.type === "conversion"
                              ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                              : evt.type === "dwell"
                              ? "bg-cyan-400"
                              : "bg-indigo-400"
                          }`}
                        />
                        <div>
                          <span className="text-white font-medium">{evt.action}</span>
                          <div className="text-[10px] text-slate-500">
                            {evt.location} • {evt.section}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-auto text-[11px]">
                        <span className="text-slate-400">Dwell: {evt.dwell}</span>
                        <span className="text-slate-500">{evt.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar with Shortcut Hint */}
          <div className="p-4 sm:p-6 bg-white/[0.01] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-emerald-400" />
              <span>{t.admin.shortcutsTitle}: <strong className="text-white font-mono">{t.admin.shortcutKeys}</strong></span>
            </div>

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold transition-all self-end sm:self-auto"
            >
              {t.admin.closeBtn}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/**
 * Secret Key Listener Hook & Manager
 */
export function useAdminDashboardTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let keyBuffer = "";
    let keyTimer: NodeJS.Timeout | null = null;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Shortcut 1: Ctrl + Shift + A or Cmd + Shift + A
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      // Shortcut 2: Ctrl + Shift + D or Cmd + Shift + D
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "D" || e.key === "d")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      // Shortcut 3: Typing 'admin' in sequence
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }

      keyBuffer += e.key.toLowerCase();
      if (keyTimer) clearTimeout(keyTimer);
      keyTimer = setTimeout(() => {
        keyBuffer = "";
      }, 1000);

      if (keyBuffer.includes("admin")) {
        setIsOpen(true);
        keyBuffer = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev),
  };
}
