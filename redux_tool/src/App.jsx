import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="h-screen bg-slate-500 shadow-lg text-center mt-3 rounded-t text-white p-4">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
