const express = require('express')
const Product = require('../model/Product')
const { body, validationResult } = require('express-validator')
const fetchUser = require('../middleware/Fetchuser')

const router = express.Router()
router.get('/getallproduct', fetchUser, async (req, res) => {
    try {
        const products = await Product.find({ user: req.user.id })
        res.json(products)
    } catch (error) {
        res.status(500).send("internal server error")
    }
})

router.post('/addproduct', fetchUser,
    // body('title').isLength({ min: 3 }),
    // body('description').isLength({ min: 5 }),
    async (req, res) => {
        try {
         const {title, description, price, instock}= req.body;
         console.log("this is my product", req.body);
        //  const error = validationResult(req);
        //  if (!error.isEmpty()) {
        //      return res.status(400).json({ error: error.array() })
        //  }

         const product= new Product({
            title, description, price, instock, user: req.user.id
         })
         const saveProduct= await product.save()
         res.json(saveProduct)
         
        } catch (error) {
            res.status(500).send("internal server error")
        }
    })

module.exports = router