import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req: Request) {
  
    try {
        const { taskId, action, data } = await req.json();

        if (!taskId || !action || !data) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        let updatedTask;

        if (action === "updateStatus") {
            updatedTask = await prisma.task.update({
                where: { id: taskId },
                data: { status: data.status, updatedAt: new Date() },
            });
        }

        else if (action === "editTask") {
            updatedTask = await prisma.task.update({
                where: { id: taskId },
                data: { ...data, updatedAt: new Date(), deadline: new Date(data.deadline) },
            });
        }

        else {
            return new Response(JSON.stringify({ error: "Invalid action" }), { status: 400 });
        }

        return new Response(JSON.stringify({updatedTask}), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    
    
      } catch (error) {
        return new Response(JSON.stringify({error: "Failed to update task"}), {status: 500});
      }

}
