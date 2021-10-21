const mongoose = require('mongoose')

const receiptSchema = new mongoose.Schema({
    referenceNumber: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    items: [
        {   
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
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
            amount: {
                type: Number,
                default: 1
            },
            catalog: {
                type: String,
                required: true
            }
        }
    ]
    
})

const Receipt = mongoose.model('Receipt', receiptSchema)

module.exports = Receipt