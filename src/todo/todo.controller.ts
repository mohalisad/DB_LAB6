import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import JwtAuthGuard from 'src/auth/jwt-auth.guard';
import CategoryEntity from 'src/db/entity/category.entity';
import TagEntity from 'src/db/entity/tag.entity';
import TaskEntity from 'src/db/entity/task.entity';
import BoolResponse from 'src/lib/bool.response';
import CategoryDto from './dto/category.dto';
import TagDto from './dto/tag.dto';
import TaskDto from './dto/task.dto';
import { TodoService } from './todo.service';

@ApiTags('To Do')
@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) {}

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: [CategoryEntity]})
    @Get('category')
    getCategory() {
        return this.todoService.getAllCategory();
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: CategoryEntity})
    @Post('category')
    postCategory(@Body() category: CategoryDto) {
        return this.todoService.insertCategory(category);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: CategoryEntity})
    @Put('category/:id')
    putCategory(@Param('id') categoryID: number, @Body() category: CategoryDto) {
        return this.todoService.updateCategory(categoryID, category);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: BoolResponse})
    @Delete('category/:id')
    deleteCategory(@Param('id') categoryID: number) {
        return this.todoService.removeCategory(categoryID);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: [TaskEntity]})
    @Get('task')
    getTask() {
        return this.todoService.getAllTask();
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: TaskEntity})
    @Post('task')
    postTask(@Body() task: TaskDto) {
        return this.todoService.insertTask(task);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: TaskEntity})
    @Put('task/:id')
    putTask(@Param('id') taskID: number, @Body() task: TaskDto) {
        return this.todoService.updateTask(taskID, task);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiResponse({status: 200, type: BoolResponse})
    @Delete('task/:id')
    deleteTask(@Param('id') taskID: number) {
        return this.todoService.removeTask(taskID);
    }

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
