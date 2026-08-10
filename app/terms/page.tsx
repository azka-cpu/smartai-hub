const LAST_UPDATED = "August 2026";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-10 space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-lg font-medium text-foreground">
            Using our apps
          </h2>
          <p className="mt-2">
            SmartAI Hub provides access to PDF Copilot, SpendSnap, Meeting
            Notes Bot, and Barcode Scanner. These apps are currently free to
            use. By creating an account, you agree to use them for their
            intended purpose and not to misuse, disrupt, or attempt to
            exploit the service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Your content
          </h2>
          <p className="mt-2">
            You retain ownership of anything you upload — documents,
            receipts, recordings, or scans. You're responsible for making
            sure you have the right to upload that content.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            No guarantees on AI output
          </h2>
          <p className="mt-2">
            Our apps use AI to summarize, extract, and analyze content. AI
            output can be incomplete or incorrect. Don't rely on it as the
            sole basis for financial, medical, legal, or other important
            decisions — always verify anything important.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Service availability
          </h2>
          <p className="mt-2">
            These apps are actively being developed. Features, limits, and
            pricing may change as the product evolves, and we'll do our best
            to communicate meaningful changes in advance.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Account termination
          </h2>
          <p className="mt-2">
            You can stop using the service and delete your account at any
            time. We may suspend accounts that violate these terms or misuse
            the service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about these terms? Reach out via our{" "}
            <a href="/contact" className="underline underline-offset-2">
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
