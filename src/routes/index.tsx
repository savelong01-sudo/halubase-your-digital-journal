import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, FileText, Image as ImageIcon, Link2, Lock, Sparkles, Calendar, Download, Apple, Play } from "lucide-react";
import heroAsset from "@/assets/halubase-home.png.asset.json";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halubase — Journal & Documents" },
      { name: "description", content: "Halubase is a journal and personal document storage app. Capture every moment, photo, link, and file in one place." },
      { property: "og:title", content: "Halubase — Journal & Documents" },
      { property: "og:description", content: "Beautiful & private journal and personal document storage app." },
      { property: "og:image", content: heroAsset.url },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Halubase logo" className="h-9 w-9 rounded-xl" />
            <span className="font-bold text-lg tracking-tight">Halubase</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#showcase" className="hover:text-foreground transition">Showcase</a>
            <a href="/guide" className="hover:text-foreground transition">Guide</a>
            <a href="#download" className="hover:text-foreground transition">Download</a>
          </nav>
          <a href="#download" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition">
            <Download className="h-4 w-4" /> Get App
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border/60 text-xs font-medium text-muted-foreground mb-6">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Journal & Documents · 2026 Edition
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Capture every <span className="text-gradient-brand">moment</span>, store what matters.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Halubase is a personal journal & documents app — a place to keep your photos, notes, links, and PDF files
              organized by month. Beautiful, private, and always with you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#download" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-medium shadow-soft hover:scale-[1.02] transition">
                <Apple className="h-5 w-5" /> App Store
              </a>
              <a href="#download" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-card border border-border font-medium hover:bg-secondary transition">
                <Play className="h-5 w-5" /> Google Play
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Lock className="h-4 w-4" /> E2E Encryption</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Free to use</div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-brand blur-3xl opacity-30 rounded-full" />
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-brand rounded-[3.5rem] blur-2xl opacity-40" />
              <img
                src={heroAsset.url}
                alt="Halubase app interface on iPhone"
                className="relative w-[300px] md:w-[340px] rounded-[3rem] shadow-glow border-[10px] border-foreground/90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Everything you need to <span className="text-gradient-brand">keep memories</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Halubase combines journaling, photo library, and document management — all in a clean experience.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="group p-7 rounded-3xl bg-card border border-border/60 hover:shadow-soft hover:-translate-y-1 transition-all">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${f.bg} text-white mb-5`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="py-24 px-6 bg-secondary/40">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="absolute inset-10 bg-gradient-brand blur-3xl opacity-25 rounded-full" />
            <img
              src={heroAsset.url}
              alt="Halubase app home"
              className="relative w-[280px] md:w-[320px] rounded-[2.5rem] shadow-soft border-[8px] border-foreground/90"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-sm font-semibold text-accent uppercase tracking-wider">Monthly Journal</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              A vibrant timeline of you.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Review each month in a visual photo grid. Count moments, add tags, attach links, PDFs, Excel files —
              all neatly organized in a journal card.
            </p>
            <ul className="mt-8 space-y-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-gradient-brand" />
                  <span className="text-foreground/90">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="py-24 px-6">
        <div className="mx-auto max-w-4xl relative overflow-hidden rounded-[2.5rem] bg-gradient-brand p-12 md:p-16 text-center text-white shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,white,transparent_50%)] opacity-20" />
          <div className="relative">
            <img src={logoAsset.url} alt="Halubase" className="mx-auto h-16 w-16 rounded-2xl mb-6 shadow-soft" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Start your journey today</h2>
            <p className="mt-4 text-lg text-white/85 max-w-xl mx-auto">
              Download Halubase for free and turn every day into a memorable page.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-foreground font-medium hover:scale-[1.02] transition">
                <Apple className="h-5 w-5" /> App Store
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-medium backdrop-blur hover:bg-white/20 transition">
                <Play className="h-5 w-5" /> Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-10 px-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={logoAsset.url} alt="" className="h-6 w-6 rounded-md" />
            <span>© 2026 Halubase. Journal & Documents.</span>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-foreground transition">Privacy</a>
            <a href="/terms" className="hover:text-foreground transition">Terms</a>
            <a href="/cookies" className="hover:text-foreground transition">Cookies</a>
            <a href="/guide" className="hover:text-foreground transition">Guide</a>
            <a href="mailto:support@halubase.lovable.app" className="hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  { icon: BookOpen, title: "Daily Journal", desc: "Write down your emotions, save thoughts and moments day by day, month by month.", bg: "bg-[oklch(0.7_0.22_5)]" },
  { icon: ImageIcon, title: "Photo Library", desc: "Organize photos by month with a visual grid, automatically counting moments.", bg: "bg-[oklch(0.72_0.2_40)]" },
  { icon: FileText, title: "Diverse Documents", desc: "Attach PDF, Word, Excel files right inside your journal entries.", bg: "bg-[oklch(0.72_0.18_145)]" },
  { icon: Link2, title: "Save Links easily", desc: "Collect links to articles, videos, and references by topics.", bg: "bg-[oklch(0.62_0.2_255)]" },
  { icon: Calendar, title: "Timeline", desc: "Look back at your journey by months and years with a vibrant interface.", bg: "bg-[oklch(0.65_0.2_300)]" },
  { icon: Lock, title: "Absolute Privacy", desc: "End-to-End Encryption. Your data belongs only to you.", bg: "bg-[oklch(0.4_0.05_260)]" },
];

const highlights = [
  "Photo grid numbered by days of the month — easy to look back at every moment.",
  "Hashtags & quick notes for each month: #Chill, #End, #LookBack…",
  "Support for various file types: images, links, PDF, XLSX, DOCX in a single card.",
  "Smart search across multiple years of journal data.",
];
