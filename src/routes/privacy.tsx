import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Chính sách Bảo mật — Halubase" },
      { name: "description", content: "Chính sách bảo mật dữ liệu của ứng dụng Halubase." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
            <a href="/" className="hover:text-foreground transition">Trang chủ</a>
            <a href="/guide" className="hover:text-foreground transition">Hướng dẫn</a>
            <a href="/privacy" className="text-foreground font-medium transition">Chính sách bảo mật</a>
            <a href="/terms" className="hover:text-foreground transition">Điều khoản</a>
            <a href="/cookies" className="hover:text-foreground transition">Cookie</a>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-hero py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Chính sách Bảo mật</h1>
          <p className="mt-3 text-lg text-muted-foreground">Cam kết bảo vệ quyền riêng tư và dữ liệu của bạn</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition">Trang chủ</a>
            <span>›</span>
            <span>Chính sách Bảo mật</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl space-y-10 text-[15px] leading-relaxed text-muted-foreground">

          <p>Chào mừng bạn đến với Chính sách Bảo mật của <strong className="text-foreground">Halubase</strong> ("chúng tôi", "ứng dụng"). Chúng tôi cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin khi bạn sử dụng ứng dụng Halubase.</p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">1. Thông tin chúng tôi thu thập</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">1.1 Dữ liệu bạn cung cấp trực tiếp</h3>
            <p className="mb-3">Halubase là ứng dụng nhật ký số hoạt động <strong className="text-foreground">hoàn toàn ngoại tuyến</strong> trên thiết bị của bạn. Tất cả nội dung bạn tạo ra bao gồm:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nội dung văn bản nhật ký, tiêu đề</li>
              <li>Hình ảnh chụp hoặc chọn từ thư viện</li>
              <li>Bản ghi âm giọng nói</li>
              <li>Tệp đính kèm (PDF, DOC, v.v.)</li>
              <li>Liên kết (URL) bạn dán vào nhật ký</li>
              <li>Biểu tượng cảm xúc và hashtag</li>
              <li>Mã PIN bảo mật cho Thư mục Bí mật</li>
            </ul>
            <p className="mt-3">Tất cả dữ liệu này được <strong className="text-foreground">lưu trữ cục bộ trên thiết bị của bạn</strong> trong cơ sở dữ liệu SQLite nội bộ và thư mục ứng dụng riêng. Chúng tôi <strong className="text-foreground">không</strong> thu thập, truyền tải hay lưu trữ nội dung nhật ký của bạn trên máy chủ của chúng tôi.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">1.2 Dữ liệu liên kết đám mây</h3>
            <p className="mb-3">Khi bạn chủ động kết nối với dịch vụ đám mây (Google Drive, iCloud, Dropbox) để sao lưu, ứng dụng sẽ yêu cầu bạn xác thực thông qua OAuth 2.0. Chúng tôi chỉ lưu trữ:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Địa chỉ email tài khoản đám mây (để hiển thị trạng thái kết nối)</li>
              <li>Token truy cập tạm thời (được mã hóa và lưu trên thiết bị)</li>
            </ul>
            <p className="mt-3">Chúng tôi <strong className="text-foreground">không</strong> có quyền truy cập vào các tệp khác trên tài khoản đám mây của bạn ngoài thư mục sao lưu Halubase.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">1.3 Dữ liệu thiết bị</h3>
            <p className="mb-3">Ứng dụng có thể truy cập các tính năng thiết bị sau khi bạn cấp quyền:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Máy ảnh</strong> — để chụp ảnh nhật ký</li>
              <li><strong className="text-foreground">Thư viện ảnh</strong> — để chọn ảnh đính kèm</li>
              <li><strong className="text-foreground">Micro</strong> — để ghi âm giọng nói</li>
              <li><strong className="text-foreground">Sinh trắc học</strong> (FaceID/vân tay) — để mở khóa Thư mục Bí mật</li>
              <li><strong className="text-foreground">Thông báo</strong> — để nhắc nhở báo thức và lịch hẹn</li>
            </ul>
            <p className="mt-3">Mỗi quyền chỉ được yêu cầu khi bạn sử dụng tính năng liên quan và có thể thu hồi bất cứ lúc nào trong cài đặt thiết bị.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">2. Cách chúng tôi sử dụng thông tin</h2>
            <p className="mb-3">Dữ liệu của bạn chỉ được sử dụng cho các mục đích sau:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hiển thị và quản lý nhật ký trên thiết bị của bạn</li>
              <li>Sao lưu và khôi phục dữ liệu khi bạn chủ động yêu cầu</li>
              <li>Bảo vệ nội dung bí mật bằng sinh trắc học và mã PIN</li>
              <li>Hiển thị xem trước liên kết (link preview) từ URL bạn cung cấp</li>
              <li>Gửi thông báo nhắc nhở khi bạn đặt báo thức</li>
            </ul>
            <p className="mt-3">Chúng tôi <strong className="text-foreground">không</strong> sử dụng dữ liệu của bạn cho quảng cáo, phân tích hành vi, hay chia sẻ cho bên thứ ba.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">3. Lưu trữ và Bảo mật dữ liệu</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.1 Lưu trữ cục bộ</h3>
            <p>Tất cả dữ liệu nhật ký được lưu trong SQLite database và hệ thống tệp nội bộ của ứng dụng (<code className="bg-secondary px-1.5 py-0.5 rounded text-xs">documentDirectory</code>), thuộc vùng nhớ cách ly (sandbox) của hệ điều hành. Các ứng dụng khác <strong className="text-foreground">không thể</strong> truy cập dữ liệu này.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.2 Thư mục Bí mật</h3>
            <p className="mb-3">Khi bạn kích hoạt tính năng Thư mục Bí mật:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nội dung bí mật được ẩn khỏi tất cả danh sách thông thường</li>
              <li>Truy cập yêu cầu xác thực sinh trắc học (FaceID/vân tay) hoặc mã PIN 4 số</li>
              <li>Ảnh chụp trong chế độ bí mật được sao chép vào thư mục bảo mật nội bộ và có thể xóa bản gốc khỏi thư viện thiết bị</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.3 Sao lưu đám mây</h3>
            <p className="mb-3">Khi bạn sử dụng tính năng sao lưu:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dữ liệu được truyền qua kết nối HTTPS mã hóa TLS</li>
              <li>File sao lưu định dạng <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">.nka</code> hoặc <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">.zip</code> chứa dữ liệu nhật ký và ảnh thu nhỏ</li>
              <li>Chế độ "Cut" xóa tệp gốc khỏi thiết bị sau khi sao lưu thành công, chỉ giữ lại ảnh thu nhỏ siêu nhẹ (~10KB)</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.4 Biện pháp bảo mật</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mã hóa dữ liệu khi truyền tải (TLS/HTTPS)</li>
              <li>Lưu trữ dữ liệu trong sandbox ứng dụng</li>
              <li>Xác thực sinh trắc học và mã PIN cho nội dung nhạy cảm</li>
              <li>Token OAuth 2.0 được lưu trữ an toàn trên thiết bị</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">4. Xem trước Liên kết (Link Preview)</h2>
            <p className="mb-3">Khi bạn dán URL vào nhật ký, ứng dụng tự động truy xuất metadata từ trang web đó để hiển thị xem trước. Quá trình này:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Được thực hiện trực tiếp từ thiết bị của bạn</li>
              <li>Không qua máy chủ trung gian của Halubase</li>
              <li>Chỉ truy cập URL công khai mà bạn cung cấp</li>
              <li>Hình thu nhỏ được lưu cục bộ trên thiết bị để tối ưu hiệu suất</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">5. Chia sẻ dữ liệu với bên thứ ba</h2>
            <p className="mb-3">Chúng tôi <strong className="text-foreground">không bán, không cho thuê, không trao đổi</strong> dữ liệu cá nhân của bạn cho bên thứ ba vì bất kỳ mục đích nào.</p>
            <p className="mb-3">Dữ liệu chỉ rời khỏi thiết bị của bạn khi:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bạn chủ động thực hiện sao lưu lên dịch vụ đám mây đã kết nối</li>
              <li>Bạn chủ động xuất file ZIP/NKA và chia sẻ qua hệ thống chia sẻ của thiết bị</li>
              <li>Bạn sử dụng tính năng Share Extension để gửi nội dung vào Halubase</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">6. Quyền của bạn</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Xem</strong>: Tất cả dữ liệu đều hiển thị trong ứng dụng</li>
              <li><strong className="text-foreground">Sửa</strong>: Chỉnh sửa bất kỳ nhật ký nào bất cứ lúc nào</li>
              <li><strong className="text-foreground">Xóa</strong>: Xóa từng bài hoặc toàn bộ dữ liệu trong Cài đặt</li>
              <li><strong className="text-foreground">Xuất</strong>: Xuất dữ liệu sang ZIP hoặc .nka bất kỳ lúc nào</li>
              <li><strong className="text-foreground">Thu hồi quyền</strong>: Ngắt kết nối đám mây trong Cài đặt</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">7. Dữ liệu trẻ em</h2>
            <p>Halubase không hướng tới trẻ em dưới 13 tuổi. Chúng tôi không cố tình thu thập dữ liệu cá nhân từ trẻ em. Nếu bạn là phụ huynh và phát hiện con mình đã sử dụng ứng dụng mà không có sự đồng ý, vui lòng liên hệ chúng tôi để được hỗ trợ xóa dữ liệu.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">8. Thay đổi chính sách</h2>
            <p>Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian. Mọi thay đổi quan trọng sẽ được thông báo trong ứng dụng hoặc trên trang web này.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">9. Liên hệ</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:support@halubase.com" className="text-primary hover:underline">support@halubase.com</a></li>
              <li>GitHub: <a href="https://github.com/savelong01-sudo" target="_blank" className="text-primary hover:underline">github.com/savelong01-sudo</a></li>
            </ul>
          </div>

          <p className="pt-8 border-t border-border/60 text-sm italic text-muted-foreground">Cập nhật lần cuối: 5 tháng 6, 2026</p>
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
