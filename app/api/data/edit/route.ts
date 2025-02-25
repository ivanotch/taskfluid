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

export async function DELETE(req: Request) {
    try {
        let requestBody;
        try {
            requestBody = await req.json();
        } catch {
            return new Response(JSON.stringify({ error: "Invalid JSON input" }), { status: 400 });
        }

        const { taskId } = requestBody;

        if (!taskId || typeof taskId !== "string") {
            return new Response(JSON.stringify({ error: "Invalid or missing taskId" }), { status: 400 });
        }

        const existingTask = await prisma.task.findUnique({
            where: { id: taskId },
        });

        if (!existingTask) {
            console.error("Taskfound in database:", taskId);
            return new Response(JSON.stringify({ message: "Taskfound" }), { status: 200 });
        }

        console.log("Attempting to delete task with ID:", taskId);

        await prisma.task.delete({ where: { id: taskId } });

        return new Response(JSON.stringify({ message: "Task deleted successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({error: "Failed to delete task"}), {status: 500});
    }
}
