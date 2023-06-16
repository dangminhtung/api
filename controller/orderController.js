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
        db.query('select * from order', (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    }


}
module.exports = orderController;