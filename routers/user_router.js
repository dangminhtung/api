var express = require("express")
var userController = require('../controller/userController')
var authController = require('../controller/authController')
const middleware = require('../controller/middleware')
var router = express.Router();

router.get('/list', middleware.verifyTokenAdmin, userController.getAllUser)
router.post('/login', authController.login)
router.post('/register', authController.register)
router.get('/getInformation', authController.getInformation)

router.delete('/delete/:id', middleware.verifyTokenAdmin, userController.delete_user)
router.post('/changePassword', middleware.verifyToken, authController.changePassword)
module.exports = router