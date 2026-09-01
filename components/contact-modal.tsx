"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Send, 
  CheckCircle2, 
  X, 
  Mail, 
  User, 
  Building2, 
  MessageSquare, 
  Sparkles,
  Loader2,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "./language-provider";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    roleType: "Full-Time Applied AI",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate direct inquiry transmission & mailto trigger fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Construct mailto link as fallback to ensure email client delivery
      const subject = encodeURIComponent(`[Inquiry: ${formData.roleType}] From ${formData.name} (${formData.company || 'Partner'})`);
      const body = encodeURIComponent(
        `Hi Jamil,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany/Org: ${formData.company || 'N/A'}\nOpportunity Type: ${formData.roleType}\n\nMessage:\n${formData.message}\n\nSent from your portfolio command surface.`
      );
      
      // Open mailto link
      window.location.href = `mailto:mrjamilyakasai@gmail.com?subject=${subject}&body=${body}`;
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      roleType: "Full-Time Applied AI",
      message: ""
    });
    onClose();
  };

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

          {/* Modal Card */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="w-full max-w-lg bg-[#0f172a] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl pointer-events-auto relative overflow-hidden text-slate-100 max-h-[92vh] flex flex-col"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-500/10 blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              {isSubmitted ? (
                <div className="py-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 size={32} />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold mb-2">
                    {t.contact.sentSuccessTitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {t.contact.sentSuccessTitle}
                  </h3>
                  <p className="text-slate-300 text-sm max-w-sm mb-6 leading-relaxed">
                    {t.contact.sentSuccessDesc}
                  </p>
                  <button
                    onClick={handleResetAndClose}
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    {t.contact.doneBtn}
                  </button>
                </div>
              ) : (
                <div className="overflow-y-auto pr-1 flex-1">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                        {t.contact.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                        {t.contact.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-mono">
                    {t.contact.subtitle}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                          {t.contact.nameLabel}
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Alex Mercer"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono placeholder:text-slate-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                          {t.contact.emailLabel}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    {/* Company & Role Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                          {t.contact.companyLabel}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Anthropic, Scale AI, Stealth"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono placeholder:text-slate-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                          {t.contact.inquiryFocusLabel}
                        </label>
                        <select
                          value={formData.roleType}
                          onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                          className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                        >
                          <option value="Full-Time Applied AI">Full-Time Applied AI / FDE</option>
                          <option value="Staff Systems Architect">Staff Systems Architect</option>
                          <option value="Contract / Advisor">Contract / Advisory Build</option>
                          <option value="General Collaboration">General Technical Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-1.5 font-semibold">
                        {t.contact.messageLabel}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about the role, technical architecture, or systems problem you're looking to solve..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono placeholder:text-slate-500 resize-none leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex items-center justify-between gap-4">
                      <span className="text-[10px] font-mono text-slate-500">
                        {t.contact.targetEmailNotice}
                      </span>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 shadow-lg shadow-emerald-500/10"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            <span>{t.contact.submittingBtn}</span>
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            <span>{t.contact.submitBtn}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export function ContactButton({ 
  className = "", 
  variant = "primary",
  children
}: { 
  className?: string; 
  variant?: "primary" | "secondary" | "outline";
  children?: React.ReactNode;
}) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const getStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/10 font-bold";
      case "secondary":
        return "bg-white/5 hover:bg-white/10 border border-white/10 text-white";
      case "outline":
        return "border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10";
      default:
        return "bg-emerald-500 hover:bg-emerald-400 text-slate-950";
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs tracking-wider uppercase transition-all ${getStyle()} ${className}`}
      >
        {children || (
          <>
            <Mail size={15} />
            <span>{t.hero.contactBtn}</span>
          </>
        )}
      </button>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
