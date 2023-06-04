var express = require("express")
var orderController = require('../controller/orderController')
var router = express.Router();

router.get('/list', orderController.get_list_cart);
router.post('/checkout', orderController.checkOutCart)
router.post('/buyNow', orderController.BuyItNow)
module.exports = router;