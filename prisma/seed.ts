// import { PrismaClient, TaskStatus, TaskPriority } from "@prisma/client";
// import bcrypt from "bcrypt";

// const prisma = new PrismaClient();

// async function main() {
//   console.log("Seeding database...");

//   const hashedPassword1 = await bcrypt.hash("hashedPassword123", 10);
//   const user1 = await prisma.user.upsert({
//     where: { email: "johndoe@example.com" },
//     update: { password: hashedPassword1 },
//     create: {
//       name: "John Doe",
//       email: "johndoe@example.com",
//       password: hashedPassword1,
//     },
//   });

//   const hashedPassword2 = await bcrypt.hash("hashedPassword456", 10);
//   const user2 = await prisma.user.upsert({
//     where: { email: "janesmith@example.com" },
//     update: { password: hashedPassword2 },
//     create: {
//       name: "Jane Smith",
//       email: "janesmith@example.com",
//       password: hashedPassword2,
//     },
//   });

//   const task1 = await prisma.task.upsert({
//     where: { id: "task1-id" },
//     update: {},
//     create: {
//       id: "task1-id",
//       title: "Finish Coding Assignment",
//       description: "Complete the full-stack assignment by end of the week.",
//       status: TaskStatus.PENDING,
//       priority: TaskPriority.HIGH,
//       creatorId: user1.id,
//       deadline: new Date("2024-02-10T23:59:59Z"),
//     },
//   });

//   const task2 = await prisma.task.upsert({
//     where: { id: "task2-id" },
//     update: {},
//     create: {
//       id: "task2-id",
//       title: "Submit Report",
//       description: "Write the weekly status report and submit.",
//       status: TaskStatus.IN_PROGRESS,
//       priority: TaskPriority.MEDIUM,
//       creatorId: user2.id,
//       deadline: new Date("2024-02-10T23:59:59Z"),
//     },
//   });

//   const task3 = await prisma.task.upsert({
//     where: { id: "task3-id" },
//     update: {},
//     create: {
//       id: "task3-id",
//       title: "Finish Eating Assignment",
//       description: "Complete the full-stack assignment by end of the week.",
//       status: TaskStatus.IN_PROGRESS,
//       priority: TaskPriority.HIGH,
//       creatorId: user1.id,
//       deadline: new Date("2024-02-10T23:59:59Z"),
//     },
//   });

//   const task4 = await prisma.task.upsert({
//     where: { id: "task4-id" },
//     update: {},
//     create: {
//       id: "task4-id",
//       title: "Finish Pooping Assignment",
//       description: "Complete the full-stack assignment by end of the week.",
//       status: TaskStatus.COMPLETED,
//       priority: TaskPriority.LOW,
//       creatorId: user1.id,
//       deadline: new Date("2024-02-10T23:59:59Z"),
//     },
//   });

//   const task5 = await prisma.task.upsert({
//     where: { id: "task5-id" },
//     update: {},
//     create: {
//       id: "task5-id",
//       title: "Finish Pooping and hiking Assignment",
//       description: "Complete the full-stack assignment by end of the week. or not hahaha",
//       status: TaskStatus.COMPLETED,
//       priority: TaskPriority.LOW,
//       creatorId: user1.id,
//       deadline: new Date("2024-02-10T23:59:59Z"),
//     },
//   });

//   const task6 = await prisma.task.upsert({
//     where: { id: "task6-id" },
//     update: {},
//     create: {
//       id: "task6-id",
//       title: "Finish Coughing Assignment",
//       description: "Complete the half-stack assignment by end of the week. or not hahaha",
//       status: TaskStatus.PENDING,
//       priority: TaskPriority.LOW,
//       creatorId: user1.id,
//       deadline: new Date("2024-02-10T23:59:59Z"),
//     },
//   });

//   // Sharing Task 1 with Jane (user2)
//   await prisma.sharedTask.upsert({
//     where: {
//       taskId_userId: { taskId: task1.id, userId: user2.id }, // Fix: Composite Unique Constraint
//     },
//     update: {},
//     create: {
//       taskId: task1.id,
//       userId: user2.id,
//     },
//   });

