import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  FileText,
  Layers,
  Quote,
  Globe,
  ShieldCheck,
  UploadCloud,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const START_URL = "/start/pdf-copilot";

export default function PDFCopilotPage() {
  return (
    <main className="flex flex-col">
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          {/* Copy */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-600/10 px-3 py-1 text-xs font-medium text-teal-700 dark:text-teal-400">
              <FileText className="h-3.5 w-3.5" />
              PDF Copilot
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Ask your PDFs anything.
              <br />
              <span className="text-teal-600">Get answers with receipts.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Upload one PDF or ten. Ask questions in plain language and get
              answers pulled straight from the page — cited, not guessed.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={START_URL}
                className={buttonVariants({ size: "lg" }).concat(
                  " bg-teal-600 text-white hover:bg-teal-700"
                )}
              >
                Try PDF Copilot
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
              Free to try — no credit card required.
            </p>
          </div>

          {/* Live-feeling chat mock, grounded in the real product */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <FileText className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-medium">Education.pdf</span>
              </div>
              <div className="space-y-3 p-4">
                <div className="ml-auto max-w-[85%] rounded-lg bg-teal-600 px-3 py-2 text-sm text-white">
                  What is the importance of education?
                </div>
                <div className="max-w-[90%] rounded-lg bg-muted px-3 py-2 text-sm">
                  I couldn&apos;t find an answer to that in the PDF. Want me
                  to search the web instead?
                </div>
                <div className="max-w-[90%] rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm">
                  <div className="mb-1 flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-amber-500">
                    <Globe className="h-3.5 w-3.5" />
                    From the web
                  </div>
                  Education empowers individuals, promotes personal growth,
                  and builds critical thinking skills that carry into career
                  and life.
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl bg-teal-600/10 sm:-bottom-6 sm:-left-6" />
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Built for actually reading the document
        </h2>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Not a generic chatbot with a file attached — every answer is
          grounded in what your PDFs actually say.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Layers className="h-5 w-5" />}
            title="Multi-PDF chat"
            description="Ask one question across several documents at once. Answers pull from whichever files are relevant."
          />
          <FeatureCard
            icon={<Quote className="h-5 w-5" />}
            title="Cited answers"
            description="Every answer points back to the page it came from, so you can verify it in seconds."
          />
          <FeatureCard
            icon={<Globe className="h-5 w-5" />}
            title="Web fallback"
            description="If the PDF doesn't have it, PDF Copilot tells you plainly and offers to search the web instead."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Private by default"
            description="Your documents are processed for your account only — never used to train anything."
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
              src="/images/apps/pdf-copilot/dashboard-upload.png"
              alt="PDF Copilot dashboard showing PDF upload"
              caption="Upload PDFs to your dashboard in seconds"
            />
            <Screenshot
              src="/images/apps/pdf-copilot/cross-pdf-query.png"
              alt="Asking a question across two PDFs at once"
              caption="Select multiple PDFs and ask across all of them"
            />
            <Screenshot
              src="/images/apps/pdf-copilot/chat-citation.png"
              alt="Chat interface showing a cited answer and web fallback"
              caption="Get cited answers, or a web search when the PDF comes up empty"
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
            title="Upload your PDFs"
            description="Drop in one file or several. Large PDFs process in the background while you keep working."
          />
          <Step
            icon={<MessageSquare className="h-5 w-5" />}
            title="Ask a question"
            description="Type it like you'd ask a person. Select multiple PDFs to ask across all of them at once."
          />
          <Step
            icon={<Sparkles className="h-5 w-5" />}
            title="Get a grounded answer"
            description="Read the answer with its source page, or let PDF Copilot search the web if it's not in the document."
          />
        </div>
      </section>

      {/* ---------- PRICING ---------- */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Simple pricing
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-2xl">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium">Free</h3>
                <p className="mt-1 text-3xl font-semibold">$0</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Upload PDFs and start asking questions — no card required.
                </p>
              </CardContent>
            </Card>
            <Card className="border-teal-600/40">
              <CardContent className="p-6">
                <h3 className="font-medium">Pro</h3>
                <p className="mt-1 text-3xl font-semibold">
                  Coming soon
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Higher limits and priority processing for heavy users.
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
            q="What file types does PDF Copilot support?"
            a="PDF Copilot is built specifically for PDF documents — text-based and scanned."
          />
          <FAQ
            q="Can I ask questions across multiple PDFs at once?"
            a="Yes. Select any combination of your uploaded PDFs and ask a single question that pulls from all of them."
          />
          <FAQ
            q="What happens if the answer isn't in my PDF?"
            a="PDF Copilot tells you it couldn't find the answer in the document and offers to search the web instead — it never guesses."
          />
          <FAQ
            q="Is my data private?"
            a="Yes. Your PDFs are processed for your account only and are not used to train any models."
          />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to chat with your PDFs?
            </h2>
            <p className="mt-1 text-muted-foreground">
              It's free to try — upload your first PDF in under a minute.
            </p>
          </div>
          <Link
            href={START_URL}
            className={buttonVariants({ size: "lg" }).concat(
              " bg-teal-600 text-white hover:bg-teal-700"
            )}
          >
            Try PDF Copilot
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
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600/10 text-teal-600">
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
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600/10 text-teal-600">
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
