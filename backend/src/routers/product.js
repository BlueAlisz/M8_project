const express = require('express')
const Product = require('../models/product')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/products', async (req, res) => {
    const product = new Product({
        ...req.body
    })
    
    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/products', async (req, res) => {
    
    
    try {
        const product = await Product.find({})

        if(!product) {
            return res.status(404).send()
        }

        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/products/:catalog', async (req, res) => {
    const catalog = req.params.catalog
    
    try {
        const product = await Product.find({ catalog })

        if(!product) {
            return res.status(404).send()
        }

        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router