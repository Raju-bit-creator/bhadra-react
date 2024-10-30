import React, { useState } from 'react'

const Home = (props) => {
  const [text, setText] = useState("")

  const handleUpperCase = () => {
    console.log("you clicked uppercase button");
    setText(text.toUpperCase())

  }
  const handleLowerCase = () => {
    console.log("lower");
    setText(text.toLowerCase())

  }
  const clearTextArea = () => {
    setText('')
  }


  //   const handleCopy = () => {
  //     // if (checkEmptyText()) return
  //     navigator.clipboard.writeText(text);
  //     props.showAlert('success', 'Text copied to clipboard')
  // }

  // const handleCopy = () => {


  //   console.log("You clicked copy button")
  //   navigator.clipboard.writeText(text)
  //   alert("Text copied")

  // }
  // const handleCopy = () => {
  //   navigator.clipboard.writeText(text).then(() => {
  //    props.showAlert('success', 'Text copied');
  //   })
  // }
  // const handleCopy = () => {
  //   navigator.clipboard.writeText(text)
  // showAlert("text copied")
  // };
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setText('')
        props.showAlert("success", "text is copied")

      })
    


  }
  const handleDownload = () => {
    // if (checkEmptyText()) return
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'text.txt';
    link.click();
    props.showAlert('success', 'Text downloaded');
  }
  const handleChange = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }
  return (
    <div>
      <div className="mb-3 container">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} name={text} onChange={handleChange} placeholder={text} id="exampleFormControlTextarea1" rows="3"></textarea>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleUpperCase}>Uppercase</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleLowerCase}>Lowercase</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={clearTextArea}>clear</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleCopy}>copy</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleDownload}>Download</button>
      </div>
      <div className='container'>
        <h4>Analyze your text</h4>
        {/* <p>{text.split(' ').length-1} words and {text.length} character</p> */}
        <p><strong>Words Count: </strong>{text == 0 ? 0 : text.split(/\S+/g).length - 1}</p>
        <p>{0.008 * text.split(' ').length} average time to read</p>
        <h4>preview text</h4>

        <p>{text.length > 0 ? text : "no preview to display"}</p>
      </div>

    </div>
  )
}

export default Home
// assignment copy, alert
