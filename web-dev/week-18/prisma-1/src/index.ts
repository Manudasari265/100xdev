import { PrismaClient } from "@prisma/client";
import express from 'express';

const client = new PrismaClient();
const app = express();

app.get("/users", async(req, res) => {
    const users = await client.user.findMany();
    res.json({
        users
    })
})

app.get("/todos/:id", async(req, res) => {
    const id = req.params.id;

    const user = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true,
            username: true,
            password: true,
        }
    })

    res.json({
        user
    })
})

async function createUser() {
    await client.user.create({
        data: {
            username: "Tarun",
            password: "123123",
            age: 23,
            city: "Vizag",
        }
    })
}

async function getUser() {
    const user = await client.user.findFirst({
        where: {
            id: 2
        },
        include: {
            todos: true
        }
    })

    console.log(user);
}

createUser();
getUser();

app.listen(3000);