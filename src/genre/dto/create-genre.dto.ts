import { ApiProperty } from "@nestjs/swagger";

export default class CreateGenreDto {
    @ApiProperty({description: 'Required'})
    readonly type: string;
}