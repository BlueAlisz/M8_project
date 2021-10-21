const express = require('express')
const Order = require('../models/order')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/order', auth, async (req, res) => {
    const order = new Order({
        ...req.body,
        owner: req.user._id
    })

    try {
        await order.save()
        res.status(201).send(order)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/order/me', auth, async (req, res) => {
    
    try {
        await req.user.populate({
            path:'orders'
        })

        res.send(req.user.orders)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})

module.exports = router