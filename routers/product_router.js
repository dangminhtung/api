var express = require("express")
var product_Controller = require('../controller/productController')
// var multer = require('multer')
var router = express.Router();
var path = require('path');
const { arrangeAlphaAZ } = require("../models/product_model");


// const storage = multer.diskStorage({
//     destination: './uploads',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })
// const upload = multer({
//     storage: storage
// })

// arrange Alpha A-Z

router.get('/size/:id', product_Controller.getSize)

router.get('/list', product_Controller.get_all_product);
router.get('/sportShoe', product_Controller.get_shoe_sport);
router.get('/gymShoe', product_Controller.get_shoe_gym)


router.get('/product_detail/:id', product_Controller.get_detail_product)
router.post('/update', product_Controller.updateProduct)

router.get('/recommend/:productID', product_Controller.getRecommend)
router.post('/add', product_Controller.addProduct)
router.delete('/delete', product_Controller.deleteProduct)


module.exports = router;
