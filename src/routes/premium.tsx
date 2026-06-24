import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Halubase Premium — Mở khóa Tính năng Trọn đời" },
      { name: "description", content: "Nâng cấp lên Halubase Premium để trải nghiệm không quảng cáo, Thư mục bí mật và đồng bộ hóa đám mây." },
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
            <a href="/guide" className="text-muted-foreground hover:text-foreground transition-colors">Hướng dẫn</a>
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Bảo mật</a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Điều khoản</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/10 mb-6">
            <span className="text-4xl">⭐</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Mở khóa Halubase Premium
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nâng tầm trải nghiệm viết nhật ký của bạn với các tính năng độc quyền được thiết kế cho sự tiện lợi và riêng tư tối đa.
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
                <h3 className="text-xl font-bold mb-2">Thư mục Bí mật</h3>
                <p className="text-muted-foreground">Bảo vệ những kỷ niệm riêng tư nhất của bạn bằng mã PIN hoặc xác thực sinh trắc học. Giữ an toàn cho mọi bí mật của bạn.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Trải nghiệm Không Quảng cáo</h3>
                <p className="text-muted-foreground">Tận hưởng trải nghiệm viết nhật ký mượt mà, không bị phân tâm mãi mãi mà không có bất kỳ quảng cáo biểu ngữ hoặc cửa sổ bật lên nào.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Đồng bộ Đám mây Nâng cao</h3>
                <p className="text-muted-foreground">Tự động sao lưu và khôi phục toàn bộ dữ liệu của bạn trên nhiều thiết bị một cách mượt mà và bảo mật nhất.</p>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 shadow-2xl shadow-amber-500/10 text-center">
            <div className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-4">Mua 1 lần dùng mãi mãi</div>
            <div className="flex items-end justify-center gap-1 mb-4">
              <span className="text-5xl font-bold">$4.99</span>
              <span className="text-xl text-muted-foreground mb-1">USD</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Thanh toán một lần duy nhất. Không có gói đăng ký gia hạn tự động.
            </p>
            <a 
              href="halubase://settings" 
              className="block w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Mở khóa trong Ứng dụng
            </a>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              Mở ứng dụng Halubase trên điện thoại của bạn, vào mục Cài đặt (Settings), và chọn "Unlock Premium Features" để hoàn tất giao dịch. Thanh toán sẽ được xử lý an toàn qua Apple App Store hoặc Google Play.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Halubase. Đã đăng ký bản quyền.</p>
      </footer>
    </div>
  );
}
