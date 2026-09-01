"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isTransitioning: boolean;
}

const ThemeProviderContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => null,
  toggleTheme: () => null,
  isTransitioning: false,
});

export function ThemeProvider({
  children,
  defaultTheme = "dark",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme") as Theme;
      if (saved === "dark" || saved === "light") {
        return saved;
      }
    }
    return defaultTheme;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setIsTransitioning(true);
    setThemeState(newTheme);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProviderContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isTransitioning,
      }}
    >
      {/* Morph Transition Flash / Ripple overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-300 opacity-20 bg-emerald-500/10 backdrop-blur-[1px]" />
      )}
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
