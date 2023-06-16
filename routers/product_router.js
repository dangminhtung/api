var express = require("express")
var product_Controller = require('../controller/productController');
const middleware = require("../controller/middleware");
// var multer = require('multer')
var router = express.Router();

router.get('/size/:id', product_Controller.getSize)

router.get('/list', product_Controller.get_all_product);
router.get('/sportShoe', product_Controller.get_shoe_sport);
router.get('/gymShoe', product_Controller.get_shoe_gym)


router.get('/product_detail/:id', product_Controller.get_detail_product)
router.post('/update', product_Controller.updateProduct)

router.get('/recommend', product_Controller.getRecommend)
router.post('/add', middleware.verifyTokenAdmin, product_Controller.addProduct)
router.delete('/delete', middleware.verifyTokenAdmin, product_Controller.deleteProduct)

router.get('/test', product_Controller.test)
module.exports = router
