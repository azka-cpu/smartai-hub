"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) {
        setError(error.message);
      } else {
        setMessage("Check your email to confirm your account.");
      }
    }

    setLoading(false);
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 py-20">
      <Card className="w-full max-w-sm">
        <CardContent className="p-6">
          <h1 className="text-xl font-semibold tracking-tight">
            {mode === "login" ? "Log in" : "Create an account"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Access your SmartAI Hub dashboard.
          </p>

          <div className="mt-6 flex gap-1 rounded-lg bg-muted p-1 text-sm">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 rounded-md py-1.5 font-medium transition-colors ${
                mode === "login"
                  ? "bg-background shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className={`flex-1 rounded-md py-1.5 font-medium transition-colors ${
                mode === "signup"
                  ? "bg-background shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Sign up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="..........."
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
            {message && (
              <p className="text-sm text-green-600">{message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={buttonVariants({ size: "default" }).concat(
                " w-full"
              )}
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                ? "Log in"
                : "Sign up"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            <Link href="/" className="underline underline-offset-2">
              Back to home
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}