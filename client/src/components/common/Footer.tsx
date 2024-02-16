export const Footer = () => {
    return (
        <div className="px-[15px] sm:px-[100px] hidden sm:flex py-5 bg-white z-10 gap-4 justify-between">
            <div className="flex flex-col gap-1">
                <span className="font-semibold text-lg">Hỗ trợ khách hàng</span>
                <ul className="flex flex-col gap-1 text-gray-500">
                    <li>Hotline: 1900-6035</li>
                    <li>Các câu hỏi thường gặp</li>
                    <li>Gửi yêu cầu hỗ trợ</li>
                    <li>Hướng dẫn đặt hàng</li>
                    <li>Phương thức vận chuyển</li>
                    <li>Chính sách đổi trả</li>
                    <li>Hướng dẫn trả góp</li>
                    <li>Chính sách hàng nhập khẩu</li>
                    <li>Hỗ trợ khách hàng: hotro@tiki.vn</li>
                    <li>Báo lỗi bảo mật: security@tiki.vn </li>
                </ul>
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-semibold text-lg">Về Tiki</span>
                <ul className="flex flex-col gap-1 text-gray-500">
                    <li>Giới thiệu Tiki</li>
                    <li>Tiki Blog</li>
                    <li>Tuyển dụng</li>
                    <li>Chính sách bảo mật thanh toán</li>
                    <li>Chính sách bảo mật thông tin cá nhân</li>
                    <li>Chính sách giải quyết khiếu nại</li>
                    <li>Điều khoản sử dụng</li>
                    <li>Giới thiệu Tiki Xu</li>
                    <li>Gói hội viên VIP</li>
                    <li>Tiếp thị liên kết cùng Tiki</li>
                    <li>Bán hàng doanh nghiệp</li>
                    <li>Điều kiện vận chuyển </li>
                </ul>
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-semibold text-lg">Hợp tác và liên kết</span>
                <ul className="flex flex-col gap-1 text-gray-500">
                    <li>Quy chế hoạt động Sàn GDTMĐT</li>
                    <li>Bán hàng cùng Tiki</li>
                </ul>
                <span className="font-semibold text-lg">Chứng nhận bởi</span>
                <img className="w-[83px] h-[32px] " src="/footer.png" alt="" />
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-semibold text-lg">Phương thức thanh toán</span>
                <span className="font-semibold text-lg">Dịch vụ giao hàng</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-semibold text-lg">Kết nối với chúng tôi</span>
                <img src="anhf.png" alt="" className="object-cover" />
                <span className="font-semibold text-lg">Tải ứng dụng trên điện thoại</span>
            </div>
        </div>
    );
};
