import { useEffect } from 'react'
import './App.css'
import CELLS from 'vanta/src/vanta.cells'


function App() {
  useEffect(() => {
    CELLS({
      el: '#vanta',
      scale: 1.00,
      size: 1.90,
      color1: 0x8c8c,
      color2: 0xebe03c,
    })    
  }, [])



  return (
    <>
      <div className="app">
        <div className="bg" id="vanta"></div>
        <div className="login-box">
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" disabled/>

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" disabled />

            <button type="submit">Login</button>
            </form>
            <form>
            <button type="submit">Login with GitHub</button>
          </form>
        </div>
  </div>
    </>
  )
}


export default App
