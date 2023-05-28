const db = require('../common/connect')
const Cart = function (cart) {
    this.cartID = cart.cartID
    this.userID = cart.userID
    this.productID = cart.productID
    this.number = cart.number
}

Cart.getDetailCart = (id, result) => {

    db.query('select * from cart where userID=?', [id], (err, res) => {
        if (err) {
            result(err, null)
            return;
        }
        else {
            result(null, res)
        }
    })
}
Cart.checkCart = (userID, productID, productSizeID, result) => {
    db.query('select * from cart where userID=? and productID=? and productSizeID=?', [userID, productID, productSizeID], (err, res) => {
        if (err) {
            result(err, null)
            return;
        }
        else {
            result(null, res[0])
        }
    })
}
Cart.get_id_Cart = (cartID, result) => {
    db.query('select * from cart where cartID=?', [cartID], (err, res) => {
        if (err) {
            result(err, null)
            return;
        }
        else {
            result(null, res[0])
        }
    })
}
Cart.updateCart = (cartID, price, number, result) => {
    db.query('update cart set price=?,number=? where cartID=?', [price, number, cartID], (err, res) => {
        if (err) {
            result(null)
        }
        else {
            result(res)
        }
    })
}
Cart.deleteCart = (cartID, result) => {
    db.query('delete from cart where cartID=?', [cartID], (err, res) => {
        if (err) {
            result(null)
        }
        else {
            result(res)
        }
    })
}
Cart.GetCartUser = (userID, result) => {
    db.query('select * from cart where userID=?', [userID], (err, data) => {
        if (err) throw err;
        result(data)
    })
}

module.exports = Cart;