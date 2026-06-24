import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Chính sách Bảo mật — Halubase" },
      { name: "description", content: "Chính sách bảo mật và xử lý dữ liệu của ứng dụng Halubase." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Điều khoản</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-border/50 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            Cập nhật lần cuối: Tháng 6 năm 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Chính sách Bảo mật
          </h1>
          <p className="text-xl text-muted-foreground">
            Cách chúng tôi xử lý và bảo vệ thông tin cá nhân của bạn.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-primary">
          <p>
            Chào mừng bạn đến với Halubase! Sự riêng tư của bạn là ưu tiên hàng đầu của chúng tôi. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin của bạn khi bạn sử dụng ứng dụng di động của chúng tôi ("Ứng dụng"). Vui lòng đọc kỹ. NẾU BẠN KHÔNG ĐỒNG Ý VỚI CÁC ĐIỀU KHOẢN NÀY, VUI LÒNG KHÔNG SỬ DỤNG ỨNG DỤNG.
          </p>

          <h2>1. Thông tin chúng tôi thu thập</h2>
          <p>Chúng tôi có thể thu thập thông tin của bạn theo nhiều cách khác nhau, bao gồm:</p>
          
          <h3>1.1 Dữ liệu cá nhân</h3>
          <p>
            <strong>Nội dung người dùng tạo:</strong> Văn bản, hình ảnh, video và âm thanh bạn tạo trong nhật ký được lưu trữ trực tiếp (cục bộ) trên thiết bị của bạn. Chúng tôi KHÔNG thu thập hoặc lưu trữ nhật ký của bạn trên máy chủ của chúng tôi.
          </p>
          <p>
            <strong>Sao lưu đám mây (Cloud Backup):</strong> Nếu bạn bật tính năng sao lưu, dữ liệu đã mã hóa của bạn sẽ được lưu trên tài khoản đám mây cá nhân của bạn (như Google Drive hoặc Dropbox). Chúng tôi chỉ yêu cầu quyền hạn tối thiểu để tải lên và tải xuống các tệp sao lưu của bạn.
          </p>

          <h3>1.2 Thông tin thu thập tự động</h3>
          <p>
            Khi bạn truy cập Ứng dụng, chúng tôi có thể tự động thu thập một số thông tin về thiết bị và cách sử dụng, chẳng hạn như địa chỉ IP, loại thiết bị, hệ điều hành, sự cố ứng dụng. Dữ liệu này được thu thập ẩn danh để giúp chúng tôi cải thiện ứng dụng và khắc phục lỗi.
          </p>

          <h2>2. Cách chúng tôi sử dụng thông tin</h2>
          <p>Việc có thông tin chính xác giúp chúng tôi cung cấp cho bạn trải nghiệm mượt mà, hiệu quả và tùy chỉnh. Cụ thể, chúng tôi có thể sử dụng thông tin thu thập được để:</p>
          <ul>
            <li>Cung cấp, vận hành và duy trì Ứng dụng.</li>
            <li>Cải thiện, cá nhân hóa và mở rộng Ứng dụng.</li>
            <li>Hiểu và phân tích cách bạn sử dụng Ứng dụng.</li>
            <li>Tạo điều kiện cho tính năng sao lưu đám mây theo yêu cầu của bạn.</li>
            <li>Hiển thị quảng cáo nhắm mục tiêu (nếu bạn sử dụng phiên bản miễn phí của Ứng dụng).</li>
          </ul>

          <h2>3. Dịch vụ của bên thứ ba và Quảng cáo</h2>
          <p>
            Chúng tôi có thể sử dụng các công ty quảng cáo bên thứ ba, chẳng hạn như <strong>Google AdMob</strong>, để hiển thị quảng cáo khi bạn sử dụng Ứng dụng. Các công ty này có thể sử dụng thông tin ẩn danh để cung cấp quảng cáo về hàng hóa và dịch vụ mà bạn quan tâm.
          </p>
          <p>
            Nếu bạn mua gói <strong>Premium</strong>, tất cả quảng cáo và theo dõi từ bên thứ ba trong Ứng dụng sẽ bị vô hiệu hóa hoàn toàn.
          </p>

          <h2>4. Bảo mật thông tin</h2>
          <p>
            Chúng tôi sử dụng các biện pháp bảo mật về quản trị và kỹ thuật để bảo vệ thông tin của bạn. Chúng tôi cung cấp tính năng "Thư mục bí mật" sử dụng xác thực sinh trắc học hoặc mã PIN để mã hóa và hạn chế quyền truy cập vào các mục nhật ký riêng tư trên thiết bị của bạn.
          </p>

          <h2>5. Quyền riêng tư của trẻ em</h2>
          <p>
            Ứng dụng của chúng tôi không dành cho người dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin nhận dạng cá nhân từ trẻ em dưới 13 tuổi. Nếu phát hiện trường hợp như vậy, chúng tôi sẽ xóa thông tin đó ngay lập tức.
          </p>

          <h2>6. Quyền của người dùng & Xóa dữ liệu</h2>
          <p>
            Vì dữ liệu nhật ký chính được lưu trữ cục bộ trên thiết bị của bạn, bạn có toàn quyền kiểm soát nó. Bạn có thể xóa dữ liệu của mình bất cứ lúc nào bằng cách:
          </p>
          <ul>
            <li>Sử dụng tính năng "Xóa tất cả dữ liệu" trong cài đặt Ứng dụng.</li>
            <li>Xóa các tệp sao lưu trực tiếp từ Google Drive hoặc Dropbox của bạn.</li>
            <li>Gỡ cài đặt Ứng dụng khỏi thiết bị.</li>
          </ul>

          <h2>7. Thay đổi Chính sách Bảo mật</h2>
          <p>
            Chúng tôi có thể cập nhật Chính sách bảo mật theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng Chính sách bảo mật mới trên trang này và cập nhật ngày "Cập nhật lần cuối".
          </p>

          <h2>8. Liên hệ với chúng tôi</h2>
          <p>
            Nếu bạn có thắc mắc hoặc nhận xét về Chính sách bảo mật này, vui lòng liên hệ với chúng tôi qua email: <a href="mailto:support@halubase.lovable.app">support@halubase.lovable.app</a>.
          </p>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Halubase. Đã đăng ký bản quyền.</p>
      </footer>
    </div>
  );
}
