const express = require('express')
const Product = require('../models/product')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/products', auth, async (req, res) => {
    const product = new Product({
        ...req.body,
        owner: req.user._id
    })
    
    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/products', auth, async (req, res) => {
    try {
        await req.user.populate({
            path: 'products'
        })
        res.send(req.user.products)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router