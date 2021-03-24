import { FC } from "react";
import { useHome } from "./useHome";

export const Home: FC = () => {
  const { inputRef, handleOnAdd, todos } = useHome();

  return (
    <div>
      <h1>Clean architecture</h1>
      <input ref={inputRef} name="title" />
      <button onClick={handleOnAdd}>Add</button>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};
