import { TodoApiResponse } from "../models/todo.api";
import { TodoRepository } from "../models/todo.repository";

export class TodoSearcher {

  constructor(private readonly todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  public async fetch(): Promise<TodoApiResponse[]> {
    const todos = await this.todoRepository.fetchAll();
    return todos;
  }
}