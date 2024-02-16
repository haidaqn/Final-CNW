import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './Models/book.model';
import { BookController } from './Controllers/book.controller';
import { BookService } from './Services/book.service';
import { BookRepository } from './Repositories/book.repository';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
    controllers: [BookController],
    providers: [BookService,BookRepository],
    exports: []
})
export class BookModule {}