import { PrismaClient, TaskStatus, TaskPriority } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {

  const hashedPassword1 = await bcrypt.hash("hashedPassword123", 10);
  const user1 = await prisma.user.upsert({
    where: { email: "johndoe@example.com" },
    update: {password: hashedPassword1},
    create: {
      name: "John Doe",
      email: "johndoe@example.com",
      password: hashedPassword1,
    },
  });

  const hashedPassword2 = await bcrypt.hash("hashedPassword456", 10);
  const user2 = await prisma.user.upsert({
    where: { email: "janesmith@example.com" },
    update: {password: hashedPassword2},
    create: {
      name: "Jane Smith",
      email: "janesmith@example.com",
      password: hashedPassword2,
    },
  });


  const task1 = await prisma.task.upsert({
    where: { id: "task1-id" },
    update: {},
    create: {
      id: "task1-id",
      title: "Finish Coding Assignment",
      description: "Complete the full-stack assignment by end of the week.",
      status: TaskStatus.PENDING,
      priority: TaskPriority.HIGH,
      creatorId: user1.id,
    },
  });

  const task2 = await prisma.task.upsert({
    where: { id: "task2-id" },
    update: {},
    create: {
      id: "task2-id",
      title: "Submit Report",
      description: "Write the weekly status report and submit.",
      status: TaskStatus.IN_PROGRESS,
      priority: TaskPriority.MEDIUM,
      creatorId: user2.id,
    },
  });

  // Use individual taskId and userId fields in 'where'
  const sharedTask1 = await prisma.sharedTask.upsert({
    where: {
      id: `${task1.id}_${user2.id}`,  // Use a composite unique identifier
    },
    update: {},
    create: {
      id: `${task1.id}_${user2.id}`,
      taskId: task1.id,
      userId: user2.id,
    },
  });

  const sharedTask2 = await prisma.sharedTask.upsert({
    where: {
      id: `${task2.id}_${user1.id}`,  // Use a composite unique identifier
    },
    update: {},
    create: {
      id: `${task2.id}_${user1.id}`,
      taskId: task2.id,
      userId: user1.id,
    },
  });

  console.log("Users and tasks upserted:", user1, user2, task1, task2);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
