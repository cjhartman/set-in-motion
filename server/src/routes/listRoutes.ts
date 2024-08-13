import express from "express";
import { createList, getLists } from "../controllers/listController";

const router = express.Router();

router.post("/", createList);
router.get("/", getLists);

export default router;
