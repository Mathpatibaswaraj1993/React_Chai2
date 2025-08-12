/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

// ✅ First define the context
const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    }
  ],
  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
});

// ✅ Then export default
export default TodoContext;

// ✅ Custom hook to use context
export const useTodo = () => {
  return useContext(TodoContext);
};

// ✅ Export the Provider component
export const TodoProvider = TodoContext.Provider;
