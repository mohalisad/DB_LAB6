import { Injectable } from '@nestjs/common';
import CategoryEntity from 'src/db/entity/category.entity';
import TagEntity from 'src/db/entity/tag.entity';
import TaskEntity from 'src/db/entity/task.entity';
import BoolResponse from 'src/lib/bool.response';
import CategoryDto from './dto/category.dto';
import TagDto from './dto/tag.dto';
import TaskDto from './dto/task.dto';

@Injectable()
export class TodoService {
    async getAllCategory(): Promise<CategoryEntity[]> {
        return await CategoryEntity.find();
    }

    async insertCategory(categoryDetails: CategoryDto) {
        const categoryEntity: CategoryEntity = CategoryEntity.create();
        const {name} = categoryDetails;
        categoryEntity.name = name;
        await categoryEntity.save();
        return categoryEntity;
    }

    async updateCategory(categoryID: number, categoryDetails: CategoryDto) {
        const categoryEntity: CategoryEntity = await CategoryEntity.findOne(categoryID);
        const {name} = categoryDetails;
        categoryEntity.name = name;
        await categoryEntity.save();
        return categoryEntity;
    }

    async removeCategory(categoryID: number) {
        const categoryEntity: CategoryEntity = await CategoryEntity.findOne(categoryID);
        try {
            await categoryEntity.remove();
        } catch (err) {
            return new BoolResponse(false);
        }
        return new BoolResponse(true);
    }

    async getAllTask(): Promise<TaskEntity[]> {
        return await TaskEntity.find();
    }

    async insertTask(taskDetails: TaskDto):  Promise<TaskEntity> {
        const taskEntity: TaskEntity = TaskEntity.create();
        const {name, categoryID, works, tagIDs} = taskDetails;
        taskEntity.name = name;
        taskEntity.category = await CategoryEntity.findOne(categoryID);
        taskEntity.works = works;
        taskEntity.tags = [];
        for (const tagID of tagIDs) {
            const tag = await TagEntity.findOne(tagID);
            taskEntity.tags.push(tag);
        }
        await taskEntity.save();
        return taskEntity;
    }

    async updateTask(taskID: number, taskDetails: TaskDto): Promise<TaskEntity> {
        const taskEntity: TaskEntity = await TaskEntity.findOne(taskID);
        const {name, categoryID, works, tagIDs} = taskDetails;
        taskEntity.name = name;
        taskEntity.category = await CategoryEntity.findOne(categoryID);
        taskEntity.works = works;
        taskEntity.tags = [];
        for (const tagID of tagIDs) {
            const genre = await TaskEntity.findOne(tagID);
            taskEntity.tags.push(genre);
        }
        await taskEntity.save();
        return taskEntity;
    }

    async removeTask(taskID: number): Promise<BoolResponse> {
        const taskEntity: TaskEntity = await TaskEntity.findOne(taskID);
        try {
            await taskEntity.remove();
        } catch (err) {
            return new BoolResponse(false);
        }
        return new BoolResponse(true);
    }

    async getAllTag(): Promise<TagEntity[]> {
        return await TagEntity.find();
    }

    async insertTag(tagDetails: TagDto): Promise<TagEntity> {
        const tagEntity: TagEntity = TagEntity.create();
        const {name} = tagDetails;
        tagEntity.name = name;
        await tagEntity.save();
        return tagEntity;
    }

    async updateTag(tagID: number, tagDetails: TagDto): Promise<TagEntity> {
        const tagEntity: TagEntity = await TagEntity.findOne(tagID);
        const {name} = tagDetails;
        tagEntity.name = name;
        await tagEntity.save();
        return tagEntity;
    }

    async removeTag(tagID: number): Promise<BoolResponse> {
        const tagEntity: TagEntity = await TagEntity.findOne(tagID);
        try {
            await tagEntity.remove();
        } catch (err) {
            return new BoolResponse(false);
        }
        return new BoolResponse(true);
    }
}
