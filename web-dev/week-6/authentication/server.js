const express = require('express');
const jwt = require('jwt');
const app = express();
const port = 3000;

app.use(express.json());

const users = []; // global users array variable - in memory database 

const JWT_SECRET = "USER_APP";

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push( {
        username: username,
        password: password
    })
    res.json( {
        message: "you are signed in"
    })
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u) {
        if(u.username === username && u.password === password) {
            return true;
        } else {
            return false;
        }
    });

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

        // user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

// Should generate a random long string
// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }

app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const userInformation = jwt.verify(token, JWT_SECRET);
    const username = userInformation.username;
    const user = users.find(user => user.username === username);
    if(user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

app.listen(port, () => {
    console.log('Server is running on port 3000');
});