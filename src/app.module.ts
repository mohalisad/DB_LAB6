import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';
import { GenreModule } from './genre/genre.module';
import { AuthModule } from './auth/auth.module';
import { AuthUserService } from './auth-user/auth-user.service';
import { AuthUserModule } from './auth-user/auth-user.module';
import { TodoModule } from './todo/todo.module';
import UserEntity from './db/entity/user.entity';
import BookEntity from './db/entity/book.entity';
import GenreEntity from './db/entity/genre.entity';

@Module({
  imports: [HelloModule, BooksModule, UserModule, GenreModule,
    TypeOrmModule.forFeature(
      [UserEntity, BookEntity , GenreEntity],
    ),
    TypeOrmModule.forRoot(),
    AuthModule,
    AuthUserModule,
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthUserService],
})
export class AppModule {}
