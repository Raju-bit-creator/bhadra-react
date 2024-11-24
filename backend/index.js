const express = require('express')

const dbConnect = require('./db')
const app = express()
const port=5000
dbConnect()
app.use(express.json())



app.use('/api/auth', require('./routes/Auth'))

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})