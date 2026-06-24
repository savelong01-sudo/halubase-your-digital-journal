import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies Policy — Halubase" },
      { name: "description", content: "Cookies policy for the Halubase website." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Halubase logo" className="h-9 w-9 rounded-xl" />
            <span className="font-bold text-lg tracking-tight">Halubase</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition">Home</a>
            <a href="/guide" className="hover:text-foreground transition">Guide</a>
            <a href="/privacy" className="hover:text-foreground transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-foreground transition">Terms</a>
            <a href="/cookies" className="text-foreground font-medium transition">Cookies</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-hero py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Cookies Policy</h1>
          <p className="mt-3 text-lg text-muted-foreground">Information on how we use Cookies on our website</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition">Home</a>
            <span>›</span>
            <span>Cookies Policy</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl space-y-10 text-[15px] leading-relaxed text-muted-foreground">
          <p>This Cookies Policy explains how the <strong className="text-foreground">halubase.lovable.app</strong> website uses cookies and similar tracking technologies.</p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">1. What are Cookies?</h2>
            <p className="mb-3">Cookies are small text files stored on your computer or mobile device when you visit a website. They are widely used to make websites work efficiently, as well as to provide information to the owners of the site.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">2. How We Use Cookies</h2>
            <p className="mb-3">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Essential Cookies:</strong> These are required for the operation of our website, allowing you to access secure areas or use core features.</li>
              <li><strong className="text-foreground">Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting anonymous statistics (such as Google Analytics).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">3. Halubase Mobile App</h2>
            <p className="mb-3">Please note that this policy applies primarily to our informational website. The Halubase mobile application handles data differently (relying mostly on local storage and your personal cloud storage). For details on the App, please see our Privacy Policy.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">4. Your Choices</h2>
            <p className="mb-3">You can choose to accept or decline cookies through your browser settings. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">5. Contact Us</h2>
            <p className="mb-3">If you have any questions about our use of cookies, please contact us at: <a href="mailto:support@halubase.lovable.app" className="text-primary hover:underline">support@halubase.lovable.app</a></p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Halubase. All rights reserved.</p>
      </footer>
    </div>
  );
}