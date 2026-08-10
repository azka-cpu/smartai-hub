"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";

const CONTACT_EMAIL = "m.zavi842@gmail.com"; // TODO: replace with your real contact email

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "website"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
          className={buttonVariants({ size: "lg" }).concat(" w-full")}
        >
          Send message
        </button>
        <p className="text-center text-xs text-muted-foreground">
          This opens your email app with the message pre-filled.
        </p>
      </form>
    </main>
  );
}
