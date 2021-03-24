import { Todo } from "core/domain/todos/models/todo";
import { TodoRepository } from "core/domain/todos/models/todo.repository";

export type UseCaseTodosFindAllProps = {
  todoRepository: TodoRepository;
}

export type UseCaseTodosFindAll = (props: UseCaseTodosFindAllProps) => {
  todos: Todo[];
  getTodos: () => Promise<void>;
};