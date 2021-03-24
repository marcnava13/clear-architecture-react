import { Todo } from "core/domain/todos/models/todo";
import { CreateTodo } from "core/domain/todos/services/createTodo";
import { UseCaseCreateTodo } from "./createTodo.interface";

export const useCaseCreateTodo: UseCaseCreateTodo = ({ todoRepository }) => {
  const createTodo = async (todo: Todo) => {
    const createTodo = new CreateTodo(todoRepository);
    if (validateData(todo)) await createTodo.fetch(todoMapper(todo));
    else throw new Error('You have to enter a title for the task');
  };

  const validateData = (todo: Todo): boolean => {
    return todo.title !== '';
  };

  const todoMapper = (todo: Todo): Todo => {
    return {
      userId: todo.userId,
      id: todo.id,
      title: todo.title,
      completed: todo.completed
    };
  };

  return { createTodo };
}