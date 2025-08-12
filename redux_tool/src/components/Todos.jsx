import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos);
  
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key></li>
      ))}
    </>
  )
}

export default Todos