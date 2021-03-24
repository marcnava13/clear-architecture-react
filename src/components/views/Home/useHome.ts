import { useCaseCreateTodo } from "core/application/todos/createTodo/useCaseCreateTodo";
import { useCaseTodoFindAll } from "core/application/todos/findAll/useCaseFindAll";
import { InMemoryTodoRepository } from "core/infrastructure/respositories/todos/inMemoryTodoRespository";
import { MouseEvent, useCallback, useEffect, useRef } from "react";

const todoRepository = new InMemoryTodoRepository();

export const useHome = () => {
  const { todos, getTodos } = useCaseTodoFindAll({ todoRepository });
  const { createTodo } = useCaseCreateTodo({ todoRepository });
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    getTodos();
  }, []);

  const handleOnAdd = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      createTodo({
        userId: 1,
        id: todos.length,
        title: inputRef.current.value,
        completed: false,
      }).then(() => {
        inputRef.current.value = "";
        getTodos();
      }).catch((error) => alert(error.message));
    },
    [todos]
  );

  return { inputRef, handleOnAdd, todos };
}