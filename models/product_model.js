const db = require('../common/connect')
class Product {
    constructor(pro) {
        this.productID = pro.productID;
        this.name = pro.name;
        this.categoryID = pro.categoryID;
        this.price = pro.price;
        this.metarial = pro.metarial;
        this.vendor = pro.vendor;
        this.createDate = pro.createDate;
    }
    static get_id(id, result) {
        db.query('select * from cart where productID=?', [id], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            else {
                result(null, res[0]);
            }

        });
    }
    static update(productID, product, result) {
        db.query('update product set ? where productID=? ', [product, productID], (err, res) => {
            if (err) result(err);
            else result(res);
        })
    }
    static getRecommend(productID, categoryID, result) {
        db.query('select * from product where categoryID=? and productID != ?', [categoryID, productID], (err, res) => {
            if (err) result(err)
            else result(res)
        })
    }
    // sắp xếp nếu ko có bộ lọc 
    static arrange(arr, name, result) {
        db.query(`select * from product order by ${name} ${arr}`, (err, res) => {
            if (err) result(err)
            else result(res)
        })
    }
    static arrange_cate(cate, arr, name, result) {
        db.query(`select * from product where categoryID=? order by ${name} ${arr} `, [cate], (err, res) => {
            if (err) result(err)
            else result(res)
        })
    }
    // Filter no arrange
    static filterPrice(from, to, result) {
        db.query('select * from product where price>=? and  price<=?', [from, to], (err, res) => {
            if (err) result(err)
            else {
                result(res)
            }
        })
    }
    static filterPriceAndSize(from, to, size, result) {
        db.query('SELECT pro.`productID`,pro.name,pro.`categoryID`,pro.price,pro.metarial,pro.vendor,pro.`createDate`,pro.image from product as pro inner join product_size as pros on pro.`productID`=pros.`productID` where pro.price>=? and pro.price<=? and pros.size=? LIMIT 0,100', [from, to, size], (err, res) => {
            if (err) result(err);
            else result(res)
        })
    }

    static filterPriceFollowCate(from, to, cate, result) {
        db.query('select * from product where price>=? and  price<=? and categoryID=?', [from, to, cate], (err, res) => {
            if (err) result(err)
            else {
                result(res)
            }
        })
    }
    static filterPriceAndSizeFollowCate(from, to, cate, size, result) {
        db.query('SELECT pro.`productID`,pro.name,pro.`categoryID`,pro.price,pro.metarial,pro.vendor,pro.`createDate`,pro.image from product as pro inner join product_size as pros on pro.`productID`=pros.`productID` where pro.price>=? and pro.price<=? and pros.size=? and categoryID=? LIMIT 0,100', [from, to, size, cate], (err, res) => {
            if (err) result(err);
            else result(res)
        })
    }
    // filter arrange 
    static filterPriceArrange(from, to, arr, name, result) {
        db.query(`select * from product where price>=? and price<=? order by ${name} ${arr}`, [from, to], (err, res) => {
            if (err) result(err)
            else result(res)
        })
    }
    static filterPriceAndSizeArrange(from, to, size, arr, name, result) {
        db.query(`SELECT pro.productID,pro.name,pro.categoryID,pro.price,pro.metarial,pro.vendor,pro.createDate,pro.image from product as pro inner join product_size as pros on pro.productID=pros.productID where pro.price>=? and pro.price<=? and pros.size=? order by pro.${name} ${arr}`, [from, to, size], (err, res) => {
            if (err) result(err);
            else result(res)
        })
    }
    static filterPriceArrange_cate(cate, from, to, arr, name, result) {
        db.query(`select * from product where price>=? and  price<=? and categoryID=? order by ${name} ${arr} `, [from, to, cate], (err, res) => {
            if (err) result(err)
            else result(res)
        })
    }
    static filterPriceAndSizeArrange_cate(from, to, cate, size, arr, name, result) {
        db.query(`SELECT pro.productID,pro.name,pro.categoryID,pro.price,pro.metarial,pro.vendor,pro.createDate,pro.image from product as pro inner join product_size as pros on pro.productID=pros.productID where pro.price>=? and pro.price<=? and pros.size=? and categoryID=? order by pro.${name} ${arr}`, [from, to, size, cate], (err, res) => {
            if (err) result(err);
            else result(res)
        })
    }



}



module.exports = Product;