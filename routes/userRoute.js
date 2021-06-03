const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
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
        res.status(400).send()
    }
})

// router.post('/user/logout', auth, async (req, res) => {
//     try {
//         req.user.tokens = null;
//         await req.user.save()

//         res.send()
//     } catch (e) {
//         res.status(500).send()
//     }
// })



module.exports = router