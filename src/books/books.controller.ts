import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import JwtAuthGuard from 'src/auth/jwt-auth.guard';
import BookEntity from 'src/db/entity/book.entity';
import BoolResponse from 'src/lib/bool.response';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';

@ApiTags('Books')
@Controller('books')
export class BooksController {
    constructor(private readonly bookServices: BooksService) {}
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: BookEntity})
    @Post('post')
    postBooks( @Body() books: CreateBookDto) {
        return this.bookServices.insert(books);
    }
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: [BookEntity]})
    @Get()
    getAll() {
        return this.bookServices.getAllBooks();
    }
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: BookEntity})
    @Put(':id')
    updateBook(@Param('id') bookID: number, @Body() book: CreateBookDto) {
      return this.bookServices.update(bookID, book);
    }
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: BoolResponse})
    @Delete(':id')
    removeBook(@Param('id') bookID: number) {
      return this.bookServices.remove(bookID);
    }
}
