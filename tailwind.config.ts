import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./LANDING PAGE/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          950: "#06141B",
          900: "#11212D",
          800: "#253745",
          600: "#4A5C6A",
          400: "#9BA8AB",
          200: "#CCD0CF",
          100: "#DCE0DF",
        },
      },
      fontFamily: {
        "instrument-serif": [
          "var(--font-instrument-serif)",
          "var(--font-serif)",
          '"Instrument Serif"',
          '"Newsreader"',
          "Georgia",
          "serif",
        ],
        serif: [
          "var(--font-instrument-serif)",
          "var(--font-serif)",
          '"Instrument Serif"',
          '"Newsreader"',
          '"Copernicus"',
          '"Tiempos Headline"',
          '"Playfair Display"',
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          '"Inter"',
          '"Plus Jakarta Sans"',
          '"StyreneB"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          '"JetBrains Mono"',
          '"Fira Code"',
          "Menlo",
          "Monaco",
          "Consolas",
          '"Courier New"',
          "monospace",
        ],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(6, 20, 27, 0.08)",
        card: "0 2px 8px -2px rgba(6, 20, 27, 0.14)",
        modal: "0 16px 40px -8px rgba(6, 20, 27, 0.35)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
