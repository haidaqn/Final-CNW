import { useAppSelector } from '@/app/hooks';
import { Cart } from '@/features/Cart';
import { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { MdOutlineHome } from 'react-icons/md';
import { SiIconify } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

export const HeaderRight = () => {
    const navigate = useNavigate();
    const { lengthProduct } = useAppSelector((state) => state.cart);
    const [openCart, setOpenCart] = useState<boolean>(false);
    return (
        <>
            <div className="flex gap-5">
                <div
                    className="  hidden sm:flex  gap-1 items-center cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <MdOutlineHome size={24} color="#808089" />
                    <span className="text-[#808089]">Trang chủ</span>
                </div>
                <div className="hidden sm:flex gap-1 items-center border-r-2 pr-2 cursor-pointer">
                    <SiIconify size={22} color="#808089" />
                    <span className="text-[#808089]">Tài khoản</span>
                </div>
                <span className="cursor-pointer relative pr-5" onClick={() => setOpenCart(true)}>
                    <CiShoppingCart size={30} color="#0A68FF" />
                    <span className="px-2 py-[2px] text-lg rounded-full hidden sm:block bg-red-600 text-white absolute top-[-24px] right-[-24px]">
                        {lengthProduct}
                    </span>
                </span>
            </div>
            <Cart open={openCart} setOpen={setOpenCart} />
        </>
    );
};
