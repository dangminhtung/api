var express = require("express")

var cart_Controller = require('../controller/cartController')
var router = express.Router();
router.get('/cart/list', cart_Controller.getCart)
router.get('/cart/add', cart_Controller.add);

router.post('/cart/deleteCart', cart_Controller.deleteToCart)
module.exports = router;