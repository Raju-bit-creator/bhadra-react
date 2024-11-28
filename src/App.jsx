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

import Counter from '../src/features/counter/Counter';

import User from './components/User';
import UserList from './components/UserList';
import ProductState from './context/ProductState';
import Signup from './components/Signup';
import Login from './components/Login';
import CartItems from './components/CartItems';





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
      <ProductState>
        <Router>
          <Navbar title="logo here" mode={mode} text={text} toggleMode={toggleMode} />
          <Alert alert={alert} showAlert={showAlert} />
          {/* <Counter /> */}
          {/* <Func /> */}
          {/* <Counter /> */}
          <Routes>
            <Route path='/' element={<Home showAlert={showAlert} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path="/user/:userId/:userName" element={<User />} />
            <Route path="/user" element={<UserList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cartitem" element={<CartItems/>} />
            
         
          </Routes>
        </Router>
      </ProductState>
    </>
  )
}

export default App
