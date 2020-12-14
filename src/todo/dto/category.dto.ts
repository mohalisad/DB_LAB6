import { ApiProperty } from "@nestjs/swagger";

export default class CategoryDto {
    @ApiProperty({description: 'Required'})
    readonly name: string;
}