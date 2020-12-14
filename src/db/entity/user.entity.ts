import { ApiResponseProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import BookEntity from './book.entity';
@Entity()
export default class UserEntity extends BaseEntity {

  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty({type: () => [BookEntity]})
  @OneToMany( type => BookEntity , book => book.user)
  books: BookEntity[];

  @ApiResponseProperty()
  @Column({ length: 500 })
  name: string;
}