import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';

function App() {
  // const [color, setColor] = useState("blue")
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('enable dark mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }



  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark')
      setText('enable light mode')
      showAlert('success', 'dark mode has been enable')
    }
    else {
      setMode('light')
      setText('enable dark mode')
      showAlert('success', 'light mode has been enable')
    }
  }


  return (
    <>
      <Router>
        <Navbar title="this is header" mode={mode} text={text} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />

          </Routes>     

      </Router>
    </>
  )
}

export default App
