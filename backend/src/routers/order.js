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
        console.log(req.user)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})

router.patch('/order/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['amount']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const order = await Order.findOne({ _id: req.params.id, owner: req.user._id})

        if (!order) {
            return res.status(404).send()
        }

        updates.forEach((update) => order[update] = req.body[update])
        await order.save()
        res.send(order)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router