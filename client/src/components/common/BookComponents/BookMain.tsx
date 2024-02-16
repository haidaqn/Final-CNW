import { Card } from '@/components/ui/card';
import { FaCheckCircle } from 'react-icons/fa';
import { ContentMain } from '..';
import { handlePrice, renderStartNumber } from '@/utils';

interface Props {
    rating?: number;
    quantity_sold?: number;
    price?: number;
    img?: string;
    des?: string;
    name?: string;
    authors?: string;
}

export const BookMain = ({ rating, quantity_sold, price, img, des, name, authors }: Props) => {
    return (
        <div className="flex flex-col gap-5  flex-3">
            <Card className="p-4 flex flex-col gap-2 h-fit rounded-sm">
                <div className="flex gap-3 items-center">
                    <span className="uppercase text-[#0A68FF] font-semibold flex items-center gap-2 rounded-lg bg-[#CEE1FF] px-4  w-fit py-[2px]">
                        <FaCheckCircle color="#0A68FF" />
                        chính hãng
                    </span>
                    <div className="flex gap-1 text-lg">
                        <span>Tác giả:</span>
                        <span className="text-[#0A68FF] font-semibold">{authors}</span>
                    </div>
                </div>
                <span className="text-xl font-semibold">{name}</span>
                <div className="flex gap-4 items-center">
                    <span className="flex gap-1 items-center text-lg">
                        {rating} {renderStartNumber(rating || 4, 16)}
                    </span>
                    <span className="border-l-2 pl-4">{quantity_sold}+</span>
                </div>
                <span className="text-xl font-semibold">{handlePrice(price)}</span>
                <ContentMain />
            </Card>
            <Card className="rounded-sm p-4 sm:w-fit flex items-center justify-center w-full flex-col gap-4">
                <span className="text-xl font-semibold hidden sm:block">Mô tả sản phẩm</span>
                <img src={img} alt="" className="w-full" />
                <div className="hidden sm:block">{des}</div>
            </Card>
        </div>
    );
};
