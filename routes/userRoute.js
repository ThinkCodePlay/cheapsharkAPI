const express = require('express')
const User = require('../models/user')
const router = new express.Router()

// create new user
router.post('/user', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({token})
    } catch (e) {
        res.status(400).send(e)
    }
})

// login existing user
router.post('/user/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({token})
    } catch (e) {
        res.status(400).send(e)
    }
})

// logout user
router.post('/user/logout', async (req, res) => {
    try {
        console.log("loging out");
        res.send()
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router