import { useAppDispatch } from '@/app/hooks';
import { Card } from '@/components/ui/card';
import { handlePrice } from '@/utils';
import { AiOutlineMinus } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import * as actions from '@/app/CartSlice';

interface Props {
    _id: string;
    name: string;
    img: string;
    price: number;
    quantity: number;
}

export const CartItem = (props: Props) => {
    const dispatch = useAppDispatch();
    const { img, name, price, quantity } = props;
    const HandleCart = (add: boolean) => {
        if (add) {
            dispatch(
                actions.cartActions.addToCart({
                    ...props,
                    quantity: 1,
                })
            );
        } else {
            if (quantity === 1) {
                dispatch(
                    actions.cartActions.removeCart({
                        ...props,
                    })
                );
            } else {
                dispatch(
                    actions.cartActions.deleteOneCart({
                        ...props,
                        quantity: 1,
                    })
                );
            }
        }
    };

    return (
        <Card className="p-2 rounded-sm flex flex-col gap-3 overflow-hidden">
            <div className="flex gap-1">
                <img className="w-20 h-20 cursor-pointer" src={img} alt="" />
                <div className="flex flex-col gap-1">
                    <span className="font-semibold">{name}</span>
                    <span>{handlePrice(price)}</span>
                </div>
            </div>
            <div className="flex gap-1 px-5">
                <Card className="cursor-pointer rounded-sm p-2">
                    <AiOutlineMinus
                        size={22}
                        color={quantity <= 0 ? 'gray' : 'black'}
                        onClick={() => HandleCart(false)}
                    />
                </Card>
                <Card className="text-black rounded-sm px-4 py-2">{quantity}</Card>
                <Card className="cursor-pointer rounded-sm p-2 " onClick={() => HandleCart(true)}>
                    <IoMdAdd size={22} color="black" />
                </Card>
            </div>
        </Card>
    );
};
