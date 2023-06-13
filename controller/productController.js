var Product = require('../models/product_model');
const db = require('../common/connect')

const product_Controller = {

    get_all_product: (req, res) => {
        var from = req.query.from;
        var to = req.query.to;
        var size = req.query.size;
        var sort_by = req.query.sort_by;
        var name, arr;
        if (sort_by == 'title-ascending') {
            name = 'name'
            arr = 'ASC'
        } else if (sort_by == 'title-descending') {
            name = 'name'
            arr = 'DESC'
        } else if (sort_by == 'price-ascending') {
            name = 'price'
            arr = 'ASC'
        } else if (sort_by == 'price-descending') {
            name = 'price'
            arr = 'DESC'
        } else if (sort_by == 'created-ascending') {
            name = 'createDate'
            arr = 'ASC'
        } else if (sort_by == 'created-descending') {
            name = 'createDate'
            arr = 'DESC'
        }
        if (from == null) from = 0;
        if (to == null) to = 10000;
        if (size == null && sort_by == null) {
            db.query('select * from product where price >=? and price<=?', [from, to], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        } else if (sort_by == null) {
            db.query('SELECT pro.`productID`,pro.name,pro.`categoryID`,pro.price,pro.metarial,pro.vendor,pro.`createDate`,pro.image from product as pro inner join product_size as pros on pro.`productID`=pros.`productID` where  pros.size=? and price>=? and price <=? LIMIT 0,100', [size, from, to], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        } else if (size == null) {
            db.query(`select * from product where price>=? and price <=? order by ${name} ${arr}`, [from, to], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        } else {
            db.query(`SELECT pro.productID,pro.name,pro.categoryID,pro.price,pro.metarial,pro.vendor,pro.createDate,pro.image from product as pro inner join product_size as pros on pro.productID=pros.productID where pro.price>=? and pro.price<=? and pros.size=? order by pro.${name} ${arr}`, [from, to, size], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        }





    },
    get_shoe_sport: (req, res) => {
        var cate = 'cate1'
        var from = req.query.from;
        var to = req.query.to;
        var size = req.query.size;
        var sort_by = req.query.sort_by;
        var name, arr;
        if (sort_by == 'title-ascending') {
            name = 'name'
            arr = 'ASC'
        } else if (sort_by == 'title-descending') {
            name = 'name'
            arr = 'DESC'
        } else if (sort_by == 'price-ascending') {
            name = 'price'
            arr = 'ASC'
        } else if (sort_by == 'price-descending') {
            name = 'price'
            arr = 'DESC'
        } else if (sort_by == 'created-ascending') {
            name = 'createDate'
            arr = 'ASC'
        } else if (sort_by == 'created-descending') {
            name = 'createDate'
            arr = 'DESC'
        }
        if (from == null) from = 0;
        if (to == null) to = 10000;
        if (size == null && sort_by == null) {
            db.query('select * from product where price >=? and price<=? and categoryID =? ', [from, to, cate], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        } else if (sort_by == null) {
            db.query('SELECT pro.`productID`,pro.name,pro.`categoryID`,pro.price,pro.metarial,pro.vendor,pro.`createDate`,pro.image from product as pro inner join product_size as pros on pro.`productID`=pros.`productID` where  pros.size=? and price>=? and price <=? and categoryID=? LIMIT 0,100', [size, from, to, cate], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        } else if (size == null) {
            db.query(`select * from product where price>=? and price <=? and categoryID=? order by ${name} ${arr}`, [from, to, cate], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        } else {
            db.query(`SELECT pro.productID,pro.name,pro.categoryID,pro.price,pro.metarial,pro.vendor,pro.createDate,pro.image from product as pro inner join product_size as pros on pro.productID=pros.productID where pro.price>=? and pro.price<=? and pros.size=? and categoryID=? order by pro.${name} ${arr}`, [from, to, size, cate], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        }
    },
    get_shoe_gym: (req, res) => {
        var cate = 'cate2'
        var from = req.query.from;
        var to = req.query.to;
        var size = req.query.size;
        var sort_by = req.query.sort_by;
        var name, arr;
        if (sort_by == 'title-ascending') {
            name = 'name'
            arr = 'ASC'
        } else if (sort_by == 'title-descending') {
            name = 'name'
            arr = 'DESC'
        } else if (sort_by == 'price-ascending') {
            name = 'price'
            arr = 'ASC'
        } else if (sort_by == 'price-descending') {
            name = 'price'
            arr = 'DESC'
        } else if (sort_by == 'created-ascending') {
            name = 'createDate'
            arr = 'ASC'
        } else if (sort_by == 'created-descending') {
            name = 'createDate'
            arr = 'DESC'
        }
        if (from == null) from = 0;
        if (to == null) to = 10000;
        if (size == null && sort_by == null) {
            db.query('select * from product where price >=? and price<=? and categoryID =? ', [from, to, cate], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        } else if (sort_by == null) {
            db.query('SELECT pro.`productID`,pro.name,pro.`categoryID`,pro.price,pro.metarial,pro.vendor,pro.`createDate`,pro.image from product as pro inner join product_size as pros on pro.`productID`=pros.`productID` where  pros.size=? and price>=? and price <=? and categoryID=? LIMIT 0,100', [size, from, to, cate], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        } else if (size == null) {
            db.query(`select * from product where price>=? and price <=? and categoryID=? order by ${name} ${arr}`, [from, to, cate], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        } else {
            db.query(`SELECT pro.productID,pro.name,pro.categoryID,pro.price,pro.metarial,pro.vendor,pro.createDate,pro.image from product as pro inner join product_size as pros on pro.productID=pros.productID where pro.price>=? and pro.price<=? and pros.size=? and categoryID=? order by pro.${name} ${arr}`, [from, to, size, cate], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        }
    },

    get_detail_product: (req, res) => {
        var productID = req.params.id;
        db.query('select * from product where productID=?', [productID], (err, data) => {
            if (err) res.json(err);
            else res.json(data)
        })
    },

    addProduct: (req, res) => {
        const { productID, name, categoryID, price, metarial, vendor, createDate, image } = req.body
        // const image = req.file.filename
        db.query('insert into product set ? ', { productID, name, categoryID, price, metarial, vendor, createDate, image }, (err) => {
            if (err) {
                res.status(403).json(err);
            } else {
                res.status(200).json('add sucess')
            }
        })
    },
    updateProduct: (req, res) => {
        const id = req.body.productID;
        let product = {
            productID: req.body.productID,
            name: req.body.name,
            categoryID: req.body.categoryID,
            price: req.body.price,
            metarial: req.body.metarial,
            vendor: req.body.vendor,
            image: req.body.image
        }
        Product.update(id, product, (respond) => {
            res.send(respond)
        })
    },
    deleteProduct: (req, res) => {
        const productID = req.body.productID;
        db.query('delete from product where productID=?', [productID], (err) => {
            if (err) {
                res.status(403).json(err);
            } else {
                res.status(200).json('delete success')
            }
        })
    },
    // getRecommend
    getRecommend: (req, res) => {
        const cate = req.query.cate;
        const productID = req.query.productID;
        Product.getRecommend(productID, cate, (respond) => {
            res.json(respond)
        })
    },

    getSize: (req, res) => {
        var productID = req.params.id;
        db.query('select * from product_size where productID=?', [productID], (err, data) => {
            if (err) res.json(err);
            else res.json(data)
        })
    },
    test: (req, res) => {
        var first = req.body.first
        var size = req.body.size

        for (var i = 0; i < size.length; i++) {
            console.log(size[i][1])
        }

    }




}
module.exports = product_Controller;