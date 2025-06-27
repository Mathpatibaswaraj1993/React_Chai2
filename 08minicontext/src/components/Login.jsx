/* eslint-disable no-unused-vars */
import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const { setUser } = useContext(UserContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div className='text-center bg-gray-500'>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      &nbsp; 
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      /> <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login