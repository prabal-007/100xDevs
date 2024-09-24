const { JWT_SECRET } = require('../config')
const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];
    const decodeValue = jwt.verify(jwtToken, JWT_SECRET)

    if (decodeValue.username) {
        req.username = decodeValue.username;
        next();
    } else {
        res.status(403).json({
            msg: 'You are not authenticated'
        })
    }
}

module.exports = userMiddleware;