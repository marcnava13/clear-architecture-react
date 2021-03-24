import { Todo } from "core/domain/todos/models/todo";
import { TodoRepository } from "core/domain/todos/models/todo.repository";

export class InMemoryTodoRepository implements TodoRepository {
  public async fetchAll() {
    return fetch('/todos')
    .then(response => response.json())
    .then(json => json);
  }

  public async create(todo: Todo) {
    await fetch('/todos', { method: 'POST', headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo)
    });
  }
}