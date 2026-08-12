import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Briefcase, Home } from "lucide-react";
import { appsConfig } from "@/lib/apps-config";

const workAppIds = ["pdf-copilot", "meeting-notes-bot"] as const;
const lifeAppIds = ["spendsnap", "barcode-scanner"] as const;

const taglines: Record<string, string> = {
  "pdf-copilot": "Stop re-reading contracts and reports line by line.",
  "meeting-notes-bot": "Stop taking notes during your own meetings.",
  spendsnap: "Stop typing receipts into a spreadsheet.",
  "barcode-scanner": "Stop guessing what's actually in your groceries.",
};

const descriptions: Record<string, string> = {
  "pdf-copilot":
    "Upload any PDF and ask it directly. Get answers with the page cited, so you can verify in seconds instead of searching.",
  "meeting-notes-bot":
    "Upload the recording. Get a transcript, summary, action items, and key decisions — then ask follow-up questions in any language.",
  spendsnap:
    "Snap a photo of any receipt. SpendSnap reads it, sorts it by store, and tracks your spending automatically.",
  "barcode-scanner":
    "Scan a barcode or photograph the label. Get the nutrition facts read for you and an AI health score in seconds.",
};

function AppRow({ id }: { id: keyof typeof appsConfig }) {
  const app = appsConfig[id];
  const Icon = app.icon;

  return (
    <div className="flex flex-col gap-6 border-b border-border py-10 sm:flex-row sm:items-center last:border-b-0">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${app.accent}1a`, color: app.accent }}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium">{app.name}</h3>
        <p className="mt-1 font-medium" style={{ color: app.accent }}>
          {taglines[id]}
        </p>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          {descriptions[id]}
        </p>
      </div>
      <Link
        href={`/start/${id}`}
        className={buttonVariants({ variant: "outline" }).concat(
          " shrink-0"
        )}
      >
        Learn more
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <main className="flex flex-col">
      {/* ---------- HERO ---------- */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for two parts of your day.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Some of these apps save you time at work. Others save you time at
            home. Find the one that fits what you're doing right now.
          </p>
        </div>
      </section>

      {/* ---------- FOR WORK ---------- */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            For work
          </h2>
        </div>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Documents and meetings pile up fast. These apps clear the backlog
          without you doing the reading or writing yourself.
        </p>
        <div className="mt-4">
          {workAppIds.map((id) => (
            <AppRow key={id} id={id} />
          ))}
        </div>
      </section>

      {/* ---------- FOR EVERYDAY LIFE ---------- */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="flex items-center gap-2">
            <Home className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              For everyday life
            </h2>
          </div>
          <p className="mt-2 max-w-lg text-muted-foreground">
            Groceries and spending are easy to lose track of. These apps keep
            you informed without extra effort.
          </p>
          <div className="mt-4">
            {lifeAppIds.map((id) => (
              <AppRow key={id} id={id} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Not sure which one you need?
            </h2>
            <p className="mt-1 text-muted-foreground">
              They're all free to try — see which one fits your day.
            </p>
          </div>
          <Link href="/apps" className={buttonVariants({ size: "lg" })}>
            See all apps
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
