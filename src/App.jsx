import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  // const [color, setColor] = useState("blue")
  const [mode , setMode]= useState('light')
  const [text , setText] = useState('enable dark mode')
   const toggleMode= ()=>{
    if (mode== 'light') {
      setMode('dark')
      setText('enable light mode')
    }
    else{
      setMode('light')
      setText('enable dark mode')
    }
   }


  return (
    <>
    <Navbar title="this is header" mode={mode} text={text} toggleMode= {toggleMode} />
      {/* <h1>bhadra + group</h1>
      <div className="card">
        <button onClick={() => setColor("red")}>
          please click me {color}
        </button>
      
      </div> */}
    
    </>
  )
}

export default App
