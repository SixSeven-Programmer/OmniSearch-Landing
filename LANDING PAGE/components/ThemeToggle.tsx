"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  variant?: "icon" | "full";
  className?: string;
}

export function ThemeToggle({
  variant = "icon",
  className = "",
}: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const saved = localStorage.getItem("omnisearch-theme");
    if (saved === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else if (saved === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      setIsDark(root.classList.contains("dark"));
    }

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    if (nextIsDark) {
      root.classList.add("dark");
      localStorage.setItem("omnisearch-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("omnisearch-theme", "light");
    }
    setIsDark(nextIsDark);
    window.dispatchEvent(
      new CustomEvent("omnisearch-theme-change", {
        detail: { theme: nextIsDark ? "dark" : "light" },
      })
    );
  };

  const label = mounted
    ? isDark
      ? "Switch to light mode"
      : "Switch to dark mode"
    : "Toggle color theme";

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={label}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-[10px] text-sm font-medium text-[#253745] dark:text-[#9BA8AB] hover:bg-[#CCD0CF]/60 dark:hover:bg-[#11212D]/60 hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors ${className}`}
      >
        <span>{isDark ? "Light mode" : "Dark mode"}</span>
        {isDark ? (
          <Sun className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
        ) : (
          <Moon className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8]" />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-[10px] border border-[#9BA8AB]/70 dark:border-[#253745] bg-white/80 dark:bg-[#11212D] text-[#06141B] dark:text-[#CCD0CF] hover:bg-[#CCD0CF]/50 dark:hover:bg-[#253745] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] dark:focus-visible:ring-[#38BDF8] ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 stroke-[1.85]" />
      ) : (
        <Moon className="w-4 h-4 stroke-[1.85]" />
      )}
    </button>
  );
}
