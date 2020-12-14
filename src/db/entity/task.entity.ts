import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
import { type } from 'os';
import TagEntity from './tag.entity';
import CategoryEntity from './category.entity';

@Entity()
export default class TaskEntity extends BaseEntity 
{
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column({ length: 500 })
  name: string;

  @ApiResponseProperty({type: ()=>CategoryEntity})
  @ManyToOne(type => CategoryEntity, user => user.books)
  category: CategoryEntity;

  @ApiResponseProperty({type: [String]})
  works: String[];

  @ApiResponseProperty({type: [TagEntity]})
  @ManyToMany(type => TagEntity)
  @JoinTable()
  tags: TagEntity[];
}