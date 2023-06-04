var express = require("express")

var cart_Controller = require('../controller/cartController')
var router = express.Router();
router.get('/list', cart_Controller.getCart)
router.get('/add', cart_Controller.add);

router.post('/deleteCart', cart_Controller.deleteToCart)
module.exports = router;