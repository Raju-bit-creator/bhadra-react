const express = require('express')
var cors = require('cors')
const dbConnect = require('./db')
const app = express()
const port=5000
dbConnect()
app.use(express.json())


app.use(cors())
app.use('/api/auth', require('./routes/Auth'))
app.use('/api/product', require('./routes/Product'))

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})