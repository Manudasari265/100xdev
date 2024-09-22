const express = require('express');
const { userMiddleware } = require('../middlewares/userAuth');
const { purchaseModel, courseModel } = require('../schema/db');
const Router = express.Router;

const courseRouter = Router();

courseRouter.post("/purchases", userMiddleware, async function(req, res) {
    //  TODO: You would expect the user to pay you money - payment gateway integration
    const userId = req.userId;
    const courseId = req.body.courseId;
    
    // TODO: should check the user has access to the course
    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message: "You have successfully bought the course"
    })
});

courseRouter.get("/preview", async function(req, res) {
    const courses = await courseModel.find({});

    res.json({
        message: "courses"
    })
});

module.exports = {
    courseRouter: courseRouter
}