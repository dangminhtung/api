var mysql = require("mysql")

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'shopshoe'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!")
});

module.exports = connection;