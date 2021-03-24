import { Todo } from "./todo";
import { TodoApiResponse } from "./todo.api";

export interface TodoRepository {
  fetchAll: () => Promise<TodoApiResponse[]>;
  create: (todo: Todo) => Promise<void>;
}