var express = require("express")
var orderController = require('../controller/orderController')
var router = express.Router();

router.get('/order', orderController.get_list_cart);
router.post('/checkout', orderController.add_order)
module.exports = router;