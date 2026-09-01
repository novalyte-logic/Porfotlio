"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, translations, TranslationDictionary } from "@/lib/i18n";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationDictionary;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-lang") as Language;
      if (saved === "en" || saved === "fr") {
        return saved;
      }
    }
    return "en";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("portfolio-lang", newLang);
      document.documentElement.lang = newLang;
    } catch {}
  };

  const toggleLang = () => {
    const nextLang = lang === "en" ? "fr" : "en";
    setLang(nextLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
        toggleLang
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
