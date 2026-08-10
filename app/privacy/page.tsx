const LAST_UPDATED = "August 2026";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-10 space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-lg font-medium text-foreground">
            What we collect
          </h2>
          <p className="mt-2">
            When you create an account, we collect your email address and
            any content you upload or enter while using our apps (such as
            PDFs, receipts, meeting recordings, or scanned products). We do
            not collect more than what's needed to provide the service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            How we use it
          </h2>
          <p className="mt-2">
            Your data is used only to operate the apps you use — for
            example, processing an uploaded PDF so you can ask questions
            about it. We do not sell your data, and we do not use your
            content to train AI models.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Third-party services
          </h2>
          <p className="mt-2">
            We use third-party infrastructure providers (such as Supabase
            for authentication and data storage, and AI providers for
            processing) to operate our apps. These providers process data on
            our behalf under their own security and privacy standards.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Your choices
          </h2>
          <p className="mt-2">
            You can request access to, correction of, or deletion of your
            data at any time by contacting us. Deleting your account removes
            your associated data from our systems.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">
            Changes to this policy
          </h2>
          <p className="mt-2">
            As we add features, this policy may be updated. We'll update the
            date above whenever changes are made.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about this policy? Reach out via our{" "}
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
