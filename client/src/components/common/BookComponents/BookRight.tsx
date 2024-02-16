import { useAppDispatch } from '@/app/hooks';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import * as actions from '@/app/CartSlice';

interface Props {
    _id?: string;
    name?: string;
    img?: string;
    price?: number;
}
export const BookRight = ({ _id, img, name, price }: Props) => {
    const [quantity, setQuantity] = useState<number>(1);
    const { toast } = useToast();
    const dispacth = useAppDispatch();
    const handleQuantity = (add: boolean) => {
        if (add) {
            setQuantity((prev) => +prev + 1);
        } else {
            if (quantity >= 1) {
                setQuantity((prev) => +prev - 1);
            }
        }
    };

    const handleAddToCart = () => {
        dispacth(
            actions.cartActions.addToCart({
                _id: _id || '',
                name: name || '',
                price: price || 0,
                img: img || '',
                quantity,
            })
        );
        toast({
            title: 'Thêm vào giỏ hàng thành công !',
        });
    };

    const handle = () => {
        toast({
            title: 'Tính năng đang phát triển',
            variant: 'destructive',
        });
    };

    return (
        <Card className="p-4 flex-2 flex flex-col gap-3 h-fit rounded-sm">
            <span className="text-xl font-semibold">Số lượng</span>
            <div className="mt-2 bg-white flex gap-3 items-center rounded-sm w-fit ">
                <Card className="cursor-pointer rounded-sm p-2">
                    <AiOutlineMinus
                        size={22}
                        color={quantity <= 0 ? 'gray' : 'black'}
                        onClick={() => handleQuantity(false)}
                    />
                </Card>
                <Card className="text-black rounded-sm px-4 py-2">{quantity}</Card>
                <Card className="cursor-pointer rounded-sm p-2 ">
                    <IoMdAdd size={22} color="black" onClick={() => handleQuantity(true)} />
                </Card>
            </div>
            <span className="text-xl font-semibold">Tạm tính</span>
            <Button
                onClick={() => handle()}
                className="bg-red-500 text-white hover:opacity-90 hover:bg-red-400"
            >
                Mua ngay
            </Button>
            <Button
                onClick={() => handleAddToCart()}
                className="bg-white text-[#0A68FF] border-[#0A68FF] border hover:bg-[#CEE1FF]"
            >
                Thêm vào giỏ
            </Button>
            <Button
                onClick={() => handle()}
                className="bg-white text-[#0A68FF] border-[#0A68FF] border hover:bg-[#CEE1FF]"
            >
                Mua trước trả sau
            </Button>
        </Card>
    );
};
