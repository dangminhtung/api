const db = require('../common/connect')

const User = function (user) {
    this.userID = user.userID
    this.username = user.username
    this.password = user.password
    this.email = user.email
    this.address = user.address
    this.mobile = user.mobile
    this.createDate = user.createDate
    this.role = user.role
}


User.get_username = (username, result) => {
    db.query('select * from user where username=?', [username], (err, res) => {
        if (err) {
            result(err, null)
            return;
        }
        if (res.length) {

            result(null, res[0])
        }

    });
}




module.exports = User

