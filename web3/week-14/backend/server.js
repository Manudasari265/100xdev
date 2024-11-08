const express = require("express");

const app = express();

app.post("api/v1/signup", (req, res) => {
    res.json({
        message: "Sign up"
    })
})

app.post("api/v1/signin", (req, res) => {
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