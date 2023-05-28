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
    static SaveCartToOrder(orderDetailID, orderID, productID, productSizeID, number, price, result) {
        db.query("insert into order_detail set ?", { orderDetailID, orderID, productID, productSizeID, number, price }, (err, res) => {
            if (err) result(err);
            else result(res);
        })

    }

}

module.exports = Order;