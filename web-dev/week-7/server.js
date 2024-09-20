import express, { json } from 'express'; 
import { UserModel, UserTodo } from './db';
import { Auth, JWT_SECRET } from './auth';

const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const mongoose = require("");

app.use(cors());
app.use(json());

app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create ( {
        email: email,
        password: password,
        name: name
    })

    res.json( {
        message: "You are signed up"
    });
});

app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const isUserExisting = UserModel.findOne ( {
        email: email,
        password: password
    });

    if(isUserExisting) {
        const token = jwt.sign( {
            id: isUserExisting._id.toString()
        });

        res.json({
            message: "You are signed in"
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

app.post("/todo", (req, res) = {

});

app.get("/todos", (req, res) => {

});

app.listen(port, (req, res) => {
    console.log(`Server is listening on ${port}`);
})