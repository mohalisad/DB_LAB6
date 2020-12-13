import { ApiProperty } from "@nestjs/swagger";

export default class CreateUserDto {
    @ApiProperty({description: 'Required'})
    readonly name: string;
    readonly books: number[] ;
}