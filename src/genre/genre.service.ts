import { Injectable } from '@nestjs/common';
import GenreEntity from 'src/db/entity/genre.entity';
import BoolResponse from 'src/lib/bool.response';
import CreateGenreDto from './dto/create-genre.dto';

@Injectable()
export class GenreService {
    async insert(genreDetails: CreateGenreDto): Promise<GenreEntity> {
        const genreEntity: GenreEntity = GenreEntity.create();
        const {type} = genreDetails;

        genreEntity.type = type;
        await GenreEntity.save(genreEntity);
        return genreEntity;
    }
    async getAllGenre(): Promise<GenreEntity[]> {
        return await GenreEntity.find();
    }
    async update(genreID: number, genreDetails: CreateGenreDto): Promise<GenreEntity> {
        const genreEntity = await GenreEntity.findOne(genreID);
        const {type } = genreDetails;
        genreEntity.type = type;
        await GenreEntity.save(genreEntity);
        return genreEntity;
      }
    async remove(genreID: number): Promise<BoolResponse> {
        const genreEntity = await GenreEntity.findOne(genreID);
        try {
            await genreEntity.remove();
        }catch (err) {
            return new BoolResponse(false);
        }
    return new BoolResponse(true);
    }
}
