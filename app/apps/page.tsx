import Link from "next/link";
import { FileText, Receipt, Mic, ScanBarcode, ArrowRight } from "lucide-react";

const apps = [
  {
    name: "PDF Copilot",
    description: "Chat with PDFs using AI. Upload, ask, summarize.",
    href: "/apps/pdf-copilot",
    icon: FileText,
    accent: "#0d9488",
  },
  {
    name: "SpendSnap",
    description: "AI expense tracker. Scan receipts, track budgets.",
    href: "/apps/spendsnap",
    icon: Receipt,
    accent: "#ea580c",
  },
  {
    name: "Meeting Notes Bot",
    description: "AI meeting assistant. Transcribe, summarize, act.",
    href: "/apps/meeting-notes-bot",
    icon: Mic,
    accent: "#4f46e5",
  },
  {
    name: "Barcode Scanner",
    description: "AI product scanner. Nutrition, pricing, more.",
    href: "/apps/barcode-scanner",
    icon: ScanBarcode,
    accent: "#e11d48",
  },
];

export default function AppsIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Our AI apps
      </h1>
      <p className="mt-4 max-w-lg text-lg text-muted-foreground">
        Four focused tools, one account. Pick the one that fits what you're
        doing right now.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {apps.map((app) => (
          <Link
            key={app.name}
            href={app.href}
            className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span
              className="absolute inset-x-0 top-0 h-1"
              style={{ backgroundColor: app.accent }}
            />
            <div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
              style={{
                backgroundColor: `${app.accent}1a`,
                color: app.accent,
              }}
            >
              <app.icon className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-medium">{app.name}</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {app.description}
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium">
              Learn more
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}