const express = require('express');
const jwt = require('jwt');
const app = express();
const port = 3000;

app.use(express.json());

const users = []; // global users array variable - in memory database 

const JWT_SECRET = "Manoj@123";

// Client side's localhost:3000
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/web-dev/week-6/authentication/public/index.html");
})

app.post("/signup", logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push( {
        username: username,
        password: password
    })
    res.json( {
        message: "you are signed up"
    })
});

app.post("/signin", logger, (req, res) => {
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

function logger(req, res, next) {
    console.log(`${req.method} request came`);
    next();
}

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        req.username = decodedData.username;
        next()
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
}


app.get("/me", logger, auth, (req, res) => {
    const username = req.username;
    // const token = req.headers.authorization;
    // const userInformation = jwt.verify(token, JWT_SECRET);
    // const username = userInformation.username;
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