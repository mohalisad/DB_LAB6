import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthUserService } from './auth-user/auth-user.service';
import { AuthUserModule } from './auth-user/auth-user.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [],
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
