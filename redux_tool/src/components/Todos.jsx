import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos); // get todos from Redux
  const dispatch = useDispatch(); // get dispatch function

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2">
            {todo.text}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