//   // Sharing Task 2 with John (user1)
//   await prisma.sharedTask.upsert({
//     where: {
//       taskId_userId: { taskId: task2.id, userId: user1.id }, // Fix: Composite Unique Constraint
//     },
//     update: {},
//     create: {
//       taskId: task2.id,
//       userId: user1.id,
//     },
//   });

//   await prisma.sharedTask.upsert({
//     where: {
//       taskId_userId: { taskId: task5.id, userId: user2.id }, // Fix: Composite Unique Constraint
//     },
//     update: {},
//     create: {
//       taskId: task5.id,
//       userId: user2.id,
//     },
//   });

//   // Sharing Task 2 with John (user1)
//   await prisma.sharedTask.upsert({
//     where: {
//       taskId_userId: { taskId: task6.id, userId: user1.id }, // Fix: Composite Unique Constraint
//     },
//     update: {},
//     create: {
//       taskId: task6.id,
//       userId: user1.id,
//     },
//   });

//   console.log("Seeding complete! ✅");
// }

// main()
//   .catch((e) => {
//     console.error("Error seeding database:", e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

import { PrismaClient, TaskStatus, TaskPriority, RequestStatus } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 🔹 Create Users
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

  // 🔹 Create Tasks
  const task1 = await prisma.task.create({
    data: {
      title: "Finish Coding Assignment",
      description: "Complete the full-stack assignment by end of the week.",
      status: TaskStatus.PENDING,
      priority: TaskPriority.HIGH,
      creatorId: user1.id,
      deadline: new Date("2024-02-10T23:59:59Z"),
    },
  });

  const task2 = await prisma.task.create({
    data: {
      title: "Submit Report",
      description: "Write the weekly status report and submit.",
      status: TaskStatus.IN_PROGRESS,
      priority: TaskPriority.MEDIUM,
      creatorId: user2.id,
      deadline: new Date("2024-02-10T23:59:59Z"),
    },
  });

  const task3 = await prisma.task.create({
    data: {
      title: "Review PRs",
      description: "Review pull requests from the development team.",
      status: TaskStatus.IN_PROGRESS,
      priority: TaskPriority.HIGH,
      creatorId: user1.id,
      deadline: new Date("2024-02-12T12:00:00Z"),
    },
  });

  const task4 = await prisma.task.create({
    data: {
      title: "Prepare Presentation",
      description: "Create slides for the upcoming meeting.",
      status: TaskStatus.COMPLETED,
      priority: TaskPriority.LOW,
      creatorId: user2.id,
      deadline: new Date("2024-02-15T10:00:00Z"),
    },
  });

  // 🔹 Create Shared Task Requests (Testing Requests)
  const request1 = await prisma.sharedTaskRequest.create({
    data: {
      taskId: task1.id,
      senderId: user1.id,
      receiverId: user2.id,
      status: RequestStatus.PENDING, // Jane has not responded yet
    },
  });

  const request2 = await prisma.sharedTaskRequest.create({
    data: {
      taskId: task2.id,
      senderId: user2.id,
      receiverId: user1.id,
      status: RequestStatus.ACCEPTED, // John accepted the shared task
    },
  });

  const request4 = await prisma.sharedTaskRequest.create({
    data: {
      taskId: task3.id,
      senderId: user2.id,
      receiverId: user1.id,
      status: RequestStatus.PENDING, // John accepted the shared task
    },
  });

  const request3 = await prisma.sharedTaskRequest.create({
    data: {
      taskId: task3.id,
      senderId: user1.id,
      receiverId: user2.id,
      status: RequestStatus.DECLINED, // Jane declined the request
    },
  });

  // 🔹 Create Shared Tasks (After Request Accepted)
  await prisma.sharedTask.create({
    data: {
      taskId: task2.id, // Task 2 was accepted by John
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

