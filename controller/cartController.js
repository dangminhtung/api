var Product = require('../models/product_model');
var Cart = require('../models/cart_model')
const db = require('../common/connect');
const { response } = require('express');

const cartController = {
    getCart: (req, res) => {
        const userID = req.body.userID;
        Cart.getDetailCart(userID, (err, data) => {
            res.status(200).json(data)
        })
    },
    add: (req, res) => {
        const { userID, productID, productSizeID, price } = req.body;
        Cart.checkCart(userID, productID, productSizeID, (err, data) => {
            if (!data) {
                const cartID = Math.floor(Math.random() * 100000);
                const number = 1;
                db.query('insert into cart set ?', { cartID, userID, productID, productSizeID, price, number }, (err) => {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send('add success')
                    }
                })
            } else {
                var numberPro = data.number;
                var pricePro = data.price;
                pricePro += pricePro / numberPro;
                numberPro += 1;
                db.query('update cart set number=?,price=? where cartID=?', [numberPro, pricePro, data.cartID], (err, data) => {
                    if (err) {
                        res.send('loi')
                    } else {
                        res.send('add success')
                    }
                })
            }
        })
    },
    deleteToCart: (req, res) => {
        const cartID = req.body.cartID;
        Cart.get_id_Cart(cartID, (err, data) => {
            var price = data.price;
            var number = data.number;

            if (data.number > 1) {
                var priceOne = price / number;
                price -= priceOne
                number = number - 1;
                // res.json(price)
                Cart.updateCart(data.cartID, price, number, (respond) => {
                    res.send({ result: respond })
                })
            } else {
                Cart.deleteCart(cartID, (response) => {
                    res.send({ result: response })
                })
            }
        })
    }
}
module.exports = cartController;