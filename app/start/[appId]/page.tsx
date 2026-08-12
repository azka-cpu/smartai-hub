import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { appsConfig, type AppId } from "@/lib/apps-config";

export function generateStaticParams() {
  return Object.keys(appsConfig).map((appId) => ({ appId }));
}

const freeIncludes = [
  "Full access to this app",
  "No credit card required",
  "Unlimited use on the free tier",
];

export default async function StartAppPage({
  params,
}: {
  params: Promise<{ appId: string }>;
}) {
  const { appId } = await params;
  const app = appsConfig[appId as AppId];

  if (!app) notFound();

  const Icon = app.icon;

  return (
    <main className="mx-auto flex min-h-[80vh] max-w-lg flex-col items-center justify-center px-6 py-20 text-center">
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${app.accent}1a`, color: app.accent }}
      >
        <Icon className="h-7 w-7" />
      </div>

      <div
        className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
        style={{ backgroundColor: `${app.accent}1a`, color: app.accent }}
      >
        Free tier
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        You're starting {app.name} on Free
      </h1>
      <p className="mt-2 text-muted-foreground">{app.tagline}</p>

      <ul className="mt-8 space-y-2.5 text-left">
        {freeIncludes.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 shrink-0" style={{ color: app.accent }} />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={app.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 flex w-full items-center justify-center gap-1.5 rounded-lg px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: app.accent }}
      >
        Continue to {app.name}
        <ArrowRight className="h-4 w-4" />
      </a>

      <Link
        href="/apps"
        className="mt-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to all apps
      </Link>
    </main>
  );
}
