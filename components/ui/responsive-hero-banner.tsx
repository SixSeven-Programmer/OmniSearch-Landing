"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ArrowRight, Play } from "lucide-react";
import { BrandLogo } from "@/LANDING PAGE/components/BrandLogo";
import { ThemeToggle } from "@/LANDING PAGE/components/ThemeToggle";
import { SonarGrid } from "@/components/ui/sonar-grid";

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
  external?: boolean;
}

export interface Partner {
  logoUrl?: string;
  href: string;
  label?: string;
  sublabel?: string;
}

export interface ResponsiveHeroBannerProps {
  logoUrl?: string;
  backgroundImageUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  badgeText?: string;
  badgeLabel?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  partnersTitle?: string;
  partners?: Partner[];
  showHeader?: boolean;
  children?: React.ReactNode;
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoUrl = "/assets/aistudio/OmniSearch_Logo_f0580944.png",
  navLinks = [
    { label: "Product", href: "/product", isActive: true },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Docs", href: "/docs" },
    { label: "About", href: "/about" },
    { label: "Desktop UI", href: "/workspace" },
  ],
  ctaButtonText = "Download for Windows",
  ctaButtonHref = "https://www.github.com/Muzzammil-malik/OmniSearch",
  badgeLabel = "Local-First",
  badgeText = "Hybrid Keyword + Semantic Search Across Your Files",
  title = "Search Beyond Filenames",
  titleLine2 = "Across Your Entire Machine",
  description = "OmniSearch helps you find what you're looking for across documents, code, images, audio and video — using SQLite FTS5 lexical precision and local EmbeddingGemma semantic understanding.",
  primaryButtonText = "Download for Windows",
  primaryButtonHref = "https://www.github.com/Muzzammil-malik/OmniSearch",
  secondaryButtonText = "Explore How It Works",
  secondaryButtonHref = "/how-it-works",
  partnersTitle = "Built on proven local-first indexing & retrieval engines",
  partners = [
    { label: "SQLite FTS5", sublabel: "BM25 Lexical Engine", href: "/how-it-works" },
    { label: "EmbeddingGemma", sublabel: "Local Dense Vectors", href: "/how-it-works" },
    { label: "ChromaDB", sublabel: "Cosine Vector Store", href: "/how-it-works" },
    { label: "RRF Fusion", sublabel: "Deterministic Ranking", href: "/how-it-works" },
    { label: "127.0.0.1", sublabel: "Loopback Isolation", href: "/how-it-works" },
  ],
  showHeader = true,
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <SonarGrid
      ringWidth={105}
      speed={135}
      amplitude={2.0}
      pingEvery={3.8}
      interactive={false}
      spacing={26}
      dotRadius={1.45}
      baseOpacity={0.28}
      pingArea={[0.5, 0.28, 0.5, 0.28]}
      className="w-full isolate min-h-screen overflow-hidden relative bg-[#EEF1F0] dark:bg-[#000000] text-[#06141B] dark:text-white transition-colors duration-300"
    >
      {/* ================================================================== */}
      {/* DUAL-THEME ATMOSPHERIC WASH OVER SONAR GRID                        */}
      {/* Keeps headline & copy razor-sharp while sonar rings pass underneath */}
      {/* ================================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Center readability halo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_44%_32%_at_50%_28%,rgba(238,241,240,0.88)_0%,transparent_100%)] dark:bg-[radial-gradient(ellipse_44%_32%_at_50%_28%,rgba(0,0,0,0.92)_0%,transparent_100%)]" />
        {/* Subtle brand-blue top horizon glow */}
        <div className="absolute inset-x-0 -top-24 h-[520px] bg-[radial-gradient(ellipse_75%_55%_at_50%_10%,rgba(2,132,199,0.12),rgba(155,168,171,0.28)_50%,transparent_80%)] dark:bg-[radial-gradient(ellipse_75%_55%_at_50%_10%,rgba(56,189,248,0.10),rgba(0,0,0,0.8)_55%,transparent_85%)]" />
        {/* Subtle bottom border ring */}
        <div className="absolute inset-0 ring-1 ring-[#9BA8AB]/40 dark:ring-white/10" />
      </div>

