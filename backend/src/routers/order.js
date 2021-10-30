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

router.delete('/order', auth, async (req, res) => {
    try {
        //const order = await Order.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        const order = await Order.findOneAndDelete({ _id: req.body._id, owner: req.user._id })

        if (!order) {
            res.status(404).send()
        }
       // res.send(req.user)
        res.send(order)
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/orderUpdate', auth, async (req, res) => {
    const updates = Object.keys(req.body)

    try {
        const order = await Order.findOneAndUpdate({ _id: req.body.id, owner: req.user._id})

        if (!order) {
            return res.status(404).send()
        }

        

        updates.forEach((update) => order[update] = req.body[update])
        await order.save()
        res.send(order)
    } catch (e) {
        res.status(999).send(e)
    }
})

router.delete('/orderAll', auth, async (req, res) => {
    try {
        const order = await Order.deleteMany({ owner: req.user._id })

        if (!order) {
            res.status(404).send()
        }

        res.send(order)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/orderUp', auth, async (req, res) => {
    const amount = req.body.amount
    const allPrice = req.body.allPrice
    

    try {
        const order = await Order.findOne({ _id: req.body._id, owner: req.user._id})
        order.amount = amount
        order.allPrice = allPrice
        await order.save()
        res.send(order)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router