import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Video,
  Captions,
  Mic,
  CalendarDays,
  BarChart3,
  UploadCloud,
  Sparkles,
} from "lucide-react";

const START_URL = "/start/meetmate-ai";

export default function MeetMateAIPage() {
  return (
    <main className="flex flex-col">
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          {/* Copy */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-600/20 bg-violet-600/10 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-400">
              <Video className="h-3.5 w-3.5" />
              MeetMate AI
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Meet live.
              <br />
              <span className="text-violet-600">Never take notes again.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Join a video call, get live captions as you talk, and let AI
              summarize the meeting the moment it ends — topics, decisions,
              and action items, done automatically.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={START_URL}
                className={buttonVariants({ size: "lg" }).concat(
                  " bg-violet-600 text-white hover:bg-violet-700"
                )}
              >
                Try MeetMate AI
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

          {/* Live-feeling voice assistant mock, grounded in the real product */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <Mic className="h-4 w-4 text-violet-600" />
                <span className="text-sm font-medium">Voice Assistant</span>
              </div>
              <div className="space-y-3 p-4">
                <div className="ml-auto max-w-[85%] rounded-lg bg-violet-600 px-3 py-2 text-sm text-white">
                  Thank you.
                </div>
                <div className="max-w-[90%] rounded-lg bg-muted px-3 py-2 text-sm">
                  You&apos;re welcome! If you need anything else — details
                  from the meeting, follow-up actions, or clarification —
                  just let me know.
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl bg-violet-600/10 sm:-bottom-6 sm:-left-6" />
          </div>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Built for the meeting itself, not just after it
        </h2>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Most tools summarize a recording after you're done. MeetMate is
          there while you're actually talking.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Video className="h-5 w-5" />}
            title="Live video calls"
            description="Join a meeting directly in the browser — no downloads, small groups, works in real time."
          />
          <FeatureCard
            icon={<Captions className="h-5 w-5" />}
            title="Real-time captions"
            description="See what's being said as it happens, so nothing gets missed mid-conversation."
          />
          <FeatureCard
            icon={<Mic className="h-5 w-5" />}
            title="Voice assistant"
            description="Ask it about the meeting out loud and get a spoken answer back — no typing required."
          />
          <FeatureCard
            icon={<CalendarDays className="h-5 w-5" />}
            title="Built-in calendar"
            description="Schedule meetings, see what's coming up, and join with one click when it's time."
          />
        </div>
      </section>

      {/* ---------- SCREENSHOTS ---------- */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            See it in action
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Screenshot
              src="/images/apps/meetmate-ai/dashboard.png"
              alt="MeetMate AI dashboard with meeting stats and quick actions"
              caption="Join a meeting or upload a recording, right from your dashboard"
            />
            <Screenshot
              src="/images/apps/meetmate-ai/calendar.png"
              alt="MeetMate AI calendar showing scheduled meetings"
              caption="See upcoming meetings and join with one click"
            />
            <Screenshot
              src="/images/apps/meetmate-ai/voice-assistant.png"
              alt="MeetMate AI voice assistant conversation"
              caption="Talk to your meeting assistant — ask it anything, out loud"
            />
            <Screenshot
              src="/images/apps/meetmate-ai/ai-insights.png"
              alt="MeetMate AI insights dashboard with meeting activity"
              caption="Track meeting activity and time saved over time"
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
            icon={<Video className="h-5 w-5" />}
            title="Join or schedule a meeting"
            description="Start a call instantly or schedule one on your calendar for later."
          />
          <Step
            icon={<Captions className="h-5 w-5" />}
            title="Talk — captions run live"
            description="Real-time captions appear as the conversation happens, so nothing gets lost."
          />
          <Step
            icon={<Sparkles className="h-5 w-5" />}
            title="Get the summary"
            description="When the meeting ends, AI generates a summary with topics, decisions, and action items."
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
                  Live meetings, captions, and AI summaries — no card
                  required.
                </p>
              </CardContent>
            </Card>
            <Card className="border-violet-600/40">
              <CardContent className="p-6">
                <h3 className="font-medium">Pro</h3>
                <p className="mt-1 text-3xl font-semibold">Coming soon</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Larger meeting sizes and extended history.
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
            q="How is this different from Meeting Notes Bot?"
            a="Meeting Notes Bot works from an uploaded recording after the fact. MeetMate AI is live — you join the call inside the app, see real-time captions while you talk, and get the summary the moment it ends."
          />
          <FAQ
            q="How many people can join a call?"
            a="MeetMate is built for small, focused meetings rather than large webinars or conferences."
          />
          <FAQ
            q="Can I still get a summary from a recording instead of a live call?"
            a="Yes — you can upload a recording from the dashboard if you'd rather not host the call live."
          />
          <FAQ
            q="Can I talk to the assistant instead of typing?"
            a="Yes. The Voice Assistant lets you ask about a meeting out loud and get a spoken response back."
          />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready for meetings that write themselves up?
            </h2>
            <p className="mt-1 text-muted-foreground">
              It's free to try — join your first meeting in under a minute.
            </p>
          </div>
          <Link
            href={START_URL}
            className={buttonVariants({ size: "lg" }).concat(
              " bg-violet-600 text-white hover:bg-violet-700"
            )}
          >
            Try MeetMate AI
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
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600/10 text-violet-600">
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
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600/10 text-violet-600">
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
