const jwt = require('jsonwebtoken')

const middleware = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;

        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    res.status(403).json("token is not valid");
                } else {
                    req.user = user;
                    next();
                }
            });
        } else {
            res.status(403).json("You're not authenticated");
        }
    },
    verifyTokenAdmin: (req, res, next) => {
        middleware.verifyToken(req, res, () => {
            if (req.user.role == 'admin') {
                next();
            } else {
                res.status(403).json("You're not allowed to delete other");
            }
        });
    }
}
module.exports = middleware