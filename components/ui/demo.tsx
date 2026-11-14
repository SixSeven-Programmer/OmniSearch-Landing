"use client"

import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { SonarGrid } from "@/components/ui/sonar-grid"

const settings = {
  ringWidth: 105,
  speed: 135,
  amplitude: 2.0,
  pingEvery: 3.8,
  interactive: false,
  spacing: 26,
  baseOpacity: 0.28,
  useThemeColor: true,
  color: "#38BDF8",
  eyebrow: "LOCAL-FIRST • INTELLIGENT FILE SEARCH",
  headline: "Search beyond filenames.",
  subline:
    "Every ping is a real signal across your local documents, code, presentations, and media.",
}

export default function Demo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props }
  const reduce = useReducedMotion()
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14, filter: "blur(6px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        }

  return (
    <SonarGrid
      id="sonar-grid-demo"
      ringWidth={s.ringWidth}
      speed={s.speed}
      amplitude={s.amplitude}
      pingEvery={s.pingEvery}
      interactive={s.interactive}
      spacing={s.spacing}
      baseOpacity={s.baseOpacity}
      color={s.useThemeColor ? undefined : s.color}
      pingArea={[0.5, 0.5, 0.5, 0.5]}
      className="bg-[#EEF1F0] dark:bg-[#000000] flex min-h-[max(560px,100svh)] w-full flex-col"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_38%_34%_at_50%_50%,#EEF1F0_0%,transparent_100%)] dark:bg-[radial-gradient(ellipse_38%_34%_at_50%_50%,#000000_0%,transparent_100%)]"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-8 py-24 text-center">
        <div className="flex max-w-2xl flex-col items-center">
          <motion.p
            {...enter(0)}
            className="text-[#253745] dark:text-[#9BA8AB] border-[#9BA8AB]/70 dark:border-[#253745] bg-white/80 dark:bg-[#11212D]/80 mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur"
          >
            <span
              aria-hidden="true"
              className="bg-[#0284C7] dark:bg-[#38BDF8] h-1.5 w-1.5 rounded-full"
            />
            {s.eyebrow}
          </motion.p>
          <motion.h1
            {...enter(0.08)}
            className="text-[#06141B] dark:text-[#CCD0CF] font-serif text-5xl font-medium tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            {s.headline}
          </motion.h1>
          <motion.p
            {...enter(0.16)}
            className="text-[#253745] dark:text-[#9BA8AB] mt-6 max-w-xl text-base text-pretty sm:text-lg"
          >
            {s.subline}
          </motion.p>
          <motion.div
            {...enter(0.24)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="https://www.github.com/Muzzammil-malik/OmniSearch"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-primary"
              data-slot="cta-primary"
              className="group bg-[#06141B] text-[#CCD0CF] dark:bg-[#38BDF8] dark:text-[#06141B] inline-flex h-11 cursor-pointer items-center gap-2 rounded-full px-6 text-sm font-medium shadow-sm transition-[transform,box-shadow] duration-200 outline-none hover:shadow-md active:scale-[0.98]"
            >
              Download for Windows
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="/how-it-works"
              data-slot="cta-secondary"
              className="bg-white/75 dark:bg-[#11212D]/75 text-[#06141B] dark:text-[#CCD0CF] border-[#9BA8AB]/70 dark:border-[#253745] hover:bg-white dark:hover:bg-[#253745] inline-flex h-11 cursor-pointer items-center rounded-full border px-6 text-sm font-medium backdrop-blur transition-[background-color,transform] duration-200 outline-none active:scale-[0.98]"
            >
              Explore how it works
            </a>
          </motion.div>
        </div>
      </div>
    </SonarGrid>
  )
}
