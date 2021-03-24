import { Todo } from "core/domain/todos/models/todo";
import { TodoRepository } from "core/domain/todos/models/todo.repository";

export type UseCaseCreateTodoProps = {
  todoRepository: TodoRepository;
}

export type UseCaseCreateTodo = (props: UseCaseCreateTodoProps) => {
  createTodo: (todo: Todo) => Promise<void>;
};