import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}
  async create(createTaskDto: CreateTaskDto) {
    return this.taskModel.create(createTaskDto);
  }

  async findAll():Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: number):Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto).exec();
  }

  remove(id: number) {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
