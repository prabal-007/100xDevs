import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email: username,
            firstname: firstName,
            lastname: lastName,
            password
        }
    })
    console.log(res)
}

insertUser("strak@gmail.com", "stark", "ksa", "pass")