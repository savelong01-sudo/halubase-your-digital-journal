import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, FileText, Image as ImageIcon, Link2, Lock, Sparkles, Calendar, Download, Apple, Play } from "lucide-react";
import heroAsset from "@/assets/halubase-home.png.asset.json";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halubase — Journal & Documents" },
      { name: "description", content: "Halubase là ứng dụng viết nhật ký và lưu trữ tài liệu cá nhân. Ghi lại mọi khoảnh khắc, ảnh, link và file ở một nơi duy nhất." },
      { property: "og:title", content: "Halubase — Journal & Documents" },
      { property: "og:description", content: "Ứng dụng viết nhật ký và lưu trữ dữ liệu cá nhân, đẹp & riêng tư." },
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
            <a href="#features" className="hover:text-foreground transition">Tính năng</a>
            <a href="#showcase" className="hover:text-foreground transition">Giao diện</a>
            <a href="#download" className="hover:text-foreground transition">Tải về</a>
          </nav>
          <a href="#download" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition">
            <Download className="h-4 w-4" /> Tải ngay
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border/60 text-xs font-medium text-muted-foreground mb-6">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Journal & Documents · Phiên bản mới 2026
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Ghi lại mọi <span className="text-gradient-brand">khoảnh khắc</span>, lưu trữ mọi điều quan trọng.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Halubase là ứng dụng nhật ký & tài liệu cá nhân — nơi bạn lưu giữ ảnh, ghi chú, link và file PDF
              theo từng tháng. Đẹp, riêng tư, và luôn bên bạn.
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
              <div className="flex items-center gap-2"><Lock className="h-4 w-4" /> Mã hoá E2E</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Miễn phí</div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-brand blur-3xl opacity-30 rounded-full" />
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-brand rounded-[3.5rem] blur-2xl opacity-40" />
              <img
                src={heroAsset.url}
                alt="Giao diện ứng dụng Halubase trên iPhone"
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
              Mọi thứ bạn cần để <span className="text-gradient-brand">lưu giữ ký ức</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Halubase kết hợp nhật ký, thư viện ảnh và quản lý tài liệu — tất cả trong một trải nghiệm gọn gàng.
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
              alt="Trang chủ ứng dụng Halubase"
              className="relative w-[280px] md:w-[320px] rounded-[2.5rem] shadow-soft border-[8px] border-foreground/90"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-sm font-semibold text-accent uppercase tracking-wider">Nhật ký theo tháng</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Một dòng thời gian sống động về bạn.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Xem lại từng tháng dưới dạng lưới ảnh trực quan. Đếm số khoảnh khắc, gắn tag, đính kèm link, PDF, Excel —
              tất cả gọn trong một thẻ nhật ký.
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Bắt đầu hành trình của bạn hôm nay</h2>
            <p className="mt-4 text-lg text-white/85 max-w-xl mx-auto">
              Tải Halubase miễn phí và biến mỗi ngày thành một trang đáng nhớ.
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
            <a href="#" className="hover:text-foreground transition">Quyền riêng tư</a>
            <a href="#" className="hover:text-foreground transition">Điều khoản</a>
            <a href="#" className="hover:text-foreground transition">Liên hệ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  { icon: BookOpen, title: "Nhật ký hằng ngày", desc: "Viết những dòng cảm xúc, lưu lại suy nghĩ và khoảnh khắc theo từng ngày, từng tháng.", bg: "bg-[oklch(0.7_0.22_5)]" },
  { icon: ImageIcon, title: "Thư viện ảnh", desc: "Sắp xếp ảnh theo tháng với lưới trực quan, đếm số khoảnh khắc tự động.", bg: "bg-[oklch(0.72_0.2_40)]" },
  { icon: FileText, title: "Tài liệu đa dạng", desc: "Đính kèm PDF, Word, Excel ngay trong từng trang nhật ký của bạn.", bg: "bg-[oklch(0.72_0.18_145)]" },
  { icon: Link2, title: "Lưu link tiện lợi", desc: "Thu thập link bài viết, video, tài liệu tham khảo theo chủ đề.", bg: "bg-[oklch(0.62_0.2_255)]" },
  { icon: Calendar, title: "Dòng thời gian", desc: "Nhìn lại hành trình của bạn theo tháng, năm với giao diện sống động.", bg: "bg-[oklch(0.65_0.2_300)]" },
  { icon: Lock, title: "Riêng tư tuyệt đối", desc: "Mã hoá đầu cuối. Dữ liệu của bạn chỉ thuộc về bạn.", bg: "bg-[oklch(0.4_0.05_260)]" },
];

const highlights = [
  "Lưới ảnh đánh số theo ngày trong tháng — dễ nhìn lại từng khoảnh khắc.",
  "Hashtag & ghi chú nhanh cho mỗi tháng: #Chill, #KếtThúc, #NhìnLại…",
  "Hỗ trợ nhiều loại tệp: ảnh, link, PDF, XLSX, DOCX trong cùng một thẻ.",
  "Tìm kiếm thông minh xuyên suốt nhiều năm dữ liệu nhật ký.",
];
