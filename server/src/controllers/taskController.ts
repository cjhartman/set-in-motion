// listController.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTask = async (req: any, res: any) => {
  const { title, listId } = req.body;

  try {
    const task = await prisma.task.create({
      data: {
        title,
        listId,
        createdBy: "SYSTEM",
      },
    });
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating task" });
  }
};

export const getTasks = async (req: any, res: any) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching tasks" });
  }
};
