import express from 'express';
import { userModel } from './schema/db';

const app = express();
const PORT = 3001;

app.use(express.json());

app.post("/signup", async function (req, res) {
    try {
        const { email } = req.body;
        const { password } = req.body;
        const { name } = req.body;

        const hashedPassword = 
        await userModel.create({

        })
    } catch (error) {
        
    }


})