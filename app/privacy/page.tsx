import Link from "next/link";

export default function Privacy() {
  return <main className="legal"><Link className="back" href="/">← TavyloTech</Link><h1>Chính sách bảo mật</h1><p className="updated">Cập nhật: 21 tháng 7, 2026</p><h2>Dữ liệu được xử lý</h2><p>TavyloTech chỉ xử lý thông tin cần thiết để kết nối tài khoản nền tảng, quản lý video và thực hiện yêu cầu xuất nội dung của người dùng.</p><h2>Token và quyền truy cập</h2><p>Token truy cập được lưu phía máy chủ và chỉ được dùng cho thao tác mà người dùng đã ủy quyền. Chúng tôi không bán hoặc chia sẻ token cho bên thứ ba.</p><h2>Chia sẻ dữ liệu</h2><p>Dữ liệu chỉ được gửi tới nền tảng mà người dùng chọn để thực hiện yêu cầu xuất bản. Chúng tôi không dùng dữ liệu tài khoản cho quảng cáo của bên thứ ba.</p><h2>Xóa dữ liệu và thu hồi quyền</h2><p>Người dùng có thể thu hồi quyền ứng dụng tại nền tảng tương ứng hoặc liên hệ tavylo.tech@gmail.com để yêu cầu xóa dữ liệu kết nối.</p></main>;
}
