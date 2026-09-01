"use client";

import React, { useState } from "react";
import { Download, Mail, Phone, ExternalLink, Check, Copy, MessageSquarePlus } from "lucide-react";
import { ShareButton } from "./share-modal";
import { ContactButton, ContactModal } from "./contact-modal";
import { useLanguage } from "./language-provider";

export function Footer() {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <footer id="contact" className="pt-20 pb-12 px-6 border-t border-white/10 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded mb-4 inline-block font-semibold">
            {t.footer.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            {t.footer.heading}
          </h2>
          <p className="text-slate-400 max-w-sm mb-8 text-sm leading-relaxed">
            {t.footer.subheading}
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/10"
            >
              <Mail size={16} />
              {t.footer.sendInquiryBtn}
            </button>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://novalyte.io", "_blank");
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs tracking-wider uppercase transition-all"
            >
              <Download size={15} className="text-slate-400" />
              {t.footer.resumeBtn}
            </a>

            <ShareButton className="px-5 py-3.5" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
              {t.footer.directTransmission}
            </span>
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-[10px] font-mono text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <MessageSquarePlus size={12} />
              {lang === "fr" ? "Ouvrir le Formulaire" : "Open Form Modal"}
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all group">
            <div className="flex items-center gap-3 text-slate-200">
              <Mail size={16} className="text-emerald-400" />
              <span className="font-mono text-xs sm:text-sm">mrjamilyakasai@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsContactOpen(true)}
                className="text-[10px] font-mono text-slate-400 hover:text-emerald-400 px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                title="Send inquiry"
              >
                {lang === "fr" ? "Écrire" : "Draft"}
              </button>
              <button
                onClick={() => handleCopy("mrjamilyakasai@gmail.com", "email")}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                title="Copy Email"
              >
                {copied === "email" ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all group">
            <div className="flex items-center gap-3 text-slate-200">
              <Phone size={16} className="text-cyan-400" />
              <span className="font-mono text-xs sm:text-sm">415-918-1995</span>
            </div>
            <button
              onClick={() => handleCopy("415-918-1995", "phone")}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              title="Copy Phone"
            >
              {copied === "phone" ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            </button>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={() => setIsContactOpen(true)}
              className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-mono text-xs tracking-wider uppercase transition-colors font-semibold"
            >
              {lang === "fr" ? "Formulaire de Contact" : "Inquiry Form"}
              <ExternalLink size={12} />
            </button>
            <a
              href="https://linkedin.com/in/sanbosay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-wider uppercase transition-colors"
            >
              LinkedIn
              <ExternalLink size={12} />
            </a>
            <a
              href="https://novalyte.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-wider uppercase transition-colors"
            >
              Novalyte
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-[11px] font-mono text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} {t.footer.rights}</p>
        <div className="flex flex-wrap items-center gap-6 text-slate-400 uppercase tracking-tight">
          <span>San Francisco, CA</span>
          <span>415.918.1995</span>
          <span className="text-emerald-400 font-semibold">{t.footer.availableStatus}</span>
        </div>
      </div>

      {/* Embedded Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </footer>
  );
}
