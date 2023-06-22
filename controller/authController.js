var User = require('../models/user_model')
const db = require('../common/connect')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
let refreshTokens = [];
const authController = {
    generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id,
            role: user.role,
        },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "1h" }
        )
    },
    // LOGIN
    login: (req, res) => {
        try {

            const { username, password } = req.body
            User.get_username(username, (err, user) => {
                if (!user) {
                    res.status(401).json('Incorrect username')
                }

                else {
                    bcrypt.compare(password, user.password, (err, result) => {
                        if (result == true) {
                            const accessToken = authController.generateAccessToken(user);
                            const { password, ...others } = user;//dùng để loại thuộc tính password khi trả về 
                            res.status(200).json({ ...others, accessToken })
                        } else {
                            res.status(401).json('Incorrect password')
                        }
                    })
                }
            })

        } catch (err) {
            res.status(500).json(err)
        }
    },

    // REGISTER
    register: async (req, res) => {
        try {
            const { username, email, address, mobile, createDate, role } = req.body
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(req.body.password, salt);

            db.query("insert into user set ?", { username, password, email, address, mobile, createDate, role }, function (err) {
                if (err) console.log(err);
                else res.json('add sucess')
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getInformation: (req, res) => {
        var userID = req.body.userID
        db.query('select * from user where userID=?', [userID], (err, data) => {
            if (err) res.json(err)
            else res.json(data)
        })
    },
    changePassword: async (req, res) => {
        const { userID, oldPassword, newPassword, newPasswordAgain } = req.body
        db.query('select * from user where userID=?', [userID], (err, data) => {
            if (err) res.json(err)
            else {
                bcrypt.compare(oldPassword, data[0].password, async (err, result) => {
                    if (result == true) {
                        if (newPassword == oldPassword) {
                            res.json('mat khau cu va mat khau moi khong duoc giong nhau !')
                        } else if (newPassword != newPasswordAgain) {
                            res.json('mat khau moi khong giong nhau')
                        }
                        else {
                            const salt = await bcrypt.genSalt(10);
                            const password = await bcrypt.hash(newPassword, salt);
                            db.query('update user set password=? where userID=?', [password, userID], (err) => {
                                if (err) res.json(err)
                                else res.json('doi mat khau thanh cong !')
                            })
                        }
                    } else {
                        console.log(data[0].password)
                        res.json('khong dung mat khau cu')
                    }
                })
            }
        })
    }
}

module.exports = authController;