import { Injectable } from '@nestjs/common';
import { BookRepository } from '../Repositories/book.repository';
import { Root2 } from '../Dto/book.dto';
import data from 'src/data';
const author = ['Eric Barker', 'Phan Minh Thông', 'Robin Sharma', 'Haruki Murakami', 'Paulo Coelho', 'Napoleon Hill'];

@Injectable()
export class BookService {
    constructor(private readonly bookRepository: BookRepository) {}
    createBooks = async () => {
        try {
            for (let book of data as unknown as Root2[]) {
                const NewBook = {
                    name: book?.name,
                    price: book.original_price,
                    description: JSON.stringify(book.description),
                    images: JSON.stringify(book.images[0]),
                    rating: book.rating_average,
                    short_description: book.short_description,
                    specifications: JSON.stringify(book.specifications),
                    authors: book.authors?.name || author[Math.round(Math.random() * 6)],
                    category: book?.categories?.name || 'Sách tiếng Việt',
                    quantity_sold: book.quantity_sold?.value || Math.round(Math.random() * 100)
                };
                await this.bookRepository.create(NewBook);
            }
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    getPagingBook = async (
        page: number,
        limit: number,
        category: string,
        rating?: number,
        authors?: string,
        price?: string
    ) => {
        try {
            const searchCondition: any = {};
            if (category) searchCondition.category = { $regex: category, $options: 'i' };
            if (authors) searchCondition.authors = { $regex: authors, $options: 'i' };
            if (rating) {
                searchCondition.rating = {};
                searchCondition.rating.$gte = rating;
            }
            const sortCondition = !+price ? { price: -1, createdAt: -1 } : { createdAt: -1 };
            const count = await this.bookRepository.countDocuments(searchCondition);
            const count_page = Math.ceil(count / limit);
            const data = await this.bookRepository.getByCondition(searchCondition, null, {
                sort: sortCondition,
                skip: (page - 1) * limit,
                limit: Number(limit)
            });
            return {
                data,
                current_page: page,
                count_page,
                totalRow: count
            };
        } catch (err) {
            throw new Error('Lỗi get paging');
        }
    };

    getDetailBook = async (id: string) => {
        const response = await this.bookRepository.findByCondition({ _id: id }, null, null, null);
        return {
            data: response ? response : null
        };
    };

    searchBook = async (search: string) => {
        const escapedQuery = this.escapeRegex(search.trim());
        const regex = new RegExp(escapedQuery, 'i');
        const res = await this.bookRepository.getByCondition({
            $or: [{ name: { $regex: regex } }, { category: { $regex: regex } }, { authors: { $regex: regex } }]
        });

        return {
            totalRow: res.length,
            data: res
        };
    };

    private escapeRegex(text: string) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
}
