import express from 'express';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl = process.env.DATABASE_URL;
console.log(dbUrl);

const pgClient = new Client(dbUrl as string);
const app = express();
app.use(express.json());

pgClient.connect();

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try {
        const insertQuery = `INSERT INTO user 
          (username, email, password) VALUES 
          (${username}, ${email}, ${password})`;
        const response = await pgClient.query(insertQuery);

        res.json({
            message: "You have signed up",
        })
    } catch (error) {
        res.status(403).json({
            message: "Error while signing up",
        })
    }
    
})