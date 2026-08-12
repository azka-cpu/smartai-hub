import Link from "next/link";
import { appsConfig } from "@/lib/apps-config";
import { ArrowRight } from "lucide-react";

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
        {Object.entries(appsConfig).map(([id, app]) => {
          const Icon = app.icon;
          return (
            <Link
              key={id}
              href={`/start/${id}`}
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
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-medium">{app.name}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {app.tagline}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium">
                Try it free
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
