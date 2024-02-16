import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PaginationProductDto } from '../Dto/book.dto';
import { BookService } from '../Services/book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Post('bulk')
    async createBooks() {
        return this.bookService.createBooks();
    }

    @Get('getAll')
    async getAllProduct(@Query() { page, limit, category, rating, authors, price }: PaginationProductDto) {
        return await this.bookService.getPagingBook(page, limit, category, rating, authors, price);
    }

    @Get(':id')
    async getProductById(@Param('id') id: string) {
        return await this.bookService.getDetailBook(id);
    }

    @Get('search/:searchQ')
    async searchBook(@Param('searchQ') searchQ: string) {
        return await this.bookService.searchBook(searchQ);
    }
}
