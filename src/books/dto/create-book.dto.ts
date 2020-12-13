import { ApiProperty} from "@nestjs/swagger";

export default class CreateBookDto {
    @ApiProperty({description: 'Required'})
    readonly name: string;
    @ApiProperty({description: 'Users'})
    readonly userID: number;
    @ApiProperty({description: 'Genres', default : []})
    readonly genreIDs: number[];
}