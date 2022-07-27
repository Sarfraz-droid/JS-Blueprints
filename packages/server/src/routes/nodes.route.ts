import express from "express";
import { save, getNodes } from "../controller/node.controller";

const router = express.Router();

router.post("/save", save);
router.get("/:id", getNodes);
export default router;
