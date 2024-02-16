export const ContentMain = () => {
    const item = [
        {
            left: 'Phiên bản sách',
            right: 'Phiên bản thường',
        },
        {
            left: 'Công ty phát hành',
            right: 'Nhã Nam',
        },
        {
            left: 'Ngày xuất bản',
            right: '2020-03-02 00:00:00',
        },
        {
            left: 'Kích thước',
            right: '27 x 37 cm',
        },
        {
            left: 'Dịch giả',
            right: 'Quỳnh Chi',
        },
        {
            left: 'Loại bìa',
            right: 'Bìa cứng',
        },
        {
            left: 'Số trang',
            right: '108',
        },
        {
            left: 'Nhà xuất bản',
            right: 'Nhà Xuất Bản Lao Động',
        },
    ];

    return (
        <div className="hidden sm:block">
            <span className="text-xl font-semibold">Thông tin chi tiết</span>
            {item.map((i, index) => (
                <div
                    key={index + index}
                    className={`flex gap-3 items-center ${
                        index !== item.length - 1 && 'border-b-2'
                    } py-3`}
                >
                    <span className="w-1/2 text-gray-700">{i.left}</span>
                    <span>{i.right}</span>
                </div>
            ))}
        </div>
    );
};
