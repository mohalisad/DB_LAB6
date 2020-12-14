import { Injectable } from '@nestjs/common';
import BookEntity from '../db/entity/book.entity';
import CreateBookDto from './dto/create-book.dto';
import UserEntity from '../db/entity/user.entity';
import { createQueryBuilder, getConnection } from 'typeorm';
import GenreEntity from '../db/entity/genre.entity';
import BoolResponse from 'src/lib/bool.response';

@Injectable()
export class BooksService {
    async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
        const { name , userID , genreIDs } = bookDetails;
        const book = new BookEntity();
        book.name = name;
        book.user = await UserEntity.findOne(userID) ;
        book.genres=[];
        for ( let i = 0; i < genreIDs.length ; i++)
        {
                 const genre = await GenreEntity.findOne(genreIDs[i]);
                 book.genres.push(genre);
        }
        await book.save();
        return book;
      }
      async getAllBooks(): Promise<BookEntity[] > {
        // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
        return BookEntity.find();
      }

    async update(bookID: number, bookDetails: CreateBookDto): Promise<BookEntity> {
      const bookEntity = await BookEntity.findOne(bookID);
      const { name , userID , genreIDs } = bookDetails;
      bookEntity.name = name;
      bookEntity.user = await UserEntity.findOne(userID) ;
      bookEntity.genres=[];
      for ( let i = 0; i < genreIDs.length ; i++)
      {
               const genre = await GenreEntity.findOne(genreIDs[i]);
               bookEntity.genres.push(genre);
      }
      await BookEntity.save(bookEntity);
      return bookEntity;
    }
    async remove(bookID: number): Promise<BoolResponse> {
      const bookEntity = await BookEntity.findOne(bookID);
      try {
        await bookEntity.remove();
      }catch (err) {
        return new BoolResponse(false);
      }
      return new BoolResponse(true);
    }
}
