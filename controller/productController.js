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
        const productID = req.params.id;
        db.query("SELECT pro.`productID`,pros.productSizeID,name,`categoryID`,price,metarial,vendor,`createDate`,pros.size,pros.quanlity from product as pro INNER JOIN product_size as pros on pro.`productID`= pros.`productID` where pro.`productID`=? ", [productID], (err, data) => {
            if (err) {
                res.status(403).json(err);
            } else {
                res.status(200).json(data)
            }
        })
    },
    addProduct: (req, res) => {
        const { productID, name, categoryID, price, metarial, vendor, createDate } = req.body
        // const image = req.file.filename
        db.query('insert into product set ? ', { productID, name, categoryID, price, metarial, vendor, createDate }, (err) => {
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
        const categoryID = req.body.categoryID;
        const productID = req.params.productID;
        Product.getRecommend(productID, categoryID, (respond) => {
            res.json(respond)
        })
    },
    // filter
    filterPrice: (req, res) => {
        const { from, to } = req.body;
        const size = req.body.size;
        if (size == null) {
            Product.filterPrice(from, to, (respond) => {
                res.json(respond)
            })
        } else if (from == null && to == null) {
            Product.filterSize(size, (respond) => {
                res.json(respond)
            })
        }
        else {
            Product.filterPriceAndSize(from, to, size, (respond) => {
                res.json(respond)
            })
        }
    },
    filterPriceFollowCate: (req, res) => {
        let cate = req.params.cate;
        const { from, to } = req.body;
        const size = req.body.size;
        if (size == null) {
            Product.filterPriceFollowCate(from, to, cate, (respond) => {
                res.json(respond)
            })

        }
        else if (from == null && to == null) {
            Product.filterSizeFollowCate(size, cate, (data) => {
                res.json(data)
            })
        }
        else {
            Product.filterPriceAndSizeFollowCate(from, to, cate, size, (respond) => {
                res.json(respond)
            })
        }

    },

    // Arrange Alpha A-Z
    arrangeAlphaAZ: (req, res) => {
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'ASC'
        const name = 'name'
        if (from == null && to == null && size == null) {
            Product.arrange(arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange(from, to, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (from == null && to == null) {
            Product.filterSizeArrange(size, arr, name, (data) => {
                res.json(data);
            })
        }
        else {
            Product.filterPriceAndSizeArrange(from, to, size, arr, name, (respond) => {
                res.json(respond)
            })
        }
    },
    arrangeAlphaAZ_cate: (req, res) => {
        const cate = req.params.cate;
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'ASC';
        const name = 'name'
        if (from == null && to == null && size == null) {
            Product.arrange_cate(cate, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange_cate(cate, from, to, arr, name, (respond) => {
                res.json(respond)
            })
        }
        else if (from == null && to == null) {
            Product.filterSizeArrange_cate(cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
        else {
            Product.filterPriceAndSizeArrange_cate(from, to, cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
    },
    // Arrange Alpha Z-A
    arrangeAlphaZA: (req, res) => {
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'DESC';
        const name = 'name'
        if (from == null && to == null && size == null) {
            Product.arrange(arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange(from, to, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (from == null && to == null) {
            Product.filterSizeArrange(size, arr, name, (data) => {
                res.json(data);
            })
        }
        else {
            Product.filterPriceAndSizeArrange(from, to, size, arr, name, (respond) => {
                res.json(respond)
            })
        }
    },
    arrangeAlphaZA_cate: (req, res) => {
        const cate = req.params.cate;
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'DESC';
        const name = 'name'
        if (from == null && to == null && size == null) {
            Product.arrange_cate(cate, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange_cate(cate, from, to, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (from == null && to == null) {
            Product.filterSizeArrange_cate(cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
        else {
            Product.filterPriceAndSizeArrange_cate(from, to, cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
    },
    // arrange price low to high
    arrangePriceAZ: (req, res) => {
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'ASC'
        const name = 'price'
        if (from == null && to == null && size == null) {
            Product.arrange(arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange(from, to, arr, name, (respond) => {
                res.json(respond)
            })
        }
        else if (from == null && to == null) {
            Product.filterSizeArrange(size, arr, name, (data) => {
                res.json(data);
            })
        } else {
            Product.filterPriceAndSizeArrange(from, to, size, arr, name, (respond) => {
                res.json(respond)
            })
        }
    },
    arrangePriceAZ_cate: (req, res) => {
        const cate = req.params.cate;
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'ASC';
        const name = 'price'
        if (from == null && to == null && size == null) {
            Product.arrange_cate(cate, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange_cate(cate, from, to, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (from == null && to == null) {
            Product.filterSizeArrange_cate(cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
        else {
            Product.filterPriceAndSizeArrange_cate(from, to, cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
    },
    // arrange price high to low
    arrangePriceZA: (req, res) => {
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'DESC';
        const name = 'price'
        if (from == null && to == null && size == null) {
            Product.arrange(arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange(from, to, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (from == null && to == null) {
            Product.filterSizeArrange(size, arr, name, (data) => {
                res.json(data);
            })
        }
        else {
            Product.filterPriceAndSizeArrange(from, to, size, arr, name, (respond) => {
                res.json(respond)
            })
        }
    },
    arrangePriceZA_cate: (req, res) => {
        const cate = req.params.cate;
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'DESC';
        const name = 'price'
        if (from == null && to == null && size == null) {
            Product.arrange_cate(cate, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange_cate(cate, from, to, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (from == null && to == null) {
            Product.filterSizeArrange_cate(cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
        else {
            Product.filterPriceAndSizeArrange_cate(from, to, cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
    },
    // Date old to new 
    arrangeDateAZ: (req, res) => {
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'ASC'
        const name = 'createDate'
        if (from == null && to == null && size == null) {
            Product.arrange(arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange(from, to, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (from == null && to == null) {
            Product.filterSizeArrange(size, arr, name, (data) => {
                res.json(data);
            })
        }
        else {
            Product.filterPriceAndSizeArrange(from, to, size, arr, name, (respond) => {
                res.json(respond)
            })
        }
    },
    arrangeDateAZ_cate: (req, res) => {
        const cate = req.params.cate;
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'ASC';
        const name = 'createDate'
        if (from == null && to == null && size == null) {
            Product.arrange_cate(cate, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange_cate(cate, from, to, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (from == null && to == null) {
            Product.filterSizeArrange_cate(cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
        else {
            Product.filterPriceAndSizeArrange_cate(from, to, cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
    },
    // Date new to old 
    arrangeDateZA: (req, res) => {
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'DESC';
        const name = 'createDate'
        if (from == null && to == null && size == null) {
            Product.arrange(arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange(from, to, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (from == null && to == null) {
            Product.filterSizeArrange(size, arr, name, (data) => {
                res.json(data);
            })
        }
        else {
            Product.filterPriceAndSizeArrange(from, to, size, arr, name, (respond) => {
                res.json(respond)
            })
        }
    },
    arrangeDateZA_cate: (req, res) => {
        const cate = req.params.cate;
        const { from, to } = req.body;
        const size = req.body.size;
        const arr = 'DESC';
        const name = 'createDate'
        if (from == null && to == null && size == null) {
            Product.arrange_cate(cate, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (size == null) {
            Product.filterPriceArrange_cate(cate, from, to, arr, name, (respond) => {
                res.json(respond)
            })
        } else if (from == null && to == null) {
            Product.filterSizeArrange_cate(cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
        else {
            Product.filterPriceAndSizeArrange_cate(from, to, cate, size, arr, name, (data) => {
                res.json(data)
            })
        }
    },

    test: (req, res) => {
        var cate = req.query.cate;
        if (cate == null) {
            db.query('select * from product', (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })

        } else {
            db.query('select * from product where categoryID=?', [cate], (err, data) => {
                if (err) res.json(err);
                else res.json(data);
            })
        }
    }




}
module.exports = product_Controller;