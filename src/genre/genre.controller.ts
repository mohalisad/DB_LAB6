import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import GenreEntity from 'src/db/entity/genre.entity';
import CreateGenreDto from './dto/create-genre.dto';
import { GenreService } from './genre.service';

@Controller('genre')
export class GenreController {
    constructor(private readonly genreServices: GenreService) {}
    @ApiResponse({status: 200, type: GenreEntity})
    @Post('post')
    postGenre( @Body() genre: CreateGenreDto) {
      return this.genreServices.insert(genre);
    }
    @ApiResponse({status: 200, type: [GenreEntity]})
    @Get()
    getAll() {
      return this.genreServices.getAllGenre();
    }
}
