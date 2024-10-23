import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [color, setColor] = useState("blue")


  return (
    <>
    <Navbar  title= "this is navbar"/>
      <h1>bhadra + group</h1>
      <div className="card">
        <button onClick={() => setColor("red")}>
          please click me {color}
        </button>
      
      </div>
    
    </>
  )
}

export default App
