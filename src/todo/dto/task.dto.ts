import { ApiProperty } from "@nestjs/swagger";

export default class TaskDto {
    @ApiProperty({description: 'Required'})
    readonly name: string;
    @ApiProperty({description: 'Required'})
    readonly categoryID: number;
    @ApiProperty({description: 'Required'})
    readonly works: string[];
    @ApiProperty({description: 'Required', type: [Number]})
    readonly tagIDs: number[];
}