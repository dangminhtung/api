var express = require("express");
var dotenv = require("dotenv");
var app = express();

var bodyParser = require("body-parser")

dotenv.config();

const PORT = process.env.PORT || 5000;
var userRouter = require('./routers/user_router')
var productRouter = require('./routers/product_router')
var cartRouter = require('./routers/cart_router')
var orderRouter = require('./routers/order_router');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use("/uploads", express.static("./uploads"))
app.use('/api', userRouter)
app.use('/api/product', productRouter)
app.use('/api', cartRouter)
app.use('/api', orderRouter)


app.listen(PORT, () => console.log("Server connected http://localhost:3000"))