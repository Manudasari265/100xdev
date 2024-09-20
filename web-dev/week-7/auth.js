const jwt = require('jsonwebtoken');
const { nextTick } = require('process');
const JWT_SECRET = "s3cretPasscode";

const Auth = (req, res, next) => {
    const token = req.headers.authorization;
    const response = jwt.verify(token, JWT_SECRET);

    if(response) {
        req.userId = token.userId;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
};

module.exports = {
    Auth,
    JWT_SECRET
}
