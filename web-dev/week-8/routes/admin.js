const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require('jwt');
const { JWT_ADMIN_PASSWORD }  = require('../config');
const { courseModel } = require("../schema/db");


adminRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName }  =  req.body; // TODO: add zod validation

    // TODO: hash the password so plaintext password is not stored in the db
    
    // TODO: Put inside a try catch block
    await adminModel.create( {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message: "signup endpoint"
    })

    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    // TODO: use bcrypt library for password hashing
    
    // TODO: ideally password should be hashed, and hence you can't compare the user provided password and db password
    const user = await adminModel.findOne( { // findOne gives either the user or undefined if not it will give an array
        email: email,
        password: password
    });

    if(admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

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
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/course", async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price }  = req.body;

    const course = await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    });
    res.json({
        message: "Course created",
        courseId: course._id
    })
})

adminRouter.put("/course", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.get("/course/bulk", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}