import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCatDto } from "./dto";

@Controller("cats")
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return "This action adds a new cat";
  }

  @Get()
  findAll(): string {
    return "This action returns all cats";
  }
}
