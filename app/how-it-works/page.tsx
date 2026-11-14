import type { Metadata } from "next";
import HowItWorksPage from "@/LANDING PAGE/app/how-it-works/page";

export const metadata: Metadata = {
  title: "How It Works — OmniSearch Architecture",
  description:
    "Inside the OmniSearch local-first retrieval pipeline: folder scanning, multiformat content extraction, SQLite FTS5 BM25, EmbeddingGemma vectors, and Reciprocal Rank Fusion.",
};

export default HowItWorksPage;
