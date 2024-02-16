import bookApi from '@/api/book';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from '@/components/ui/pagination';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { BookItem, BookQuery, ListResponse } from '@/models/Book';
import History from '@/router/History';
import { generateRange, renderStartNumber } from '@/utils';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';
import { ItemBook } from '.';

export const Book = () => {
    const location = useLocation();
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<BookItem[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [totalRow, setTotalRow] = useState<number>(0);
    const [query, setQuery] = useState<BookQuery>({
        page: 1,
        limit: 10,
        authors: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const updatedSearchParmas = new URLSearchParams(location.search);
            updatedSearchParmas.set('page', `${query.page}`);
            updatedSearchParmas.set('limit', `${query.limit}`);
            if (query.authors) updatedSearchParmas.set('authors', `${query.authors}`);
            else updatedSearchParmas.delete('authors');
            if (query.rating) updatedSearchParmas.set('rating', `${query.rating}`);
            else updatedSearchParmas.delete('rating');
            if (query.category) updatedSearchParmas.set('category', `${query.category}`);
            else updatedSearchParmas.delete('category');
            if (query.price) updatedSearchParmas.set('price', `${query.price}`);
            else updatedSearchParmas.delete('price');
            History.push({ search: updatedSearchParmas.toString() });
            setLoading(true);
            try {
                const res = (await bookApi.getPagination(query)) as unknown as ListResponse;
                setTotalRow(res.totalRow);
                setData(res.data);
                setTotalCount(res.count_page);
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
                console.log(error.message);
            }
        };
        fetchData();
    }, [query.page, query.authors, query.rating, query.category, query.price]);

    return (
        <div className=" sm:px-[100px] flex flex-col sm:flex-row gap-1 sm:gap-5 pb-5 pt-2">
            <Card className="flex-2 hidden sm:flex  rounded-md flex-col gap-3 py-3 h-fit">
                <div className="px-3">
                    <span className="text-lg font-medium">Danh mục sản phẩm</span>
                    <ul className="flex flex-col gap-1">
                        <li
                            onClick={() =>
                                setQuery((prev) => ({ ...prev, category: 'English Books' }))
                            }
                            className={`opacity-75 cursor-pointer font-semibold ${
                                query.category === 'English Books' && 'text-red-700'
                            }`}
                        >
                            English Books
                        </li>
                        <li
                            onClick={() =>
                                setQuery((prev) => ({ ...prev, category: 'Sách tiếng Việt' }))
                            }
                            className={`opacity-75 cursor-pointer font-semibold ${
                                query.category === 'Sách tiếng Việt' && 'text-red-700'
                            }`}
                        >
                            Sách tiếng Việt
                        </li>
                        <li
                            onClick={() =>
                                setQuery((prev) => ({
                                    ...prev,
                                    category: 'Sách tư duy - Kỹ năng sống',
                                }))
                            }
                            className={`opacity-75 cursor-pointer font-semibold ${
                                query.category === 'Sách tư duy - Kỹ năng sống' && 'text-red-700'
                            }`}
                        >
                            Sách tư duy - Kỹ năng sống
                        </li>
                        <li
                            onClick={() =>
                                setQuery((prev) => ({ ...prev, category: 'Sách doanh nhân' }))
                            }
                            className={`opacity-75 cursor-pointer font-semibold ${
                                query.category === 'Sách doanh nhân' && 'text-red-700'
                            }`}
                        >
                            Sách doanh nhân
                        </li>
                        <li
                            onClick={() =>
                                setQuery((prev) => ({ ...prev, category: 'Tác phẩm kinh điển' }))
                            }
                            className={`opacity-75 cursor-pointer font-semibold ${
                                query.category === 'Tác phẩm kinh điển' && 'text-red-700'
                            }`}
                        >
                            Tác phẩm kinh điển
                        </li>
                        <li
                            onClick={() => setQuery((prev) => ({ ...prev, category: undefined }))}
                            className={`opacity-75 cursor-pointer font-semibold ${
                                query.category === undefined && 'text-red-700'
                            }`}
                        >
                            Tất cả
                        </li>
                    </ul>
                </div>
                <RadioGroup
                    value={query.authors}
                    onValueChange={(value: string) =>
                        setQuery((prev) => ({ ...prev, authors: value }))
                    }
                    className="border-y-2 p-3"
                >
                    <span className="text-lg font-medium">Tác giả</span>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="Eric Barker"
                            className="rounded-sm"
                            id="Eric Barker"
                        />
                        <Label htmlFor="Eric Barker">Eric Barker</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="Phan Minh Thông"
                            className="rounded-sm"
                            id="Phan Minh Thông"
                        />
                        <Label htmlFor="Phan Minh Thông">Phan Minh Thông</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="Haruki Murakami"
                            className="rounded-sm"
                            id="Haruki Murakami"
                        />
                        <Label htmlFor="Haruki Murakami">Haruki Murakami</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="Paulo Coelho"
                            className="rounded-sm"
                            id="Paulo Coelho"
                        />
                        <Label htmlFor="Paulo Coelho">Paulo Coelho</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="Napoleon Hill"
                            className="rounded-sm"
                            id="Napoleon Hill"
                        />
                        <Label htmlFor="Napoleon Hill">Napoleon Hill</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="" className="rounded-sm" id="Tất cả" />
                        <Label htmlFor="Tất cả">Tất cả</Label>
                    </div>
                </RadioGroup>
                <div className="px-3">
                    <span className="text-lg font-medium">Đánh giá</span>
                    <div className="flex flex-col gap-1">
                        <div
                            onClick={() => setQuery((prev) => ({ ...prev, rating: 5 }))}
                            className="items-center flex gap-1 cursor-pointer hover:opacity-90"
                        >
                            <span className="flex gap-0">{renderStartNumber(5, 16)}</span>
                            <span className={`${query.rating === 5 && 'text-red-700'}`}>
                                từ 5 sao
                            </span>
                        </div>
                        <div
                            onClick={() => setQuery((prev) => ({ ...prev, rating: 4 }))}
                            className="items-center flex gap-1 cursor-pointer hover:opacity-90"
                        >
                            <span className="flex gap-0">{renderStartNumber(4, 16)}</span>
                            <span className={`${query.rating === 4 && 'text-red-700'}`}>
                                từ 4 sao
                            </span>
                        </div>
                        <div
                            onClick={() => setQuery((prev) => ({ ...prev, rating: 3 }))}
                            className="items-center flex gap-1 cursor-pointer hover:opacity-90"
                        >
                            <span className="flex gap-0">{renderStartNumber(3, 16)}</span>
                            <span className={`${query.rating === 3 && 'text-red-700'}`}>
                                từ 3 sao
                            </span>
                        </div>
                        <div
                            onClick={() => setQuery((prev) => ({ ...prev, rating: 2 }))}
                            className="items-center flex gap-1 cursor-pointer hover:opacity-90"
                        >
                            <span className="flex gap-0">{renderStartNumber(2, 16)}</span>
                            <span className={`${query.rating === 2 && 'text-red-700'}`}>
                                từ 2 sao
                            </span>
                        </div>
                        <div
                            onClick={() => setQuery((prev) => ({ ...prev, rating: 1 }))}
                            className="items-center flex gap-1 cursor-pointer hover:opacity-90"
                        >
                            <span className="flex gap-0">{renderStartNumber(1, 16)}</span>
                            <span className={`${query.rating === 1 && 'text-red-700'}`}>
                                từ 1 sao
                            </span>
                        </div>
                        <div
                            onClick={() => setQuery((prev) => ({ ...prev, rating: 0 }))}
                            className="items-center flex gap-1 cursor-pointer hover:opacity-90"
                        >
                            <span className="flex gap-0">{renderStartNumber(0, 16)}</span>
                            <span className={`${query.rating === 0 && 'text-red-700'}`}>
                                từ 0 sao
                            </span>
                        </div>
                    </div>
                </div>
            </Card>
            <div className="flex gap-2 flex-wrap pl-[20px] py-2 px-1 mt-[-8px] mx-[-15px] bg-white sm:hidden">
                <Card
                    className="flex items-center px-1 bg-white rounded-sm"
                    onClick={() =>
                        setQuery({
                            page: 1,
                            limit: 10,
                            authors: '',
                            price: '',
                            category: '',
                        })
                    }
                >
                    Lọc <CiFilter />
                </Card>
                <div className="">
                    <Select
                        onValueChange={(value: string) =>
                            setQuery((prev) => ({ ...prev, authors: value }))
                        }
                        value={query.authors}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Tác giả" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={'Eric Barker'}>
                                    <Badge>Eric Barker</Badge>
                                </SelectItem>
                                <SelectItem value={'Phan Minh Thông'}>
                                    <Badge>Phan Minh Thông</Badge>
                                </SelectItem>
                                <SelectItem value={'Haruki Murakami'}>
                                    <Badge>Haruki Murakami</Badge>
                                </SelectItem>
                                <SelectItem value={'Paulo Coelho'}>
                                    <Badge>Paulo Coelho</Badge>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="">
                    <Select
                        onValueChange={(value: string) =>
                            setQuery((prev) => ({ ...prev, category: value }))
                        }
                        value={query.category}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Thể loại" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={'English Books'}>
                                    <Badge>English Books</Badge>
                                </SelectItem>
                                <SelectItem value={'Sách tiếng Việt'}>
                                    <Badge>Sách tiếng Việt</Badge>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="">
                    <Select
                        onValueChange={(value: string) =>
                            setQuery((prev) => ({ ...prev, price: value }))
                        }
                        value={query.price}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Giá" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={'1'}>
                                    <Badge>Tăng</Badge>
                                </SelectItem>
                                <SelectItem value={'0'}>
                                    <Badge>Giảm</Badge>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Card className="flex-1  w-full sm:mx-0 mb-4 sm:flex-9 sm:flex flex-col gap-5 px-3 py-5 rounded-md h-fit">
                <div>
                    {loading && data.length ? (
                        <div className="h-[500px] flex items-center justify-center ">
                            <ReloadIcon scale={150} className="mr-2 h-4 w-4 animate-spin" />
                        </div>
                    ) : (
                        <>
                            {data.length ? (
                                <>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 smgap-6 px-2 sm:px-5">
                                        {data.map((book, index) => (
                                            <ItemBook {...book} key={index + index} />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="h-[400px] flex items-center justify-center">
                                    Không có sản phẩm nào
                                </div>
                            )}
                        </>
                    )}
                </div>
                <Pagination className="py-4">
                    <PaginationContent>
                        {generateRange(1, totalCount).map((page, index) => (
                            <PaginationItem className="cursor-pointer" key={page + index}>
                                <PaginationLink
                                    isActive={page === query.page}
                                    onClick={() => {
                                        setQuery((prev: BookQuery) => ({
                                            ...prev,
                                            page: page,
                                        }));
                                    }}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                    </PaginationContent>
                </Pagination>
            </Card>
        </div>
    );
};
