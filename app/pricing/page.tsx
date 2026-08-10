import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Check, FileText, Receipt, Mic, ScanBarcode, Sparkles } from "lucide-react";

const apps = [
  { name: "PDF Copilot", icon: FileText, accent: "#0d9488" },
  { name: "SpendSnap", icon: Receipt, accent: "#ea580c" },
  { name: "Meeting Notes Bot", icon: Mic, accent: "#4f46e5" },
  { name: "Barcode Scanner", icon: ScanBarcode, accent: "#e11d48" },
];

const freeIncludes = [
  "Full access to all 4 apps",
  "No credit card required",
  "Unlimited uploads on the free tier",
  "One account across every app",
];

const faqs = [
  {
    q: "Do I need to pay to try the apps?",
    a: "No. Every app is free to use right now â€” sign up and start using any of them immediately.",
  },
  {
    q: "What will Pro include?",
    a: "Higher usage limits, longer history, and priority processing across the apps you use most. Exact details are still being finalized.",
  },
  {
    q: "Will pricing be per-app or for the whole platform?",
    a: "Undecided yet â€” we're weighing both. If you have a preference, reach out and let us know.",
  },
  {
    q: "Will I lose access if I don't upgrade?",
    a: "No. The Free tier isn't a trial â€” it stays free. Pro will be an optional upgrade for people who need more.",
  },
];

export default function PricingPage() {
  return (
    <main className="flex flex-col">
      {/* ---------- HERO ---------- */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Simple pricing.
            <br />
            <span className="text-muted-foreground">
              Free while we build Pro.
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            One account, all four apps, no card required. Pro is coming for
            people who need more.
          </p>
        </div>
      </section>

      {/* ---------- PLANS ---------- */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Free */}
          <div className="rounded-xl border-2 border-foreground bg-background p-8">
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Free
            </p>
            <p className="mt-2 text-4xl font-semibold">$0</p>
            <p className="mt-1 text-sm text-muted-foreground">forever</p>

            <ul className="mt-6 space-y-3">
              {freeIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/login"
              className={buttonVariants({ size: "lg" }).concat(" mt-8 w-full")}
            >
              Get started free
            </Link>
          </div>

          {/* Pro */}
          <div className="relative rounded-xl border border-dashed border-border bg-muted/30 p-8">
            <span className="absolute -top-3 left-8 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
              Coming soon
            </span>
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Pro
            </p>
            <p className="mt-2 text-4xl font-semibold text-muted-foreground">
              TBD
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              for people who outgrow Free
            </p>

            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2 text-sm">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                Higher usage limits
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                Longer history & storage
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                Priority processing
              </li>
            </ul>

            <button
              disabled
              className={buttonVariants({
                variant: "outline",
                size: "lg",
              }).concat(" mt-8 w-full cursor-not-allowed opacity-60")}
            >
              Not yet available
            </button>
          </div>
        </div>

        {/* Per-app note */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <span>Free tier covers:</span>
          {apps.map((app) => (
            <span key={app.name} className="flex items-center gap-1.5">
              <app.icon className="h-4 w-4" style={{ color: app.accent }} />
              {app.name}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-6 divide-y divide-border">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-5">
                <h3 className="font-medium">{faq.q}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}