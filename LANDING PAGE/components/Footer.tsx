import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { SITE_CONFIG } from "../lib/site-config";

export function Footer() {
  return (
    <footer className="bg-[#E4E8E7] dark:bg-[#000000] border-t border-[#9BA8AB]/60 dark:border-[#253745]/80 text-[#253745] dark:text-[#9BA8AB] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#9BA8AB]/50 dark:border-[#11212D]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] dark:focus-visible:ring-[#38BDF8] rounded-md"
            >
              <BrandLogo size="md" />
            </Link>
            <p className="text-sm text-[#253745] dark:text-[#9BA8AB] max-w-xs leading-relaxed">
              {SITE_CONFIG.tagline} Local-first intelligent file search across
              documents, code, presentations, spreadsheets, and media.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#4A5C6A] dark:text-[#9BA8AB]">
              <span className="text-[#06141B] dark:text-[#CCD0CF] font-medium">
                Windows — Available
              </span>
              <span aria-hidden="true">·</span>
              <span>Linux — Coming soon</span>
              <span aria-hidden="true">·</span>
              <span>macOS — Coming soon</span>
            </div>
          </div>

          {/* Product Column */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#06141B] dark:text-[#CCD0CF]">
              Product
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href="/workspace"
                  className="hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors"
                >
                  Interactive App UI
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#06141B] dark:text-[#CCD0CF]">
              Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors"
                >
                  Docs
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  href="/#roadmap"
                  className="hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#06141B] dark:text-[#CCD0CF]">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@omnisearch.software"
                  className="hover:text-[#06141B] dark:hover:text-[#CCD0CF] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#4A5C6A] dark:text-[#9BA8AB]">
          <p>© 2026 OmniSearch</p>
          <p className="font-mono">
            Local-first architecture · SQLite FTS5 + EmbeddingGemma + ChromaDB
          </p>
        </div>
      </div>
    </footer>
  );
}
