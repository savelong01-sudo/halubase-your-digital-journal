import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Halubase Premium — Unlock Lifetime Features" },
      { name: "description", content: "Upgrade to Halubase Premium for an ad-free experience, Secret Folder access, and advanced cloud sync." },
    ],
  }),
  component: PremiumPage,
});

function PremiumPage() {
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
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/10 mb-6">
            <span className="text-4xl">⭐</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Unlock Halubase Premium
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take your diary experience to the next level with exclusive features designed for ultimate privacy and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Features */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Secret Folder</h3>
                <p className="text-muted-foreground">Protect your most private memories with PIN code or biometric authentication. Keep your secrets safe.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ad-Free Experience</h3>
                <p className="text-muted-foreground">Enjoy a seamless, distraction-free journaling experience forever without any banner or popup ads.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Cloud Sync</h3>
                <p className="text-muted-foreground">Automatically backup and restore all your data across multiple devices seamlessly.</p>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 shadow-2xl shadow-amber-500/10 text-center">
            <div className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-4">Lifetime Access</div>
            <div className="flex items-end justify-center gap-1 mb-4">
              <span className="text-5xl font-bold">$4.99</span>
              <span className="text-xl text-muted-foreground mb-1">USD</span>
            </div>
            <p className="text-muted-foreground mb-8">
              One-time payment. Yours forever. No recurring subscriptions.
            </p>
            <a 
              href="halubase://settings" 
              className="block w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Get Premium in App
            </a>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              Open the Halubase app on your mobile device, navigate to Settings, and tap "Unlock Premium Features" to complete your purchase. Payment will be processed securely via Apple App Store or Google Play.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Halubase. All rights reserved.</p>
      </footer>
    </div>
  );
}
