import { useAppSelector } from '@/app/hooks';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { CartItem } from './CartItem';
import { Button } from '@/components/ui/button';
import { useMemo } from 'react';
import { handlePrice } from '@/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

export const Cart = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
    const { dataStore, lengthProduct } = useAppSelector((state) => state.cart);

    const totalPirce = useMemo(
        () => dataStore.reduce((sum, item) => item.price * item.quantity + sum, 0),
        [lengthProduct]
    );

    console.log(dataStore);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="right" className="flex flex-col gap-4 w-[300px] sm:w-[600px]">
                <SheetHeader>
                    <SheetTitle className="text-center">Giỏ Hàng</SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-[80%] px-2 sm:px-0 flex items-center flex-col gap-3 justify-center">
                    {lengthProduct ? (
                        <>
                            {dataStore.map((item, index) => (
                                <CartItem {...item} key={index + index} />
                            ))}
                        </>
                    ) : (
                        <div className="h-[90%]  flex items-center justify-center">
                            Chưa có sản phẩm nào trong giỏ hàng !
                        </div>
                    )}
                </ScrollArea>
                <div className="flex items-center justify-between">
                    <span className="capitalize">tổng tiền :</span>
                    <span>{handlePrice(totalPirce)}</span>
                </div>
                <Button>TẠO ĐƠN</Button>
            </SheetContent>
        </Sheet>
    );
};
