import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Điều khoản Dịch vụ — Halubase" },
      { name: "description", content: "Điều khoản dịch vụ khi sử dụng ứng dụng Halubase." },
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
            <a href="/guide" className="text-muted-foreground hover:text-foreground transition-colors">Hướng dẫn</a>
            <a href="/premium" className="text-muted-foreground hover:text-foreground transition-colors">Premium</a>
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Bảo mật</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-border/50 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            Cập nhật lần cuối: Tháng 6 năm 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Điều khoản Dịch vụ
          </h1>
          <p className="text-xl text-muted-foreground">
            Vui lòng đọc kỹ các điều khoản này trước khi sử dụng Halubase.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-primary">
          <h2>1. Đồng ý với Điều khoản</h2>
          <p>
            Bằng cách truy cập hoặc sử dụng ứng dụng di động Halubase, bạn đồng ý bị ràng buộc bởi các Điều khoản Dịch vụ này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản, bạn không được phép truy cập Ứng dụng.
          </p>

          <h2>2. Nội dung và Quyền sở hữu của Người dùng</h2>
          <p>
            Bạn giữ tất cả quyền sở hữu đối với các bài viết nhật ký, hình ảnh, video và nội dung khác của mình ("Nội dung Người dùng"). Chúng tôi không yêu cầu bất kỳ quyền sở hữu nào đối với Nội dung Người dùng của bạn. Bằng cách sử dụng Halubase, bạn hoàn toàn chịu trách nhiệm về dữ liệu bạn tạo và lưu trữ.
          </p>

          <h2>3. Thanh toán trong ứng dụng & Premium</h2>
          <p>
            Halubase cung cấp gói nâng cấp "Premium" có sẵn thông qua Thanh toán trong ứng dụng (In-App Purchase). Gói nâng cấp Premium cung cấp quyền truy cập trọn đời (lifetime) vào tất cả các tính năng cao cấp, bao gồm Thư mục bí mật, trải nghiệm không quảng cáo và đồng bộ hóa đám mây nâng cao.
          </p>
          <ul>
            <li><strong>Thanh toán:</strong> Thanh toán sẽ được tính vào tài khoản Apple ID hoặc Google Play của bạn khi xác nhận mua hàng.</li>
            <li><strong>Không phải gói đăng ký:</strong> Đây là khoản thanh toán một lần, KHÔNG phải là gói đăng ký tự động gia hạn (Non-Subscription).</li>
            <li><strong>Hoàn tiền:</strong> Việc hoàn tiền được Apple và Google xử lý theo chính sách hoàn tiền tương ứng của App Store và Google Play.</li>
          </ul>

          <h2>4. Các hoạt động bị Cấm</h2>
          <p>
            Bạn không được truy cập hoặc sử dụng Ứng dụng cho bất kỳ mục đích nào khác ngoài mục đích mà chúng tôi cung cấp. Bạn đồng ý không cố gắng vượt qua bất kỳ biện pháp bảo mật nào của Ứng dụng, bao gồm cả xác thực Thư mục bí mật.
          </p>

          <h2>5. Giới hạn Trách nhiệm Pháp lý</h2>
          <p>
            Trong phạm vi tối đa mà pháp luật hiện hành cho phép, Halubase, các nhà phát triển hoặc đối tác của Halubase sẽ không chịu trách nhiệm về bất kỳ thiệt hại gián tiếp, mang tính trừng phạt, ngẫu nhiên, đặc biệt, do hậu quả hoặc thiệt hại để làm gương, bao gồm nhưng không giới hạn ở thiệt hại do mất lợi nhuận, lợi thế thương mại, việc sử dụng, dữ liệu hoặc các tổn thất vô hình khác, phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ này. Chúng tôi đặc biệt khuyên bạn nên thường xuyên sao lưu dữ liệu của mình lên đám mây để ngăn ngừa mất mát dữ liệu.
          </p>

          <h2>6. Thay đổi Điều khoản</h2>
          <p>
            Chúng tôi bảo lưu quyền sửa đổi hoặc thay thế các Điều khoản này bất kỳ lúc nào theo quyết định riêng của mình. Bằng cách tiếp tục truy cập hoặc sử dụng Ứng dụng sau khi các bản sửa đổi đó có hiệu lực, bạn đồng ý bị ràng buộc bởi các điều khoản đã sửa đổi.
          </p>

          <h2>7. Liên hệ với chúng tôi</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản này, vui lòng liên hệ với chúng tôi tại: <a href="mailto:support@halubase.lovable.app">support@halubase.lovable.app</a>.
          </p>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Halubase. Đã đăng ký bản quyền.</p>
      </footer>
    </div>
  );
}