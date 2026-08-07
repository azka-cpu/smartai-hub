import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ScanBarcode,
  Camera,
  FileSearch,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  ClipboardList,
} from "lucide-react";

const APP_URL = "https://labellens-zeta.vercel.app/";

export default function BarcodeScannerPage() {
  return (
    <main className="flex flex-col">
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          {/* Copy */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-600/20 bg-rose-600/10 px-3 py-1 text-xs font-medium text-rose-700 dark:text-rose-400">
              <ScanBarcode className="h-3.5 w-3.5" />
              Barcode Scanner
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Know what&apos;s in
              <br />
              <span className="text-rose-600">every product.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Scan a barcode or upload a photo. Get the label read, the
              nutrition broken down, and an AI health score in seconds.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" }).concat(
                  " bg-rose-600 text-white hover:bg-rose-700"
                )}
              >
                Try Barcode Scanner
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

          {/* Live-feeling analysis mock, grounded in the real product */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <ScanBarcode className="h-4 w-4 text-rose-600" />
                <span className="text-sm font-medium">
                  788821001252
                </span>
              </div>
              <div className="space-y-3 p-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Health score</span>
                  <span className="font-semibold text-rose-600">62/100</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[62%] rounded-full bg-rose-600" />
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <p className="text-xs font-medium text-green-600">
                      Pros
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Good source of protein
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-amber-600">
                      Cons
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      High in added sugar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl bg-rose-600/10 sm:-bottom-6 sm:-left-6" />
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Built for reading the fine print
        </h2>
        <p className="mt-2 max-w-lg text-muted-foreground">
          No more squinting at nutrition labels or guessing what an
          ingredient list actually means.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Camera className="h-5 w-5" />}
            title="Scan or upload"
            description="Point your camera at a barcode, upload a photo, or type the code in manually."
          />
          <FeatureCard
            icon={<FileSearch className="h-5 w-5" />}
            title="Label OCR"
            description="Reads expiry dates, manufacturing dates, and nutrition facts straight off the packaging."
          />
          <FeatureCard
            icon={<Sparkles className="h-5 w-5" />}
            title="AI health analysis"
            description="Get a health score with clear pros, cons, and a recommendation for every product."
          />
          <FeatureCard
            icon={<ShoppingCart className="h-5 w-5" />}
            title="Shopping list"
            description="Add scanned items straight to a shopping list as you go."
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
              src="/images/apps/barcode-scanner/scan-intro.png"
              alt="Barcode Scanner landing screen introducing the product"
              caption="Point a camera at a barcode, or upload a photo"
            />
            <Screenshot
              src="/images/apps/barcode-scanner/scan-result.png"
              alt="Scanned barcode result with product details and add-to-list option"
              caption="Every scan pulls up product details, ready to add to your list"
            />
            <Screenshot
              src="/images/apps/barcode-scanner/ai-analysis.png"
              alt="AI product analysis with health score, pros, cons, and recommendation"
              caption="AI reads the label and scores the product's healthiness"
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
            icon={<ScanBarcode className="h-5 w-5" />}
            title="Scan the barcode"
            description="Use your camera, upload a photo, or enter the code manually."
          />
          <Step
            icon={<FileSearch className="h-5 w-5" />}
            title="Read the label"
            description="OCR extracts expiry dates and nutrition facts directly from the packaging."
          />
          <Step
            icon={<ClipboardList className="h-5 w-5" />}
            title="Get the analysis"
            description="AI scores the product's healthiness and explains the pros, cons, and recommendation."
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
                  Scan products and get AI analysis â€” no card required.
                </p>
              </CardContent>
            </Card>
            <Card className="border-rose-600/40">
              <CardContent className="p-6">
                <h3 className="font-medium">Pro</h3>
                <p className="mt-1 text-3xl font-semibold">Coming soon</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Higher scan limits and saved shopping history.
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
            q="What if a barcode isn't in the database?"
            a="You can still upload a photo of the label so the OCR can read the nutrition facts directly, or enter details manually."
          />
          <FAQ
            q="How is the health score calculated?"
            a="AI analyzes the product's available nutrition and ingredient data to generate a score along with clear pros and cons."
          />
          <FAQ
            q="Can I build a shopping list as I scan?"
            a="Yes. Any scanned product can be added straight to your shopping list with a quantity."
          />
          <FAQ
            q="Is my scan history private?"
            a="Yes. Your scans and shopping list are tied to your account only."
          />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to know what&apos;s really in your groceries?
            </h2>
            <p className="mt-1 text-muted-foreground">
              It's free to try â€” scan your first product in under a minute.
            </p>
          </div>
          <Link
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg" }).concat(
              " bg-rose-600 text-white hover:bg-rose-700"
            )}
          >
            Try Barcode Scanner
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
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
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-rose-600/10 text-rose-600">
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
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-rose-600/10 text-rose-600">
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