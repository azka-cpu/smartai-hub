import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Mic,
  FileText,
  Languages,
  ListChecks,
  Target,
  UploadCloud,
  Sparkles,
  MessageSquare,
} from "lucide-react";

const APP_URL = "https://meeting-notes-bot-ui.vercel.app/";

export default function MeetingNotesBotPage() {
  return (
    <main className="flex flex-col">
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          {/* Copy */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-600/20 bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-400">
              <Mic className="h-3.5 w-3.5" />
              Meeting Notes Bot
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Record the meeting.
              <br />
              <span className="text-indigo-600">
                Skip writing the notes.
              </span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Upload audio and get a full transcript, summary, action items,
              and key decisions â€” then ask follow-up questions in any
              language.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" }).concat(
                  " bg-indigo-600 text-white hover:bg-indigo-700"
                )}
              >
                Try Meeting Notes Bot
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

          {/* Live-feeling chat mock, grounded in the real product */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <Mic className="h-4 w-4 text-indigo-600" />
                <span className="text-sm font-medium">Education.docx</span>
              </div>
              <div className="space-y-3 p-4">
                <div className="ml-auto max-w-[85%] rounded-lg bg-indigo-600 px-3 py-2 text-sm text-white">
                  talk to me in urdu
                </div>
                <div className="max-w-[90%] rounded-lg bg-muted px-3 py-2 text-sm">
                  جی ضرور! میں آپ سے اردو میں بات کر سکتا ہوں۔ آپ کس بارے میں میٹنگ کے بارے میں کچھ پوچھنا چاہتے ہیں؟
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-indigo-600/20 bg-indigo-600/5 px-3 py-2 text-xs text-indigo-700 dark:text-indigo-400">
                  <Languages className="h-3.5 w-3.5" />
                  Responds in whatever language you ask in
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl bg-indigo-600/10 sm:-bottom-6 sm:-left-6" />
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Built for what happens after the meeting
        </h2>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Not just a transcript â€” a full breakdown of what was said, what was
          decided, and what happens next.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<FileText className="h-5 w-5" />}
            title="Full transcript"
            description="Every meeting is transcribed in full, ready to search or read back through."
          />
          <FeatureCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Auto summary"
            description="A clear summary of what the meeting covered, generated the moment it's uploaded."
          />
          <FeatureCard
            icon={<ListChecks className="h-5 w-5" />}
            title="Action items & decisions"
            description="Action items and key decisions are pulled out automatically, no re-reading required."
          />
          <FeatureCard
            icon={<Languages className="h-5 w-5" />}
            title="Ask in any language"
            description="Ask follow-up questions about the meeting in the language you're most comfortable with."
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
              src="/images/apps/meeting-notes-bot/upload-audio.png"
              alt="Uploading a meeting audio file to Meeting Notes Bot"
              caption="Upload the audio â€” the rest happens automatically"
            />
            <Screenshot
              src="/images/apps/meeting-notes-bot/transcript-summary.png"
              alt="Meeting transcript with summary, action items, and key decisions"
              caption="Full transcript alongside summary, action items, and key decisions"
            />
            <Screenshot
              src="/images/apps/meeting-notes-bot/ask-question.png"
              alt="Asking a question about the meeting in Urdu"
              caption="Ask questions about the meeting â€” in any language"
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
            title="Upload the recording"
            description="Drop in an audio file from any meeting, call, or lecture."
          />
          <Step
            icon={<Target className="h-5 w-5" />}
            title="Get the breakdown"
            description="A transcript, summary, action items, and key decisions are generated automatically."
          />
          <Step
            icon={<MessageSquare className="h-5 w-5" />}
            title="Ask follow-up questions"
            description="Ask anything about the meeting, in whatever language works for you."
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
                  Upload meetings and get notes automatically â€” no card
                  required.
                </p>
              </CardContent>
            </Card>
            <Card className="border-indigo-600/40">
              <CardContent className="p-6">
                <h3 className="font-medium">Pro</h3>
                <p className="mt-1 text-3xl font-semibold">Coming soon</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Longer recordings and higher upload limits.
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
            q="What audio formats are supported?"
            a="Meeting Notes Bot accepts common audio file formats like MP3 for uploaded recordings."
          />
          <FAQ
            q="Can I ask questions in a language other than the meeting's?"
            a="Yes. Ask a question in any language and Meeting Notes Bot responds in that same language."
          />
          <FAQ
            q="What gets generated automatically?"
            a="Every upload produces a full transcript, a summary, a list of action items, and key decisions made during the meeting."
          />
          <FAQ
            q="Can I export my meeting notes?"
            a="Yes. Every meeting can be downloaded as a PDF."
          />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to stop taking meeting notes by hand?
            </h2>
            <p className="mt-1 text-muted-foreground">
              It's free to try â€” upload your first recording in under a
              minute.
            </p>
          </div>
          <Link
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg" }).concat(
              " bg-indigo-600 text-white hover:bg-indigo-700"
            )}
          >
            Try Meeting Notes Bot
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
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
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
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
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