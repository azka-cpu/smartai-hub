"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/apps", label: "Apps" },
  { href: "/solutions", label: "Solutions" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold">
          SmartAI Hub
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-black">
              {l.label}
            </Link>
          ))}
          <Link href="/login" className={buttonVariants({ variant: "outline", size: "sm" })}>
            Login
          </Link>
          <Link href="/apps" className={buttonVariants({ size: "sm" })}>
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-3 border-t bg-white px-4 py-4 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/login" className={buttonVariants({ variant: "outline", size: "sm" })}>
            Login
          </Link>
          <Link href="/apps" className={buttonVariants({ size: "sm" })}>
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}