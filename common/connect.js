var mysql = require("mysql")

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!")
});

module.exports = connection;