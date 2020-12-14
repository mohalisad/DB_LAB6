import { ApiProperty } from "@nestjs/swagger";

export default class TagDto {
    @ApiProperty({description: 'Required'})
    readonly name: string;
}