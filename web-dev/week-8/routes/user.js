const express = require('express');
const Router = express.Router;
const { userModel } = require('./user');
const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = "2001@2001";

const userRouter = Router();

userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName }  =  req.body;  // TODO: add zod validation

    // TODO: hash the password so plaintext password is not stored in the db
    
    // TODO: Put inside a try catch block
    await userModel.create( {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message: "signup endpoint"
    })
});

userRouter.post("/sign-in", async function(req, res) {
    const { email, password } = req.body;

    // TODO: use bcrypt library for password hashing
    
    // TODO: ideally password should be hashed, and hence you can't compare the user provided password and db password
    const user = await userModel.findOne( { // findOne gives either the user or undefined if not it will give an array
        email: email,
        password: password
    });

    if(user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
    res.json({
        message: "sign-in endpoint"
    })
})

userRouter.get("/purchases", function(req, res) {
    res.json({
        message: "user/purchases endpoint"
    })
});

module.exports = {
    userRouter: userRouter
}