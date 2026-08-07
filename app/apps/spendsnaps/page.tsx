import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Receipt,
  ScanLine,
  PiggyBank,
  Store,
  UploadCloud,
  Sparkles,
  ListChecks,
} from "lucide-react";

const APP_URL = "https://spendsnap.streamlit.app/";

export default function SpendSnapPage() {
  return (
    <main className="flex flex-col">
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          {/* Copy */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-600/20 bg-orange-600/10 px-3 py-1 text-xs font-medium text-orange-700 dark:text-orange-400">
              <Receipt className="h-3.5 w-3.5" />
              SpendSnap
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Snap a receipt.
              <br />
              <span className="text-orange-600">Know where it went.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Upload a photo of any receipt and SpendSnap reads it, sorts it,
              and tracks it â€” no manual entry, ever.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" }).concat(
                  " bg-orange-600 text-white hover:bg-orange-700"
                )}
              >
                Try SpendSnap
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="#how-it-works"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                See how it works
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Free to try â€” no credit card required.
            </p>
          </div>

          {/* Live-feeling stat mock, grounded in the real dashboard */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
              <div className="bg-linear-to-r from-orange-500 to-orange-600 px-5 py-4 text-white">
                <p className="text-sm font-medium">Hello, Ahmed!</p>
                <p className="text-xs text-white/80">
                  Welcome back to SpendSnap
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 p-4">
                <StatChip label="Total slips" value="2" color="bg-purple-600" />
                <StatChip label="Total spent" value="Rs.5,181" color="bg-orange-600" />
                <StatChip label="Monthly avg" value="Rs.2,590" color="bg-blue-600" />
                <StatChip label="This month" value="Rs.2,000" color="bg-green-600" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl bg-orange-600/10 sm:-bottom-6 sm:-left-6" />
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Built to skip the manual entry
        </h2>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Point your camera at a receipt. SpendSnap does the reading, sorting,
          and totaling.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<ScanLine className="h-5 w-5" />}
            title="AI receipt scanning"
            description="Groq Vision reads every item, price, and total off your receipt photo in 2-5 seconds."
          />
          <FeatureCard
            icon={<Store className="h-5 w-5" />}
            title="Organized by store"
            description="Slips are grouped by store and month automatically, so spending patterns are easy to spot."
          />
          <FeatureCard
            icon={<PiggyBank className="h-5 w-5" />}
            title="Budget tracking"
            description="See your total spend, monthly average, and this month's total at a glance."
          />
          <FeatureCard
            icon={<ListChecks className="h-5 w-5" />}
            title="Itemized detail"
            description="Every purchased item is broken out, not just the receipt total."
          />
        </div>
      </section>

      {/* ---------- SCREENSHOTS ---------- */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            See it in action
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Screenshot
              src="/images/apps/spendsnap/dashboard-overview.png"
              alt="SpendSnap dashboard showing total slips, spend, and recent activity"
              caption="Your spending, summarized the moment you log in"
            />
            <Screenshot
              src="/images/apps/spendsnap/upload-receipt.png"
              alt="Uploading a receipt for SpendSnap to scan"
              caption="Upload a receipt photo â€” AI reads it automatically"
            />
            <Screenshot
              src="/images/apps/spendsnap/grocery-slips.png"
              alt="List of grocery slips grouped by store and month"
              caption="Every slip organized by store, month, and item count"
            />
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          How it works
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <Step
            icon={<UploadCloud className="h-5 w-5" />}
            title="Upload a receipt"
            description="Snap a photo or upload a JPG, PNG, or WEBP of any receipt."
          />
          <Step
            icon={<Sparkles className="h-5 w-5" />}
            title="AI reads it for you"
            description="SpendSnap extracts every item, price, and the total in seconds â€” no typing required."
          />
          <Step
            icon={<PiggyBank className="h-5 w-5" />}
            title="Track your spending"
            description="Your dashboard updates automatically with totals, monthly averages, and store breakdowns."
          />
        </div>
      </section>

      {/* ---------- PRICING ---------- */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Simple pricing
          </h2>
          <div className="mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium">Free</h3>
                <p className="mt-1 text-3xl font-semibold">$0</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Upload receipts and track spending â€” no card required.
                </p>
              </CardContent>
            </Card>
            <Card className="border-orange-600/40">
              <CardContent className="p-6">
                <h3 className="font-medium">Pro</h3>
                <p className="mt-1 text-3xl font-semibold">Coming soon</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Higher upload limits and deeper spending insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 max-w-2xl divide-y divide-border">
          <FAQ
            q="What image formats can I upload?"
            a="SpendSnap accepts JPG, PNG, and WEBP receipt photos."
          />
          <FAQ
            q="How accurate is the receipt scanning?"
            a="SpendSnap uses Groq Vision AI to read items, quantities, and prices directly off the receipt image, typically in 2-5 seconds."
          />
          <FAQ
            q="Can I see spending by store or month?"
            a="Yes. Slips are automatically grouped by store and month so you can spot patterns at a glance."
          />
          <FAQ
            q="Is my receipt data private?"
            a="Yes. Your uploads are processed for your account only and are not used to train any models."
          />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to stop typing in receipts?
            </h2>
            <p className="mt-1 text-muted-foreground">
              It's free to try â€” upload your first receipt in under a minute.
            </p>
          </div>
          <Link
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg" }).concat(
              " bg-orange-600 text-white hover:bg-orange-700"
            )}
          >
            Try SpendSnap
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function StatChip({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`rounded-lg ${color} px-3 py-3 text-white`}>
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-[11px] uppercase tracking-wide text-white/80">
        {label}
      </p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600">
          {icon}
        </div>
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function Step({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600">
        {icon}
      </div>
      <h3 className="font-medium">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function Screenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-lg border border-border shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="h-auto w-full object-cover"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="py-5">
      <h3 className="font-medium">{q}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{a}</p>
    </div>
  );
}