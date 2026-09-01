"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Share2, 
  Copy, 
  Check, 
  X, 
  Linkedin, 
  Twitter, 
  Mail, 
  MessageSquare, 
  QrCode, 
  ExternalLink,
  Sparkles,
  Smartphone
} from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const portfolioUrl = typeof window !== "undefined" ? window.location.origin : "https://jamilyakasai.com";
  const shareTitle = "Jamil Yakasai — Founder & AI Systems Builder";
  const shareText = "Check out Jamil Yakasai's portfolio — Applied AI systems, autonomous control planes, and enterprise operations.";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(portfolioUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: portfolioUrl,
        });
      } catch {
        // User cancelled or not supported
      }
    } else {
      handleCopyLink();
    }
  };

  const shareLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      color: "hover:bg-[#0077B5]/20 hover:border-[#0077B5]/50 text-[#0077B5]",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioUrl)}`
    },
    {
      name: "X (Twitter)",
      icon: <Twitter size={18} />,
      color: "hover:bg-white/10 hover:border-white/30 text-white",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(portfolioUrl)}`
    },
    {
      name: "WhatsApp",
      icon: <MessageSquare size={18} />,
      color: "hover:bg-[#25D366]/20 hover:border-[#25D366]/50 text-[#25D366]",
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + portfolioUrl)}`
    },
    {
      name: "Email",
      icon: <Mail size={18} />,
      color: "hover:bg-cyan-500/20 hover:border-cyan-500/50 text-cyan-400",
      href: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + "\n\n" + portfolioUrl)}`
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#0b0f17]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="w-full max-w-md bg-[#0f172a] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl pointer-events-auto relative overflow-hidden text-slate-100"
            >
              {/* Subtle Ambient Orb */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-500/10 blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Share2 size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                    Transmission
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    Share Profile
                  </h3>
                </div>
              </div>

              {/* Preview Mini Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 flex items-center gap-3.5">
                <div className="w-11 h-11 bg-gradient-to-tr from-emerald-500 to-indigo-600 rounded-xl flex items-center justify-center font-mono font-bold text-white shadow-md shadow-indigo-500/20 flex-shrink-0">
                  JY
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white truncate">Jamil Yakasai</h4>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 truncate">
                    Founder & AI Systems Builder • SF
                  </p>
                </div>
              </div>

              {/* Quick Copy Link Box */}
              <div className="mb-6">
                <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  Portfolio Link
                </label>
                <div className="flex items-center gap-2 p-1.5 pl-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs font-mono text-slate-300 truncate flex-1 select-all">
                    {portfolioUrl}
                  </span>
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={14} />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mb-6">
                <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  Direct Broadcast
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {shareLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 transition-all text-xs font-mono font-medium ${item.color}`}
                    >
                      {item.icon}
                      <span className="text-slate-200">{item.name}</span>
                      <ExternalLink size={11} className="ml-auto opacity-50" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Native Device Share / QR Code Toggle */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
                <button
                  onClick={handleNativeShare}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Smartphone size={15} className="text-emerald-400" />
                  <span>Native System Share</span>
                </button>
                <button
                  onClick={() => setShowQr(!showQr)}
                  className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <QrCode size={15} />
                  <span>{showQr ? "Hide QR" : "Show QR"}</span>
                </button>
              </div>

              {/* QR Code Reveal */}
              {showQr && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 bg-white rounded-2xl flex flex-col items-center justify-center text-slate-950 text-center"
                >
                  {/* SVG QR Code Simulation with precise matrix appearance */}
                  <div className="p-2 bg-white rounded-xl">
                    <svg viewBox="0 0 100 100" className="w-32 h-32 fill-slate-950">
                      {/* Corner Position Detection Squares */}
                      <rect x="0" y="0" width="28" height="28" rx="4" />
                      <rect x="4" y="4" width="20" height="20" fill="white" rx="2" />
                      <rect x="8" y="8" width="12" height="12" rx="2" />

                      <rect x="72" y="0" width="28" height="28" rx="4" />
                      <rect x="76" y="4" width="20" height="20" fill="white" rx="2" />
                      <rect x="80" y="8" width="12" height="12" rx="2" />

                      <rect x="0" y="72" width="28" height="28" rx="4" />
                      <rect x="4" y="76" width="20" height="20" fill="white" rx="2" />
                      <rect x="8" y="80" width="12" height="12" rx="2" />

                      {/* Data Pattern */}
                      <rect x="36" y="8" width="6" height="6" />
                      <rect x="48" y="8" width="6" height="6" />
                      <rect x="58" y="8" width="6" height="6" />
                      <rect x="36" y="20" width="6" height="6" />
                      <rect x="48" y="20" width="16" height="6" />
                      
                      <rect x="8" y="36" width="6" height="16" />
                      <rect x="20" y="44" width="8" height="8" />
                      <rect x="36" y="36" width="12" height="12" />
                      <rect x="54" y="36" width="10" height="6" />
                      <rect x="70" y="36" width="14" height="6" />
                      <rect x="88" y="44" width="8" height="8" />

                      <rect x="36" y="54" width="6" height="10" />
                      <rect x="48" y="54" width="12" height="12" />
                      <rect x="66" y="54" width="8" height="16" />
                      <rect x="80" y="54" width="12" height="6" />

                      <rect x="36" y="72" width="12" height="6" />
                      <rect x="54" y="72" width="6" height="18" />
                      <rect x="66" y="78" width="14" height="6" />
                      <rect x="86" y="72" width="8" height="18" />
                      <rect x="36" y="86" width="12" height="6" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono text-slate-600 mt-2 font-bold">
                    SCAN TO OPEN ON MOBILE
                  </span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ShareButton({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-mono text-xs tracking-wider uppercase transition-all shadow-sm ${className}`}
        aria-label="Share profile"
      >
        <Share2 size={14} className="text-emerald-400" />
        <span>Share Profile</span>
      </button>

      <ShareModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
