import { Injectable } from '@nestjs/common';
import TagEntity from 'src/db/entity/tag.entity';
import BoolResponse from 'src/lib/bool.response';
import CategoryDto from './dto/category.dto';
import TagDto from './dto/tag.dto';
import TaskDto from './dto/task.dto';

@Injectable()
export class TodoService {
    async insertCategory(categoryDetails: CategoryDto) {

    }

    async updateCategory(categoryID: number, categoryDetails: CategoryDto) {

    }

    async removeCategory(categoryID: number) {

    }

    async insertTask(taskDetails: TaskDto) {

    }

    async updateTask(taskID: number, taskDetails: TaskDto) {

    }

    async removeTask(taskID: number) {

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
