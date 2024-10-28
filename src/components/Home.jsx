import React, { useState } from 'react'

const Home = () => {
  const [text, setText]= useState("")

  const handleUpperCase =()=>{
    console.log("you clicked uppercase button");
    setText(text.toUpperCase())
    
  }
  const handleLowerCase =()=>{
    console.log("lower");
    setText(text.toLowerCase())
    
  }
  const clearTextArea=()=>{
    setText('')
  }

  const handleChange =(e)=>{
   e.preventDefault()
   setText(e.target.value)
  }
  return (
    <div>
      <div className="mb-3 container">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} name={text} onChange={handleChange} placeholder={text} id="exampleFormControlTextarea1" rows="3"></textarea>
        <button className='btn btn-primary mt-3 mx-2'onClick={handleUpperCase}>Uppercase</button>
        <button className='btn btn-primary mt-3 mx-2'onClick={handleLowerCase}>Lowercase</button>
        <button className='btn btn-primary mt-3 mx-2'onClick={clearTextArea}>clear</button>
      </div>
      <div className='container'>
        <h4>Analyze your text</h4>
        <p>{text.split(' ').length} words and {text.length} character</p>
        <p>{0.008 * text.split(' ').length} average time to read</p>
        <h4>preview text</h4>

      <p>{text.length>0?text:"no preview to display"}</p>
      </div>
      
    </div>
  )
}

export default Home

