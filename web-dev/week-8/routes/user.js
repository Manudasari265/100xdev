const express = require('express');
const Router = express.Router;

const userRouter = Router();

userRouter.post("/user/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
});

userRouter.post("/user/signin", function(req, res) {
    res.json({
        message: "signin endpoint"
    })
})

userRouter.get("/user/purchases", function(req, res) {
    res.json({
        message: "user/purchases endpoint"
    })
});

module.exports = {
    userRouter: userRouter
}