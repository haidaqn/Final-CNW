import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/base.repository';
import { Book } from '../Models/book.model';

@Injectable()
export class BookRepository extends BaseRepository<Book> {
    constructor(
        @InjectModel('Book')
        private readonly bookRepository: Model<Book>
    ) {
        super(bookRepository);
    }

    async countDocuments(filter?: any) {
        return await this.bookRepository.countDocuments(filter);
    }
}
