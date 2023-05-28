const db = require('../common/connect')
const Order = require('../models/order_model');
const Cart = require('../models/cart_model')


const orderController = {
    get_list_cart: (req, res) => {
        const userID = req.body.userID;
        Cart.GetCartUser(userID, (data) => {
            let test = data.map((val, i) => {
                console.log({ value: val.cartID })
            })
        })

    },
    add_order: (req, res) => {
        const { userID, createDate, shipName, shipMobile, shipAddress, shipEmail, totalAmount } = req.body;
        let orderID = (Math.random() + 1).toString(36).substring(7);
        Order.add(orderID, userID, createDate, shipName, shipMobile, shipAddress, shipEmail, totalAmount, (respond) => {
            Cart.GetCartUser(userID, (data) => {
                data.map((val, i) => {
                    let orderDetailID = (Math.random() + 1).toString(36).substring(4);
                    productID = val.productID;
                    productSizeID = val.productSizeID;
                    number = val.number;
                    price = val.price
                    Order.SaveCartToOrder(orderDetailID, orderID, productID, productSizeID, number, price, (result) => {})
                })
                res.send('add sucess')
            })
        })

    },
}
module.exports = orderController;