import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
import { type } from 'os';
import TaskEntity from './task.entity';

@Entity()
export default class CategoryEntity extends BaseEntity 
{
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column({ length: 500 })
  name: string;

  @ApiResponseProperty({type: () => [TaskEntity]})
  @OneToMany( type => TaskEntity , task => task.category)
  books: TaskEntity[];
}