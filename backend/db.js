const mongoose= require('mongoose')
const Mongo_URI= "mongodb://localhost:27017/bhadra-group"

const dbConnect=()=>{
    mongoose.connect(Mongo_URI)
    .then(()=>{
        console.log("mongodb sucessfully connected");
        
    })
}
module.exports= dbConnect