const express = require('express')
const Product = require('../model/Product')
const { body, validationResult } = require('express-validator')
const fetchUser = require('../middleware/Fetchuser')

const router = express.Router()
router.get('/getprofileproduct', fetchUser, async (req, res) => {
    try {
        const products = await Product.find({ user: req.user.id })
        res.json(products)
    } catch (error) {
        res.status(500).send("internal server error")
    }
})
router.get('/getallproduct', fetchUser, async (req, res) => {
    try {
        const searchQuery = req.query.searchQuery ? {
            title :{
                $regex: req.query.searchQuery,
                $options: 'i'
            }
        } :{}
        const products = await Product.find({ ...searchQuery})
        res.json(products)
    } catch (error) {
        res.status(500).send("internal server error")
    }
})

router.post('/addproduct', fetchUser,
    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 5 }),
    async (req, res) => {
        try {
         const {title, description, price, instock}= req.body;
         console.log("this is my product", req.body);
         const error = validationResult(req);
         if (!error.isEmpty()) {
             return res.status(400).json({ error: error.array() })
         }

         let images= req.files.map(el=>{
            return el.filename
         })

         const product= new Product({
            title, description, price, instock, images, user: req.user.id
         })
         const saveProduct= await product.save()
         res.json(saveProduct)
         
        } catch (error) {
            res.status(500).send("internal server error")
        }
    })


    router.put('/updateproduct/:id', fetchUser, async(req, res)=>{
        const {title, description,price, instock}= req.body
        try {
            const newProduct={}
            if(title){newProduct.title=title}
            if(description){newProduct.description=description}
            if(price){newProduct.price=price}
            if(instock){newProduct.instock=instock}

            let product = await Product.findById(req.params.id)
            if(!product){
                return res.status(404).send('product not found')
            }
            if(!product.user || product.user.toString()!==req.user.id){
                return res.status(404).send('not allowed')
            }
            product= await Product.findByIdAndUpdate(req.params.id, {$set:newProduct}, {new:true})
            res.json(product)
        } catch (error) {
            res.status(500).send("internal server error")
        }
    })

    // deleting product
  router.delete('/deleteproduct/:id', fetchUser, async(req, res)=>{
    try {
        let product = await Product.findById(req.params.id)
        if(!product){
            return res.status(404).send('product not found') 
        }
        if (product.user.toString() !== req.user.id){
            return res.status(401).send('not allowed') 
        }
        product= await Product.findByIdAndDelete(req.params.id)
        res.json({"success":"product has been delete", product: product})
    } catch (error) {
        res.status(500).send("internal server error")
    }
  })

module.exports = router