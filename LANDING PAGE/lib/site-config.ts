/**
 * OmniSearch Product Website — Centralized Configuration & Design System Tokens
 *
 * Replace `PRODUCT_VIDEO_URL` or `WINDOWS_DOWNLOAD_URL` below with production URLs
 * when ready. Components across the website automatically adapt without layout changes.
 */

export const PRODUCT_VIDEO_URL = "";

export const WINDOWS_DOWNLOAD_URL =
  "https://www.github.com/Muzzammil-malik/OmniSearch";

export const SITE_CONFIG = {
  name: "OmniSearch",
  tagline: "Search beyond filenames.",
  positioning: "Local-first intelligent search for your files.",
  description:
    "OmniSearch is a local-first intelligent file search application that helps you find documents, code, images, audio and video using keyword and semantic search.",
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://omnisearch.software",
  githubUrl: "https://www.github.com/Muzzammil-malik/OmniSearch",
  version: "0.7.0",
  windowsRequirements: {
    os: "Windows 11 (64-bit, 22H2 or later)",
    memory: "8 GB RAM minimum (16 GB recommended for local semantic embeddings)",
    storage: "650 MB application + local index storage",
    network: "Offline-capable (loopback 127.0.0.1 architecture)",
  },
} as const;

export const DESIGN_TOKENS = {
  colors: {
    darkestBlue: "#06141B",
    deepNavy: "#11212D",
    slateBlue: "#253745",
    mutedSteel: "#4A5C6A",
    lightGrayBlue: "#9BA8AB",
    lightestPaleGray: "#CCD0CF",
    sparkAccent: "#38BDF8",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    base: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
    "5xl": "128px",
  },
  radius: {
    small: "6px",
    medium: "10px",
    large: "14px",
    xl: "20px",
  },
  motion: {
    easing: [0.16, 1, 0.3, 1] as const,
    durationFast: 0.16,
    durationBase: 0.28,
  },
} as const;

export const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Docs", href: "/docs" },
  { label: "About", href: "/about" },
] as const;
