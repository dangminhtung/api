var express = require("express")
var orderController = require('../controller/orderController')
var middleware = require('../controller/middleware')
var router = express.Router();

router.get('/list', orderController.get_list_cart);

router.post('/checkout', middleware.verifyToken, orderController.checkOutCart)
router.post('/BuyItNow', middleware.verifyToken, orderController.BuyItNow)

router.get('/listOrder', orderController.getListOrder)
router.get('/order_detail/:orderID', orderController.getOrderDetail)

router.post('/checkOrder', middleware.verifyTokenAdmin, orderController.checkOrder)

router.get('/getOrderUser/:userID', orderController.getOrderUser)
module.exports = router;