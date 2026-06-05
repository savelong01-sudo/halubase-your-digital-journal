import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Điều khoản Sử dụng — Halubase" },
      { name: "description", content: "Điều khoản và điều kiện sử dụng ứng dụng Halubase." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
            <a href="/privacy" className="hover:text-foreground transition">Chính sách bảo mật</a>
            <a href="/terms" className="text-foreground font-medium transition">Điều khoản</a>
            <a href="/cookies" className="hover:text-foreground transition">Cookie</a>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-hero py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Điều khoản Sử dụng</h1>
          <p className="mt-3 text-lg text-muted-foreground">Quy định và điều kiện khi sử dụng ứng dụng Halubase</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition">Trang chủ</a>
            <span>›</span>
            <span>Điều khoản Sử dụng</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl space-y-10 text-[15px] leading-relaxed text-muted-foreground">

          <p>Bằng việc tải, cài đặt và sử dụng ứng dụng <strong className="text-foreground">Halubase</strong> ("Ứng dụng"), bạn đồng ý tuân thủ các Điều khoản Sử dụng này. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng Ứng dụng.</p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">1. Mô tả Dịch vụ</h2>
            <p className="mb-3">Halubase là ứng dụng nhật ký số (diary/journal) chạy trên nền tảng di động (iOS và Android). Ứng dụng cho phép bạn:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ghi chép nhật ký bằng văn bản, hình ảnh, ghi âm giọng nói và tệp đính kèm</li>
              <li>Tổ chức nội dung bằng hashtag, biểu tượng cảm xúc và các chế độ xem theo tuần/tháng</li>
              <li>Bảo vệ nội dung nhạy cảm bằng Thư mục Bí mật (mã PIN + sinh trắc học)</li>
              <li>Sao lưu dữ liệu lên dịch vụ đám mây hoặc xuất file ZIP/NKA</li>
              <li>Nhận thông báo nhắc nhở và báo thức</li>
              <li>Nhận nội dung chia sẻ từ ứng dụng khác qua Share Extension</li>
            </ul>
            <p className="mt-3">Ứng dụng hoạt động chủ yếu ngoại tuyến. Dữ liệu được lưu trữ cục bộ trên thiết bị của bạn.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">2. Điều kiện Sử dụng</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.1 Tuổi sử dụng</h3>
            <p>Bạn phải từ 13 tuổi trở lên để sử dụng Ứng dụng. Nếu bạn dưới 18 tuổi, bạn cần có sự đồng ý của phụ huynh hoặc người giám hộ.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.2 Tài khoản</h3>
            <p>Halubase không yêu cầu đăng ký tài khoản. Dữ liệu của bạn gắn liền với thiết bị cài đặt. Bạn chịu trách nhiệm bảo quản thiết bị và mã PIN bảo mật.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.3 Sử dụng hợp pháp</h3>
            <p className="mb-3">Bạn đồng ý không sử dụng Ứng dụng cho bất kỳ mục đích vi phạm pháp luật bao gồm nhưng không giới hạn:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lưu trữ hoặc phân phối nội dung bất hợp pháp</li>
              <li>Xâm phạm quyền sở hữu trí tuệ của bên thứ ba</li>
              <li>Phát tán mã độc, phần mềm gây hại</li>
              <li>Thu thập thông tin cá nhân của người khác mà không có sự đồng ý</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">3. Quyền Sở hữu Trí tuệ</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.1 Nội dung của bạn</h3>
            <p>Bạn giữ nguyên mọi quyền sở hữu đối với nội dung bạn tạo trong Halubase. Chúng tôi không có quyền sử dụng, sao chép, hoặc phân phối nội dung của bạn.</p>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.2 Ứng dụng</h3>
            <p className="mb-3">Halubase, bao gồm mã nguồn, thiết kế, biểu tượng, logo và tài sản thương hiệu khác là tài sản của chúng tôi và được bảo vệ bởi luật sở hữu trí tuệ. Bạn không được:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sao chép, phân phối hoặc chỉnh sửa Ứng dụng</li>
              <li>Thực hiện kỹ thuật đảo ngược (reverse engineering) Ứng dụng</li>
              <li>Sử dụng thương hiệu Halubase mà không có sự cho phép bằng văn bản</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">4. Sao lưu và Khôi phục Dữ liệu</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">4.1 Trách nhiệm của bạn</h3>
            <p className="mb-3">Bạn chịu trách nhiệm chính trong việc sao lưu dữ liệu định kỳ. Chúng tôi khuyến nghị:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bật tính năng tự động sao lưu trong Cài đặt</li>
              <li>Kết nối dịch vụ đám mây (Google Drive, iCloud, Dropbox)</li>
              <li>Thực hiện sao lưu thủ công định kỳ</li>
            </ul>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">4.2 Giới hạn trách nhiệm</h3>
            <p className="mb-3">Chúng tôi <strong className="text-foreground">không chịu trách nhiệm</strong> đối với mất mát dữ liệu do:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mất, đánh cắp hoặc hư hỏng thiết bị</li>
              <li>Xóa ứng dụng mà không sao lưu trước đó</li>
              <li>Lỗi hệ điều hành hoặc phần mềm của bên thứ ba</li>
              <li>Ngắt kết nối đám mây do thay đổi tài khoản hoặc chính sách của nhà cung cấp</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">5. Dịch vụ Đám mây của Bên thứ Ba</h2>
            <p className="mb-3">Khi bạn kết nối Google Drive, iCloud hoặc Dropbox, bạn chịu trách nhiệm tuân thủ Điều khoản Dịch vụ của nhà cung cấp tương ứng. Chúng tôi không kiểm soát và không chịu trách nhiệm đối với:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tình trạng khả dụng của dịch vụ đám mây</li>
              <li>Thay đổi chính sách giá hoặc dung lượng lưu trữ</li>
              <li>Mất mát dữ liệu do lỗi của nhà cung cấp đám mây</li>
              <li>Quyền truy cập bị thu hồi do vi phạm điều khoản của nhà cung cấp</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">6. Cập nhật Ứng dụng</h2>
            <p className="mb-3">Chúng tôi có thể phát hành các bản cập nhật Ứng dụng theo thời gian để:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Thêm tính năng mới</li>
              <li>Sửa lỗi và cải thiện hiệu suất</li>
              <li>Cập nhật bảo mật</li>
              <li>Tương thích với phiên bản hệ điều hành mới</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">7. Miễn trừ Trách nhiệm</h2>
            <p className="mb-3">Ứng dụng được cung cấp "nguyên trạng" (AS IS) mà không có bất kỳ bảo đảm nào, kể cả bảo đảm ngầm định về tính thương mại, sự phù hợp cho mục đích cụ thể, và không vi phạm quyền.</p>
            <p>Trong mọi trường hợp, tổng trách nhiệm của chúng tôi đối với bạn sẽ không vượt quá số tiền bạn đã thanh toán cho Ứng dụng (nếu có).</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">8. Chấm dứt</h2>
            <p>Bạn có thể ngừng sử dụng Ứng dụng bất cứ lúc nào bằng cách xóa ứng dụng khỏi thiết bị. Xin lưu ý rằng xóa ứng dụng sẽ xóa toàn bộ dữ liệu cục bộ nếu chưa được sao lưu.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">9. Thay đổi Điều khoản</h2>
            <p>Chúng tôi có thể cập nhật Điều khoản Sử dụng này theo thời gian. Các thay đổi quan trọng sẽ được thông báo qua ứng dụng hoặc trên trang web. Việc tiếp tục sử dụng Ứng dụng sau khi Điều khoản thay đổi đồng nghĩa với việc bạn chấp nhận các thay đổi đó.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">10. Luật Áp dụng</h2>
            <p>Các Điều khoản này được quản soát và diễn giải theo pháp luật Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">11. Liên hệ</h2>
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