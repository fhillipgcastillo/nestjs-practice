import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsController } from "./cats/cats.controller";
import { CatsService } from './cats/cats.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [TaskModule, MongooseModule.forRoot(`mongodb://localhost:27017/test`)],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
