import { Card } from '@/components/ui/card';
import { BookItem } from '@/models/Book';
import { handlePrice, renderStartNumber } from '@/utils';
import { Link } from 'react-router-dom';

export const ItemBook = (props: BookItem) => {
    const { images, name, price, quantity_sold, rating, _id } = props;

    const img = JSON.parse(images);

    return (
        <Link to={`book/${_id}`}>
            <Card className="border flex-col gap-3 rounded-sm flex items-center justify-center min-h-[330px]  max-h-[500px]">
                <img src={img[0]} alt="lgoo" className="w-[200px] h-[200px] object-contain" />
                <div className="px-4 pb-5 flex flex-col gap-3">
                    <span className="text-[12px] font-[400]">{name.slice(0, 30)}</span>
                    <div className=" gap-2 pt-1 items-center  hidden sm:flex">
                        <span className="flex gap-0 border-r-2 pr-2 border-black/70">
                            {renderStartNumber(rating, 15)}
                        </span>
                        <span className="text-gray-600 text-[15px]">Đã bán {quantity_sold}</span>
                    </div>
                    <span>{handlePrice(price)}</span>
                    <span className="pt-2 mt-3 text-center text-gray-500 border-t-2 hidden sm:block border-black/70">
                        Giao siêu tốc 2h
                    </span>
                </div>
            </Card>
        </Link>
    );
};
