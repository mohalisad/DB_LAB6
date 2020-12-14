import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import GenreEntity from 'src/db/entity/genre.entity';
import BoolResponse from 'src/lib/bool.response';
import CreateGenreDto from './dto/create-genre.dto';
import { GenreService } from './genre.service';

@ApiTags('Genre')
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
    @ApiResponse({status: 200, type: GenreEntity})
    @Put(':id')
    updateGenre(@Param('id') genreID: number, @Body() genre: CreateGenreDto) {
      return this.genreServices.update(genreID, genre);
    }
    @ApiResponse({status: 200, type: BoolResponse})
    @Delete(':id')
    removeGenre(@Param('id') userID: number) {
      return this.genreServices.remove(userID);
    }
}
