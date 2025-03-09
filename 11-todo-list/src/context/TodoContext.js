import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  completeTodo: (id) => {},
});

export const UseTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
