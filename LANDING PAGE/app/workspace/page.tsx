import React from "react";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ProductMockup } from "../../components/ProductMockup";
import { WINDOWS_DOWNLOAD_URL } from "../../lib/site-config";

export default function WorkspacePreviewPage() {
  return (
    <div className="min-h-screen bg-[#EEF1F0] dark:bg-[#000000] text-[#06141B] dark:text-[#CCD0CF] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#9BA8AB]/50 dark:border-[#11212D]">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#0284C7] dark:text-[#38BDF8] hover:underline mb-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to OmniSearch Home</span>
              </Link>
              <h1 className="font-serif text-2xl sm:text-4xl font-medium tracking-[-0.02em] text-[#06141B] dark:text-[#CCD0CF]">
                Interactive Desktop Workspace Preview
              </h1>
              <p className="mt-1 font-sans text-sm text-[#253745] dark:text-[#9BA8AB]">
                Explore OmniSearch&apos;s hybrid keyword + semantic search, mode toggles, and instant chunk inspector.
              </p>
            </div>

            <Link
              href={WINDOWS_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#06141B] text-[#CCD0CF] hover:bg-[#11212D] dark:bg-[#38BDF8] dark:text-[#06141B] dark:hover:bg-[#7DD3FC] transition-colors shrink-0 self-start sm:self-auto"
            >
              <Download className="w-4 h-4" />
              <span>Download for Windows</span>
            </Link>
          </div>

          <ProductMockup />
        </div>
      </main>

      <Footer />
    </div>
  );
}
