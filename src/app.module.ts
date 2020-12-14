import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthUserService } from './auth-user/auth-user.service';
import { AuthUserModule } from './auth-user/auth-user.module';
import { TodoModule } from './todo/todo.module';
import CategoryEntity from './db/entity/category.entity';
import TagEntity from './db/entity/tag.entity';
import TaskEntity from './db/entity/task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [CategoryEntity, TagEntity, TaskEntity],
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
