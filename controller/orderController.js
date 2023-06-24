const db = require('../common/connect')
const Order = require('../models/order_model');
const Cart = require('../models/cart_model')
const { google } = require('googleapis')
const nodemailer = require('nodemailer')
require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


const orderController = {
    get_list_cart: (req, res) => {
        const userID = req.body.userID;
        Cart.GetCartUser(userID, (data) => {
            let test = data.map((val, i) => {
                console.log({ value: val.cartID })
            })
        })
    },
    checkOutCart: (req, res) => {
        const { userID, createDate, shipName, shipMobile, shipAddress, shipEmail, totalAmount } = req.body;
        let orderID = (Math.random() + 1).toString(36).substring(7);
        Order.add(orderID, userID, createDate, shipName, shipMobile, shipAddress, shipEmail, totalAmount, (respond) => {
            Cart.GetCartUser(userID, (data) => {
                data.map((val, i) => {
                    let orderDetailID = (Math.random() + 1).toString(36).substring(4);
                    productID = val.productID;
                    size = val.size;
                    number = val.number;
                    price = val.price
                    Order.SaveCartToOrder_deltail(orderDetailID, orderID, productID, size, number, price, (result) => { })
                })
                res.send('thanh toan thanh cong')
            })
        })
    },
    BuyItNow: (req, res) => {
        const { userID, createDate, shipName, shipMobile, shipAddress, shipEmail, totalAmount } = req.body;
        const { productID, size, number, price } = req.body;
        let orderID = (Math.random() + 1).toString(36).substring(7);
        Order.add(orderID, userID, createDate, shipName, shipMobile, shipAddress, shipEmail, totalAmount, (respond) => {
            let orderDetailID = (Math.random() + 1).toString(36).substring(4);
            Order.SaveCartToOrder_deltail(orderDetailID, orderID, productID, size, number, price, (data) => {
                res.send('thanh toan thanh cong')
            })
        })
    },
    getListOrder: (req, res) => {
        db.query('select * from `order`', (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },
    getOrderDetail: (req, res) => {
        var orderID = req.params.orderID
        db.query('select * from order_detail where orderID=?', [orderID], (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },
    checkOrder: async (req, res) => {
        var gmail = req.body.gmail;
        var orderID = req.body.orderID;
        try {
            const accessToken = await oAuth2Client.getAccessToken();
            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'minhtungd2402@gmail.com',
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                }
            })
            let info = await transport.sendMail({
                from: '<minhtungd2402@gmail.com>',
                to: gmail,
                subject: "Thư Xác Nhận",
                text: "đơn hàng của bạn đã được duyệt thành công ",

            });
            db.query('update `order` set status="delivery" where orderID=?', [orderID], (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })

        } catch (error) {
            res.json(error)
        }
    },
    getOrderUser: (req, res) => {
        var userID = req.params.userID
        db.query('select * from `order` where userID=?', userID, (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    }
}
module.exports = orderController;