import { PrismaClient, TaskStatus, TaskPriority } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  const hashedPassword1 = await bcrypt.hash("hashedPassword123", 10);
  const user1 = await prisma.user.upsert({
    where: { email: "johndoe@example.com" },
    update: { password: hashedPassword1 },
    create: {
      name: "John Doe",
      email: "johndoe@example.com",
      password: hashedPassword1,
    },
  });

  const hashedPassword2 = await bcrypt.hash("hashedPassword456", 10);
  const user2 = await prisma.user.upsert({
    where: { email: "janesmith@example.com" },
    update: { password: hashedPassword2 },
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
      deadline: new Date("2024-02-10T23:59:59Z"),
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
      deadline: new Date("2024-02-10T23:59:59Z"),
    },
  });

  const task3 = await prisma.task.upsert({
    where: { id: "task3-id" },
    update: {},
    create: {
      id: "task3-id",
      title: "Finish Eating Assignment",
      description: "Complete the full-stack assignment by end of the week.",
      status: TaskStatus.IN_PROGRESS,
      priority: TaskPriority.HIGH,
      creatorId: user1.id,
      deadline: new Date("2024-02-10T23:59:59Z"),
    },
  });

  const task4 = await prisma.task.upsert({
    where: { id: "task4-id" },
    update: {},
    create: {
      id: "task4-id",
      title: "Finish Pooping Assignment",
      description: "Complete the full-stack assignment by end of the week.",
      status: TaskStatus.COMPLETED,
      priority: TaskPriority.LOW,
      creatorId: user1.id,
      deadline: new Date("2024-02-10T23:59:59Z"),
    },
  });

  // Sharing Task 1 with Jane (user2)
  await prisma.sharedTask.upsert({
    where: {
      taskId_userId: { taskId: task1.id, userId: user2.id }, // Fix: Composite Unique Constraint
    },
    update: {},
    create: {
      taskId: task1.id,
      userId: user2.id,
    },
  });

  // Sharing Task 2 with John (user1)
  await prisma.sharedTask.upsert({
    where: {
      taskId_userId: { taskId: task2.id, userId: user1.id }, // Fix: Composite Unique Constraint
    },
    update: {},
    create: {
      taskId: task2.id,
      userId: user1.id,
    },
  });

  console.log("Seeding complete! ✅");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
