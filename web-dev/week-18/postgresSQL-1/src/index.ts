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
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;


    try {
        const insertQuery = `INSERT INTO user 
          (username, email, password) VALUES 
          ($1, $2, $3) RETURNING id`;
        
        const addressInsertQuery = `INSERT INTO addresses 
          (city, country, street, pincode, user_id) VALUES 
          ($1, $2, $3, $4, $5)`;

        //& SQL Transaction is implemented
        await pgClient.query("BEGIN;");

        const response = await pgClient.query(insertQuery);

        const userId = response.rows[0].id;

        const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);

        await pgClient.query("COMMIT;");

        res.json({
            message: "You have signed up",
        })
    } catch (error) {
        res.status(403).json({
            message: "Error while signing up",
        })
    }
    
});

app.get("/metadata", async (req, res) => {
    const id = req.query.id;
})