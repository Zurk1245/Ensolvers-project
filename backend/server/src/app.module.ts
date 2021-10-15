import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo/todo.controller';

//import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo/todo.module';
import { TodoService } from './todo/todo/todo.service';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TodoModule,
    DatabaseModule,
    TodoModule,
    TodoService
  ],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
