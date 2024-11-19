import { express } from 'express';
import { userModel } from './schema/db';
import { z } from 'zod';
import mongoose from 'mongoose';
process.config();

const app = express();
const PORT = 3001;

mongoose.connect("");

app.use(express.json());
app.use(cors());

app.post("/signup", async function (req, res) {
    const requiredBody = z.object({
        email: z.string().min(5).max(100).email(),
        password: z.string().min(5).max(100),
        name: z.string().min(5).max(100)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    if(!parsedDataWithSuccess.success) {
        res.status(403).json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error,
        })
        return;
    }
    try {
        const { email } = req.body;
        const { password } = req.body;
        const { name } = req.body;

        const hashedPassword = await bcrypt.hash(password, 5);
        console>log(salt);

        await userModel.create({
            email: email,
            password: hashedPassword,
            name: name,
            salt: salt
        })

        res.status(201).json({
            message: "You are signed up"
        })
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
        })
    }
})

async function main() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Server successfully connected to database`);
        app.listen(PORT, () => {
            console.log(`Server is listening on ${PORT}`);
        })
    } catch (error) {
        console.log(`Failed to start the server`);
    }
}