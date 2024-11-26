const express = require('express')
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const { body, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const fetchUser = require('../middleware/Fetchuser')
const router = express.Router()

const JWT_SECRET = "heisagoodboy"

// creating a user
router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }

    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "user already exist" })
        }
        const salt = await bcrypt.genSalt(10)
        secPass = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        console.log(authToken);

        res.json({ user, authToken })
    } catch (error) {
        res.status(500).send("internal server error")
    }

})

//login
router.post("/login", [
    body("email").isEmail(),
    body("password").isLength({ min: 5 })
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }

    const {email, password}= req.body
    try {
        let user= await User.findOne({email})
        if(!user){
            return res.status(400).json({ error: "pls register your email first"})
        }
        const passwordCompare= await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return res.status(400).json({ error: "your password is not matching"})
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        console.log(authToken);

        res.json({ user, authToken })
    } catch (error) {
        res.status(500).send("internal server error")
    }



})

//get user
router.get('/getuser', fetchUser, async (req, res)=>{
    try {
        const userId = req.user.id 
        const user=  await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        res.status(500).send("internal server error")
    }
})

module.exports = router