import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo/todo.controller';

//import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule
  ],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}

/* @Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {} */