      {/* ================================================================== */}
      {/* FLOATING PILL HEADER (Shown when used standalone)                  */}
      {/* ================================================================== */}
      {showHeader && (
        <header className="z-30 xl:top-4 relative">
          <div className="mx-6">
            <div className="flex items-center justify-between pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 focus-visible:outline-none"
                aria-label="OmniSearch Home"
              >
                {logoUrl ? <BrandLogo size="md" /> : <BrandLogo size="md" />}
              </Link>

              <nav
                className="hidden md:flex items-center gap-2"
                aria-label="Primary Navigation"
              >
                <div className="flex items-center gap-1 rounded-full bg-white/80 dark:bg-white/5 px-1.5 py-1 ring-1 ring-[#9BA8AB]/60 dark:ring-white/10 backdrop-blur-md shadow-subtle">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`px-3 py-2 text-sm font-medium font-sans transition-colors rounded-full ${
                        link.isActive
                          ? "text-[#06141B] dark:text-white bg-[#CCD0CF]/60 dark:bg-white/10"
                          : "text-[#253745] hover:text-[#06141B] dark:text-white/80 dark:hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="px-1">
                    <ThemeToggle />
                  </div>
                  <Link
                    href={ctaButtonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center gap-2 rounded-full bg-[#06141B] text-[#CCD0CF] hover:bg-[#11212D] dark:bg-[#38BDF8] dark:text-[#06141B] dark:hover:bg-[#7DD3FC] px-3.5 py-2 text-sm font-medium font-sans transition-colors"
                  >
                    {ctaButtonText}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </nav>

              <div className="flex md:hidden items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-white/10 ring-1 ring-[#9BA8AB]/60 dark:ring-white/15 backdrop-blur"
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5 text-[#06141B] dark:text-white/90" />
                  ) : (
                    <Menu className="h-5 w-5 text-[#06141B] dark:text-white/90" />
                  )}
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden mt-3 rounded-2xl bg-white/95 dark:bg-[#11212D]/95 ring-1 ring-[#9BA8AB]/60 dark:ring-white/15 backdrop-blur-md p-4 space-y-2 shadow-card">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl text-sm font-medium font-sans text-[#06141B] dark:text-white/90 hover:bg-[#CCD0CF]/50 dark:hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={ctaButtonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#06141B] text-[#CCD0CF] dark:bg-[#38BDF8] dark:text-[#06141B] px-4 py-2.5 text-sm font-medium font-sans"
                >
                  {ctaButtonText}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </header>
      )}

      {/* ================================================================== */}
      {/* CENTERED HERO CONTENT ON TOP OF SONAR GRID                         */}
      {/* ================================================================== */}
      <div className="z-10 relative">
        <div className="sm:pt-24 md:pt-28 lg:pt-32 max-w-7xl mx-auto pt-20 px-6 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            {/* Top Glassmorphic Badge Pill */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/85 dark:bg-[#11212D]/80 px-2.5 py-2 ring-1 ring-[#9BA8AB]/70 dark:ring-white/15 backdrop-blur animate-fade-slide-in-1 shadow-subtle">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white dark:text-[#06141B] bg-[#0284C7] dark:bg-[#38BDF8] rounded-full py-0.5 px-2.5 font-sans">
                {badgeLabel}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#06141B]/90 dark:text-white/90 font-sans pr-1">
                {badgeText}
              </span>
            </div>

            {/* Two-Line Editorial Serif Headline */}
            <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06] text-4xl text-[#06141B] dark:text-white tracking-tight font-instrument-serif font-normal animate-fade-slide-in-2">
              {title}
              {titleLine2 && (
                <>
                  <br className="hidden sm:block" />{" "}
                  <span className="text-[#253745] dark:text-[#CCD0CF]">
                    {titleLine2}
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Sans-Serif Description */}
            <p className="sm:text-lg animate-fade-slide-in-3 text-base text-[#253745] dark:text-white/80 max-w-2xl mt-6 mx-auto font-sans leading-relaxed">
              {description}
            </p>

            {/* Primary & Secondary Action Pill Buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
              <Link
                href={primaryButtonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#CCD0CF] bg-[#06141B] hover:bg-[#11212D] ring-1 ring-[#06141B] dark:text-white dark:bg-[#11212D]/90 dark:hover:bg-[#253745] dark:ring-[#38BDF8]/40 rounded-full py-3 px-6 font-sans transition-colors shadow-subtle"
              >
                {primaryButtonText}
                <ArrowRight className="h-4 w-4 text-[#38BDF8]" />
              </Link>
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 hover:bg-white ring-1 ring-[#9BA8AB]/60 dark:ring-[#253745] dark:bg-[#11212D]/60 dark:hover:bg-[#11212D] px-5 py-3 text-sm font-medium text-[#06141B] hover:text-[#0284C7] dark:text-white/90 dark:hover:text-white font-sans backdrop-blur transition-colors"
              >
                {secondaryButtonText}
                <Play className="w-4 h-4 text-[#0284C7] dark:text-[#38BDF8] fill-current" />
              </Link>
            </div>
          </div>

          {/* Partners / Core Engines Strip */}
          <div className="mx-auto mt-16 max-w-5xl">
            <p className="animate-fade-slide-in-1 text-xs sm:text-sm font-sans uppercase tracking-[0.18em] text-[#4A5C6A] dark:text-[#9BA8AB] text-center">
              {partnersTitle}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 animate-fade-slide-in-2 text-[#253745] dark:text-white/80 mt-6 items-center justify-items-center gap-4">
              {partners.map((partner, index) =>
                partner.logoUrl ? (
                  <a
                    key={index}
                    href={partner.href}
                    className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-cover rounded-full opacity-80 hover:opacity-100 transition-opacity"
                    style={{ backgroundImage: `url(${partner.logoUrl})` }}
                    aria-label={partner.label || `Partner ${index + 1}`}
                  />
                ) : (
                  <Link
                    key={index}
                    href={partner.href}
                    className="w-full flex flex-col items-center justify-center px-3.5 py-2.5 rounded-full bg-white/80 dark:bg-[#11212D]/80 ring-1 ring-[#9BA8AB]/60 dark:ring-[#253745] hover:ring-[#0284C7] dark:hover:ring-[#38BDF8]/60 backdrop-blur-sm transition-all text-center"
                  >
                    <span className="font-mono text-xs font-semibold text-[#06141B] dark:text-[#CCD0CF]">
                      {partner.label}
                    </span>
                    {partner.sublabel && (
                      <span className="font-sans text-[10px] text-[#4A5C6A] dark:text-[#9BA8AB] mt-0.5">
                        {partner.sublabel}
                      </span>
                    )}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Optional Embedded Interactive Product Mockup / Children */}
          {children && <div className="mt-14 sm:mt-16">{children}</div>}
        </div>
      </div>
    </SonarGrid>
  );
};

export default ResponsiveHeroBanner;
