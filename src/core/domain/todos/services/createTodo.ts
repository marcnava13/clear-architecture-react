import { Todo } from "../models/todo";
import { TodoRepository } from "../models/todo.repository";

export class CreateTodo {

  constructor(private readonly todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  public async fetch(todo: Todo): Promise<void> {
    await this.todoRepository.create(todo);
  }
}