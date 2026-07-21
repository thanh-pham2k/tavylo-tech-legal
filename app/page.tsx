import Link from "next/link";

export default function Home() {
  return (
    <main className="landing">
      <section className="hero">
        <span className="eyebrow">TAVYLOTECH</span>
        <h1>Xuất bản nội dung công nghệ, có kiểm soát.</h1>
        <p>
          TavyloTech là công cụ nội bộ giúp chuẩn bị, quản lý và xuất video ngắn
          đến các nền tảng do người dùng kết nối và cho phép.
        </p>
        <div className="links">
          <Link href="/terms">Điều khoản sử dụng</Link>
          <Link href="/privacy">Chính sách bảo mật</Link>
        </div>
      </section>
      <section className="principles" aria-label="Nguyên tắc hoạt động">
        <article><strong>Người dùng quyết định</strong><span>Chỉ xuất bản sau thao tác và quyền cấp rõ ràng.</span></article>
        <article><strong>Dữ liệu tối thiểu</strong><span>Chỉ sử dụng dữ liệu cần thiết để vận hành tích hợp.</span></article>
        <article><strong>Minh bạch</strong><span>Người dùng có thể thu hồi quyền truy cập bất cứ lúc nào.</span></article>
      </section>
    </main>
  );
}
