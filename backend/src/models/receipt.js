const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    catalog: {
        type: String,
        required: true
    }
})

const receiptSchema = new mongoose.Schema({
    total: {
        type: Number,
        
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    item: [itemSchema]
    
},{
    timestamp: true
})

const Receipt = mongoose.model('Receipt', receiptSchema)

module.exports = Receipt