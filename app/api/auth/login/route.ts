import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";
import { serialize } from 'cookie';
import bcrypt from "bcrypt";

const prisma = (global as any).prisma || new PrismaClient();
if (process.env.NODE_ENV === 'development') (global as any).prisma = prisma;

export async function POST(req: Request) {
    console.log("Login route");
    const { email, password } = await req.json();

    const jwt_token = process.env.JWT_SECRET;

    if (!jwt_token) {
        return new Response(JSON.stringify({ error: 'JWT_SECRET is not defined' }), { status: 500 });
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        console.log('Email does not match');
        return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        console.log('Password does not match');
        return new Response(JSON.stringify({ error: 'Invalid email or password' }), { status: 401 });
    }

    const token = sign({ id: user.id, email: user.email }, jwt_token, { expiresIn: '1h' });

    return new Response(JSON.stringify({ message: 'Login successful' }), {
        status: 200,
        headers: {
            'Set-Cookie': serialize('authToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 3600,
                path: '/'
            })
        }
    });
}
