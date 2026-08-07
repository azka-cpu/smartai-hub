import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppCard from "@/components/shared/AppCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const apps = [
  { icon: "📄", name: "PDF Copilot", description: "Chat with PDFs using AI. Upload, ask, summarize.", href: "/apps/pdf-copilot" },
  { icon: "💰", name: "SpendSnaps", description: "AI expense tracker. Scan receipts, track budgets.", href: "/apps/spendsnaps" },
  { icon: "🎙", name: "Meeting Notes Bot", description: "AI meeting assistant. Transcribe, summarize, act.", href: "/apps/meeting-notes" },
  { icon: "📦", name: "Barcode Scanner", description: "AI product scanner. Nutrition, pricing, more.", href: "/apps/barcode-scanner" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Build Smarter with AI
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
          Powerful AI tools that save time, automate work, and boost productivity.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/apps" className={buttonVariants({ size: "lg" })}>
           Explore Apps
          </Link>
          <Link href="/pricing" className={buttonVariants({ size: "lg", variant: "outline" })}>
            Get Started
          </Link>
        </div>
      </section>

      {/* Apps grid */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="mb-8 text-center text-2xl font-bold">Our AI Apps</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app) => (
            <AppCard key={app.href} {...app} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
