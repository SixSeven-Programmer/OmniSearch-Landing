"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";
import {
  NAV_LINKS,
  SITE_CONFIG,
  WINDOWS_DOWNLOAD_URL,
} from "../lib/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pt-4 pb-2">
          {/* Left Brand Lockup */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/75 dark:bg-[#000000]/70 ring-1 ring-[#9BA8AB]/50 dark:ring-white/10 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] dark:focus-visible:ring-[#38BDF8]"
            aria-label="OmniSearch Home"
          >
            <BrandLogo size="md" />
          </Link>

          {/* Right Floating Glassmorphic Pill Navigation (Transformed per ResponsiveHeroBanner) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-2"
          >
            <div className="flex items-center gap-1 rounded-full bg-white/80 dark:bg-white/5 px-1.5 py-1 ring-1 ring-[#9BA8AB]/60 dark:ring-white/15 backdrop-blur-md shadow-subtle">
              {NAV_LINKS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname?.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-full text-sm font-medium font-sans transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? "text-[#06141B] dark:text-white bg-[#CCD0CF]/65 dark:bg-white/10"
                        : "text-[#253745] hover:text-[#06141B] dark:text-white/80 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/workspace"
                className="px-3 py-2 rounded-full text-sm font-medium font-sans text-[#253745] hover:text-[#06141B] dark:text-white/80 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
                title="Launch interactive desktop workspace preview"
              >
                Desktop UI
              </Link>

              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-full text-sm font-medium font-sans text-[#253745] hover:text-[#06141B] dark:text-white/80 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                GitHub
              </a>

              <div className="px-1">
                <ThemeToggle />
              </div>

              <a
                href={WINDOWS_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex items-center gap-2 rounded-full bg-[#06141B] text-[#CCD0CF] hover:bg-[#11212D] dark:bg-[#38BDF8] dark:text-[#06141B] dark:hover:bg-[#7DD3FC] px-4 py-2 text-sm font-medium font-sans transition-colors whitespace-nowrap shrink-0"
              >
                <span>Download for Windows</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>

          {/* Mobile Controls (Theme Toggle + Circular Glassmorphic Menu Button) */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-white/10 ring-1 ring-[#9BA8AB]/60 dark:ring-white/15 backdrop-blur"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-[#06141B] dark:text-white/90" />
              ) : (
                <Menu className="h-5 w-5 text-[#06141B] dark:text-white/90" />
              )}
            </button>
          </div>
        </div>

        {/* Accessible Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation-menu"
            aria-label="Mobile Navigation"
            className="md:hidden mt-2 rounded-2xl bg-white/95 dark:bg-[#11212D]/95 ring-1 ring-[#9BA8AB]/60 dark:ring-white/15 backdrop-blur-md p-4 space-y-3 shadow-card"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-medium font-sans transition-colors ${
                      isActive
                        ? "bg-[#CCD0CF] dark:bg-[#253745] text-[#06141B] dark:text-white"
                        : "text-[#253745] dark:text-white/80 hover:bg-[#CCD0CF]/60 dark:hover:bg-white/10 hover:text-[#06141B] dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/workspace"
                className="px-3.5 py-2.5 rounded-xl text-sm font-medium font-sans text-[#253745] dark:text-white/80 hover:bg-[#CCD0CF]/60 dark:hover:bg-white/10 hover:text-[#06141B] dark:hover:text-white transition-colors"
              >
                Launch Desktop App UI
              </Link>
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium font-sans text-[#253745] dark:text-white/80 hover:bg-[#CCD0CF]/60 dark:hover:bg-white/10 hover:text-[#06141B] dark:hover:text-white"
              >
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <ThemeToggle variant="full" />
            </div>

            <div className="pt-2 border-t border-[#CCD0CF] dark:border-[#253745]">
              <a
                href={WINDOWS_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium font-sans bg-[#06141B] text-[#CCD0CF] hover:bg-[#11212D] dark:bg-[#38BDF8] dark:text-[#06141B] dark:hover:bg-[#7DD3FC] transition-colors"
              >
                <span>Download for Windows</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
