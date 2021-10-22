const express = require('express')
const cors = require('cors');
require('./db/mongoose')
const userRouter = require('./routers/user')
const productRouter = require('./routers/product')
const orderRouter = require('./routers/order')
const receiptRouter = require('./routers/receipt')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(userRouter)
app.use(productRouter)
app.use(orderRouter)
app.use(receiptRouter)

app.use(cors())

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})