const express = require('express');
const Router = express.Router;

const courseRouter = Router();

courseRouter.post("/course/purchases", function(req, res) {
    //  TODO: You would expect the user to pay you money
    res.json({
        message: "courses/purchases endpoint"
    })
});

courseRouter.get("/courses", function(req, res) {
    res.json({
        message: "courses endpoint"
    })
});

module.exports = {
    courseRouter: courseRouter
}