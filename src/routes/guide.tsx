import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Hướng dẫn Sử dụng — Halubase" },
      { name: "description", content: "Hướng dẫn chi tiết cách sử dụng ứng dụng nhật ký Halubase." },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
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
            <a href="/guide" className="text-foreground font-medium transition">Hướng dẫn</a>
            <a href="/privacy" className="hover:text-foreground transition">Chính sách bảo mật</a>
            <a href="/terms" className="hover:text-foreground transition">Điều khoản</a>
            <a href="/cookies" className="hover:text-foreground transition">Cookie</a>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-hero py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hướng dẫn Sử dụng</h1>
          <p className="mt-3 text-lg text-muted-foreground">Khám phá mọi tính năng của Halubase — nhật ký số của bạn</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition">Trang chủ</a>
            <span>›</span>
            <span>Hướng dẫn Sử dụng</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-10 px-6 border-b border-border/40">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-lg font-semibold mb-4">Mục lục</h2>
          <div className="grid sm:grid-cols-2 gap-2 text-sm">
            <a href="#getting-started" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">1. Bắt đầu</a>
            <a href="#write-diary" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">2. Viết nhật ký</a>
            <a href="#photos" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">3. Ảnh & Hình ảnh</a>
            <a href="#voice" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">4. Ghi âm giọng nói</a>
            <a href="#files-links" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">5. Tệp & Liên kết</a>
            <a href="#hashtags" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">6. Hashtag & Tổ chức</a>
            <a href="#secret-folder" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">7. Thư mục Bí mật</a>
            <a href="#timeline" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">8. Dòng thời gian</a>
            <a href="#calendar" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">9. Lịch & Báo thức</a>
            <a href="#backup" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">10. Sao lưu & Khôi phục</a>
            <a href="#cloud" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">11. Đồng bộ Đám mây</a>
            <a href="#share" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">12. Chia sẻ nội dung</a>
            <a href="#settings" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">13. Cài đặt</a>
            <a href="#faq" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">14. Câu hỏi thường gặp</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl space-y-12 text-[15px] leading-relaxed text-muted-foreground">

          {/* 1. Getting Started */}
          <div id="getting-started">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">1. Bắt đầu</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">1.1 Tải & Cài đặt</h3>
            <p className="mb-3">Halubase có sẵn trên App Store (iOS) và Google Play (Android). Tìm "Halubase" hoặc nhấp liên kết tải về trên trang chủ.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">1.2 Khởi động lần đầu</h3>
            <p className="mb-3">Khi mở Halubase lần đầu tiên:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ứng dụng hiển thị lời chào theo thời gian trong ngày (Chào buổi sáng / chiều / tối)</li>
              <li>Ngày hiện tại được đánh dấu sẵn để bạn bắt đầu viết ngay</li>
              <li><strong className="text-foreground">Không cần đăng ký tài khoản</strong> — dữ liệu gắn liền với thiết bị của bạn</li>
              <li>Ứng dụng hoạt động hoàn toàn ngoại tuyến, không yêu cầu kết nối Internet</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">1.3 Giao diện chính</h3>
            <p className="mb-3">Thanh điều hướng dưới cùng có 4 tab:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Nhật ký</strong> — Trang chủ, hiển thị các bài viết theo tuần/tháng</li>
              <li><strong className="text-foreground">Dòng thời gian</strong> — Xem lại mọi khoảnh khắc theo thứ tự thời gian</li>
              <li><strong className="text-foreground">Lịch</strong> — Xem theo tháng, đặt báo thức và nhắc nhở</li>
              <li><strong className="text-foreground">Cài đặt</strong> — Tuỳ chỉnh giao diện, ngôn ngữ, sao lưu, bảo mật</li>
            </ul>
          </div>

          {/* 2. Write Diary */}
          <div id="write-diary">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">2. Viết nhật ký</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.1 Tạo bài viết mới</h3>
            <p className="mb-3">Nhấn nút <strong className="text-foreground">+</strong> (góc phải dưới) để bắt đầu viết nhật ký mới. Bạn có thể:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nhập tiêu đề tùy chọn cho bài viết</li>
              <li>Viết nội dung tự do không giới hạn độ dài</li>
              <li>Chọn biểu tượng cảm xúc (emoji) thể hiện tâm trạng</li>
              <li>Đánh dấu bài viết trong Thư mục Bí mật</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.2 Chỉnh sửa bài viết</h3>
            <p>Nhấn vào bất kỳ bài viết nào để mở và chỉnh sửa. Mọi thay đổi được lưu tự động khi bạn rời trang hoặc nhấn nút lưu.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.3 Xóa bài viết</h3>
            <p>Trên trang chi tiết bài viết, nhấn biểu tượng <strong className="text-foreground">thùng rác</strong> để xóa. Xác nhận lại khi được hỏi. Hành động này không thể hoàn tác.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.4 Chế độ xem tuần & tháng</h3>
            <p className="mb-3">Trang Nhật ký cho phép chuyển đổi giữa các chế độ xem:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Theo tuần</strong> — Hiển thị từng tuần trong tháng, phù hợp xem chi tiết</li>
              <li><strong className="text-foreground">Theo tháng</strong> — Tổng quan cả tháng, đếm số khoảnh khắc tự động</li>
            </ul>
            <p className="mt-3">Nhấn vào một tuần/tháng để xem tất cả bài viết trong khoảng thời gian đó.</p>
          </div>

          {/* 3. Photos */}
          <div id="photos">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">3. Ảnh & Hình ảnh</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.1 Chụp ảnh mới</h3>
            <p>Nhấn biểu tượng <strong className="text-foreground">máy ảnh</strong> trong trình soạn thảo để mở camera chụp ảnh trực tiếp. Ảnh sẽ được đính kèm vào bài viết hiện tại.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.2 Chọn từ thư viện</h3>
            <p>Nhấn biểu tượng <strong className="text-foreground">thư viện ảnh</strong> để chọn một hoặc nhiều ảnh từ thiết bị. Bạn có thể chọn nhiều ảnh cùng lúc.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.3 Xem ảnh toàn màn hình</h3>
            <p>Nhấn vào ảnh thu nhỏ trong bài viết để xem ở kích thước đầy đủ. Bạn cũng có thể chia sẻ hoặc lưu ảnh từ đây.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.4 Ảnh trong Thư mục Bí mật</h3>
            <p>Khi chụp hoặc thêm ảnh trong chế độ Bí mật, ảnh được sao chép vào vùng bảo mật nội bộ. Bạn có thể chọn xóa bản gốc khỏi thư viện thiết bị để tăng tính riêng tư.</p>
          </div>

          {/* 4. Voice Recording */}
          <div id="voice">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">4. Ghi âm giọng nói</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">4.1 Thu âm</h3>
            <p className="mb-3">Nhấn giữ biểu tượng <strong className="text-foreground">micro</strong> để bắt đầu ghi âm. Ứng dụng sẽ yêu cầu quyền truy cập micro nếu chưa cấp. Thả tay để dừng ghi âm.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">4.2 Phát lại</h3>
            <p>Nhấn nút phát trên bản ghi âm trong bài viết để nghe lại. Thanh tiến trình hiển thị thời gian phát hiện tại và tổng thời gian.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">4.3 Xóa bản ghi âm</h3>
            <p>Nhấn nút xóa trên bản ghi âm để loại bỏ khỏi bài viết. Tệp âm thanh sẽ bị xóa vĩnh viễn khỏi thiết bị.</p>
          </div>

          {/* 5. Files & Links */}
          <div id="files-links">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">5. Tệp & Liên kết</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">5.1 Đính kèm tệp</h3>
            <p className="mb-3">Nhấn biểu tượng <strong className="text-foreground">kẹp giấy</strong> để đính kèm tệp từ thiết bị. Halubase hỗ trợ nhiều định dạng:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">PDF</strong> — Tài liệu, sách, báo cáo</li>
              <li><strong className="text-foreground">DOC/DOCX</strong> — Văn bản Word</li>
              <li><strong className="text-foreground">XLS/XLSX</strong> — Bảng tính Excel</li>
              <li>Các định dạng tệp phổ biến khác</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">5.2 Dán liên kết (URL)</h3>
            <p className="mb-3">Dán URL vào bài viết, Halubase sẽ tự động:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Truy xuất metadata từ trang web (tiêu đề, mô tả, hình thu nhỏ)</li>
              <li>Hiển thị thẻ xem trước liên kết (link preview) đẹp mắt</li>
              <li>Hỗ trợ đặc biệt cho YouTube — hiển thị hình thu nhỏ video</li>
              <li>Lưu hình thu nhỏ cục bộ để xem ngoại tuyến</li>
            </ul>
            <p className="mt-3">Quá trình truy xuất được thực hiện trực tiếp từ thiết bị, không qua máy chủ trung gian.</p>
          </div>

          {/* 6. Hashtags */}
          <div id="hashtags">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">6. Hashtag & Tổ chức</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">6.1 Thêm hashtag</h3>
            <p>Nhấn biểu tượng <strong className="text-foreground">#</strong> trong trình soạn thảo để mở bảng chọn hashtag. Bạn có thể:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chọn từ các hashtag đã sử dụng trước đó</li>
              <li>Tạo hashtag mới bằng cách gõ và nhấn Enter</li>
              <li>Gắn nhiều hashtag cho cùng một bài viết</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">6.2 Lọc theo hashtag</h3>
            <p>Nhấn vào hashtag trên bài viết để lọc tất cả bài viết có cùng hashtag. Điều này giúp bạn dễ dàng tìm lại nội dung theo chủ đề.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">6.3 Lọc theo tháng</h3>
            <p>Sử dụng bộ lọc tháng ở đầu trang Nhật ký để chọn xem bài viết theo tháng cụ thể. Chuyển đổi nhanh giữa các tháng trong năm.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">6.4 Tìm kiếm</h3>
            <p>Nhập từ khóa vào ô tìm kiếm ở trang Dòng thời gian để tìm bài viết theo nội dung văn bản xuyên suốt nhiều năm dữ liệu.</p>
          </div>

          {/* 7. Secret Folder */}
          <div id="secret-folder">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">7. Thư mục Bí mật</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">7.1 Kích hoạt</h3>
            <p className="mb-3">Vào <strong className="text-foreground">Cài đặt → Thư mục Bí mật</strong> để bật tính năng. Bạn sẽ cần:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Đặt mã PIN 4 số bảo vệ</li>
              <li>Cho phép xác thực sinh trắc học (Face ID / vân tay) — tuỳ chọn</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">7.2 Đánh dấu bài viết bí mật</h3>
            <p>Khi tạo hoặc chỉnh sửa bài viết, bật chuyển đổi <strong className="text-foreground">Bí mật</strong> để ẩn bài viết khỏi danh sách thông thường. Nội dung bí mật chỉ hiển thị khi bạn mở Thư mục Bí mật.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">7.3 Mở khóa</h3>
            <p>Nhấn vào Thư mục Bí mật để xác thực bằng Face ID, vân tay hoặc mã PIN. Sau khi xác thực, tất cả nội dung bí mật sẽ hiển thị cho đến khi bạn khóa lại.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">7.4 Thay đổi mã PIN</h3>
            <p>Vào <strong className="text-foreground">Cài đặt → Thư mục Bí mật</strong> để thay đổi mã PIN. Bạn cần nhập mã PIN hiện tại trước khi đặt mã mới.</p>
          </div>

          {/* 8. Timeline */}
          <div id="timeline">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">8. Dòng thời gian</h2>
            <p className="mb-3">Tab <strong className="text-foreground">Dòng thời gian</strong> hiển thị tất cả khoảnh khắc của bạn theo thứ tự thời gian, từ mới nhất đến cũ nhất. Tại đây bạn có thể:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Cuộn vô hạn</strong> — Duyệt qua mọi bài viết đã tạo</li>
              <li><strong className="text-foreground">Xem nhanh</strong> — Ảnh thu nhỏ, đoạn trích văn bản, hashtag và biểu tượng cảm xúc</li>
              <li><strong className="text-foreground">Phát âm thanh</strong> — Nghe lại bản ghi âm ngay trên dòng thời gian</li>
              <li><strong className="text-foreground">Xem liên kết</strong> — Thẻ xem trước URL hiển thị trực tiếp</li>
              <li><strong className="text-foreground">Tìm kiếm</strong> — Tìm bài viết theo từ khóa nhanh chóng</li>
              <li><strong className="text-foreground">Chia sẻ</strong> — Nhấn giữ bài viết để chia sẻ nội dung</li>
            </ul>
          </div>

          {/* 9. Calendar & Alarms */}
          <div id="calendar">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">9. Lịch & Báo thức</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">9.1 Chế độ xem Lịch</h3>
            <p className="mb-3">Tab <strong className="text-foreground">Lịch</strong> hiển thị giao diện lịch tháng:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Các ngày có bài viết được đánh dấu bằng chấm màu</li>
              <li>Nhấn vào ngày để xem hoặc tạo bài viết cho ngày đó</li>
              <li>Chuyển sang tháng khác bằng cách vuốt hoặc nhấn mũi tên</li>
              <li>Nhấn vào tháng ở đầu trang để chọn nhanh tháng cụ thể</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">9.2 Đặt báo thức</h3>
            <p className="mb-3">Từ chế độ xem Lịch, bạn có thể đặt báo thức nhắc nhở:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nhấn nút <strong className="text-foreground">+</strong> trên ngày mong muốn</li>
              <li>Chọn thời gian báo thức</li>
              <li>Nhập nội dung nhắc nhở</li>
              <li>Chọn lặp lại: Hằng ngày / Hằng tuần / Một lần</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">9.3 Quản lý báo thức</h3>
            <p>Xem danh sách báo thức đã đặt tại phần <strong className="text-foreground">Báo thức hoạt động</strong> trong tab Lịch. Bật/tắt hoặc xóa báo thức tại đây. Bạn cũng có thể nhấn vào báo thức để chỉnh sửa thời gian và nội dung.</p>
          </div>

          {/* 10. Backup & Restore */}
          <div id="backup">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">10. Sao lưu & Khôi phục</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">10.1 Sao lưu cục bộ</h3>
            <p className="mb-3">Vào <strong className="text-foreground">Cài đặt → Sao lưu & Khôi phục</strong> để:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Sao lưu</strong> — Tạo file <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">.nka</code> hoặc <code className="bg-secondary px-1.5 py-0.5 rounded text-xs">.zip</code> chứa toàn bộ dữ liệu</li>
              <li><strong className="text-foreground">Khôi phục</strong> — Chọn file sao lưu để khôi phục dữ liệu</li>
              <li><strong className="text-foreground">Khôi phục chọn lọc</strong> — Chọn từng tuần cụ thể từ file sao lưu để khôi phục</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">10.2 Chế độ Copy vs Cut</h3>
            <p className="mb-3">Khi sao lưu, bạn có thể chọn:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Copy</strong> — Giữ nguyên dữ liệu gốc trên thiết bị, file sao lưu chứa bản đầy đủ</li>
              <li><strong className="text-foreground">Cut</strong> — Xóa tệp gốc sau khi sao lưu thành công, chỉ giữ ảnh thu nhỏ siêu nhẹ (~10KB) trên thiết bị để tiết kiệm dung lượng</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">10.3 Xuất file ZIP</h3>
            <p>Xuất dữ liệu sang file ZIP để lưu trữ hoặc chia sẻ. File ZIP chứa ảnh gốc, tệp đính kèm và dữ liệu nhật ký. Bạn có thể chia sẻ file qua AirDrop, email, hoặc bất kỳ ứng dụng nào hỗ trợ chia sẻ tệp.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">10.4 Tự động sao lưu</h3>
            <p>Bật tính năng <strong className="text-foreground">Tự động sao lưu</strong> trong Cài đặt. Ứng dụng sẽ tự động tạo bản sao lưu theo chu kỳ, giúp bạn không bao giờ mất dữ liệu.</p>
          </div>

          {/* 11. Cloud Sync */}
          <div id="cloud">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">11. Đồng bộ Đám mây</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">11.1 Kết nối dịch vụ đám mây</h3>
            <p className="mb-3">Vào <strong className="text-foreground">Cài đặt → Đám mây</strong> để kết nối với:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Google Drive</strong> — Phù hợp cho người dùng Android</li>
              <li><strong className="text-foreground">iCloud Drive</strong> — Tối ưu cho người dùng iOS/macOS</li>
              <li><strong className="text-foreground">Dropbox</strong> — Linh hoạt trên mọi nền tảng</li>
            </ul>
            <p className="mt-3">Quá trình xác thực sử dụng OAuth 2.0 an toàn. Halubase chỉ truy cập thư mục sao lưu riêng, không đọc các tệp khác trên tài khoản của bạn.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">11.2 Tải sao lưu lên đám mây</h3>
            <p>Sau khi kết nối, nhấn <strong className="text-foreground">Tải lên</strong> để đẩy bản sao lưu mới nhất lên dịch vụ đám mây. Dữ liệu được truyền qua kết nối HTTPS mã hóa TLS.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">11.3 Ngắt kết nối</h3>
            <p>Vào Cài đặt → Đám mây → nhấn <strong className="text-foreground">Ngắt kết nối</strong> để xoá token xác thực. Halubase sẽ không còn quyền truy cập vào tài khoản đám mây của bạn.</p>
          </div>

          {/* 12. Share */}
          <div id="share">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">12. Chia sẻ nội dung</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">12.1 Chia sẻ từ Halubase</h3>
            <p>Từ Dòng thời gian hoặc trang chi tiết bài viết, nhấn nút <strong className="text-foreground">Chia sẻ</strong> để gửi nội dung bài viết (văn bản, ảnh) qua tin nhắn, email hoặc mạng xã hội.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">12.2 Share Extension (iOS/Android)</h3>
            <p className="mb-3">Halubase tích hợp Share Extension, cho phép bạn gửi nội dung từ ứng dụng khác trực tiếp vào nhật ký:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trong Safari, Photos hoặc ứng dụng khác — nhấn nút <strong className="text-foreground">Chia sẻ</strong></li>
              <li>Chọn <strong className="text-foreground">Halubase</strong> từ danh sách ứng dụng</li>
              <li>Nội dung (văn bản, URL, ảnh) sẽ được tạo thành bài viết nháp trong Halubase</li>
              <li>Bạn có thể chỉnh sửa và lưu lại sau</li>
            </ul>
          </div>

          {/* 13. Settings */}
          <div id="settings">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">13. Cài đặt</h2>
            <p className="mb-3">Tab <strong className="text-foreground">Cài đặt</strong> cung cấp các tuỳ chọn:</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">13.1 Giao diện</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Chủ đề</strong> — Sáng / Tối / Theo hệ thống</li>
              <li><strong className="text-foreground">Ngôn ngữ</strong> — Tiếng Việt / English</li>
              <li><strong className="text-foreground">Chế độ xem Khoảnh khắc</strong> — Dạng lưới / Dạng danh sách</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">13.2 Dữ liệu & Bảo mật</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Thư mục Bí mật</strong> — Bật/tắt, đặt mã PIN</li>
              <li><strong className="text-foreground">Sao lưu & Khôi phục</strong> — Sao lưu cục bộ, xuất ZIP</li>
              <li><strong className="text-foreground">Đám mây</strong> — Kết nối Google Drive, iCloud, Dropbox</li>
              <li><strong className="text-foreground">Tự động sao lưu</strong> — Bật/tắt, xem lần sao lưu cuối</li>
              <li><strong className="text-foreground">Giữ ảnh thu nhỏ</strong> — Giữ ảnh thu nhỏ nhẹ khi xóa ảnh gốc</li>
              <li><strong className="text-foreground">Dung lượng</strong> — Xem dung lượng đã sử dụng trên thiết bị và đã sao lưu</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">13.3 Xoá toàn bộ dữ liệu</h3>
            <p>Trong Cài đặt, nhấn <strong className="text-foreground">Xoá toàn bộ dữ liệu</strong> để xóa vĩnh viễn mọi nhật ký, ảnh và tệp. Bạn sẽ cần gõ xác nhận trước khi thực hiện. <strong className="text-foreground">Hành động này không thể hoàn tác.</strong></p>
          </div>

          {/* 14. FAQ */}
          <div id="faq">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">14. Câu hỏi thường gặp</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Halubase có miễn phí không?</h3>
                <p>Có, Halubase hoàn toàn miễn phí. Tất cả tính năng cốt lõi — viết nhật ký, ảnh, ghi âm, bí mật, sao lưu — đều sẵn dùng không giới hạn.</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Dữ liệu của tôi có an toàn không?</h3>
                <p>Halubase hoạt động hoàn toàn ngoại tuyến. Dữ liệu lưu trong sandbox ứng dụng trên thiết bị, các ứng dụng khác không thể truy cập. Nội dung bí mật được bảo vệ thêm bằng sinh trắc học và mã PIN. Khi sao lưu đám mây, dữ liệu truyền qua HTTPS mã hóa.</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Tôi mất điện thoại thì sao?</h3>
                <p>Nếu bạn đã bật tự động sao lưu hoặc sao lưu lên đám mây, bạn có thể khôi phục dữ liệu trên thiết bị mới. Nếu chưa sao lưu, dữ liệu trên thiết bị cũ sẽ bị mất. Chúng tôi khuyến nghị bật tự động sao lưu ngay từ đầu.</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Halubase đọc nhật ký của tôi không?</h3>
                <p><strong className="text-foreground">Không bao giờ.</strong> Dữ liệu lưu hoàn toàn trên thiết bị của bạn. Chúng tôi không có máy chủ lưu trữ nội dung nhật ký. Xem <a href="/privacy" className="text-primary hover:underline">Chính sách Bảo mật</a> để biết thêm chi tiết.</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Tôi có thể dùng Halubase trên nhiều thiết bị không?</h3>
                <p>Hiện tại, Halubase không đồng bộ thời gian thực giữa các thiết bị. Tuy nhiên, bạn có thể sao lưu trên thiết bị này và khôi phục trên thiết bị khác thông qua file sao lưu hoặc dịch vụ đám mây.</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Quyền ứng dụng là gì và tại sao cần?</h3>
                <p className="mb-3">Mỗi quyền chỉ được yêu cầu khi bạn sử dụng tính năng liên quan:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Máy ảnh</strong> — Chụp ảnh nhật ký</li>
                  <li><strong className="text-foreground">Thư viện ảnh</strong> — Chọn ảnh đính kèm</li>
                  <li><strong className="text-foreground">Micro</strong> — Ghi âm giọng nói</li>
                  <li><strong className="text-foreground">Sinh trắc học</strong> — Mở khóa Thư mục Bí mật</li>
                  <li><strong className="text-foreground">Thông báo</strong> — Nhắc nhở báo thức</li>
                </ul>
                <p className="mt-3">Bạn có thể thu hồi bất kỳ quyền nào trong cài đặt thiết bị bất cứ lúc nào.</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Tôi quên mã PIN Thư mục Bí mật?</h3>
                <p>Bạn cần gỡ cài đặt ứng dụng và cài đặt lại. Xin lưu ý rằng dữ liệu cục bộ sẽ bị mất. Nếu đã sao lưu, bạn có thể khôi phục sau khi cài đặt lại.</p>
              </div>
            </div>
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
