const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');

app.use(express.json());

app.post("/user/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
});

app.post("/user/signin", function(req, res) {
    res.json({
        message: "signuin endpoint"
    })
})

app.get("/user/purchases", function(req, res) {
    res.json({
        message: "user/purchases endpoint"
    })
});

app.get("/course/purchases", function(req, res) {
    //  You would expect the user to pay you money
    res.json({
        message: "courses/purchases endpoint"
    })
});

app.get("/courses", function(req, res) {
    res.json({
        message: "courses endpoint"
    })
});

app.get()


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

