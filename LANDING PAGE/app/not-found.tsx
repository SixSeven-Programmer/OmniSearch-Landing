import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#EEF1F0] dark:bg-[#000000] text-[#06141B] dark:text-[#CCD0CF] flex flex-col transition-colors duration-200">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-md text-center space-y-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284C7] dark:text-[#38BDF8]">
            404 · PAGE NOT FOUND
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-[-0.02em] text-[#06141B] dark:text-[#CCD0CF]">
            File or route not found.
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#253745] dark:text-[#9BA8AB] leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#06141B] text-[#CCD0CF] hover:bg-[#11212D] dark:bg-[#38BDF8] dark:text-[#06141B] dark:hover:bg-[#7DD3FC] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to OmniSearch Home</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
