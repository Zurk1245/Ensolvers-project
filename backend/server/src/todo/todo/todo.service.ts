import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoDTO } from './todo.dto';
import { CreateTodoDTO } from './create-todo.dto';


@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private  todoRepository: Repository<Todo>) {}

    public async createOne(createTodoRequest: CreateTodoDTO) {
        const todo: Todo = new Todo();
        todo.task = createTodoRequest.task;
        todo.completed = createTodoRequest.completed;

        await this.todoRepository.save(todo);
        
        const todoDTO = new TodoDTO();
        todoDTO.id = todo.id;
        todoDTO.task = todo.task;
        todoDTO.completed = todo.completed;

        return todoDTO;
    }
}
