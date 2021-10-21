const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const productRouter = require('./routers/product')
const orderRouter = require('./routers/order')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(userRouter)
app.use(productRouter)
app.use(orderRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})