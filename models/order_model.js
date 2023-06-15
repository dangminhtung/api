const db = require('../common/connect');
class Order {
    constructor(order) {
        this.orderID = order.orderID;
        this.userID = order.userID;
        this.createDate = order.createDate;
        this.shipName = order.shipName;
        this.shipMobile = order.shipMobile;
        this.shipAddress = order.shipAddress;
        this.shipEmail = order.shipEmail;
        this.totalAmount = order.totalAmount;
        this.status = order.status;
    }
    static get_list(result) {
        db.query('select * from cart', (err, data) => {
            if (err)
                throw err;
            else {
                result(data);
            }
        });
    }
    static add(orderID, userID, createDate, shipName, shipMobile, shipAddress, shipEmail, totalAmount, result) {
        db.query('insert into `order` set ?', { orderID, userID, createDate, shipName, shipMobile, shipAddress, shipEmail, totalAmount }, (err, res) => {
            if (err) result(err);
            else {
                result(res);
            }

        })
    }
    static SaveCartToOrder_deltail(orderDetailID, orderID, productID, size, number, price, result) {
        db.query("insert into order_detail set ?", { orderDetailID, orderID, productID, size, number, price }, (err) => {
            if (err) result(err);
            else {
                db.query('select quanlity from product_size where productID =? and size =?', [productID, size], (err, data) => {
                    var quanlity = data[0].quanlity - number;
                    db.query(`UPDATE product_size SET quanlity=? WHERE productID=? and size=? `, [quanlity, productID, size], (respond) => {
                        result(respond)
                    })
                })
            }
        })
    }

}

module.exports = Order;