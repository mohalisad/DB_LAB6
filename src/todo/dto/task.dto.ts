import { ApiProperty } from "@nestjs/swagger";

export default class TaskDto {
    @ApiProperty({description: 'Required'})
    readonly name: string;
    @ApiProperty({description: 'Required'})
    readonly categoryIDs: number[];
    @ApiProperty({description: 'Required'})
    readonly works: string[];
    @ApiProperty({description: 'Required'})
    readonly tags: number[];
}