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
router.get('/arrangeAlphaAZ', product_Controller.arrangeAlphaAZ)
router.get('/arrangeAlphaAZ_cate/:cate', product_Controller.arrangeAlphaAZ_cate)
// arrange Alpha Z-A
router.get('/arrangeAlphaZA', product_Controller.arrangeAlphaZA)
router.get('/arrangeAlphaZA_cate/:cate', product_Controller.arrangeAlphaZA_cate)
// arrange Price low to high
router.get('/arrangePriceAZ', product_Controller.arrangePriceAZ)
router.get('/arrangePriceAZ_cate/:cate', product_Controller.arrangePriceAZ_cate)
// arrange Price high to low
router.get('/arrangePriceZA', product_Controller.arrangePriceZA)
router.get('/arrangePriceZA_cate/:cate', product_Controller.arrangePriceZA_cate)
// arrange createDate old to new 
router.get('/arrangeDateAZ', product_Controller.arrangeDateAZ)
router.get('/arrangeDateAZ_cate/:cate', product_Controller.arrangeDateAZ_cate)
// arrange createDate new to old 
router.get('/arrangeDateZA', product_Controller.arrangeDateZA)
router.get('/arrangeDateZA_cate/:cate', product_Controller.arrangeDateZA_cate)



router.get('/filterPrice', product_Controller.filterPrice)
router.get('/filterFollowCate/:cate', product_Controller.filterPriceFollowCate)

router.get('/list', product_Controller.get_all_product);
router.get('/sportshoe', product_Controller.get_shoe_sport)
router.get('/gymshoe', product_Controller.get_shoe_gym)
router.get('/:id', product_Controller.get_detail_product)
router.post('/update', product_Controller.updateProduct)

router.get('/recommend/:productID', product_Controller.getRecommend)
router.post('/add', product_Controller.addProduct)
router.delete('/delete', product_Controller.deleteProduct)


module.exports = router;
