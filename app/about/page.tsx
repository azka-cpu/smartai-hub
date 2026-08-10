import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        About SmartAI Hub
      </h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>
          SmartAI Hub brings together four AI-powered productivity apps under
          one account: PDF Copilot, SpendSnap, Meeting Notes Bot, and Barcode
          Scanner.
        </p>
        <p>
          Each app started as its own project, solving one specific problem
          well. SmartAI Hub exists to unify them â€” one login, one dashboard,
          one place to find the tool that fits whatever you're doing right
          now, whether that's reading a contract, tracking a receipt,
          reviewing a meeting, or checking a nutrition label.
        </p>
        <p>
          The apps are free to use today. Pro plans with higher limits are on
          the way for people who need more.
        </p>
      </div>

      <div className="mt-10">
        <Link href="/apps" className={buttonVariants({ size: "lg" })}>
          Explore the apps
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}