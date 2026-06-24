import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Halubase" },
      { name: "description", content: "Terms of Service for using the Halubase application." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src={logoAsset.uri} alt="Halubase Logo" className="h-8 w-8 rounded-lg" />
            <span className="font-bold text-lg tracking-tight">Halubase</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="/guide" className="text-muted-foreground hover:text-foreground transition-colors">User Guide</a>
            <a href="/premium" className="text-muted-foreground hover:text-foreground transition-colors">Premium</a>
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-border/50 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            Last Updated: June 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Please read these terms carefully before using Halubase.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-primary">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the Halubase mobile application, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the App.
          </p>

          <h2>2. User Content and Ownership</h2>
          <p>
            You retain all your ownership rights in your diary entries, photos, videos, and other content ("User Content"). We do not claim any ownership rights over your User Content. By using Halubase, you are entirely responsible for the data you create and store.
          </p>

          <h2>3. In-App Purchases & Premium</h2>
          <p>
            Halubase offers a "Premium" upgrade available through an In-App Purchase. The Premium upgrade provides a lifetime access to all premium features, including the Secret Folder, an ad-free experience, and advanced cloud sync.
          </p>
          <ul>
            <li><strong>Payment:</strong> Payment will be charged to your Apple ID or Google Play account at the confirmation of purchase.</li>
            <li><strong>Non-Subscription:</strong> This is a one-time purchase, NOT a recurring subscription.</li>
            <li><strong>Refunds:</strong> Refunds are handled by Apple and Google in accordance with their respective App Store and Google Play refund policies.</li>
          </ul>

          <h2>4. Prohibited Activities</h2>
          <p>
            You may not access or use the App for any purpose other than that for which we make the App available. You agree not to attempt to bypass any security measures of the App, including the Secret Folder authentication.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall Halubase, its developers, or partners be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, that result from the use of, or inability to use, this service. We strongly recommend regularly backing up your data to the cloud to prevent data loss.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our App after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:support@halubase.lovable.app">support@halubase.lovable.app</a>.
          </p>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Halubase. All rights reserved.</p>
      </footer>
    </div>
  );
}