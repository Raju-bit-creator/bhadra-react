const express = require('express')
const { chats } = require('./data/data')
const dbConnect = require('./db')
const app = express()
const port=5000
dbConnect()
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello bhdra-group1111')
})
app.get('/api/chats',(req, res)=>{
  res.send(chats)
})
app.get('/api/chats/:id',(req, res)=>{
  // console.log(req.params.id);
  const singleData= chats.find((c)=> c._id === req.params.id)
  res.send(singleData)
  
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})