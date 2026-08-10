"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-lg px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Contact us
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Questions, feedback, or something not working right? Send us a
        message.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <div>
          <label className="text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your name"
          />
        </div>
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
          <label className="text-sm font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="How can we help?"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className={buttonVariants({ size: "lg" }).concat(
            " w-full disabled:opacity-60"
          )}
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p className="text-center text-sm text-green-600">
            Message sent — we'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </main>
  );
}
