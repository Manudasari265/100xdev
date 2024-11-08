const express = require("express");
const { userModel } = require("./models/model")
const jwt = require("jsonwebtoken");
const JWT_TOKEN = "123344";
const app = express();

app.use(express.json());

app.post("api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // validate the inputs using ZOD, check if the user already exists
    
    const keypair = new Keypair();
    await userModel.create({
        username,
        password,
        publicKey: keypair.publicKey.toString(),
        privateKey: keypair.privateKey.toString()
    })
    res.json({
        message: keypair.publicKey.toString()
    })
})

app.post("api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userModel.findOne({
        username: username,
        password: password
    })

    if (user) {
        const token = jwt.sign({
            id: user
        }, JWT_TOKEN);
    } else {

        res.status(403).json({
            message: "Credentials are incorrect"
        })
    }
    res.json({
        message: "Sign up"
    })
})


app.post("api/v1/txn/sign", (req, res) => {
    res.json({
        message: "Sign up"
    })
})


app.post("api/v1/txn", (req, res) => {
    res.json({
        message: "Sign up"
    })
})

app.listen(3000);