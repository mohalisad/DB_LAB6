import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
import { type } from 'os';

@Entity()
export default class TagEntity extends BaseEntity 
{
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column({ length: 500 })
  name: string;
}