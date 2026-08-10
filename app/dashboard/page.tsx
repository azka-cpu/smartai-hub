import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  FileText,
  Receipt,
  Mic,
  ScanBarcode,
  ArrowUpRight,
  Sparkles,
  LayoutGrid,
  Activity,
} from "lucide-react";

const apps = [
  {
    name: "PDF Copilot",
    description: "Chat with PDFs using AI.",
    href: "/apps/pdf-copilot",
    icon: FileText,
    accent: "#0d9488", // teal-600
  },
  {
    name: "SpendSnap",
    description: "AI expense tracker.",
    href: "/apps/spendsnap",
    icon: Receipt,
    accent: "#ea580c", // orange-600
  },
  {
    name: "Meeting Notes Bot",
    description: "AI meeting assistant.",
    href: "/apps/meeting-notes-bot",
    icon: Mic,
    accent: "#4f46e5", // indigo-600
  },
  {
    name: "Barcode Scanner",
    description: "AI product scanner.",
    href: "/apps/barcode-scanner",
    icon: ScanBarcode,
    accent: "#e11d48", // rose-600
  },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const displayName = user.email?.split("@")[0] ?? "there";
  const initial = displayName.charAt(0).toUpperCase();
  const memberSince = new Date(user.created_at).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* ---------- HEADER ---------- */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-lg font-semibold text-background">
              {initial}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                {getGreeting()}
              </p>
              <h1 className="text-2xl font-semibold tracking-tight">
                {displayName}
              </h1>
            </div>
          </div>

          <div className="flex gap-6 rounded-xl border border-border bg-background px-5 py-3 text-sm">
            <div>
              <p className="text-muted-foreground">Apps</p>
              <p className="font-semibold">{apps.length}</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-muted-foreground">Plan</p>
              <p className="font-semibold">Free</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-muted-foreground">Member since</p>
              <p className="font-semibold">{memberSince}</p>
            </div>
          </div>
        </div>

        {/* ---------- APPS ---------- */}
        <div className="mt-12 flex items-center gap-2">
          <LayoutGrid className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Your apps
          </h2>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.href}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: app.accent }}
              />
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: `${app.accent}1a`,
                  color: app.accent,
                }}
              >
                <app.icon className="h-5 w-5" />
              </div>
              <h3 className="font-medium">{app.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {app.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium">
                Open
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* ---------- USAGE ---------- */}
        <div className="mt-12 flex items-center gap-2">
          <Activity className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Usage
          </h2>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-border bg-background">
          {apps.map((app, i) => (
            <div
              key={app.name}
              className={`flex items-center justify-between px-5 py-4 ${
                i !== apps.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-md"
                  style={{
                    backgroundColor: `${app.accent}1a`,
                    color: app.accent,
                  }}
                >
                  <app.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{app.name}</span>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Sparkles className="h-3 w-3" />
                Tracking coming soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}