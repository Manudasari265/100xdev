import express from "express";
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { ContentModel, UserModel } from "./db";

const app = express();
app.use(express.json());

const JWT_SECRET = "123424";

// ".d.ts" = if you are writing a typescript project which is a library of yours, 
// you should also define or give types for it in this declaration file.

app.post("api/v1/signup", async (req, res) => {
    //TODO zod validation
    const username = req.body.username;
    const password = req.body.password;
    
    try{
        await UserModel.create({
            username: username,
            password: password, //TODO hash the password
        })
    
        res.status(200).json({
            message: "User signed up"
        }) //TODO fix the status codes
    } catch(e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
});

app.post("api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_SECRET)

        res.json({
            token
        })
    } else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("api/v1/content", (req, res) => {

});

app.get("api/v1/content", (req, res) => {
    //@ts-ignore
    const { userId } = req.body
});

app.delete("api/v1/content", async (req, res) => {
    const contentId = req.body.contenId;

    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })
});

app.post("api/v1/brain/share", (req, res) => {

});

app.get("/api/v1/brain/:shareLink", (req, res) => {

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})