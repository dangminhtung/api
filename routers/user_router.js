var express = require("express")
var userController = require('../controller/userController')
var authController = require('../controller/authController')
const middleware = require('../controller/middleware')
var router = express.Router();

router.get('/list', middleware.verifyToken, userController.getAllUser)
router.post('/login', authController.login)
router.post('/register', authController.register)


router.delete('/user/:id', middleware.verifyTokenAdmin, userController.delete_user)
module.exports = router