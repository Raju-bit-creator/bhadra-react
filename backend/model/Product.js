const mongoose = require('mongoose')
const {schema}= mongoose

const productSchema =mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type:String,
        required: true
    },
    descpiption: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    instock: {
        type:Number,
        required: true
    },
    images:{
        type: [String],
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Product= mongoose.model('product',productSchema) 
module.exports = Product