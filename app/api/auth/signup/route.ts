import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = (global as any).prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") (global as any).prisma = prisma;

export async function POST(req: Request) {
    try {
        // Parse the request body
        const { name, email, password } = await req.json();

        // Validate input
        if (!name || !email || !password) {
            return new Response(
                JSON.stringify({ error: "All fields are required: name, email, and password." }),
                { status: 400 }
            );
        }

        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return new Response(
                JSON.stringify({ error: "User already exists with this email address." }),
                { status: 400 }
            );
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user to the database
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        // Success response
        return new Response(JSON.stringify({ message: "User successfully registered!" }), {
            status: 201,
        });

    } catch (error) {
        console.error("Error during signup:", error);
        return new Response(
            JSON.stringify({ error: "Internal server error. Please try again later." }),
            { status: 500 }
        );
    }
}
