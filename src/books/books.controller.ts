import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import BookEntity from 'src/db/entity/book.entity';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly bookServices: BooksService) {}
    @ApiResponse({status: 200, type: BookEntity})
    @Post('post')
    postBooks( @Body() books: CreateBookDto) {
        return this.bookServices.insert(books);
    }

    @ApiResponse({status: 200, type: [BookEntity]})
    @Get()
    getAll() {
        return this.bookServices.getAllBooks();
    }
}
