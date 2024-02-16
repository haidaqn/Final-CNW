import { BookItem, ListResponse } from '@/models/Book';
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { HeaderRight } from './HeaderLeft';
import bookApi from '@/api/book';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Card } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { CiMenuBurger } from 'react-icons/ci';

export const Header = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<BookItem[]>([]);
    const [count, setCount] = useState<number>(0);
    const [search, setSearch] = useState<string>('');
    const [queryLodash, setQueryLodash] = useState<string>('');
    const inputRef = useRef(null);
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQueryLodash(value);
        debouncedSetQuery(value);
    };

    const debouncedSetQuery = useCallback(
        debounce((value) => setSearch(value), 600),
        []
    );

    useEffect(() => {
        const handleFocusChange = () => {
            setTimeout(() => {
                setIsInputFocused(inputRef.current === document.activeElement);
            }, 300);
        };
        document.addEventListener('focusin', handleFocusChange);
        document.addEventListener('focusout', handleFocusChange);
        return () => {
            document.removeEventListener('focusin', handleFocusChange);
            document.removeEventListener('focusout', handleFocusChange);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = (await bookApi.search(queryLodash)) as unknown as ListResponse;
                setCount(res.totalRow);
                setData(res.data);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchData();
    }, [queryLodash]);

    return (
        <div className="flex items-center gap-5 px-[15px] sm:px-[100px] justify-between w-full bg-white py-4 z-10 ">
            <img
                className="w-16 h-16 hidden sm:block rounded-none cursor-pointer "
                onClick={() => navigate('/')}
                src="/logo.png"
                alt="@shadcn"
            />
            <div className="block sm:hidden cursor-pointer" onClick={() => navigate('/')}>
                <CiMenuBurger size={30} />
            </div>
            <div className="flex w-[60%] sm:w-[70%] relative items-center h-[40px] justify-center border border-[#DDDDE3] rounded-sm ">
                <span className="cursor-pointer px-3 hidden sm:block">
                    <CiSearch size={34} />
                </span>
                <input
                    ref={inputRef}
                    value={queryLodash}
                    onChange={(e) => handleOnChangeInput(e)}
                    className="border-none outline-none flex-10 w-full h-[90%] pl-2 sm:pl-0"
                    placeholder="Free ship ..."
                />
                <button className="hover:bg-[#CEE1FF] flex-1 p-1 text-[#0A68FF] cursor-pointer font-semibold h-full border-l-2 pl-3 hidden sm:flex items-center justify-center">
                    Tìm kiếm
                </button>
                {data.length > 0 &&
                    search.length > 0 &&
                    queryLodash.length > 0 &&
                    isInputFocused && (
                        <div className="absolute left-0 right-0 top-10 h-fit ">
                            {loading ? (
                                <div className="h-[200px] z-10 flex items-center justify-center ">
                                    <ReloadIcon scale={150} className="mr-2 h-4 w-4 animate-spin" />
                                </div>
                            ) : (
                                <Card className="absolute left-0 z-20 right-0 top-5 h-fit p-4">
                                    <div className="flex items-center justify-between w-full">
                                        <span></span>
                                        <span className="font-semibold">{count} kết quả !</span>
                                    </div>
                                    <ScrollArea className="h-[200px] flex items-center justify-center">
                                        {data.map((book, index) => (
                                            <div
                                                key={index + index}
                                                className="p-2 cursor-pointer hover:text-red-600"
                                                onClick={() => {
                                                    setQueryLodash('');
                                                    navigate(`/book/${book._id}`);
                                                }}
                                            >
                                                {book.name} - {book.authors}
                                            </div>
                                        ))}
                                    </ScrollArea>
                                </Card>
                            )}
                        </div>
                    )}
            </div>
            <HeaderRight />
        </div>
    );
};
