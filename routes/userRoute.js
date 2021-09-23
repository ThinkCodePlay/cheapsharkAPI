const express = require('express')
const User = require('../models/user')
// const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/user', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.cookie("TOKEN", token)
        res.status(201).send()
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/user/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.cookie("TOKEN", token)
        res.send()
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/user/logout', async (req, res) => {
    try {
        console.log("loging out");
        res.clearCookie("TOKEN")
        res.send()
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router