import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Chính sách Cookie — Halubase" },
      { name: "description", content: "Chính sách sử dụng Cookie của trang web Halubase." },
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
            <a href="/" className="hover:text-foreground transition">Trang chủ</a>
            <a href="/guide" className="hover:text-foreground transition">Hướng dẫn</a>
            <a href="/privacy" className="hover:text-foreground transition">Chính sách bảo mật</a>
            <a href="/terms" className="hover:text-foreground transition">Điều khoản</a>
            <a href="/cookies" className="text-foreground font-medium transition">Cookie</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-hero py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Chính sách Cookie</h1>
          <p className="mt-3 text-lg text-muted-foreground">Thông tin về cách chúng tôi sử dụng Cookie trên trang web</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition">Trang chủ</a>
            <span>›</span>
            <span>Chính sách Cookie</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl space-y-10 text-[15px] leading-relaxed text-muted-foreground">
          <p>Chính sách Cookie này giải thích cách trang web <strong className="text-foreground">halubase.com</strong> ("Trang web") sử dụng cookie và các công nghệ theo dõi tương tự.</p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">1. Cookie là gì?</h2>
            <p>Cookie là các tệp văn bản nhỏ được lưu trữ trên thiết bị của bạn khi bạn truy cập một trang web. Chúng giúp trang web nhận diện thiết bị của bạn và lưu trữ một số thông tin về sở thích hoặc hành vi truy cập trước đó.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">2. Chúng tôi sử dụng Cookie như thế nào?</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.1 Cookie cần thiết</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Cookie phiên (session cookies)</strong>: Duy trì trạng thái điều hướng khi bạn duyệt trang. Tự động xóa khi đóng trình duyệt.</li>
              <li><strong className="text-foreground">Cookie bảo mật</strong>: Bảo vệ trang web khỏi các cuộc tấn công và truy cập trái phép.</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.2 Cookie phân tích</h3>
            <p>Nếu chúng tôi triển khai công cụ phân tích (như Google Analytics) trong tương lai, các cookie này sẽ giúp chúng tôi hiểu cách người dùng tương tác với trang web. Những cookie này sẽ được ẩn danh và không nhận dạng cá nhân bạn.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.3 Cookie quảng cáo</h3>
            <p>Chúng tôi <strong className="text-foreground">không</strong> sử dụng cookie quảng cáo bên thứ ba. Trang web Halubase không hiển thị quảng cáo từ mạng quảng cáo bên thứ ba.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">3. Cookie của bên thứ ba</h2>
            <p className="mb-3">Một số dịch vụ bên thứ ba được nhúng trong trang web có thể đặt cookie riêng:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Google Fonts</strong>: Cung cấp phông chữ. Cookie này được Google quản lý theo <a href="https://policies.google.com/privacy" target="_blank" className="text-primary hover:underline">Chính sách Bảo mật của Google</a>.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">4. Cách quản lý Cookie</h2>
            <p className="mb-3">Bạn có thể kiểm soát cookie qua cài đặt trình duyệt:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Chrome</strong>: Cài đặt → Quyền riêng tư và bảo mật → Cookie</li>
              <li><strong className="text-foreground">Safari</strong>: Cài đặt → Quyền riêng tư → Quản lý dữ liệu trang web</li>
              <li><strong className="text-foreground">Firefox</strong>: Cài đặt → Quyền riêng tư & Bảo mật → Cookie</li>
              <li><strong className="text-foreground">Edge</strong>: Cài đặt → Cookie và quyền trang web</li>
            </ul>
            <p className="mt-3">Nếu bạn tắt tất cả cookie, trang web vẫn hoạt động nhưng một số tính năng có thể không hoạt động tối ưu.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">5. Ứng dụng Halubase có dùng Cookie không?</h2>
            <p><strong className="text-foreground">Không.</strong> Ứng dụng Halubase trên iOS/Android không sử dụng cookie. Ứng dụng hoạt động hoàn toàn ngoại tuyến và dữ liệu được lưu trong SQLite database cục bộ trên thiết bị của bạn.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">6. Liên hệ</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:support@halubase.com" className="text-primary hover:underline">support@halubase.com</a></li>
              <li>GitHub: <a href="https://github.com/savelong01-sudo" target="_blank" className="text-primary hover:underline">github.com/savelong01-sudo</a></li>
            </ul>
          </div>

          <p className="pt-8 border-t border-border/60 text-sm italic text-muted-foreground">Cập nhật lần cuối: 5 tháng 6, 2026</p>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10 px-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src={logoAsset.url} alt="" className="h-6 w-6 rounded-md" />
            <span>© 2026 Halubase. Journal & Documents.</span>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-foreground transition">Quyền riêng tư</a>
            <a href="/terms" className="hover:text-foreground transition">Điều khoản</a>
            <a href="/cookies" className="hover:text-foreground transition">Cookie</a>
            <a href="/guide" className="hover:text-foreground transition">Hướng dẫn</a>
            <a href="mailto:support@halubase.com" className="hover:text-foreground transition">Liên hệ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}