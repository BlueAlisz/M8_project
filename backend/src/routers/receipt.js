const express = require('express')
const Receipt = require('../models/receipt')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/receipt', auth, async (req, res) => {
    const receipt = new Receipt({
        ...req.body,
        owner: req.user._id

    })

    try {
        await receipt.save()
        res.status(201).send(receipt)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/receipt/me', auth, async (req, res) => {
    
    try {
        await req.user.populate({
            path:'receipt'
        })

        res.send(req.user.receipt)
        console.log(req.user)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})



module.exports = router