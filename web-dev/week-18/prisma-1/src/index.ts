import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
    await client.user.create({
        data: {
            username: "Manoj",
            password: "123123",
            age: 23,
            city: "Vizag",
        }
    })
}

createUser();
