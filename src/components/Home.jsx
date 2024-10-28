import React, { useState } from 'react'

const Home = () => {
  const [text, setText] = useState("Enter your text here")
  const handleUpperCase = () => {
    setText(text.toUpperCase())
  }
  const handleLowerCase = () => {
    setText(text.toLowerCase())
  }
  const clearText =()=>{
    setText('')
  }
  const handleChange = (e) => {
    e.preventDefault()
    setText(e.target.value)

  }
  return (
    <div>

      <div className="mb-3 container">
        <label for="exampleFormControlTextarea1" className="form-label">Analyze your text</label>
        <textarea className="form-control" value={text} name='text' onChange={handleChange} placeholder={text} id="exampleFormControlTextarea1" rows="5"></textarea>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleUpperCase}>Uppercase </button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleLowerCase}>Lowercase </button>
        <button className='btn btn-primary mt-3 mx-2' onClick={clearText}>Clear text</button>
      </div>
      <div className='container'>
        <p>{text.split(' ').length} word and {text.length} character</p>
        <p>{0.008 * text.split(' ').length} is your reading time</p>
        <h2>Preview</h2>
       {text.length>0?<p>{text}</p>:'No preview to display'}
      </div>

    </div>
  )
}

export default Home

// assignment
// copy and alert msg
