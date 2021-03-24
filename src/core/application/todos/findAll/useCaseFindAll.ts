import { Todo } from "core/domain/todos/models/todo";
import { TodoApiResponse } from "core/domain/todos/models/todo.api";
import { TodoSearcher } from "core/domain/todos/services/todoSearcher";
import { useState } from "react";
import { UseCaseTodosFindAll } from "./findAll.interfaces";

export const useCaseTodoFindAll: UseCaseTodosFindAll = ({ todoRepository }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const todoSearcher = new TodoSearcher(todoRepository);
    const todos = await todoSearcher.fetch();
    
    setTodos(todoMapper(todos));
  }

  const todoMapper = (todos: TodoApiResponse[]): Todo[] => {
    return todos;
  }

  return { todos, getTodos }
}