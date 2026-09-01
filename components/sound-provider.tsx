"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from "react";

interface SoundContextType {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  toggleSound: () => void;
  playHover: () => void;
  playClick: () => void;
  playToggle: (isOn?: boolean) => void;
  playSuccess: () => void;
  playKeystroke: () => void;
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: false,
  setSoundEnabled: () => null,
  toggleSound: () => null,
  playHover: () => null,
  playClick: () => null,
  playToggle: () => null,
  playSuccess: () => null,
  playKeystroke: () => null,
});

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabledState] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      try {
        return localStorage.getItem("portfolio-sound-enabled") === "true";
      } catch {
        return false;
      }
    }
    return false;
  });

  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = () => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }
    return audioCtxRef.current;
  };

  const playHoverSound = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 0.025);

      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.025);
    } catch {}
  };

  const playClickSound = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(480, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.045, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.04);
    } catch {}
  };

  const playToggleSound = (isOn = true) => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      if (isOn) {
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(1040, now + 0.08);
      } else {
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);
      }

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {}
  };

  const playSuccessSound = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.035, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.15);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.15);
      });
    } catch {}
  };

  const playKeystrokeSound = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(220 + Math.random() * 80, ctx.currentTime);

      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.02);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.02);
    } catch {}
  };

  const setSoundEnabled = (enabled: boolean) => {
    setSoundEnabledState(enabled);
    try {
      localStorage.setItem("portfolio-sound-enabled", enabled ? "true" : "false");
    } catch {}
    if (enabled) {
      setTimeout(() => {
        playToggleSound(true);
      }, 50);
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const playHover = () => {
    if (soundEnabled) playHoverSound();
  };

  const playClick = () => {
    if (soundEnabled) playClickSound();
  };

  const playToggle = (isOn = true) => {
    if (soundEnabled) playToggleSound(isOn);
  };

  const playSuccess = () => {
    if (soundEnabled) playSuccessSound();
  };

  const playKeystroke = () => {
    if (soundEnabled) playKeystrokeSound();
  };

  // Attach subtle global hover and click listener for buttons & interactive elements
  useEffect(() => {
    if (!soundEnabled) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("button, a, select, input[type='checkbox'], [role='button']");
      if (target) {
        playHoverSound();
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("button, a, select, [role='button']");
      if (target) {
        playClickSound();
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundEnabled]);

  return (
    <SoundContext.Provider
      value={{
        soundEnabled,
        setSoundEnabled,
        toggleSound,
        playHover,
        playClick,
        playToggle,
        playSuccess,
        playKeystroke,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export const useSound = () => {
  return useContext(SoundContext);
};
