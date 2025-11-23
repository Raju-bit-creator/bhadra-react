import React, { useState } from 'react'

const Hello = () => {
    const [count, setCount]= useState(0)   
    const [name, setName]= useState("ramesh")   

    const handleClick = ()=>{
        setCount(prev => prev + 1)

    }

xyz.log("hello component rendered");

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Clicked {count} {count === 1 ? 'time' : 'times'}</p>

      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Your name is: {name}</p>
    </div>
  )
}

export default Hello