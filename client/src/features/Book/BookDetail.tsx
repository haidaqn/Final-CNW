import bookApi from '@/api/book';
import { BookLeft, BookMain, BookRight } from '@/components/common';
import { BookItem, ListResponse } from '@/models/Book';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const BookDetail = () => {
    const { bid } = useParams();
    const [data, setData] = useState<BookItem>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = (await bookApi.getDetailBook(bid || '')) as unknown as ListResponse;
                setData(res.data);
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
                console.log(error.message);
            }
        };
        fetchData();
    }, [bid]);

    const img = JSON.parse(data?.images || '[]') as string[];
    const stringArray = JSON.parse(data?.description || '[]');

    return (
        <div className="px-[15px] sm:mr-[20px] sm:px-[100px]">
            {loading && !data ? (
                <div className="h-[500px] flex items-center justify-center ">
                    <ReloadIcon scale={150} className="mr-2 h-4 w-4 animate-spin" />
                </div>
            ) : (
                <div className="flex flex-col sm:flex-row gap-5 py-4">
                    <BookLeft img={img[0]} />
                    <BookMain
                        authors={data?.authors}
                        des={stringArray}
                        img={img[2]}
                        name={data?.name}
                        price={data?.price}
                        quantity_sold={data?.quantity_sold}
                        rating={data?.rating}
                    />
                    <BookRight _id={data?._id} img={img[1]} name={data?.name} price={data?.price} />
                </div>
            )}
        </div>
    );
};
