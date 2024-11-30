import express from 'express';
import { Client } from 'pg';

const pgClient = new Client("postgresql://todo-db_owner:7WyI8UejFNSt@ep-wild-field-a5mga80o.us-east-2.aws.neon.tech/todo-db?sslmode=require");
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