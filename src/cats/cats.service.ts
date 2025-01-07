import { Get, Injectable, Post } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats:Cat[] = [];

  @Post()
  async create(cat) {
    this.cats.push(cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.cats;
  }
}
