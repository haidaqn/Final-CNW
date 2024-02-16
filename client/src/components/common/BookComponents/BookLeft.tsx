import { CiCircleCheck } from 'react-icons/ci';
import { Card } from '../../ui/card';

export const BookLeft = ({ img }: { img: string }) => {
    return (
        <Card className="flex-2 hidden sm:flex flex-col gap-3 pb-3 rounded-sm h-fit">
            <img
                src={
                    img ||
                    'https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/426210165_1819489455235422_7557687728532737449_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=c42490&_nc_eui2=AeGC0BWYeCgYqY9-jhNzVeIHRPAS3xy0kO5E8BLfHLSQ7mOigoIjVUw9iAZSY2Ol9OnYyNJMVFc27Ho1elwAbtpK&_nc_ohc=gALuUJ6L1PMAX_i4_T5&_nc_ht=scontent-hkg1-2.xx&oh=00_AfAtltv6Obl6q0l3gwEIukw0hNKC4H99hBIgm1AY1U9QUg&oe=65C9DBED'
                }
                alt=""
                className="h-[350px] w-full object-cover rounded-t-sm"
            />
            <div className="px-4">
                <span className="font-[600]">Đặc điểm nổi bật</span>
                <ul className="flex flex-col gap-1 mt-2">
                    <li className="text-[14px] flex gap-1 font-[500]">
                        <CiCircleCheck color="#0A68FF" size={22} />
                        <span>Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.</span>
                    </li>
                    <li className="text-[14px] flex gap-1 font-[500]">
                        <CiCircleCheck color="#0A68FF" size={22} />
                        <span>
                            Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý của trẻ em.
                        </span>
                    </li>
                    <li className="text-[14px] flex gap-1 font-[500]">
                        <CiCircleCheck color="#0A68FF" size={22} />
                        <span>
                            Cung cấp thông tin tổng quát về diện tích, dân số và ngôn ngữ của các
                            quốc gia.
                        </span>
                    </li>
                </ul>
            </div>
            <div className="flex gap-[5px] border-t-[1px] pt-3 px-3">
                <img src="/detail.png" alt="" />
                <span className="text-gray-400">Xem thêm</span>
                {` `}
                <span className="text-black font-[500]">Tóm tắt nội dung sách</span>
            </div>
        </Card>
    );
};
