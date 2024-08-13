// listController.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createList = async (req, res) => {
  const { title, description, color } = req.body;

  try {
    const list = await prisma.list.create({
      data: {
        title,
        description,
        color,
      },
    });
    res.json(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating list" });
  }
};

export const getLists = async (req, res) => {
  try {
    const lists = await prisma.list.findMany();
    res.json(lists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching lists" });
  }
};
