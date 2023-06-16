var User = require('../models/user_model')
const db = require('../common/connect')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userController = {
    getAllUser: (req, res) => {
        try {
            db.query('select * from user', (err, data) => {
                if (err)
                    res.status(403).json('loi')
                else {
                    res.status(200).json(data)
                }
            })

        } catch (err) {
            res.status(500).json(err);
        }
    },
    delete_user: (req, res) => {
        try {
            db.query('delete from user where userID=?', [req.params.id], (err) => {
                if (err) res.status(403).json('loi');
                res.status(200).json('delete sucess')
            })
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = userController
