var express = require("express")
var orderController = require('../controller/orderController')
var router = express.Router();

router.get('/list', orderController.get_list_cart);
router.post('/checkout', orderController.checkOutCart)
router.post('/BuyItNow', orderController.BuyItNow)

router.get('/listOrder', orderController.getListOrder)
router.get('/order_detail/:orderID', orderController.getOrderDetail)

router.post('/checkOrder', orderController.checkOrder)
module.exports = router;