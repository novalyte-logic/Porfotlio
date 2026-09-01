"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Send, X, Loader2 } from "lucide-react";
import { useLanguage } from "./language-provider";
import { useSound } from "./sound-provider";

export function AiChat() {
  const { lang, t } = useLanguage();
  const { playClick, playSuccess, playKeystroke } = useSound();
  const [isOpen, setIsOpen] = useState(false);
  const [customMessages, setCustomMessages] = useState<{ role: "user" | "ai"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Derived messages: if user hasn't sent custom messages, start with localized greeting
  const messages = useMemo(() => {
    return customMessages.length === 0
      ? [{ role: "ai" as const, content: t.aiChat.greeting }]
      : customMessages;
  }, [customMessages, t.aiChat.greeting]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    playClick();
    const userMessage = input.trim();
    const startingList = customMessages.length === 0
      ? [{ role: "ai" as const, content: t.aiChat.greeting }]
      : customMessages;

    setCustomMessages([...startingList, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setCustomMessages((prev) => [...prev, { role: "ai", content: data.text }]);
      playSuccess();
    } catch {
      setCustomMessages((prev) => [
        ...prev,
        { role: "ai", content: lang === "fr" ? "Erreur : Connexion interrompue. Veuillez réessayer." : "Error: Connection interrupted. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-slate-900/90 border border-white/15 text-white shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <Terminal size={18} className="text-emerald-400" />
            <span className="font-mono text-xs tracking-wider uppercase font-bold">
              {t.aiChat.buttonLabel}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-[92vw] max-w-sm md:w-[420px] h-[520px] bg-[#0b0f17]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                <Terminal size={16} className="text-emerald-400" />
                <h3 className="font-mono text-xs font-bold tracking-wider text-white">{t.aiChat.title}</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
                aria-label="Close Command AI"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 font-mono text-xs"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col max-w-[88%] ${
                    msg.role === "user" ? "self-end items-end" : "self-start items-start"
                  }`}
                >
                  <span className="text-[9px] text-slate-500 mb-1 uppercase tracking-wider">
                    {msg.role === "user" ? "USER" : "AI_ENGINE"}
                  </span>
                  <div
                    className={`px-3.5 py-2.5 rounded-xl whitespace-pre-wrap leading-relaxed ${
                      msg.role === "user"
                        ? "bg-indigo-600 text-white font-sans text-xs"
                        : "bg-white/5 border border-white/10 text-slate-200"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="self-start flex flex-col max-w-[88%]">
                   <span className="text-[9px] text-slate-500 mb-1 uppercase tracking-wider">AI_ENGINE</span>
                   <div className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center gap-2 font-mono text-xs">
                      <Loader2 size={13} className="animate-spin text-emerald-400" />
                      <span>{t.aiChat.thinking}</span>
                   </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-white/[0.02]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.aiChat.placeholder}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs font-mono text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 disabled:opacity-40 transition-all flex items-center justify-center font-bold"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
