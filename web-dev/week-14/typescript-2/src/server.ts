import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: any = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Server's read end point created"
    })
})

async function main() {
    await app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    })
}