import { PrismaClient } from "@prisma/client";
import { parse } from "cookie";
import { verify } from "jsonwebtoken";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        // ✅ Get cookies from request headers
        const cookies = parse(req.headers.get("cookie") || "");
        const token = cookies.authToken;

        

        // ✅ Check if token exists
        if (!token) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
        }

        // ✅ Check if JWT secret is configured
        const jwt_token = process.env.JWT_SECRET;
        if (!jwt_token) {
            return new Response(JSON.stringify({ error: "JWT secret not configured" }), { status: 500 });
        }

        // ✅ Verify token
        const decoded = verify(token, jwt_token) as { id: string };
        if (!decoded || !decoded.id) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
        }

        

        // ✅ Fetch tasks from Prisma
        const tasks = await prisma.task.findMany({
            where: { creatorId: decoded.id },
        });

        console.log("Decoded user ID:", decoded.id);
console.log("Tasks found:", tasks);


        // ✅ Return JSON response
        return new Response(JSON.stringify({ tasks }), { status: 200, headers: { "Content-Type": "application/json" } });

    } catch (error) {
        console.error("An unexpected error occurred:", error);
        return new Response(JSON.stringify({ error: "An unexpected error occurred" }), { status: 500 });
    }
}
