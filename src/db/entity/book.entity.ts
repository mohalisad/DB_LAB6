import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
import { ApiResponseProperty } from '@nestjs/swagger';
import { type } from 'os';

@Entity()
export default class BookEntity extends BaseEntity 
{
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column({ length: 500 })
  name: string;

  @ApiResponseProperty()
  @ManyToOne(type => UserEntity, user => user.books)
  user: UserEntity;

  @ApiResponseProperty({type: [GenreEntity]})
  @ManyToMany(type => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];
}