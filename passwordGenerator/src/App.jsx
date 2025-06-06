/* eslint-disable no-unused-vars */
import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  
  const [charAllowed, setCharAllowed] = useState(false)
  
  const [password, setPassword] = useState("")
  
  //useref hook
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str += "012456789"
    if(charAllowed) str +="!@#$%^&*_+=[]{}~`"


    for (let i = 1; i <= length; i++)
    {
      let char =Math.floor (Math.random() * str.length + 1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  

  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9);   
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "black" }}>
  <div className="px-4 py-3" style={{ backgroundColor: "#1c2237", borderRadius: "10px", width: "450px", color: "white" }}>

    <h5 className="text-center mb-3">Password generator</h5>

    {/* Password Field and Copy Button */}
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Password"
        value={password}
              readOnly
              ref={passwordRef}
        style={{ backgroundColor: "white", color: "black" }}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={copyToClipboard}>
          copy
        </button>
      </div>
    </div>

    {/* Slider and Options */}
    <div className="mt-2">
      <input
        type="range"
        min={6}
        max={100}
        value={length}
        className="custom-range"
        onChange={(e) => setLength(e.target.value)}
      />
      <span className="d-block mt-1" style={{ color: "orange" }}>
        Length: {length}
      </span>

      <div className="form-check form-check-inline mt-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="numberInput"
          checked={numberAllowed}
          onChange={() => setNumberAllowed(prev => !prev)}
        />
        <label className="form-check-label" htmlFor="numberInput" style={{ color: "orange" }}>
          Numbers
        </label>
      </div>

      <div className="form-check form-check-inline mt-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="charInput"
          checked={charAllowed}
          onChange={() => setCharAllowed(prev => !prev)}
        />
        <label className="form-check-label" htmlFor="charInput" style={{ color: "orange" }}>
          Characters
        </label>
      </div>
    </div>

  </div>
</div>


    </>
  )
}

export default App
