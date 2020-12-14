import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import JwtAuthGuard from 'src/auth/jwt-auth.guard';
import TagEntity from 'src/db/entity/tag.entity';
import BoolResponse from 'src/lib/bool.response';
import TagDto from './dto/tag.dto';
import { TodoService } from './todo.service';

@ApiTags('To Do')
@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) {}

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: [TagEntity]})
    @Get('tag')
    getTag() {
        return this.todoService.getAllTag();
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: TagEntity})
    @Post('tag')
    postTag(@Body() tag: TagDto) {
        return this.todoService.insertTag(tag);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: TagEntity})
    @Put('tag/:id')
    putTag(@Param('id') tagID: number, @Body() tag: TagDto) {
        return this.todoService.updateTag(tagID, tag);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: BoolResponse})
    @Delete('tag/:id')
    deleteTag(@Param('id') tagID: number) {
        return this.todoService.removeTag(tagID);
    }
}
