var express = require("express")
var userController = require('../controller/userController')
var authController = require('../controller/authController')
const middleware = require('../controller/middleware')
var router = express.Router();

router.get('/list', userController.getAllUser)
router.post('/login', authController.login)
router.post('/register', authController.register)

router.delete('delete/:id', userController.delete_user)
router.get('/getInformation', authController.getInformation)
module.exports = router